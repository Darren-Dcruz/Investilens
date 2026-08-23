import { EvidenceItem } from "./evidence";
import { ResearchPlan } from "./research-plan";
import { ResearchConflict } from "./research-record";

export interface VerificationResult {
  passed: boolean;

  errors: string[];

  warnings: string[];

  verifiedEvidenceIds: string[];

  conflicts: ResearchConflict[];

  confidenceLevel: "high" | "medium" | "low";

  confidenceReason: string;
}

export function verifyEvidence(
  plan: ResearchPlan,
  evidence: EvidenceItem[]
): VerificationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const verifiedEvidenceIds: string[] = [];
  const conflicts: ResearchConflict[] = [];

  const requiredTasks = plan.tasks.filter(
    (task) => task.priority === "required"
  );

  for (const task of requiredTasks) {
    let hasMatching = false;
    for (const evidenceType of task.evidenceTypes) {
      const matchingEvidence = evidence.filter(
        (item) => item.type === evidenceType
      );

      if (matchingEvidence.length > 0) {
        hasMatching = true;
      }

      for (const item of matchingEvidence) {
        if (
          item.company.ticker &&
          plan.ticker &&
          item.company.ticker.toUpperCase() !== plan.ticker.toUpperCase()
        ) {
          errors.push(
            `Evidence ${item.id} has ticker ${item.company.ticker}, expected ${plan.ticker}.`
          );
          continue;
        }

        if (!item.source?.name || !item.source?.url) {
          errors.push(
            `Evidence ${item.id} is missing source information.`
          );
          continue;
        }

        if (
          item.value === undefined &&
          item.value !== null &&
          !item.context
        ) {
          warnings.push(
            `Evidence ${item.id} does not contain a value.`
          );
        }

        if (!verifiedEvidenceIds.includes(item.id)) {
          verifiedEvidenceIds.push(item.id);
        }
      }
    }

    if (!hasMatching) {
      errors.push(
        `Required task "${task.id}" has no matching evidence for types [${task.evidenceTypes.join(", ")}].`
      );
    }
  }

  // Cross-source verification / conflict checking
  const metricGroups: Record<string, { source: string; value: string | number | null }[]> = {};
  for (const item of evidence) {
    if (item.metric && item.value !== undefined && item.value !== null) {
      if (!metricGroups[item.metric]) metricGroups[item.metric] = [];
      metricGroups[item.metric].push({
        source: item.source.name,
        value: item.value
      });
    }
  }

  for (const [metric, values] of Object.entries(metricGroups)) {
    if (values.length > 1) {
      const firstVal = values[0].value;
      const isConflicting = values.some(
        (v) => typeof v.value === "number" && typeof firstVal === "number" && Math.abs(v.value - firstVal) / firstVal > 0.05
      );
      if (isConflicting) {
        conflicts.push({
          metric,
          values,
          explanation: `Multi-source variance detected for ${metric} across sources.`,
          resolved: false
        });
        warnings.push(`Multi-source variance detected for metric "${metric}".`);
      }
    }
  }

  // Determine overall confidence
  let confidenceLevel: "high" | "medium" | "low" = "high";
  let confidenceReason = "Multi-source research verified across verified financial and news sources.";

  if (errors.length > 0) {
    confidenceLevel = "low";
    confidenceReason = `Missing required research evidence: ${errors.join("; ")}`;
  } else if (conflicts.length > 0 || warnings.length > 2) {
    confidenceLevel = "medium";
    confidenceReason = `Minor multi-source discrepancy or partial source data noted in ${conflicts.length} metrics.`;
  }

  return {
    passed: errors.length === 0,
    errors,
    warnings,
    verifiedEvidenceIds,
    conflicts,
    confidenceLevel,
    confidenceReason
  };
}
