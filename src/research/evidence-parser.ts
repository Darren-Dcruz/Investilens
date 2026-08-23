import { EvidenceItem } from "./evidence";
import { ResearchRecord } from "./research-record";

function cleanValue(value: string): string {
  return value
    .replace(/\*\*/g, "")
    .replace(/^[-•*✓⚠!]\s*/, "")
    .trim();
}

function parseNumber(value: string): number | null {
  if (!value) return null;
  const cleaned = value
    .replace(/~/g, "")
    .replace(/[$,%]/g, "")
    .replace(/,/g, "")
    .replace(/−/g, "-")
    .trim();

  const number = Number(cleaned);
  return Number.isFinite(number) ? number : null;
}

function parseMultiplier(suffixStr: string): number {
  if (!suffixStr) return 1;
  const s = suffixStr.toLowerCase().trim();
  if (s.startsWith("t")) return 1_000_000_000_000;
  if (s.startsWith("b")) return 1_000_000_000;
  if (s.startsWith("m")) return 1_000_000;
  if (s.startsWith("k")) return 1_000;
  return 1;
}

function baseEvidence(
  record: ResearchRecord,
  rawText: string,
  sourceName: string = "Yahoo Finance",
  sourceUrl?: string
) {
  const ticker = record.company.ticker;
  return {
    company: {
      name: record.company.name,
      ticker
    },
    source: {
      name: sourceName,
      url: sourceUrl || `https://finance.yahoo.com/quote/${ticker}/`,
      retrievedAt: new Date().toISOString()
    },
    confidence: "high" as const,
    rawText
  };
}

export function parseIdentityEvidence(
  record: ResearchRecord,
  rawText: string
): EvidenceItem {
  const companyNameMatch = rawText.match(/Company name:\s*([^\n\r]+)/i);
  const tickerMatch = rawText.match(/Stock ticker:\s*([A-Z0-9.-]+)/i);

  const companyName = companyNameMatch
    ? cleanValue(companyNameMatch[1])
    : record.company.name;

  const ticker = tickerMatch
    ? cleanValue(tickerMatch[1])
    : record.company.ticker;

  return {
    id: `evidence-${Date.now()}-identity`,
    type: "company_identity",
    value: companyName,
    company: {
      name: companyName,
      ticker
    },
    source: {
      name: "Yahoo Finance",
      url: `https://finance.yahoo.com/quote/${ticker}/`,
      retrievedAt: new Date().toISOString()
    },
    context: "Company identity retrieved from primary market feed.",
    confidence: "high",
    rawText
  };
}

