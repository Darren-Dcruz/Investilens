import React, { useState, useEffect } from "react";
import { Award, BarChart3, CheckCheck, TrendingUp, Newspaper, Calendar, PieChart, FileText, ExternalLink, ShieldCheck, Sparkles, Volume2 } from "lucide-react";
import confetti from "canvas-confetti";
import GlassCard3D from "./GlassCard3D.jsx";
import ScorecardTab from "./ScorecardTab.jsx";
import EvidenceLockerTab from "./EvidenceLockerTab.jsx";
import BullBearTab from "./BullBearTab.jsx";
import NewsSentimentTab from "./NewsSentimentTab.jsx";
import UpcomingEventsTab from "./UpcomingEventsTab.jsx";
import AllocationTab from "./AllocationTab.jsx";
import ExportDossierTab from "./ExportDossierTab.jsx";
import { soundFx } from "../services/soundFx.js";

export default function ReportDashboard({ stockData, params, isReportReady }) {
  const [activeTab, setActiveTab] = useState("scorecard");

  // Trigger celebration confetti when report is generated
  useEffect(() => {
    if (isReportReady) {
      soundFx.playReportSuccess();
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#10b981", "#06b6d4", "#6366f1", "#f59e0b"]
      });
    }
  }, [isReportReady]);

  if (!isReportReady || !stockData) {
    return (
      <GlassCard3D glowColor="indigo" className="p-8 lg:p-12 flex flex-col items-center justify-center text-center gap-4 h-full min-h-[500px]">
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500 animate-pulse" />
          <div className="relative w-20 h-20 rounded-2xl bg-[#090e1a] border border-white/10 flex items-center justify-center text-slate-500 shadow-2xl">
            <Award className="w-10 h-10 text-cyan-400/60" />
          </div>
        </div>

        <div className="flex flex-col gap-1 max-w-sm">
          <h3 className="text-base font-bold text-white font-mono">
            Research Dossier Awaiting Autonomous Synthesis
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            Launch the pipeline on the left to trigger Webcmd multi-source crawling, XBRL parsing, cross-verification, and deterministic scoring.
          </p>
        </div>
      </GlassCard3D>
    );
  }

  const TABS = [
    { id: "scorecard", label: "Scorecard & Financials", icon: BarChart3 },
    { id: "evidence", label: "Evidence Locker (6 Sources)", icon: CheckCheck },
    { id: "bullbear", label: "Bull vs Bear", icon: TrendingUp },
    { id: "news", label: "News Intelligence", icon: Newspaper },
    { id: "events", label: "Catalysts & Events", icon: Calendar },
    { id: "allocation", label: "Hypothetical Allocation", icon: PieChart },
    { id: "export", label: "Export Dossier", icon: FileText }
  ];

  return (
    <GlassCard3D glowColor="emerald" className="p-4 lg:p-6 flex flex-col gap-4">
      {/* Sticky Header Scorecard */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0a1428] via-[#0c1830] to-[#070e1e] border border-white/[0.1] rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-2xl">
        {/* Background kinetic ambient flare */}
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Company Identity */}
        <div className="flex items-center gap-4 relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-[#070b14] border border-white/15 flex items-center justify-center text-3xl shadow-2xl flex-shrink-0">
            {stockData.logo || "??"}
          </div>
          <div>
            <div className="flex items-center gap-2.5">
              <h2 className="text-lg font-black text-white font-mono tracking-wide">
                {stockData.name}
              </h2>
              <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-white/[0.08] text-cyan-300 border border-white/[0.1]">
                {stockData.ticker} • {stockData.exchange}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5 font-sans">
              {stockData.sector} • {params.market} Market
            </p>
          </div>
        </div>

        {/* Deterministic Score Gauge & Verdict */}
        <div className="flex items-center gap-5 ml-auto md:ml-0 relative z-10">
          <div className="text-right">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block font-bold">
              DETERMINISTIC SCORE
            </span>
            <div className="flex items-center gap-1 justify-end">
              <span className="text-3xl font-black font-mono bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent">
                {stockData.overallScore}
              </span>
              <span className="text-xs font-mono text-slate-500 font-bold">/100</span>
            </div>
          </div>

          <div className="w-px h-12 bg-white/[0.1]" />

          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-1 font-bold">
              ASSESSMENT
            </span>
            <span className="text-xs font-black font-mono px-3 py-1 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-lg shadow-emerald-500/10 inline-block">
              {stockData.researchStatus}
            </span>
          </div>
        </div>
      </div>

      {/* Regulatory Decision-Support Disclaimer Banner */}
      <div className="bg-[#050811]/90 border border-white/[0.08] rounded-xl px-4 py-2.5 flex items-center justify-between text-xs text-slate-300 font-mono">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span>Verified Decision-Support System • Evidence Confidence: <strong className="text-emerald-300">{stockData.evidenceConfidence}</strong></span>
        </div>
        <span className="text-slate-500 hidden sm:inline">No Autonomous Trades Executed</span>
      </div>

      {/* Tab Navigation Bar */}
      <div className="flex items-center gap-2 overflow-x-auto border-b border-white/[0.08] pb-2 text-xs font-mono scrollbar-none">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                soundFx.playClick();
                setActiveTab(tab.id);
              }}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl transition-all duration-200 flex-shrink-0 ${
                isActive
                  ? "bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-300 border border-emerald-500/40 font-bold shadow-lg shadow-emerald-500/10"
                  : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Active Tab Viewport */}
      <div className="pt-2">
        {activeTab === "scorecard" && <ScorecardTab stockData={stockData} params={params} />}
        {activeTab === "evidence" && <EvidenceLockerTab stockData={stockData} />}
        {activeTab === "bullbear" && <BullBearTab stockData={stockData} />}
        {activeTab === "news" && <NewsSentimentTab stockData={stockData} />}
        {activeTab === "events" && <UpcomingEventsTab stockData={stockData} />}
        {activeTab === "allocation" && <AllocationTab stockData={stockData} params={params} />}
        {activeTab === "export" && <ExportDossierTab stockData={stockData} params={params} />}
      </div>
    </GlassCard3D>
  );
}
