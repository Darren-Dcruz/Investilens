import React from "react";
import { TrendingUp, AlertTriangle, ShieldCheck, CheckCircle2, XCircle, ArrowUpRight, ArrowDownRight, Scale } from "lucide-react";

export default function BullBearTab({ stockData }) {
  const bullCase = stockData?.bullCase || [];
  const bearCase = stockData?.bearCase || [];

  return (
    <div className="flex flex-col gap-5">
      {/* Notice & Tug-of-War Momentum Meter */}
      <div className="bg-[#080d19]/90 border border-white/[0.08] rounded-2xl p-4 lg:p-5 flex flex-col gap-4 shadow-xl">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
                Balanced Bull vs. Bear Counter-Hypothesis (Step 10 & 11)
              </h3>
              <p className="text-[11px] text-slate-400">Disconfirmation Engine • Active Search for Disproving Evidence</p>
            </div>
          </div>
          <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-rose-500/15 text-rose-300 border border-rose-500/30 font-bold">
            ZERO CONFIRMATION BIAS
          </span>
        </div>

        {/* Visual Tug-of-War Balance Bar */}
        <div className="flex flex-col gap-2 bg-[#050811] p-3.5 rounded-xl border border-white/[0.06]">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <ArrowUpRight className="w-3.5 h-3.5" /> Bull Growth Pillars ({bullCase.length})
            </span>
            <span className="text-rose-400 font-bold flex items-center gap-1">
              Bear Hazards ({bearCase.length}) <ArrowDownRight className="w-3.5 h-3.5" />
            </span>
          </div>

          <div className="h-3 w-full rounded-full overflow-hidden flex font-mono text-[9px] font-black">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-400 w-[60%] h-full flex items-center justify-center text-slate-950">
              60% BULL CONVICTION
            </div>
            <div className="bg-gradient-to-r from-rose-400 to-rose-600 w-[40%] h-full flex items-center justify-center text-white">
              40% RISK OVERHANG
            </div>
          </div>
        </div>
      </div>

      {/* Side-by-side Bull vs Bear Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* BULL CASE */}
        <div className="bg-gradient-to-b from-[#07151a] to-[#040e12] border border-emerald-500/40 rounded-2xl p-5 flex flex-col gap-3.5 shadow-xl shadow-emerald-500/5">
          <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <ArrowUpRight className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300 font-mono">
                BULL CASE (Growth Drivers)
              </h4>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 font-bold">
              {bullCase.length} PILLARS
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {bullCase.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#030d10] border border-emerald-500/20 rounded-xl p-3.5 flex flex-col gap-1.5 hover:border-emerald-500/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-200 font-mono flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    {item.title}
                  </span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-bold">
                    Impact: {item.impact}
                  </span>
                </div>
                <p className="text-xs text-slate-300 pl-5 leading-relaxed font-sans">
                  {item.desc}
                </p>
                <div className="text-[10px] font-mono text-emerald-400/80 pl-5 pt-1">
                  Source: {item.source}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BEAR CASE */}
        <div className="bg-gradient-to-b from-[#1c0e14] to-[#12080d] border border-rose-500/40 rounded-2xl p-5 flex flex-col gap-3.5 shadow-xl shadow-rose-500/5">
          <div className="flex items-center justify-between border-b border-rose-500/20 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400">
                <ArrowDownRight className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-300 font-mono">
                BEAR CASE (Risks & Disconfirmation)
              </h4>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-rose-500/20 text-rose-300 font-bold">
              {bearCase.length} HAZARDS
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {bearCase.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0e0508] border border-rose-500/20 rounded-xl p-3.5 flex flex-col gap-1.5 hover:border-rose-500/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-rose-200 font-mono flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                    {item.title}
                  </span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20 font-bold">
                    Impact: {item.impact}
                  </span>
                </div>
                <p className="text-xs text-slate-300 pl-5 leading-relaxed font-sans">
                  {item.desc}
                </p>
                <div className="text-[10px] font-mono text-rose-400/80 pl-5 pt-1">
                  Source: {item.source}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
