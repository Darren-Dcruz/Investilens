import { ResearchRecord } from "./research-record";
import { ResearchTask } from "./research-plan";
import {
  ResearchExecutionResult,
  ResearchBatchExecutionResult,
  ResearchExecutor
} from "./research-executor";

export class MockResearchExecutor implements ResearchExecutor {
  async executeTask(
    _record: ResearchRecord,
    task: ResearchTask
  ): Promise<ResearchExecutionResult> {
    return {
      taskId: task.id,
      status: "complete",
      evidence: []
    };
  }

  async executeTasks(
    record: ResearchRecord,
    tasks: ResearchTask[]
  ): Promise<ResearchBatchExecutionResult> {
    const taskResults: ResearchExecutionResult[] = [];

    for (const task of tasks) {
      taskResults.push(
        await this.executeTask(record, task)
      );
    }

    return {
      status: "complete",
      evidence: [],
      taskResults
    };
  }
}
