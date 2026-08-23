import React from "react";
import { PieChart, ShieldAlert, CheckCircle2, DollarSign, Info } from "lucide-react";

export default function AllocationTab({ stockData, params }) {
  const allocation = stockData?.hypotheticalAllocation || {
    totalBudget: params.currency === "INR" ? `?${params.amount}` : `$${params.amount}`,
    strategy: "Balanced Core Strategy",
    allocations: []
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Required Hackathon Disclaimer Alert */}
      <div className="bg-amber-500/10 border-2 border-amber-500/40 rounded-xl p-4 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
          <ShieldAlert className="w-4 h-4" />
          <span>HYPOTHETICAL RESEARCH ALLOCATION ONLY</span>
        </div>
        <p className="text-xs text-amber-200/90 leading-relaxed font-mono">
          This model is a decision-support illustration calibrated to your capital constraint ({params.currency === "INR" ? "?" : "$"}{params.amount}) and {params.risk.toLowerCase()} risk profile.
          <strong> INVESTILENS DOES NOT EXECUTE TRADES OR PROVIDE FINANCIAL ADVICE.</strong>
        </p>
      </div>

      {/* Allocation Strategy Summary */}
      <div className="bg-[#080d19] border border-slate-800/90 rounded-xl p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2">
            <PieChart className="w-4 h-4 text-cyan-400" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono">
              Hypothetical Allocation Model (Step 14)
            </h3>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            {allocation.strategy}
          </span>
        </div>

        {/* Visual Allocation Strip */}
        <div className="flex flex-col gap-2 pt-2">
          <div className="h-4 w-full rounded-full overflow-hidden flex font-mono text-[10px] font-bold text-slate-950">
            {allocation.allocations?.map((item, i) => (
              <div
                key={i}
                style={{ width: `${item.percent}%` }}
                className={`h-full flex items-center justify-center transition-all duration-500 ${
                  i === 0 ? "bg-emerald-500 text-slate-950" : i === 1 ? "bg-cyan-400 text-slate-950" : i === 2 ? "bg-indigo-400 text-slate-950" : "bg-slate-500 text-slate-100"
                }`}
                title={`${item.asset}: ${item.percent}%`}
              >
                {item.percent}%
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono pt-1 text-slate-400">
            {allocation.allocations?.map((item, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <span className={`w-2.5 h-2.5 rounded-full ${
                  i === 0 ? "bg-emerald-500" : i === 1 ? "bg-cyan-400" : i === 2 ? "bg-indigo-400" : "bg-slate-500"
                }`} />
                <span className="text-slate-300 font-medium">{item.asset}</span> ({item.percent}%)
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Allocation Breakdown Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {allocation.allocations?.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#080d19] border border-slate-800/80 rounded-xl p-4 flex flex-col gap-2 font-mono"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-bold text-white truncate max-w-[200px]">{item.asset}</span>
              <span className="text-sm font-bold text-emerald-400">
                {params.currency === "INR" ? "?" : "$"}{item.amount.toLocaleString()}
              </span>
            </div>
            <div className="text-[11px] text-cyan-300 font-semibold">{item.role}</div>
            <p className="text-xs text-slate-400 font-sans leading-relaxed">{item.rationale}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
