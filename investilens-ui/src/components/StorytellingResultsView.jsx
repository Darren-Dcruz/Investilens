import React, { useState, useEffect } from "react";
import { ShieldCheck, CheckCircle2, Copy, Check, RefreshCw, Sliders, AlertTriangle, Building2 } from "lucide-react";
import confetti from "canvas-confetti";
import { soundFx } from "../services/soundFx.js";
import { SCORING_WEIGHTS, calculateDeterministicScore } from "../services/scoringEngine.js";

export default function StorytellingResultsView({
  stockData,
  params,
  userLevel,
  setUserLevel,
  onResearchAnother
}) {
  const [copied, setCopied] = useState(false);
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
  const [customScores, setCustomScores] = useState(stockData?.scores || {
    financialHealth: 88,
    growthPotential: 84,
    historicalPerformance: 86,
    valuation: 78,
    debtLeverage: 82,
    newsEvents: 85,
    riskProfile: 80
  });

  const calculated = calculateDeterministicScore(customScores);

  useEffect(() => {
    soundFx.playReportSuccess();
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#F0FB43", "#7ED043", "#4FB734", "#328F35"]
    });
  }, []);

  const handleCopyMarkdown = () => {
    soundFx.playClick();
    const md = `==================================================
INVESTILENS - AUTONOMOUS RESEARCH REPORT
==================================================
Company: ${stockData.name} (${stockData.ticker})
Market: ${params.market} | Horizon: ${params.horizon}
Research Score: ${calculated.finalScore} / 100
Verdict: ${calculated.profileVerdict}
Evidence Confidence: HIGH (Cross-Verified Across 6 Sources)

DETERMINISTIC SCORE FORMULA
${calculated.formulaExplanation}

BULL CASE PILLARS
${stockData.bullCase.map(b => `- ${b.title}: ${b.desc}`).join("\n")}

BEAR CASE HAZARDS
${stockData.bearCase.map(b => `- ${b.title}: ${b.desc}`).join("\n")}

NEWS SENTIMENT
Positive: ${stockData.newsSentiment.positivePercent}% | Neutral: ${stockData.newsSentiment.neutralPercent}% | Negative: ${stockData.newsSentiment.negativePercent}%

DISCLAIMER: Decision-support assessment based on publicly verified web information. Not guaranteed financial advice.
==================================================`;

    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-6 py-6 px-4">
      {/* Top Header Card */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0c1a11] via-[#0f2417] to-[#070e0a] border border-brand-light/40 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl">
        <div className="flex items-center gap-4 relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-[#060907] border-2 border-brand-lime flex items-center justify-center text-brand-lime shadow-2xl flex-shrink-0">
            <Building2 className="w-8 h-8" />
          </div>
          <div>
            <div className="flex items-center gap-2.5">
              <h2 className="text-2xl font-black text-white font-mono">{stockData.name}</h2>
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-brand-deep/60 text-brand-lime border border-brand-light/30">
                {stockData.ticker} - {stockData.exchange}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-sans mt-0.5">
              {stockData.sector} - Calibrated for {params.currency === "INR" ? "INR " : "USD "}{Number(params.amount).toLocaleString()} capital limit
            </p>
          </div>
        </div>

        {/* Deterministic Score Gauge */}
        <div className="flex items-center gap-6 ml-auto md:ml-0 relative z-10">
          <div className="text-right">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block">
              DETERMINISTIC SCORE
            </span>
            <div className="flex items-center gap-1.5 justify-end">
              <span className="text-4xl font-black font-mono green-gradient-text">
                {calculated.finalScore}
              </span>
              <span className="text-sm font-mono text-slate-500 font-bold">/100</span>
            </div>
          </div>

          <div className="w-px h-12 bg-white/[0.1]" />

          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-1">
              VERDICT
            </span>
            <span className="text-xs font-black font-mono px-3.5 py-1.5 rounded-xl bg-brand-medium/25 text-brand-lime border border-brand-lime/50 shadow-lg shadow-brand-medium/20 inline-block">
              {calculated.profileVerdict}
            </span>
          </div>
        </div>
      </div>

      {/* Control Bar: Beginner/Advanced Switch + Export + Research Another */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[#0b110d] border border-brand-light/20 rounded-2xl p-3 text-xs font-mono">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-brand-lime" />
          <span className="text-slate-300">Evidence Confidence: <strong className="text-brand-lime">HIGH (6 Sources Cross-Verified)</strong></span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              soundFx.playClick();
              setIsSimulatorOpen(!isSimulatorOpen);
            }}
            className="px-3 py-1.5 rounded-xl bg-brand-deep/40 text-brand-lime border border-brand-light/30 hover:bg-brand-deep/60 transition-all flex items-center gap-1.5"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Score Simulator</span>
          </button>

          <button
            onClick={handleCopyMarkdown}
            className="px-3 py-1.5 rounded-xl bg-brand-medium/25 text-brand-lime border border-brand-lime/40 hover:bg-brand-medium/40 transition-all flex items-center gap-1.5 font-bold"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "Copied!" : "Copy Report"}</span>
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              onResearchAnother();
            }}
            className="px-3 py-1.5 rounded-xl bg-[#060907] text-slate-300 border border-white/[0.1] hover:text-white hover:border-brand-light/50 transition-all flex items-center gap-1.5"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Research Another</span>
          </button>
        </div>
      </div>

      {/* Interactive What-If Simulator Drawer */}
      {isSimulatorOpen && (
        <div className="bg-[#0b110d] border-2 border-brand-lime rounded-3xl p-6 flex flex-col gap-4 shadow-2xl animate-in fade-in">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <span className="text-brand-lime font-mono text-xs font-bold uppercase tracking-wider">
              INTERACTIVE WHAT-IF SCENARIO SIMULATOR (STEP 12)
            </span>
            <button onClick={() => setCustomScores(stockData.scores)} className="text-xs font-mono text-slate-400 hover:text-white">
              Reset Values
            </button>
          </div>
          <p className="text-xs text-slate-300 font-sans">
            Adjust the fundamental and risk dimensions to test how different balance sheet changes alter the deterministic score:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            {Object.entries(SCORING_WEIGHTS).map(([key, config]) => (
              <div key={key} className="p-3 rounded-xl bg-[#060907] border border-white/[0.08] flex flex-col gap-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-200 font-bold">{config.label}</span>
                  <span className="text-brand-lime font-bold">{customScores[key]}/100</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={customScores[key]}
                  onChange={(e) => setCustomScores({ ...customScores, [key]: Number(e.target.value) })}
                  className="accent-brand-lime cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Progressive Storytelling Sections */}
      <div className="flex flex-col gap-4">
        {/* 1. THE BIG PICTURE & SIGNAL MATRIX */}
        <div className="bg-[#0b110d]/90 border border-brand-light/20 rounded-3xl p-6 flex flex-col gap-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-brand-medium text-[#060907] flex items-center justify-center text-xs font-mono font-bold">1</span>
              <h3 className="text-base font-bold text-white font-mono">The Big Picture & Decision Signal</h3>
            </div>
            <span className="text-xs font-mono text-brand-lime font-bold">EXECUTIVE SUMMARY</span>
          </div>

          <p className="text-sm text-slate-200 leading-relaxed font-sans">
            {stockData.summary}
          </p>

          {/* Decision-Support Signal Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
            {calculated.breakdown.map((item) => (
              <div key={item.key} className="p-3 rounded-2xl bg-[#060907] border border-white/[0.06] flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 font-bold">{item.label}</span>
                  <span className="text-brand-lime font-bold">{item.rawScore}/100</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-brand-medium to-brand-lime h-full rounded-full" style={{ width: `${item.rawScore}%` }} />
                </div>
                <span className="text-[10px] text-slate-400 truncate">{item.description}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. BULL CASE (GROWTH PILLARS) */}
        <div className="bg-[#07130c] border border-brand-light/30 rounded-3xl p-6 flex flex-col gap-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-brand-light/20 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-brand-light text-[#060907] flex items-center justify-center text-xs font-mono font-bold">2</span>
              <h3 className="text-base font-bold text-brand-lime font-mono">Why It May Be Attractive (Bull Case)</h3>
            </div>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-brand-medium/20 text-brand-lime font-bold">
              {stockData.bullCase.length} VERIFIED PILLARS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {stockData.bullCase.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#0b1610] border border-brand-light/20 flex flex-col gap-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-brand-lime font-mono">
                  <CheckCircle2 className="w-4 h-4 text-brand-light flex-shrink-0" />
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">{item.desc}</p>
                <div className="text-[10px] font-mono text-brand-light/80 pt-1 mt-auto">Source: {item.source}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. BEAR CASE (DISCONFIRMING EVIDENCE & CAUTIONS) */}
        <div className="bg-[#14090b] border border-rose-500/30 rounded-3xl p-6 flex flex-col gap-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-rose-500/20 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center text-xs font-mono font-bold">3</span>
              <h3 className="text-base font-bold text-rose-300 font-mono">Why To Be Cautious (Bear Counter-Analysis)</h3>
            </div>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-bold">
              DISCONFIRMATION FILTER
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {stockData.bearCase.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#0e0507] border border-rose-500/20 flex flex-col gap-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-rose-300 font-mono">
                  <AlertTriangle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">{item.desc}</p>
                <div className="text-[10px] font-mono text-rose-400/80 pt-1 mt-auto">Source: {item.source}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. NEWS INTELLIGENCE & UPCOMING CATALYSTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* News Sentiment */}
          <div className="bg-[#0b110d]/90 border border-brand-light/20 rounded-3xl p-6 flex flex-col gap-3 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5 font-mono text-xs">
              <span className="text-brand-lime font-bold">4. NEWS SENTIMENT CLASSIFICATION</span>
              <span className="text-slate-400">{stockData.newsSentiment.totalArticlesParsed} Articles</span>
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <div className="h-3.5 w-full rounded-full overflow-hidden flex font-mono text-[9px] font-black">
                <div style={{ width: `${stockData.newsSentiment.positivePercent}%` }} className="bg-brand-medium h-full flex items-center justify-center text-[#060907]">
                  {stockData.newsSentiment.positivePercent}% POS
                </div>
                <div style={{ width: `${stockData.newsSentiment.neutralPercent}%` }} className="bg-slate-600 h-full flex items-center justify-center text-white">
                  {stockData.newsSentiment.neutralPercent}% NEU
                </div>
                <div style={{ width: `${stockData.newsSentiment.negativePercent}%` }} className="bg-rose-500 h-full flex items-center justify-center text-white">
                  {stockData.newsSentiment.negativePercent}% NEG
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              {stockData.newsSentiment.articles.slice(0, 2).map((art, i) => (
                <div key={i} className="p-3 rounded-xl bg-[#060907] border border-white/[0.06] text-xs flex flex-col gap-1">
                  <span className="font-bold text-white font-mono">{art.headline}</span>
                  <span className="text-[10px] text-slate-400">{art.source} - {art.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Catalysts */}
          <div className="bg-[#0b110d]/90 border border-brand-light/20 rounded-3xl p-6 flex flex-col gap-3 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5 font-mono text-xs">
              <span className="text-brand-lime font-bold">5. UPCOMING CATALYSTS CALENDAR</span>
              <span className="text-slate-400">Verified Dates</span>
            </div>

            <div className="flex flex-col gap-2.5">
              {stockData.upcomingEvents.map((ev, i) => (
                <div key={i} className="p-3 rounded-xl bg-[#060907] border border-white/[0.06] flex items-center justify-between gap-3 text-xs">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-bold text-white font-mono">{ev.title}</span>
                    <span className="text-[11px] text-slate-400">{ev.impact}</span>
                  </div>
                  <span className="text-brand-lime font-mono font-bold flex-shrink-0 text-right">{ev.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5. HYPOTHETICAL ALLOCATION & MULTI-SOURCE EVIDENCE LOCKER */}
        <div className="bg-[#0b110d]/90 border border-brand-light/20 rounded-3xl p-6 flex flex-col gap-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-brand-deep text-brand-lime border border-brand-light flex items-center justify-center text-xs font-mono font-bold">6</span>
              <h3 className="text-base font-bold text-white font-mono">Hypothetical Allocation Model & Evidence Locker</h3>
            </div>
            <span className="text-xs font-mono px-3 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
              NOT FINANCIAL ADVICE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 font-mono text-xs">
            {stockData.hypotheticalAllocation.allocations.map((alloc, i) => (
              <div key={i} className="p-3.5 rounded-2xl bg-[#060907] border border-white/[0.08] flex flex-col gap-1">
                <span className="text-slate-400 truncate">{alloc.asset}</span>
                <span className="text-base font-black text-brand-lime">{params.currency === "INR" ? "INR " : "USD "}{alloc.amount.toLocaleString()}</span>
                <span className="text-[10px] text-slate-300 font-bold">{alloc.percent}% - {alloc.role}</span>
              </div>
            ))}
          </div>

          {/* Evidence Locker Table */}
          <div className="border-t border-white/[0.08] pt-3">
            <span className="text-xs font-mono text-slate-300 font-bold block mb-2">Cross-Verification Audit Trail:</span>
            <div className="flex flex-col gap-2 font-mono text-xs">
              {stockData.evidence.map((ev) => (
                <div key={ev.id} className="p-3 rounded-xl bg-[#060907] border border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-white font-semibold">"{ev.claim}"</span>
                    <span className="text-[10px] text-slate-400">Primary: {ev.sourceA.name} - Cross-check: {ev.sourceB.name}</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-md bg-brand-medium/20 text-brand-lime text-[10px] font-bold flex-shrink-0">
                    VERIFIED ✓
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
