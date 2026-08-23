import {
  researchCompany,
  approveResearch,
  executeResearch,
  analyzeAndScore,
  approveFinalReport
} from "./research/research-agent";
import { HermesResearchExecutor } from "./research/hermes-research-executor";
import { buildResearchReport } from "./research/research-report";

async function main() {
  console.log("============================================================");
  console.log(" INVESTILENS — AI INVESTMENT RESEARCH AGENT (DEMO FLOW)");
  console.log("============================================================");
  console.log("");
  console.log("User Scenario: 'I have ₹50,000. I'm a beginner with moderate risk tolerance (3–5 year horizon).'");
  console.log("");

  // STEP 1: CREATE RESEARCH PLAN
  console.log("=== STEP 1: CREATE RESEARCH PLAN ===");
  let record = await researchCompany({
    company: "NVIDIA",
    ticker: "NVDA",
    market: "US",
    sector: "Semiconductors & AI Hardware",
    risk: "medium",
    horizon: "3-5 years",
    amount: 50000,
    experience: "Beginner"
  });

  console.log(`Research Record ID: ${record.id}`);
  console.log(`Plan Status: ${record.status}`);
  console.log(`Research Dimensions Planned: ${record.plan?.tasks.length} tasks`);
  console.log(`Configured Sources: ${record.sources.map((s) => s.name).join(", ")}`);

  // STEP 2: HUMAN APPROVAL #1
  console.log("");
  console.log("=== STEP 2: HUMAN APPROVAL #1 (RESEARCH PLAN APPROVAL) ===");
  console.log("User action: [ APPROVE RESEARCH PLAN ]");
  record = approveResearch(record);
  console.log(`Record Status After Approval #1: ${record.status}`);

  // STEP 3: EXECUTE BATCHED BROWSER RESEARCH
  console.log("");
  console.log("=== STEP 3: EXECUTE LIVE WEB RESEARCH VIA HERMES ===");
  const executor = new HermesResearchExecutor();
  record = await executeResearch(record, executor);
  console.log(`Record Status After Execution: ${record.status}`);
  console.log(`Total Evidence Items Collected: ${record.evidence.length}`);

  // STEP 4: VERIFY EVIDENCE & DETERMINISTIC SCORING
  console.log("");
  console.log("=== STEP 4: EVIDENCE VERIFICATION & DETERMINISTIC SCORING ===");
  const { record: scoredRecord, verification } = analyzeAndScore(record);
  record = scoredRecord;

  console.log(`Verification Result: ${verification.passed ? "PASSED" : "FAILED"}`);
  console.log(`Verified Evidence Items: ${verification.verifiedEvidenceIds.length}`);
  console.log(`Cross-Source Conflicts: ${verification.conflicts.length}`);
  console.log(`Evidence Confidence: ${verification.confidenceLevel.toUpperCase()}`);
  console.log(`Confidence Rationale: ${verification.confidenceReason}`);

  if (record.scoring) {
    console.log("");
    console.log("--- DETERMINISTIC SCORING BREAKDOWN ---");
    console.log(`Overall Research Score: ${record.scoring.overallScore} / 100 (${record.scoring.rating})`);
    console.log(`- Financial Health (25%):        ${record.scoring.breakdown.financialHealth.score}/100`);
    console.log(`- Growth Potential (20%):        ${record.scoring.breakdown.growthPotential.score}/100`);
    console.log(`- Historical Performance (15%):  ${record.scoring.breakdown.historicalPerformance.score}/100`);
    console.log(`- Valuation (15%):               ${record.scoring.breakdown.valuation.score}/100`);
    console.log(`- Debt / Leverage (10%):         ${record.scoring.breakdown.debtLeverage.score}/100`);
    console.log(`- News & Events (10%):           ${record.scoring.breakdown.newsEvents.score}/100`);
    console.log(`- Risk Profile (5%):             ${record.scoring.breakdown.riskProfile.score}/100`);
  }

  // STEP 5: HUMAN APPROVAL #2 (FINAL REPORT GENERATION)
  console.log("");
  console.log("=== STEP 5: HUMAN APPROVAL #2 (PRE-REPORT REVIEW) ===");
  console.log(`Preliminary Findings Summary:`);
  console.log(`- Candidate: ${record.company.name} (${record.company.ticker})`);
  console.log(`- Overall Score: ${record.scoring?.overallScore}/100`);
  console.log(`- Key Opportunities: ${record.scoring?.keyOpportunities[0]}`);
  console.log(`- Key Risk: ${record.scoring?.keyRisks[0]}`);
  console.log("User action: [ GENERATE FINAL REPORT ]");

  record = approveFinalReport(record);
  console.log(`Record Status After Approval #2: ${record.status}`);

  // STEP 6: BUILD COMPLETE FINAL REPORT
  console.log("");
  console.log("=== STEP 6: COMPILE COMPLETE 18-SECTION RESEARCH REPORT ===");
  const report = buildResearchReport(record, verification);
  record = {
    ...record,
    status: "complete",
    updatedAt: new Date().toISOString()
  };

  console.log("");
  console.log("============================================================");
  console.log(` REPORT GENERATED: ${report.title}`);
  console.log("============================================================");
  console.log(`Overall Score: ${report.overallScore}/100 (${report.rating})`);
  console.log(`Evidence Confidence: ${report.evidenceConfidence}`);
  console.log(`Executive Summary: ${report.executiveSummary}`);
  console.log("");
  console.log("Valuation & Market Data:");
  console.log(`- Current Price: $${report.historicalPerformance.price}`);
  console.log(`- Market Cap: ${report.valuation.marketCapFormatted}`);
  console.log(`- Trailing P/E: ${report.valuation.trailingPe || "N/A"}`);
  console.log(`- 52-Week Range: $${report.historicalPerformance.range52Week?.low} - $${report.historicalPerformance.range52Week?.high}`);
  console.log("");
  console.log("News Intelligence Sentiment:");
  console.log(`- Positive: ${report.newsIntelligence.sentimentBreakdown.positive}% | Neutral: ${report.newsIntelligence.sentimentBreakdown.neutral}% | Negative: ${report.newsIntelligence.sentimentBreakdown.negative}%`);
  console.log("");
  console.log("Bull Case (Why it may be attractive):");
  for (const b of report.bullCase) console.log(`  ✓ ${b}`);
  console.log("");
  console.log("Bear Case (Why to be cautious):");
  for (const b of report.bearCase) console.log(`  ⚠ ${b}`);
  console.log("");
  if (report.hypotheticalAllocation) {
    console.log("Hypothetical Beginner Allocation (₹50,000 Portfolio):");
    console.log(`- Single Stock Exposure (NVIDIA): ₹${report.hypotheticalAllocation.recommendedStockExposure.toLocaleString()}`);
    console.log(`- Diversified Equity Reserve: ₹${report.hypotheticalAllocation.recommendedEquityAllocation.toLocaleString()}`);
    console.log(`- Cash/Liquid Buffer: ₹${report.hypotheticalAllocation.cashReserve.toLocaleString()}`);
    console.log(`- Rationale: ${report.hypotheticalAllocation.rationale}`);
  }
  console.log("");
  console.log(`Total Verified Evidence Items: ${report.verification.verifiedEvidenceCount}`);
  console.log(`Research Sources Consulted: ${report.sources.length}`);
  console.log(`Final Status: ${record.status}`);
  console.log("============================================================");
}

main().catch((err) => {
  console.error("InvestiLens execution error:", err);
  process.exit(1);
});
