export type ResearchTaskStatus =
  | "pending"
  | "running"
  | "complete"
  | "failed";

export interface ResearchTask {
  id: string;

  description: string;

  evidenceTypes: string[];

  requiredMetrics: string[];

  priority: "required" | "optional";

  status: ResearchTaskStatus;

  category?: "core" | "financials" | "news_events" | "thesis";
}

export interface ResearchPlan {
  company: string;

  ticker?: string;

  market?: string;

  tasks: ResearchTask[];
}

export const INITIAL_RESEARCH_TASKS: ResearchTask[] = [
  {
    id: "identity",
    description: "Identify company name, ticker symbol, and exchange",
    evidenceTypes: ["company_identity"],
    requiredMetrics: ["company_identity"],
    priority: "required",
    status: "pending",
    category: "core"
  },
  {
    id: "quote",
    description: "Collect real-time quote, daily change ($), and % change",
    evidenceTypes: ["price"],
    requiredMetrics: [
      "current_price",
      "daily_change",
      "daily_change_percent"
    ],
    priority: "required",
    status: "pending",
    category: "core"
  },
  {
    id: "valuation",
    description: "Collect Market Capitalization, Trailing P/E, Forward P/E, PEG, and Price-to-Sales",
    evidenceTypes: ["market_cap", "valuation"],
    requiredMetrics: [
      "market_capitalization",
      "trailing_pe"
    ],
    priority: "required",
    status: "pending",
    category: "financials"
  },
  {
    id: "financial_health",
    description: "Analyze Revenue, Revenue Growth %, Profit Margins %, Free Cash Flow, and ROE",
    evidenceTypes: ["financial_metric", "financial_statement"],
    requiredMetrics: [
      "revenue",
      "revenue_growth",
      "profit_margin"
    ],
    priority: "required",
    status: "pending",
    category: "financials"
  },
  {
    id: "range",
    description: "Collect 52-week trading range and multi-period performance context",
    evidenceTypes: ["financial_metric"],
    requiredMetrics: [
      "52_week_low",
      "52_week_high"
    ],
    priority: "required",
    status: "pending",
    category: "financials"
  },
  {
    id: "debt_leverage",
    description: "Analyze Total Debt, Cash Reserves, Net Debt, and Debt-to-Equity Ratio",
    evidenceTypes: ["financial_metric"],
    requiredMetrics: [
      "total_debt",
      "total_cash"
    ],
    priority: "optional",
    status: "pending",
    category: "financials"
  },
  {
    id: "news_intelligence",
    description: "Extract recent top news headlines with source attribution and sentiment classification",
    evidenceTypes: ["news"],
    requiredMetrics: ["news_item"],
    priority: "required",
    status: "pending",
    category: "news_events"
  },
  {
    id: "upcoming_events",
    description: "Identify upcoming earnings calls, product announcements, and corporate events",
    evidenceTypes: ["event"],
    requiredMetrics: ["upcoming_event"],
    priority: "optional",
    status: "pending",
    category: "news_events"
  },
  {
    id: "risk_analysis",
    description: "Actively search for fundamental, competitive, valuation, and macroeconomic risks",
    evidenceTypes: ["risk"],
    requiredMetrics: ["risk_factor"],
    priority: "required",
    status: "pending",
    category: "thesis"
  },
  {
    id: "bull_bear_case",
    description: "Synthesize structured Bull Case opportunities and Bear Case headwinds",
    evidenceTypes: ["bull_case", "bear_case"],
    requiredMetrics: ["bull_thesis", "bear_thesis"],
    priority: "required",
    status: "pending",
    category: "thesis"
  }
];
