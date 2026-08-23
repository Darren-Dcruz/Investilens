import { MOCK_STOCKS } from "../data/mockStocks.js";
import { calculateDeterministicScore } from "./scoringEngine.js";

/**
 * AGENT ORCHESTRATION & TELEMETRY STREAM SERVICE
 * 
 * Supports:
 * 1. Demo Mode (High-fidelity simulated Webcmd + Hermes live telemetry, browser actions, interactive checkpoints)
 * 2. Live Bridge Mode (Connects to teammate's Hermes + Webcmd backend via REST / WebSocket)
 */

export const WORKFLOW_STAGES = [
  { id: 1, name: "Collect User Requirements", icon: "UserCheck", description: "Parsing budget, risk tolerance, horizon & target asset" },
  { id: 2, name: "Create Research Plan", icon: "FileSpreadsheet", description: "Synthesizing 6-8 independent source objectives" },
  { id: 3, name: "Human Approval #1", icon: "ShieldAlert", isCheckpoint: true, description: "Checkpoint: Waiting for user approval on research scope" },
  { id: 4, name: "Webcmd Browser Research", icon: "Globe", description: "Spawning browser sessions & navigating targeted financial sources" },
  { id: 5, name: "Collect Structured Evidence", icon: "Database", description: "Extracting claims, numbers, filings, and audit data" },
  { id: 6, name: "Cross-Verification Engine", icon: "CheckCheck", description: "Cross-referencing claims across independent primary sources" },
  { id: 7, name: "Financial & Metric Analysis", icon: "TrendingUp", description: "Evaluating revenue, margins, cash flows, and debt metrics" },
  { id: 8, name: "News Sentiment Intelligence", icon: "Newspaper", description: "Classifying recent news into Positive, Neutral & Negative impact" },
  { id: 9, name: "Upcoming Events & Catalysts", icon: "Calendar", description: "Detecting earnings calls, regulatory dates, and product launches" },
  { id: 10, name: "Bull Case Formulation", icon: "ArrowUpRight", description: "Extracting growth drivers and strategic moats" },
  { id: 11, name: "Bear Case / Counter-Analysis", icon: "ArrowDownRight", description: "Actively searching for disconfirming evidence and risks" },
  { id: 12, name: "Deterministic Scoring Engine", icon: "Calculator", description: "Computing non-blackbox 7-dimension weighted scorecard" },
  { id: 13, name: "Personalized Alignment", icon: "Sliders", description: "Mapping findings to user risk profile and capital constraints" },
  { id: 14, name: "Hypothetical Allocation", icon: "PieChart", description: "Generating transparent decision-support asset model" },
  { id: 15, name: "Human Approval #2", icon: "ShieldAlert", isCheckpoint: true, description: "Checkpoint: Review preliminary findings & sign-off final report" },
  { id: 16, name: "Final Report Generation", icon: "Award", description: "Publishing verified multi-source research dossier" }
];

export class AgentService {
  constructor(config = {}) {
    this.mode = config.mode || "simulation"; // "simulation" | "live"
    this.backendUrl = config.backendUrl || "http://localhost:8000/api";
    this.wsUrl = config.wsUrl || "ws://localhost:8000/stream";
  }

  setMode(mode, backendUrl, wsUrl) {
    this.mode = mode;
    if (backendUrl) this.backendUrl = backendUrl;
    if (wsUrl) this.wsUrl = wsUrl;
  }
}

export const agentService = new AgentService();
