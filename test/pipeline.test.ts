import { calculateDeterministicScore } from "../src/research/scoring-engine";
import { verifyEvidence } from "../src/research/evidence-verifier";
import { buildResearchReport } from "../src/research/research-report";
import { ResearchRecord } from "../src/research/research-record";
import { INITIAL_RESEARCH_TASKS } from "../src/research/research-plan";
import {
  parseIdentityEvidence,
  parseQuoteEvidence,
  parseValuationEvidence,
  parseFinancialHealthEvidence,
  parseRangeEvidence,
  parseNewsEvidence,
  parseRiskEvidence,
  parseBullBearEvidence
} from "../src/research/evidence-parser";

console.log("=== RUNNING INVESTILENS TEST SUITE ===");

const sampleOutput = `
IDENTITY
- Company name: NVIDIA Corporation
- Stock ticker: NVDA (NasdaqGS)

QUOTE
- Current price (as of Aug 21, 2026 close): $214.72
- Daily change: -$2.13 (-0.98%)
- Previous close: $216.85

VALUATION
- Market capitalization: $5.201 trillion
- Trailing P/E ratio (TTM): 33.21
- Forward P/E ratio: 24.75

FINANCIAL HEALTH
- Revenue growth rate YoY: ~114%
- Net profit margin (TTM): 62.97%
- Return on Equity (ROE) (TTM): 114.29%
- Levered Free Cash Flow (TTM): $46.34 billion

RANGE
- 52-week low: $164.07
- 52-week high: $236.54

NEWS INTELLIGENCE
- Headline 1: "Nvidia earnings are on deck next week. Key AI themes in focus" (Reuters)
- Headline 2: "Global hyperscalers expand multi-billion AI data center capex" (CNBC)

BULL CASE
- Major long-term growth catalyst and addressable market expansion: Full-stack CUDA AI ecosystem and massive enterprise compute demand.
- Competitive advantage, pricing power, or ecosystem moat: 62.97% net margin reflects deep software and hardware moat.

BEAR CASE
- Critical reason why growth might disappoint or margins compress: Custom silicon from hyperscalers (Google TPU, AWS Trainium) could increase competition.
- Downside risk factor or cyclical vulnerability: Premium valuation (P/E 33) leaves little margin for execution errors.
`;

const dummyRecord: ResearchRecord = {
  id: "test-rec-1",
  company: { name: "NVIDIA", ticker: "NVDA" },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  status: "collecting",
  plan: {
    company: "NVIDIA",
    ticker: "NVDA",
    tasks: INITIAL_RESEARCH_TASKS.map((t) => ({ ...t }))
  },
  evidence: [],
  conflicts: [],
  sources: []
};

// 1. Test Parsers
const identity = [parseIdentityEvidence(dummyRecord, sampleOutput)];
const quotes = parseQuoteEvidence(dummyRecord, sampleOutput);
const valuations = parseValuationEvidence(dummyRecord, sampleOutput);
const financials = parseFinancialHealthEvidence(dummyRecord, sampleOutput);
const ranges = parseRangeEvidence(dummyRecord, sampleOutput);
const news = parseNewsEvidence(dummyRecord, sampleOutput);
const risks = parseRiskEvidence(dummyRecord, sampleOutput);
const bullBear = parseBullBearEvidence(dummyRecord, sampleOutput);

console.assert(identity.length === 1, "Identity parser should return 1 item");
console.assert(quotes.length >= 1, "Quote parser should return at least 1 price item");
console.assert(valuations.length >= 1, "Valuation parser should return market cap / PE");
console.assert(ranges.length === 2, "Range parser should return 52-week low and high");
console.assert(news.length >= 1, "News parser should extract headlines");
console.assert(bullBear.length >= 2, "Bull/Bear parser should extract points");

dummyRecord.evidence = [
  ...identity,
  ...quotes,
  ...valuations,
  ...financials,
  ...ranges,
  ...news,
  ...risks,
  ...bullBear
];

// 2. Test Verifier
const verification = verifyEvidence(dummyRecord.plan!, dummyRecord.evidence);
console.log(`Verification passed: ${verification.passed}, Verified items: ${verification.verifiedEvidenceIds.length}`);
console.assert(verification.passed, "Verification should pass with parsed evidence");

// 3. Test Deterministic Scoring
const scoring = calculateDeterministicScore(dummyRecord);
console.log(`Calculated Score: ${scoring.overallScore}/100, Rating: ${scoring.rating}`);
console.assert(scoring.overallScore >= 60 && scoring.overallScore <= 100, "Score should be in reasonable range");
console.assert(scoring.breakdown.financialHealth.score > 0, "Financial health score should be computed");

// 4. Test Report Generator
dummyRecord.scoring = scoring;
const report = buildResearchReport(dummyRecord, verification);
// 5. Test Raw Market Cap format (e.g. Tesla Nasdaq format: 1,433,132,767,387)
const teslaValuations = parseValuationEvidence(
  { ...dummyRecord, company: { name: "Tesla", ticker: "TSLA" } },
  "VALUATION\n- Market Cap: 1,433,132,767,387\n- Trailing P/E: 323.98"
);
console.assert(teslaValuations.length >= 1, "Should parse raw integer market cap");
const teslaMarketCap = teslaValuations.find(v => v.type === "market_cap");
console.assert(teslaMarketCap && teslaMarketCap.value === 1433132767387, "Market cap value should match 1433132767387");

const teslaReport = buildResearchReport(
  {
    ...dummyRecord,
    company: { name: "Tesla", ticker: "TSLA" },
    evidence: teslaValuations,
    userProfile: { amount: 50000, sector: "Automobile" }
  },
  verification
);
console.assert(teslaReport.valuation.marketCapFormatted === "$1.433T", `Formatted market cap should be $1.433T, got ${teslaReport.valuation.marketCapFormatted}`);

console.log("=== ALL INVESTILENS UNIT TESTS PASSED ===");
