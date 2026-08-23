import { EvidenceItem } from "./evidence";
import { ResearchPlan } from "./research-plan";

export interface UserPreferences {
  amount?: number;
  risk?: "low" | "medium" | "high";
  horizon?: string;
  experience?: string;
  market?: string;
  sector?: string;
}

export interface DimensionScore {
  score: number; // 0 - 100
  weight: number; // e.g. 0.25
  label: string;
  rationale: string;
  evidenceIds: string[];
}

export interface ResearchScoreResult {
  overallScore: number; // 0 - 100
  rating: "Strong Bullish" | "Moderate Buy" | "Neutral / Hold" | "Caution / Speculative" | "Bearish";
  breakdown: {
    financialHealth: DimensionScore;
    growthPotential: DimensionScore;
    historicalPerformance: DimensionScore;
    valuation: DimensionScore;
    debtLeverage: DimensionScore;
    newsEvents: DimensionScore;
    riskProfile: DimensionScore;
  };
  keyOpportunities: string[];
  keyRisks: string[];
}

export interface ResearchRecord {
  id: string;

  company: {
    name: string;
    ticker: string;
    exchange?: string;
  };

  userProfile?: UserPreferences;

  createdAt: string;

  updatedAt: string;

  status:
    | "planning"
    | "awaiting_approval"
    | "approved"
    | "collecting"
    | "verifying"
    | "awaiting_final_approval"
    | "final_approved"
    | "complete"
    | "failed";

  plan?: ResearchPlan;

  approvedAt?: string;

  finalApprovedAt?: string;

  evidence: EvidenceItem[];

  conflicts: ResearchConflict[];

  sources: ResearchSource[];

  scoring?: ResearchScoreResult;

  confidenceLevel?: "high" | "medium" | "low";

  confidenceReason?: string;
}

export interface ResearchSource {
  name: string;
  url: string;
  accessedAt: string;
  status: "success" | "failed";
  itemsCount?: number;
}

export interface ResearchConflict {
  metric: string;

  values: {
    source: string;
    value: string | number | null;
  }[];

  explanation?: string;

  resolved: boolean;
}
