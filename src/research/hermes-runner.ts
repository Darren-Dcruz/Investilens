import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

export interface HermesResult {
  stdout: string;
  stderr: string;
}

const HERMES_PATH =
  "C:\\Users\\SRI\\AppData\\Local\\hermes\\hermes-agent\\venv\\Scripts\\hermes.exe";

// Enforce 25-second timeout for live browser session before fast synthesis fallback
const MAX_SOURCE_TIMEOUT_MS = 25 * 1000; // 25,000 ms (25 seconds)

export async function runHermes(
  prompt: string
): Promise<HermesResult> {
  try {
    const result = await execFileAsync(
      HERMES_PATH,
      ["-z", prompt],
      {
        windowsHide: true,
        maxBuffer: 10 * 1024 * 1024,
        timeout: MAX_SOURCE_TIMEOUT_MS,
        killSignal: "SIGKILL"
      }
    );

    return {
      stdout: result.stdout,
      stderr: result.stderr
    };
  } catch (error: any) {
    console.error("");
    console.error("=== HERMES PROCESS ERROR ===");
    console.error("Command:", HERMES_PATH);
    console.error("Exit code:", error?.code);
    console.error("Signal:", error?.signal);
    console.error("Stdout:", error?.stdout);
    console.error("Stderr:", error?.stderr);
    console.error("Message:", error?.message);

    throw error;
  }
}
