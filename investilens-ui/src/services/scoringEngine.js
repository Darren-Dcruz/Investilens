export const SCORING_WEIGHTS = {
  financialHealth: { weight: 0.25, label: 'Financial Health', description: 'Balance sheet strength, profitability, ROE/ROA, margins' },
  growthPotential: { weight: 0.20, label: 'Growth Potential', description: 'Revenue/NII trajectory, sector tailwinds, addressable market' },
  historicalPerformance: { weight: 0.15, label: 'Historical Performance', description: 'Multi-year consistency, alpha generation vs benchmark' },
  valuation: { weight: 0.15, label: 'Valuation', description: 'P/E, P/B, EV/EBITDA, intrinsic value vs historical median' },
  debtLeverage: { weight: 0.10, label: 'Debt & Leverage', description: 'Debt-to-equity, interest coverage ratio, liquidity buffers' },
  newsEvents: { weight: 0.10, label: 'News & Events', description: 'Sentiment classification, upcoming earnings & regulatory catalysts' },
  riskProfile: { weight: 0.05, label: 'Risk & Governance', description: 'Promoter integrity, regulatory exposure, macro sensitivity' }
};

export function calculateDeterministicScore(dimensions) {
  let totalScore = 0;
  let breakdown = [];
  
  for (const [key, config] of Object.entries(SCORING_WEIGHTS)) {
    const rawVal = dimensions[key] !== undefined ? Number(dimensions[key]) : 70;
    const clampedVal = Math.max(0, Math.min(100, rawVal));
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
  
  if (finalScore >= 80) {
    profileVerdict = 'Strong Research Profile';
    verdictColor = 'text-brand-lime';
    verdictBadge = 'bg-brand-medium/20 border-brand-lime text-brand-lime';
  } else if (finalScore >= 65) {
    profileVerdict = 'Moderate Research Profile';
    verdictColor = 'text-brand-light';
    verdictBadge = 'bg-brand-light/20 border-brand-light text-brand-light';
  } else if (finalScore >= 50) {
    profileVerdict = 'Higher-Risk Research Profile';
    verdictColor = 'text-amber-400';
    verdictBadge = 'bg-amber-500/20 border-amber-500 text-amber-300';
  } else {
    profileVerdict = 'Requires Further Investigation';
    verdictColor = 'text-rose-400';
    verdictBadge = 'bg-rose-500/20 border-rose-500 text-rose-300';
  }
  
  return {
    finalScore,
    breakdown,
    profileVerdict,
    verdictColor,
    verdictBadge,
    formulaExplanation: 'Score = (Financial Health * 0.25) + (Growth * 0.20) + (Historical * 0.15) + (Valuation * 0.15) + (Debt * 0.10) + (News * 0.10) + (Risk * 0.05)'
  };
}
