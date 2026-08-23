import React from "react";
import { CheckCheck, ExternalLink, ShieldCheck, AlertCircle, Database, FileText } from "lucide-react";

export default function EvidenceLockerTab({ stockData }) {
  const evidence = stockData?.evidence || [];
  const sourcesVisited = stockData?.sourcesVisited || [];

  return (
    <div className="flex flex-col gap-5">
      {/* Evidence Banner */}
      <div className="bg-[#080d19] border border-slate-800/90 rounded-xl p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2">
            <CheckCheck className="w-4 h-4 text-emerald-400" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono">
              Multi-Source Cross-Verification Evidence Locker (Step 5 & 6)
            </h3>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            AUDIT TRAIL
          </span>
        </div>
        <p className="text-xs text-slate-400">
          Every critical financial claim is cross-verified against at least two independent primary sources. Unverifiable claims are flagged and reduce confidence rating.
        </p>
      </div>

      {/* Cross-Verified Claims List */}
      <div className="flex flex-col gap-3">
        {evidence.map((item, idx) => (
          <div
            key={item.id || idx}
            className="bg-[#080d19] border border-slate-800/80 rounded-xl p-4 flex flex-col gap-3 hover:border-slate-700 transition-colors"
          >
            {/* Header Claim */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[10px] font-mono font-bold text-emerald-400">
                  {idx + 1}
                </span>
                <span className="text-xs font-bold text-white font-mono">{item.metric}</span>
              </div>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {item.confidence} CONFIDENCE
              </span>
            </div>

            <p className="text-xs text-slate-300 font-medium pl-7">
              "{item.claim}"
            </p>

            {/* Source A vs Source B comparison card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-7 pt-1 font-mono text-[11px]">
              {/* Source A */}
              <div className="p-2.5 rounded-lg bg-[#050811] border border-slate-800/80 flex flex-col gap-1">
                <div className="flex items-center justify-between text-slate-400 text-[10px]">
                  <span className="font-bold text-cyan-400">PRIMARY SOURCE A</span>
                  <span className="px-1.5 py-0.2 rounded bg-slate-800 text-slate-400">{item.sourceA.type}</span>
                </div>
                <span className="text-slate-200 font-medium truncate">{item.sourceA.name}</span>
                <a
                  href={item.sourceA.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] text-cyan-400 hover:underline flex items-center gap-1 truncate"
                >
                  <ExternalLink className="w-2.5 h-2.5" />
                  {item.sourceA.url}
                </a>
              </div>

              {/* Source B */}
              <div className="p-2.5 rounded-lg bg-[#050811] border border-slate-800/80 flex flex-col gap-1">
                <div className="flex items-center justify-between text-slate-400 text-[10px]">
                  <span className="font-bold text-indigo-400">CROSS-CHECK SOURCE B</span>
                  <span className="px-1.5 py-0.2 rounded bg-slate-800 text-slate-400">{item.sourceB.type}</span>
                </div>
                <span className="text-slate-200 font-medium truncate">{item.sourceB.name}</span>
                <a
                  href={item.sourceB.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] text-indigo-400 hover:underline flex items-center gap-1 truncate"
                >
                  <ExternalLink className="w-2.5 h-2.5" />
                  {item.sourceB.url}
                </a>
              </div>
            </div>

            {/* Discrepancy Note if any */}
            {item.discrepancy && (
              <div className="ml-7 p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[10px] font-mono flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Discrepancy Note: {item.discrepancy}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Sources Visited Table */}
      <div className="bg-[#080d19] border border-slate-800/90 rounded-xl p-4 flex flex-col gap-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono flex items-center gap-2">
          <Database className="w-4 h-4 text-cyan-400" />
          Webcmd Browser Crawl History ({sourcesVisited.length} Sources)
        </h4>

        <div className="overflow-x-auto font-mono text-[11px]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-500 text-[10px]">
                <th className="py-2 px-2">SOURCE</th>
                <th className="py-2 px-2">STATUS</th>
                <th className="py-2 px-2">PAYLOAD</th>
                <th className="py-2 px-2">CRAWL DEPTH</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {sourcesVisited.map((src, i) => (
                <tr key={i} className="hover:bg-slate-900/40">
                  <td className="py-2 px-2">
                    <span className="text-slate-200 font-semibold block">{src.name}</span>
                    <span className="text-[10px] text-slate-500 truncate block max-w-xs">{src.url}</span>
                  </td>
                  <td className="py-2 px-2 text-emerald-400 font-semibold">{src.status}</td>
                  <td className="py-2 px-2 text-slate-400">{src.bytes}</td>
                  <td className="py-2 px-2 text-slate-400">Level {src.depth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
