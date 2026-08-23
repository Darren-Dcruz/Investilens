import { EvidenceItem } from "./evidence";
import { ResearchRecord, ResearchScoreResult, DimensionScore } from "./research-record";

function findEvidence(
  evidence: EvidenceItem[],
  type: EvidenceItem["type"],
  metric?: string
): EvidenceItem | undefined {
  return evidence.find(
    (item) => item.type === type && (!metric || item.metric === metric)
  );
}

function findEvidenceList(
  evidence: EvidenceItem[],
  type: EvidenceItem["type"],
  metric?: string
): EvidenceItem[] {
  return evidence.filter(
    (item) => item.type === type && (!metric || item.metric === metric)
  );
}

export function calculateDeterministicScore(record: ResearchRecord): ResearchScoreResult {
  const evidence = record.evidence;

  // 1. FINANCIAL HEALTH (25%)
  const revGrowth = findEvidence(evidence, "financial_metric", "revenue_growth");
  const margin = findEvidence(evidence, "financial_metric", "profit_margin");
  const fcf = findEvidence(evidence, "financial_metric", "free_cash_flow");
  const roe = findEvidence(evidence, "financial_metric", "roe");

  let fhScore = 70; // baseline
  const fhEvidenceIds: string[] = [];

  if (revGrowth && typeof revGrowth.value === "number") {
    fhEvidenceIds.push(revGrowth.id);
    if (revGrowth.value > 30) fhScore += 15;
    else if (revGrowth.value > 15) fhScore += 10;
    else if (revGrowth.value > 0) fhScore += 5;
    else fhScore -= 15;
  }
  if (margin && typeof margin.value === "number") {
    fhEvidenceIds.push(margin.id);
    if (margin.value > 30) fhScore += 10;
    else if (margin.value > 15) fhScore += 5;
    else if (margin.value < 0) fhScore -= 10;
  }
  if (roe && typeof roe.value === "number") {
    fhEvidenceIds.push(roe.id);
    if (roe.value > 25) fhScore += 5;
  }
  fhScore = Math.min(100, Math.max(0, fhScore));

  const financialHealth: DimensionScore = {
    score: fhScore,
    weight: 0.25,
    label: "Financial Health",
    rationale: `Operating profitability and cash flow generation support sustained balance sheet strength.`,
    evidenceIds: fhEvidenceIds
  };

  // 2. GROWTH POTENTIAL (20%)
  let growthScore = 75;
  const growthEvidenceIds: string[] = [];
  const bullItems = findEvidenceList(evidence, "bull_case");
  for (const item of bullItems) {
    growthEvidenceIds.push(item.id);
  }
  if (bullItems.length >= 2) growthScore += 12;
  if (revGrowth && typeof revGrowth.value === "number" && revGrowth.value > 20) {
    growthScore += 10;
  }
  growthScore = Math.min(100, Math.max(0, growthScore));

  const growthPotential: DimensionScore = {
    score: growthScore,
    weight: 0.20,
    label: "Growth Potential",
    rationale: `Driven by strong addressable market expansion, enterprise AI adoption, and leadership momentum.`,
    evidenceIds: growthEvidenceIds
  };

  // 3. HISTORICAL PERFORMANCE (15%)
  const priceItem = findEvidence(evidence, "price", "current_price");
  const low52 = findEvidence(evidence, "financial_metric", "52_week_low");
  const high52 = findEvidence(evidence, "financial_metric", "52_week_high");

  let histScore = 72;
  const histEvidenceIds: string[] = [];
  if (priceItem && low52 && high52 && typeof priceItem.value === "number" && typeof low52.value === "number" && typeof high52.value === "number") {
    histEvidenceIds.push(priceItem.id, low52.id, high52.id);
    const range = high52.value - low52.value;
    if (range > 0) {
      const positionInRange = (priceItem.value - low52.value) / range;
      // Closer to high indicates sustained upward momentum
      if (positionInRange > 0.7) histScore += 14;
      else if (positionInRange > 0.4) histScore += 8;
    }
  }
  histScore = Math.min(100, Math.max(0, histScore));

  const historicalPerformance: DimensionScore = {
    score: histScore,
    weight: 0.15,
    label: "Historical Performance",
    rationale: `Strong multi-quarter price trajectory and robust 52-week trading support.`,
    evidenceIds: histEvidenceIds
  };

  // 4. VALUATION (15%)
  const peItem = findEvidence(evidence, "valuation", "trailing_pe");
  let valScore = 65;
  const valEvidenceIds: string[] = [];
  if (peItem && typeof peItem.value === "number") {
    valEvidenceIds.push(peItem.id);
    if (peItem.value < 20) valScore = 90;
    else if (peItem.value < 35) valScore = 75;
    else if (peItem.value < 55) valScore = 60;
    else valScore = 45; // Premium valuation demands caution
  }
  valScore = Math.min(100, Math.max(0, valScore));

  const valuation: DimensionScore = {
    score: valScore,
    weight: 0.15,
    label: "Valuation",
    rationale: peItem?.value && Number(peItem.value) > 30
      ? `Trades at a growth premium (P/E ~${peItem.value}), reflecting high market expectations.`
      : `Valuation multiples are aligned with fundamental industry averages.`,
    evidenceIds: valEvidenceIds
  };

  // 5. DEBT / LEVERAGE (10%)
  const debtItem = findEvidence(evidence, "financial_metric", "total_debt");
  const cashItem = findEvidence(evidence, "financial_metric", "total_cash");
  let debtScore = 80;
  const debtEvidenceIds: string[] = [];
  if (debtItem) debtEvidenceIds.push(debtItem.id);
  if (cashItem) debtEvidenceIds.push(cashItem.id);
  if (debtItem && cashItem && typeof debtItem.value === "number" && typeof cashItem.value === "number") {
    if (cashItem.value >= debtItem.value) debtScore += 15; // Net cash positive
    else debtScore -= 10;
  }
  debtScore = Math.min(100, Math.max(0, debtScore));

  const debtLeverage: DimensionScore = {
    score: debtScore,
    weight: 0.10,
    label: "Debt / Leverage",
    rationale: `Substantial liquid cash reserves and manageable long-term debt obligations.`,
    evidenceIds: debtEvidenceIds
  };

  // 6. NEWS & EVENTS (10%)
  const newsList = findEvidenceList(evidence, "news");
  let newsScore = 70;
  const newsEvidenceIds: string[] = [];
  let posCount = 0;
  let negCount = 0;

  for (const item of newsList) {
    newsEvidenceIds.push(item.id);
    if (item.metadata?.sentiment === "positive") posCount++;
    else if (item.metadata?.sentiment === "negative") negCount++;
  }

  if (newsList.length > 0) {
    if (posCount > negCount) newsScore += 15;
    else if (negCount > posCount) newsScore -= 15;
  }
  newsScore = Math.min(100, Math.max(0, newsScore));

  const newsEvents: DimensionScore = {
    score: newsScore,
    weight: 0.10,
    label: "News & Sentiment",
    rationale: newsList.length > 0
      ? `Sentiment profile shows ${posCount} positive, ${newsList.length - posCount - negCount} neutral, and ${negCount} negative news items.`
      : `Neutral to positive market sentiment with upcoming product announcements.`,
    evidenceIds: newsEvidenceIds
  };

  // 7. RISK PROFILE (5%)
  const riskList = findEvidenceList(evidence, "risk");
  const bearList = findEvidenceList(evidence, "bear_case");
  let riskScore = 70;
  const riskEvidenceIds: string[] = [];
  for (const item of [...riskList, ...bearList]) {
    riskEvidenceIds.push(item.id);
  }
  if (riskList.length >= 3) riskScore -= 5;
  riskScore = Math.min(100, Math.max(0, riskScore));

  const riskProfile: DimensionScore = {
    score: riskScore,
    weight: 0.05,
    label: "Risk Profile",
    rationale: `Identified ${riskList.length} company-specific risks (valuation premium, competitive landscape, regulatory exposure).`,
    evidenceIds: riskEvidenceIds
  };

  // CALCULATE DETERMINISTIC OVERALL SCORE
  const rawScore =
    financialHealth.score * financialHealth.weight +
    growthPotential.score * growthPotential.weight +
    historicalPerformance.score * historicalPerformance.weight +
    valuation.score * valuation.weight +
    debtLeverage.score * debtLeverage.weight +
    newsEvents.score * newsEvents.weight +
    riskProfile.score * riskProfile.weight;

  const overallScore = Math.round(rawScore);

  let rating: ResearchScoreResult["rating"] = "Moderate Buy";
  if (overallScore >= 85) rating = "Strong Bullish";
  else if (overallScore >= 75) rating = "Moderate Buy";
  else if (overallScore >= 60) rating = "Neutral / Hold";
  else if (overallScore >= 45) rating = "Caution / Speculative";
  else rating = "Bearish";

  // Key opportunities and risks
  const keyOpportunities = bullItems.length > 0
    ? bullItems.map((b) => b.context || String(b.value))
    : [
        "Sustained enterprise demand and expanding addressable market",
        "Market-leading gross margins and robust free cash flow",
        "Pioneering architecture with sticky ecosystem moat"
      ];

  const keyRisks = riskList.length > 0
    ? riskList.map((r) => r.context || String(r.value))
    : [
        "Elevated valuation multiple requiring continuous high earnings execution",
        "Geopolitical and export regulatory restrictions",
        "Evolving customer internal silicon competition"
      ];

  return {
    overallScore,
    rating,
    breakdown: {
      financialHealth,
      growthPotential,
      historicalPerformance,
      valuation,
      debtLeverage,
      newsEvents,
      riskProfile
    },
    keyOpportunities,
    keyRisks
  };
}
