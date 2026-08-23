export type EvidenceType =
  | "company_identity"
  | "price"
  | "market_cap"
  | "valuation"
  | "financial_metric"
  | "financial_statement"
  | "news"
  | "event"
  | "guidance"
  | "risk"
  | "bull_case"
  | "bear_case"
  | "other";

export interface EvidenceItem {
  id: string;

  type: EvidenceType;

  metric?: string;

  value?: string | number | null;

  unit?: string;

  company: {
    name: string;
    ticker: string;
    exchange?: string;
  };

  source: {
    name: string;
    url: string;
    retrievedAt: string;
  };

  context?: string;

  asOf?: string;

  confidence?: "high" | "medium" | "low";

  rawText?: string;

  // Metadata extensions for News, Events, and Qualitative Analysis
  metadata?: {
    sentiment?: "positive" | "neutral" | "negative";
    headline?: string;
    summary?: string;
    eventDate?: string;
    riskCategory?: "valuation" | "competition" | "regulatory" | "macro" | "execution" | "financial";
    severity?: "high" | "medium" | "low";
    bullCatalyst?: string;
    bearHeadwind?: string;
    sourceCategory?: string;
  };
}
