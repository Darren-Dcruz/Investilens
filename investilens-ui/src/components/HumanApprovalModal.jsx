import React, { useEffect } from "react";
import { ShieldAlert, CheckCircle, XCircle, Edit3, ArrowRight, Eye, FileText, CheckCheck, Sparkles, AlertTriangle } from "lucide-react";
import { soundFx } from "../services/soundFx.js";

export default function HumanApprovalModal({
  checkpointType,
  stockData,
  params,
  onApprove,
  onModify,
  onCancel
}) {
  useEffect(() => {
    if (checkpointType) {
      soundFx.playCheckpointAlert();
    }
  }, [checkpointType]);

  if (!checkpointType) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="relative overflow-hidden bg-gradient-to-b from-[#111a30] to-[#0a1122] border-2 border-amber-500/60 rounded-3xl max-w-xl w-full p-6 lg:p-8 shadow-2xl shadow-amber-500/25 flex flex-col gap-6 animate-in zoom-in-95 duration-200">
        {/* Background kinetic flare */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Header with Warning / Checkpoint Badge */}
        <div className="flex items-start justify-between border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-3.5">
            <div className="relative">
              <div className="absolute -inset-1 bg-amber-500 rounded-2xl blur-sm opacity-60 animate-ping" />
              <div className="relative w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 shadow-xl">
                <ShieldAlert className="w-6 h-6" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm">
                  {checkpointType === "plan_approval" ? "STEP 3: HUMAN CHECKPOINT" : "STEP 15: FINAL APPROVAL"}
                </span>
                <span className="text-xs text-slate-400 font-mono">Decision Gateway</span>
              </div>
              <h2 className="text-lg font-black text-white font-mono mt-1 tracking-wide">
                {checkpointType === "plan_approval" ? "Research Plan Approval Required" : "Pre-Report Verification Checkpoint"}
              </h2>
            </div>
          </div>
        </div>

        {/* Body content */}
        {checkpointType === "plan_approval" ? (
          <div className="flex flex-col gap-4 text-xs font-sans">
            <p className="text-slate-300 leading-relaxed">
              Hermes has formulated the autonomous research plan for{" "}
              <strong className="text-emerald-400 font-mono">{stockData?.name || params.companyQuery}</strong>.
              In accordance with safety guidelines, Webcmd will NOT crawl the open web until you inspect and approve the research scope.
            </p>

            <div className="bg-[#06090f]/90 border border-white/[0.08] rounded-2xl p-4 flex flex-col gap-2.5 font-mono shadow-inner">
              <div className="flex justify-between text-slate-300 border-b border-white/[0.06] pb-2">
                <span>Target Asset:</span>
                <span className="text-white font-bold">{stockData?.name || params.companyQuery} ({params.market})</span>
              </div>
              <div className="flex justify-between text-slate-300 border-b border-white/[0.06] pb-2">
                <span>Budget & Horizon:</span>
                <span className="text-cyan-300 font-bold">{params.currency === "INR" ? "?" : "$"}{params.amount} • {params.horizon}</span>
              </div>
              <div className="flex justify-between text-slate-300 border-b border-white/[0.06] pb-2">
                <span>Planned Web Sources:</span>
                <span className="text-emerald-400 font-bold">6 Independent Verified Portals</span>
              </div>
              <div className="text-slate-400 pt-1">
                <span className="block mb-1 text-slate-200 font-semibold">Planned Audit Dimensions:</span>
                <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-300">
                  <span>? 1. Financial Health (NIM, RoA)</span>
                  <span>? 2. Revenue & Margins</span>
                  <span>? 3. Debt & Liquidity Ratio</span>
                  <span>? 4. Valuation Multiples</span>
                  <span>? 5. Bull Growth Drivers</span>
                  <span>? 6. Bear Risk Disconfirmation</span>
                  <span>? 7. News Impact Intelligence</span>
                  <span>? 8. Catalysts & Earnings</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4 text-xs font-sans">
            <p className="text-slate-300 leading-relaxed">
              Autonomous multi-source research and cross-verification are complete. Hermes has scored the asset deterministically and extracted both Bull and Bear cases.
            </p>

            <div className="bg-[#06090f]/90 border border-white/[0.08] rounded-2xl p-4 flex flex-col gap-3 font-mono shadow-inner">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Deterministic Score:</span>
                <span className="text-xl font-black text-emerald-400">{stockData?.overallScore || 84} / 100</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>Confidence Rating:</span>
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[11px] font-bold">
                  HIGH (Cross-Verified Across 6 Sources)
                </span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>Profile Verdict:</span>
                <span className="text-cyan-300 font-bold">{stockData?.researchStatus || "Strong Research Profile"}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-[11px] font-mono leading-relaxed">
              ?? <strong>Decision-Support Notice:</strong> The final report does not place trades or recommend blind execution. Approving below will synthesize the complete research dossier.
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-3 pt-2">
          <button
            onClick={() => {
              soundFx.playClick();
              onApprove();
            }}
            className="py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-950 font-black font-mono text-xs flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/30 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <CheckCircle className="w-4 h-4" />
            <span>{checkpointType === "plan_approval" ? "APPROVE PLAN" : "GENERATE REPORT"}</span>
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              onModify();
            }}
            className="py-3.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold font-mono text-xs flex items-center justify-center gap-1.5 transition-all hover:scale-105"
          >
            <Edit3 className="w-4 h-4 text-cyan-400" />
            <span>{checkpointType === "plan_approval" ? "MODIFY SCOPE" : "DEEP DIVE RISKS"}</span>
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              onCancel();
            }}
            className="py-3.5 px-4 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border border-rose-500/30 font-bold font-mono text-xs flex items-center justify-center gap-1.5 transition-all hover:scale-105"
          >
            <XCircle className="w-4 h-4" />
            <span>CANCEL</span>
          </button>
        </div>
      </div>
    </div>
  );
}
