import { EvidenceItem } from "./evidence";
import { ResearchRecord } from "./research-record";
import { ResearchTask } from "./research-plan";

export interface ResearchExecutionResult {
  taskId: string;

  status: "complete" | "failed";

  evidence: EvidenceItem[];

  error?: string;
}

export interface ResearchBatchExecutionResult {
  status: "complete" | "failed";

  evidence: EvidenceItem[];

  taskResults: ResearchExecutionResult[];

  error?: string;
}

export interface ResearchExecutor {
  executeTask(
    record: ResearchRecord,
    task: ResearchTask
  ): Promise<ResearchExecutionResult>;

  executeTasks(
    record: ResearchRecord,
    tasks: ResearchTask[]
  ): Promise<ResearchBatchExecutionResult>;
}
