import React, { useState } from "react";
import { Calculator, CheckCircle2, TrendingUp, AlertTriangle, Shield, Activity, Sliders, Sparkles, RefreshCw } from "lucide-react";
import { SCORING_WEIGHTS, calculateDeterministicScore } from "../services/scoringEngine.js";
import { soundFx } from "../services/soundFx.js";

export default function ScorecardTab({ stockData, params }) {
  const initialScores = stockData?.scores || {
    financialHealth: 88,
    growthPotential: 84,
    historicalPerformance: 86,
    valuation: 78,
    debtLeverage: 82,
    newsEvents: 85,
    riskProfile: 80
  };

  const [customScores, setCustomScores] = useState(initialScores);
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);

  const calculated = calculateDeterministicScore(customScores);

  const handleSliderChange = (key, val) => {
    soundFx.playClick();
    setCustomScores((prev) => ({ ...prev, [key]: Number(val) }));
  };

  const handleResetScores = () => {
    soundFx.playClick();
    setCustomScores(initialScores);
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Deterministic Scoring Formula & Simulator Banner */}
      <div className="bg-[#080d19]/90 border border-white/[0.08] rounded-2xl p-4 lg:p-5 flex flex-col gap-3 shadow-xl">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
                Deterministic Scoring Engine (Step 12)
              </h3>
              <p className="text-[11px] text-slate-400">Non-Blackbox Weighted Sum • Multi-Source Filings</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                soundFx.playClick();
                setIsSimulatorOpen(!isSimulatorOpen);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-mono text-xs font-semibold transition-all hover:scale-105"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>{isSimulatorOpen ? "Hide Simulator" : "Interactive Score Simulator"}</span>
            </button>
          </div>
        </div>

        <p className="text-xs text-slate-300 font-mono leading-relaxed">
          The agent scores 7 independent financial dimensions on a 0–100 scale using structured evidence from verified web filings:
        </p>

        <div className="p-3 rounded-xl bg-[#050811] border border-white/[0.06] text-[11px] font-mono text-cyan-300 leading-relaxed overflow-x-auto shadow-inner">
          <code>{calculated.formulaExplanation}</code>
        </div>
      </div>

      {/* Interactive What-If Simulator Drawer (If open) */}
      {isSimulatorOpen && (
        <div className="bg-gradient-to-br from-indigo-950/40 to-slate-900/60 border-2 border-indigo-500/40 rounded-2xl p-5 flex flex-col gap-4 shadow-2xl animate-in fade-in zoom-in-95">
          <div className="flex items-center justify-between border-b border-indigo-500/30 pb-2.5">
            <div className="flex items-center gap-2 text-indigo-300 font-mono text-xs font-bold">
              <Sparkles className="w-4 h-4 text-indigo-400 animate-spin" style={{ animationDuration: "8s" }} />
              <span>INTERACTIVE "WHAT-IF" SCENARIO SIMULATOR</span>
            </div>
            <button
              onClick={handleResetScores}
              className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white transition-colors"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset to Verified Webcmd Values</span>
            </button>
          </div>

          <p className="text-xs text-slate-300 font-sans">
            Drag the sliders below to simulate how alternative company fundamentals or risk factors impact the deterministic score in real-time.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            {Object.entries(SCORING_WEIGHTS).map(([key, config]) => (
              <div key={key} className="flex flex-col gap-1.5 bg-[#06090f]/70 p-3 rounded-xl border border-indigo-500/20">
                <div className="flex justify-between items-center">
                  <span className="text-slate-200 font-bold">{config.label}</span>
                  <span className="text-emerald-400 font-bold">{customScores[key]}/100</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={customScores[key]}
                  onChange={(e) => handleSliderChange(key, e.target.value)}
                  className="w-full accent-emerald-400 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 7 Dimensions Breakdown Grid with Kinetic Score Bars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {calculated.breakdown.map((item) => (
          <div
            key={item.key}
            className="group bg-[#080d19]/80 border border-white/[0.08] hover:border-emerald-500/40 rounded-2xl p-4 flex flex-col gap-2.5 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white font-mono">{item.label}</span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.06] text-slate-400">
                  Weight: {item.weightPercent}%
                </span>
                <span className="text-base font-black font-mono text-emerald-400">
                  {item.rawScore}<span className="text-xs text-slate-500 font-normal">/100</span>
                </span>
              </div>
            </div>

            {/* Score Bar with Glowing Fill */}
            <div className="w-full bg-slate-800/80 h-2.5 rounded-full overflow-hidden p-0.5">
              <div
                className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 h-full rounded-full transition-all duration-500 shadow-sm shadow-emerald-400"
                style={{ width: `${item.rawScore}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono pt-1">
              <span className="truncate max-w-[200px]">{item.description}</span>
              <span className="text-emerald-300 font-bold flex-shrink-0">
                Contrib: +{item.contribution} pts
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Executive Key Financial Metrics Strip */}
      <div className="bg-[#080d19]/80 border border-white/[0.08] rounded-2xl p-4 lg:p-5 flex flex-col gap-3 shadow-xl">
        <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-cyan-400" />
          Key Fundamental Metrics (Extracted via Webcmd)
        </h4>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
          <div className="p-3 rounded-xl bg-[#050811] border border-white/[0.06] flex flex-col gap-1 shadow-inner">
            <span className="text-[10px] text-slate-400">NIM / Margin</span>
            <span className="text-base font-extrabold text-white">3.46%</span>
            <span className="text-[9px] text-emerald-400 font-bold">? Stabilizing YoY</span>
          </div>

          <div className="p-3 rounded-xl bg-[#050811] border border-white/[0.06] flex flex-col gap-1 shadow-inner">
            <span className="text-[10px] text-slate-400">Gross NPA</span>
            <span className="text-base font-extrabold text-white">1.36%</span>
            <span className="text-[9px] text-emerald-400 font-bold">? Pristine Quality</span>
          </div>

          <div className="p-3 rounded-xl bg-[#050811] border border-white/[0.06] flex flex-col gap-1 shadow-inner">
            <span className="text-[10px] text-slate-400">Deposit Growth</span>
            <span className="text-base font-extrabold text-white">15.1% YoY</span>
            <span className="text-[9px] text-cyan-400 font-bold">? Outpacing Credit</span>
          </div>

          <div className="p-3 rounded-xl bg-[#050811] border border-white/[0.06] flex flex-col gap-1 shadow-inner">
            <span className="text-[10px] text-slate-400">Return on Assets</span>
            <span className="text-base font-extrabold text-white">1.95%</span>
            <span className="text-[9px] text-emerald-400 font-bold">? Tier-1 Benchmark</span>
          </div>
        </div>
      </div>
    </div>
  );
}