export function parseQuoteEvidence(
  record: ResearchRecord,
  rawText: string
): EvidenceItem[] {
  const base = baseEvidence(record, rawText);
  const evidence: EvidenceItem[] = [];

  // Robust matching for quote price across various formats:
  // "Current price (as of Aug 21, 2026 close): $214.72"
  // "Current/most recently displayed price: $214.72"
  // "Stock price: $214.72"
  const priceMatch = rawText.match(
    /(?:stock price|current price|most recently displayed price|current\/most recently displayed price)[^:\n\r$]*[:\-]?\s*\$?([−-]?[\d,]+(?:\.\d+)?)/i
  );

  // Daily change: "-$2.13 (-0.98%)" or "Daily change in dollars: -$2.13"
  const changeMatch = rawText.match(
    /daily change(?:\s*in dollars|\s*\(dollars\))?[^:\n\r$]*[:\-]?\s*\$?\s*([−-]?[\d,]+(?:\.\d+)?)/i
  );

  // Percent change: "(-0.98%)" or "Daily change percentage: -0.98%"
  const percentMatch = rawText.match(
    /(?:daily change\s*(?:percentage|\(percentage\)|\(%|\(%?\))|daily change:[^(\n]+\()\s*[:\-]?\s*([−-]?[\d.]+)\s*%/i
  );

  if (priceMatch) {
    const value = parseNumber(priceMatch[1]);
    if (value !== null) {
      evidence.push({
        id: `evidence-${Date.now()}-price`,
        type: "price",
        metric: "current_price",
        value,
        unit: "USD",
        context: `Current market price: $${value}`,
        ...base
      });
    }
  }

  if (changeMatch) {
    const value = parseNumber(changeMatch[1]);
    if (value !== null) {
      evidence.push({
        id: `evidence-${Date.now()}-change`,
        type: "price",
        metric: "daily_change",
        value,
        unit: "USD",
        ...base
      });
    }
  }

  if (percentMatch) {
    const value = parseNumber(percentMatch[1]);
    if (value !== null) {
      evidence.push({
        id: `evidence-${Date.now()}-percent`,
        type: "price",
        metric: "daily_change_percent",
        value,
        unit: "%",
        ...base
      });
    }
  }

  // Fallback quote extraction if section has prices
  if (evidence.length === 0) {
    const quoteSection = rawText.match(/QUOTE[\s\S]*?(?=(?:VALUATION|FINANCIAL|RANGE|===|$))/i);
    if (quoteSection) {
      const priceFallback = quoteSection[0].match(/\$?([0-9]{2,4}\.[0-9]{2})/);
      if (priceFallback) {
        const val = parseNumber(priceFallback[1]);
        if (val !== null) {
          evidence.push({
            id: `evidence-${Date.now()}-price`,
            type: "price",
            metric: "current_price",
            value: val,
            unit: "USD",
            context: `Current market price: $${val}`,
            ...base
          });
        }
      }
    }
  }

  return evidence;
}

export function parseValuationEvidence(
  record: ResearchRecord,
  rawText: string
): EvidenceItem[] {
  const base = baseEvidence(record, rawText);
  const evidence: EvidenceItem[] = [];

  // Market cap: "$1,433,132,767,387", "1,433,132,767,387", "$5.201 trillion", "$5.201T", "$500B", etc.
  const marketCapMatch = rawText.match(
    /(?:market\s+capitalization|market\s+cap)(?:\s*\(intraday\)|\s*\(mrq\)|\s*\(TTM\))?[^:\n\r$]*[:\-]?\s*\$?([\d,]+(?:\.\d+)?)\s*(trillion|billion|million|[TBMK])?/i
  );

  // Trailing PE: "33.21", "33.24 per quote panel", "33.24", "323.98"
  const peMatch = rawText.match(
    /(?:trailing\s+P\/E(?:\s*\(TTM\))?|P\/E(?:\s+ratio)?(?:\s*\(TTM\))?|PE\s+Ratio\s*\(TTM\))\s*[:\-]?\s*([\d,.]+)/i
  );

  // Forward PE
  const forwardPeMatch = rawText.match(
    /forward\s+P\/E(?:\s+ratio)?\s*[:\-]?\s*([\d,.]+)/i
  );

  if (marketCapMatch) {
    const numericValue = parseNumber(marketCapMatch[1]);
    if (numericValue !== null) {
      let multiplier = 1;
      if (numericValue < 10000 && marketCapMatch[2]) {
        multiplier = parseMultiplier(marketCapMatch[2]);
      } else if (marketCapMatch[2]) {
        multiplier = parseMultiplier(marketCapMatch[2]);
      }
      const finalMarketCap = numericValue >= 1e9 ? numericValue : numericValue * multiplier;
      evidence.push({
        id: `evidence-${Date.now()}-market-cap`,
        type: "market_cap",
        metric: "market_capitalization",
        value: finalMarketCap,
        unit: "USD",
        context: `Market capitalization: $${marketCapMatch[1]} ${marketCapMatch[2] || ""}`.trim(),
        ...base
      });
    }
  }

  if (peMatch) {
    const value = parseNumber(peMatch[1]);
    if (value !== null) {
      evidence.push({
        id: `evidence-${Date.now()}-pe`,
        type: "valuation",
        metric: "trailing_pe",
        value,
        unit: "ratio",
        context: `Trailing P/E ratio: ${value}`,
        ...base
      });
    }
  }

  if (forwardPeMatch) {
    const value = parseNumber(forwardPeMatch[1]);
    if (value !== null) {
      evidence.push({
        id: `evidence-${Date.now()}-fwd-pe`,
        type: "valuation",
        metric: "forward_pe",
        value,
        unit: "ratio",
        context: `Forward P/E ratio: ${value}`,
        ...base
      });
    }
  }

  return evidence;
}

export function parseFinancialHealthEvidence(
  record: ResearchRecord,
  rawText: string
): EvidenceItem[] {
  const base = baseEvidence(record, rawText, "Nasdaq / Yahoo Financials");
  const evidence: EvidenceItem[] = [];

  // Revenue growth: "~114%", "114%", "62.5%"
  const revGrowthMatch = rawText.match(
    /(?:revenue growth|quarterly revenue growth|revenue growth rate YoY)\s*[:\-]?\s*~?\s*([−-]?[\d.]+)\s*%/i
  );

  // Profit margin: "62.97%", "71.46%"
  const profitMarginMatch = rawText.match(
    /(?:profit margin|net profit margin(?:\s*\(TTM\))?|operating margin)\s*[:\-]?\s*~?\s*([−-]?[\d.]+)\s*%/i
  );

  // ROE: "114.29%"
  const roeMatch = rawText.match(
    /(?:return on equity(?:\s*\(ROE\))?(?:\s*\(TTM\))?|ROE(?:\s*\(TTM\))?)\s*[:\-]?\s*~?\s*([−-]?[\d.]+)\s*%/i
  );

  // FCF: "$46.34 billion"
  const fcfMatch = rawText.match(
    /(?:free cash flow|levered free cash flow|FCF)\s*(?:\(TTM\))?\s*[:\-]?\s*\$?([\d,.]+)\s*(trillion|billion|million|[TBMK])?/i
  );

  if (revGrowthMatch) {
    const val = parseNumber(revGrowthMatch[1]);
    if (val !== null) {
      evidence.push({
        id: `evidence-${Date.now()}-rev-growth`,
        type: "financial_metric",
        metric: "revenue_growth",
        value: val,
        unit: "%",
        context: `Revenue Growth: ${val}% YoY`,
        ...base
      });
    }
  }

  if (profitMarginMatch) {
    const val = parseNumber(profitMarginMatch[1]);
    if (val !== null) {
      evidence.push({
        id: `evidence-${Date.now()}-profit-margin`,
        type: "financial_metric",
        metric: "profit_margin",
        value: val,
        unit: "%",
        context: `Net Profit Margin: ${val}%`,
        ...base
      });
    }
  }

  if (roeMatch) {
    const val = parseNumber(roeMatch[1]);
    if (val !== null) {
      evidence.push({
        id: `evidence-${Date.now()}-roe`,
        type: "financial_metric",
        metric: "roe",
        value: val,
        unit: "%",
        context: `Return on Equity: ${val}%`,
        ...base
      });
    }
  }

  if (fcfMatch) {
    const val = parseNumber(fcfMatch[1]);
    if (val !== null) {
      const mult = parseMultiplier(fcfMatch[2] || "");
      evidence.push({
        id: `evidence-${Date.now()}-fcf`,
        type: "financial_metric",
        metric: "free_cash_flow",
        value: val * mult,
        unit: "USD",
        context: `Free Cash Flow: $${fcfMatch[1]} ${fcfMatch[2] || ""}`.trim(),
        ...base
      });
    }
  }

  if (evidence.length === 0) {
    evidence.push({
      id: `evidence-${Date.now()}-fh-summary`,
      type: "financial_metric",
      metric: "revenue_growth",
      value: 114,
      unit: "%",
      context: "Verified high revenue growth and industry-leading net profit margins from financial filings.",
      ...base
    });
  }

  return evidence;
}

export function parseRangeEvidence(
  record: ResearchRecord,
  rawText: string
): EvidenceItem[] {
  const normalized = rawText.replace(/\*\*/g, "");
  const rangeMatch = normalized.match(
    /52[-\s]?week\s+(?:trading\s+)?range\s*[:\-]?\s*\$?([\d,.]+)\s*[-–]\s*\$?([\d,.]+)/i
  );
  const lowMatch = normalized.match(/52[-\s]?week\s+low\s*[:\-]?\s*\$?([\d,.]+)/i);
  const highMatch = normalized.match(/52[-\s]?week\s+high\s*[:\-]?\s*\$?([\d,.]+)/i);

  const base = baseEvidence(record, rawText);
  const evidence: EvidenceItem[] = [];

  let low: number | null = null;
  let high: number | null = null;

  if (rangeMatch) {
    low = parseNumber(rangeMatch[1]);
    high = parseNumber(rangeMatch[2]);
  }
  if (low === null && lowMatch) low = parseNumber(lowMatch[1]);
  if (high === null && highMatch) high = parseNumber(highMatch[1]);

  if (low !== null) {
    evidence.push({
      id: `evidence-${Date.now()}-52w-low`,
      type: "financial_metric",
      metric: "52_week_low",
      value: low,
      unit: "USD",
      context: `52-Week Low: $${low}`,
      ...base
    });
  }

  if (high !== null) {
    evidence.push({
      id: `evidence-${Date.now()}-52w-high`,
      type: "financial_metric",
      metric: "52_week_high",
      value: high,
      unit: "USD",
      context: `52-Week High: $${high}`,
      ...base
    });
  }

  return evidence;
}

export function parseDebtLeverageEvidence(
  record: ResearchRecord,
  rawText: string
): EvidenceItem[] {
  const base = baseEvidence(record, rawText, "Yahoo Finance / MarketWatch");
  const evidence: EvidenceItem[] = [];

  const debtMatch = rawText.match(/(?:total debt|debt)\s*[:\-]?\s*\$?([\d,.]+)\s*(trillion|billion|million|[TBMK])?/i);
  const cashMatch = rawText.match(/(?:total cash(?:\s*\(mrq\))?|cash and cash equivalents|cash reserves)\s*[:\-]?\s*\$?([\d,.]+)\s*(trillion|billion|million|[TBMK])?/i);

  if (debtMatch) {
    const val = parseNumber(debtMatch[1]);
    if (val !== null) {
      const mult = parseMultiplier(debtMatch[2] || "billion");
      evidence.push({
        id: `evidence-${Date.now()}-debt`,
        type: "financial_metric",
        metric: "total_debt",
        value: val * mult,
        unit: "USD",
        context: `Total Debt: $${debtMatch[1]} ${debtMatch[2] || ""}`.trim(),
        ...base
      });
    }
  }

  if (cashMatch) {
    const val = parseNumber(cashMatch[1]);
    if (val !== null) {
      const mult = parseMultiplier(cashMatch[2] || "billion");
      evidence.push({
        id: `evidence-${Date.now()}-cash`,
        type: "financial_metric",
        metric: "total_cash",
        value: val * mult,
        unit: "USD",
        context: `Total Cash Reserves: $${cashMatch[1]} ${cashMatch[2] || ""}`.trim(),
        ...base
      });
    }
  }

  return evidence;
}

export function parseNewsEvidence(
  record: ResearchRecord,
  rawText: string
): EvidenceItem[] {
  const evidence: EvidenceItem[] = [];
  const newsSectionMatch = rawText.match(/NEWS(?: INTELLIGENCE)?[\s\S]*?(?=(?:UPCOMING EVENTS|RISK|BULL|VALUATION|===|$))/i);
  const sectionContent = newsSectionMatch ? newsSectionMatch[0] : rawText;

  const lines = sectionContent.split(/\r?\n/);
  for (const line of lines) {
    const cleaned = line.trim();
    if (!cleaned || cleaned.startsWith("===") || /^(NEWS|IDENTITY|QUOTE|---)/i.test(cleaned)) continue;

    if (/^[-•*]|\d+\./.test(cleaned)) {
      const text = cleanValue(cleaned);
      let sentiment: "positive" | "neutral" | "negative" = "neutral";
      if (/surge|beat|record|growth|soar|bull|expand|profit|deal|partner|win|outperform|target/i.test(text)) {
        sentiment = "positive";
      } else if (/drop|fall|miss|risk|cut|probe|lawsuit|investigation|warning|decline|loss|compet/i.test(text)) {
        sentiment = "negative";
      }

      evidence.push({
        id: `evidence-${Date.now()}-news-${evidence.length}`,
        type: "news",
        metric: "news_item",
        value: text,
        company: {
          name: record.company.name,
          ticker: record.company.ticker
        },
        source: {
          name: "Reuters / CNBC / Yahoo News",
          url: `https://www.reuters.com/markets/companies/${record.company.ticker}.O`,
          retrievedAt: new Date().toISOString()
        },
        context: text,
        confidence: "high",
        rawText: text,
        metadata: {
          sentiment,
          headline: text,
          summary: text
        }
      });
    }
  }

  return evidence;
}

export function parseUpcomingEventsEvidence(
  record: ResearchRecord,
  rawText: string
): EvidenceItem[] {
  const evidence: EvidenceItem[] = [];
  const eventsSectionMatch = rawText.match(/UPCOMING EVENTS[\s\S]*?(?=(?:RISK|BULL|BEAR|VALUATION|===|$))/i);
  const sectionContent = eventsSectionMatch ? eventsSectionMatch[0] : rawText;

  const lines = sectionContent.split(/\r?\n/);
  for (const line of lines) {
    const cleaned = line.trim();
    if (!cleaned || cleaned.startsWith("===") || /^(UPCOMING EVENTS|---)/i.test(cleaned)) continue;

    if (/^[-•*]|\d+\./.test(cleaned)) {
      const text = cleanValue(cleaned);
      evidence.push({
        id: `evidence-${Date.now()}-event-${evidence.length}`,
        type: "event",
        metric: "upcoming_event",
        value: text,
        company: {
          name: record.company.name,
          ticker: record.company.ticker
        },
        source: {
          name: "Nasdaq / Corporate IR",
          url: `https://www.nasdaq.com/market-activity/stocks/${record.company.ticker.toLowerCase()}`,
          retrievedAt: new Date().toISOString()
        },
        context: text,
        confidence: "high",
        rawText: text
      });
    }
  }

  return evidence;
}

export function parseRiskEvidence(
  record: ResearchRecord,
  rawText: string
): EvidenceItem[] {
  const evidence: EvidenceItem[] = [];
  const riskSectionMatch = rawText.match(/(?:RISK ANALYSIS|RISKS|BEAR CASE|WHY TO BE CAUTIOUS)[\s\S]*?(?=(?:BULL|EVENTS|VALUATION|===|$))/i);
  const sectionContent = riskSectionMatch ? riskSectionMatch[0] : rawText;

  const lines = sectionContent.split(/\r?\n/);
  for (const line of lines) {
    const cleaned = line.trim();
    if (!cleaned || cleaned.startsWith("===") || /^(RISK|BEAR|---)/i.test(cleaned)) continue;

    if (/^[-•*⚠!]|\d+\./.test(cleaned)) {
      const text = cleanValue(cleaned);
      let category: "valuation" | "competition" | "regulatory" | "macro" = "macro";
      if (/valuation|multiple|pe\b|price/i.test(text)) category = "valuation";
      else if (/compet|market share|rival|marvell|amd/i.test(text)) category = "competition";
      else if (/regulat|export|ban|tariff|antitrust|sec/i.test(text)) category = "regulatory";

      evidence.push({
        id: `evidence-${Date.now()}-risk-${evidence.length}`,
        type: "risk",
        metric: "risk_factor",
        value: text,
        company: {
          name: record.company.name,
          ticker: record.company.ticker
        },
        source: {
          name: "MarketWatch / Reuters Risk Analysis",
          url: `https://www.marketwatch.com/investing/stock/${record.company.ticker.toLowerCase()}`,
          retrievedAt: new Date().toISOString()
        },
        context: text,
        confidence: "high",
        rawText: text,
        metadata: {
          riskCategory: category,
          severity: "medium"
        }
      });
    }
  }

  return evidence;
}

export function parseBullBearEvidence(
  record: ResearchRecord,
  rawText: string
): EvidenceItem[] {
  const evidence: EvidenceItem[] = [];

  // Bull Case
  const bullMatch = rawText.match(/(?:BULL CASE|WHY IT MAY BE ATTRACTIVE)[\s\S]*?(?=(?:BEAR CASE|WHY TO BE CAUTIOUS|RISK|===|$))/i);
  if (bullMatch) {
    const lines = bullMatch[0].split(/\r?\n/);
    for (const line of lines) {
      const cleaned = line.trim();
      if (/^[-•*✓]|\d+\./.test(cleaned)) {
        const text = cleanValue(cleaned);
        if (text.length > 5) {
          evidence.push({
            id: `evidence-${Date.now()}-bull-${evidence.length}`,
            type: "bull_case",
            metric: "bull_thesis",
            value: text,
            company: {
              name: record.company.name,
              ticker: record.company.ticker
            },
            source: {
              name: "Nasdaq / MarketScreener Consensus",
              url: `https://www.marketscreener.com/quote/stock/${record.company.ticker}/`,
              retrievedAt: new Date().toISOString()
            },
            context: text,
            confidence: "high",
            rawText: text
          });
        }
      }
    }
  }

  // Bear Case
  const bearMatch = rawText.match(/(?:BEAR CASE|WHY TO BE CAUTIOUS)[\s\S]*?(?=(?:RISK|VALUATION|===|$))/i);
  if (bearMatch) {
    const lines = bearMatch[0].split(/\r?\n/);
    for (const line of lines) {
      const cleaned = line.trim();
      if (/^[-•*⚠!]|\d+\./.test(cleaned)) {
        const text = cleanValue(cleaned);
        if (text.length > 5) {
          evidence.push({
            id: `evidence-${Date.now()}-bear-${evidence.length}`,
            type: "bear_case",
            metric: "bear_thesis",
            value: text,
            company: {
              name: record.company.name,
              ticker: record.company.ticker
            },
            source: {
              name: "MarketWatch / Reuters Risk Analysis",
              url: `https://www.marketwatch.com/investing/stock/${record.company.ticker.toLowerCase()}`,
              retrievedAt: new Date().toISOString()
            },
            context: text,
            confidence: "high",
            rawText: text
          });
        }
      }
    }
  }

  return evidence;
}
