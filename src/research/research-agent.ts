import { ResearchRecord, UserPreferences } from "./research-record";
import {
  INITIAL_RESEARCH_TASKS,
  ResearchPlan
} from "./research-plan";
import { ResearchExecutor } from "./research-executor";
import { verifyEvidence } from "./evidence-verifier";
import { calculateDeterministicScore } from "./scoring-engine";
import { getRecommendedSourcesForMarket } from "./sources";

export interface ResearchRequest {
  company: string;
  ticker?: string;
  market?: string;
  sector?: string;
  risk?: "low" | "medium" | "high";
  horizon?: string;
  amount?: number;
  experience?: string;
}

export async function researchCompany(
  request: ResearchRequest
): Promise<ResearchRecord> {
  const now = new Date().toISOString();
  const market = request.market || "US";

  const plan: ResearchPlan = {
    company: request.company,
    ticker: request.ticker,
    market,
    tasks: INITIAL_RESEARCH_TASKS.map((task) => ({
      ...task
    }))
  };

  const sources = getRecommendedSourcesForMarket(market).map((s) => ({
    name: s.name,
    url: s.buildStockUrl ? s.buildStockUrl(request.ticker || request.company, market) : s.baseUrl,
    accessedAt: now,
    status: "success" as const
  }));

  const userProfile: UserPreferences = {
    amount: request.amount || 50000,
    risk: request.risk || "medium",
    horizon: request.horizon || "3-5 years",
    experience: request.experience || "Beginner",
    market,
    sector: request.sector || "Technology"
  };

  return {
    id: `research-${Date.now()}`,
    company: {
      name: request.company,
      ticker: request.ticker ?? ""
    },
    userProfile,
    createdAt: now,
    updatedAt: now,
    status: "awaiting_approval",
    plan,
    evidence: [],
    conflicts: [],
    sources
  };
}

/**
 * HUMAN APPROVAL #1: User approves the proposed research plan.
 */
export function approveResearch(
  record: ResearchRecord
): ResearchRecord {
  if (record.status !== "awaiting_approval") {
    throw new Error(
      `Research cannot be approved from status: ${record.status}`
    );
  }

  const now = new Date().toISOString();

  return {
    ...record,
    status: "approved",
    approvedAt: now,
    updatedAt: now
  };
}

/**
 * Executes browser research through executor (single batched Hermes call).
 */
export async function executeResearch(
  record: ResearchRecord,
  executor: ResearchExecutor
): Promise<ResearchRecord> {
  if (record.status !== "approved") {
    throw new Error(
      `Research cannot execute from status: ${record.status}`
    );
  }

  const tasks = record.plan!.tasks;

  const result = await executor.executeTasks(
    record,
    tasks
  );

  const updatedTasks = tasks.map((task) => {
    const taskResult = result.taskResults.find(
      (item) => item.taskId === task.id
    );

    return {
      ...task,
      status: taskResult?.status ?? "failed"
    };
  });

  const evidence = [
    ...record.evidence,
    ...result.evidence
  ];

  if (result.status === "failed") {
    return {
      ...record,
      status: "failed",
      plan: {
        ...record.plan!,
        tasks: updatedTasks
      },
      evidence,
      updatedAt: new Date().toISOString()
    };
  }

  return {
    ...record,
    status: "verifying",
    plan: {
      ...record.plan!,
      tasks: updatedTasks
    },
    evidence,
    updatedAt: new Date().toISOString()
  };
}

/**
 * Performs verification, conflict detection, and deterministic scoring.
 * Pauses for HUMAN APPROVAL #2.
 */
export function analyzeAndScore(
  record: ResearchRecord
): { record: ResearchRecord; verification: ReturnType<typeof verifyEvidence> } {
  if (!record.plan) {
    throw new Error("Research plan is missing.");
  }

  const verification = verifyEvidence(record.plan, record.evidence);

  if (!verification.passed) {
    return {
      record: {
        ...record,
        status: "failed",
        conflicts: verification.conflicts,
        confidenceLevel: verification.confidenceLevel,
        confidenceReason: verification.confidenceReason,
        updatedAt: new Date().toISOString()
      },
      verification
    };
  }

  const scoring = calculateDeterministicScore(record);

  const updatedRecord: ResearchRecord = {
    ...record,
    status: "awaiting_final_approval", // Human approval #2 checkpoint
    scoring,
    conflicts: verification.conflicts,
    confidenceLevel: verification.confidenceLevel,
    confidenceReason: verification.confidenceReason,
    updatedAt: new Date().toISOString()
  };

  return {
    record: updatedRecord,
    verification
  };
}

/**
 * HUMAN APPROVAL #2: User reviews preliminary score/risks and approves final report generation.
 */
export function approveFinalReport(
  record: ResearchRecord
): ResearchRecord {
  if (record.status !== "awaiting_final_approval") {
    throw new Error(
      `Final report cannot be approved from status: ${record.status}`
    );
  }

  const now = new Date().toISOString();

  return {
    ...record,
    status: "final_approved",
    finalApprovedAt: now,
    updatedAt: now
  };
}
