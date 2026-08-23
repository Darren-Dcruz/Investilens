export const SCORING_WEIGHTS = {
  financialHealth: { weight: 0.25, label: 'Financial Health', description: 'Profitability margins, ROE, FCF generation & top-line revenue trajectory' },
  growthPotential: { weight: 0.20, label: 'Growth Potential', description: 'Addressable market scalability, product catalysts & sector momentum' },
  historicalPerformance: { weight: 0.15, label: 'Historical Performance', description: '52-week trading band positioning & relative drawdown resilience' },
  valuation: { weight: 0.15, label: 'Valuation Multiple', description: 'P/E, EV/EBITDA, margin of safety vs earnings yield' },
  debtLeverage: { weight: 0.10, label: 'Debt & Leverage', description: 'Total debt to liquid cash reserves, interest coverage & solvency' },
  newsEvents: { weight: 0.10, label: 'News & Sentiment', description: 'Multi-wire positive vs negative headline sentiment ratio' },
  riskProfile: { weight: 0.05, label: 'Risk & Governance', description: 'Counter-analysis penalties, regulatory headwinds & competitive hazards' }
};

/**
 * Deterministic Scoring Calculation with Realistic Financial Distributions
 */
export function calculateDeterministicScore(dimensions) {
  let totalScore = 0;
  let breakdown = [];
  
  for (const [key, config] of Object.entries(SCORING_WEIGHTS)) {
    const rawVal = dimensions[key] !== undefined ? Number(dimensions[key]) : 50;
    const clampedVal = Math.max(10, Math.min(100, rawVal));
    const contribution = clampedVal * config.weight;
    totalScore += contribution;
    
    breakdown.push({
      key,
      label: config.label,
      description: config.description,
      rawScore: Math.round(clampedVal),
      weightPercent: Math.round(config.weight * 100),
      contribution: Number(contribution.toFixed(2))
    });
  }
  
  const finalScore = Math.round(totalScore);
  
  let profileVerdict = '';
  let verdictColor = '';
  let verdictBadge = '';
  
  if (finalScore >= 82) {
    profileVerdict = 'Strong Bullish';
    verdictColor = 'text-brand-lime';
    verdictBadge = 'bg-brand-medium/20 border-brand-lime text-brand-lime';
  } else if (finalScore >= 72) {
    profileVerdict = 'Moderate Buy';
    verdictColor = 'text-brand-light';
    verdictBadge = 'bg-brand-light/20 border-brand-light text-brand-light';
  } else if (finalScore >= 58) {
    profileVerdict = 'Neutral / Hold';
    verdictColor = 'text-amber-400';
    verdictBadge = 'bg-amber-500/20 border-amber-500 text-amber-300';
  } else if (finalScore >= 45) {
    profileVerdict = 'Caution / Speculative';
    verdictColor = 'text-orange-400';
    verdictBadge = 'bg-orange-500/20 border-orange-500 text-orange-300';
  } else {
    profileVerdict = 'High Risk / Impairment Warning';
    verdictColor = 'text-rose-400';
    verdictBadge = 'bg-rose-500/20 border-rose-500 text-rose-300';
  }
  
  return {
    finalScore,
    breakdown,
    profileVerdict,
    verdictColor,
    verdictBadge,
    formulaExplanation: 'Score = (Financial Health × 25%) + (Growth × 20%) + (Historical × 15%) + (Valuation × 15%) + (Debt × 10%) + (News × 10%) + (Risk × 5%)'
  };
}
