import React, { useState, useEffect } from "react";
import { CheckCircle2, Sparkles, Edit3, Globe, Database, Scale, TrendingUp, AlertTriangle, X, Building2 } from "lucide-react";
import { soundFx } from "../services/soundFx.js";

export default function InteractiveResearchMap({
  stockData,
  params,
  onAcceptPlan,
  onEditPlan
}) {
  const [constructionStep, setConstructionStep] = useState(0);
  const [selectedNode, setSelectedNode] = useState(null);

  const CONSTRUCTION_ITEMS = [
    "Analyzing your capital constraint and horizon...",
    "Understanding risk tolerance & disconfirmation rules...",
    "Selecting Top 5 authoritative web sources (Yahoo, Nasdaq, Google, Reuters, MarketWatch)...",
    "Building balanced Bull/Bear investigation framework...",
    "Research plan ready for human approval."
  ];

  useEffect(() => {
    soundFx.playCheckpointAlert();
    const interval = setInterval(() => {
      setConstructionStep((prev) => {
        if (prev < CONSTRUCTION_ITEMS.length - 1) {
          soundFx.playClick();
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 450);

    return () => clearInterval(interval);
  }, []);

  const PLAN_NODES = [
    {
      id: "fundamentals",
      title: "Fundamentals & Health",
      icon: Database,
      desc: `We will examine revenue growth YoY, profit margins, Return on Equity (ROE), and free cash flows for ${stockData?.name || params.companyQuery} directly from financial statements.`
    },
    {
      id: "valuation",
      title: "Valuation & Multiples",
      icon: Scale,
      desc: "We will evaluate market capitalization, trailing P/E, forward P/E, and 52-week trading range across Yahoo Finance and official exchange data."
    },
    {
      id: "news",
      title: "News Sentiment",
      icon: Globe,
      desc: "We will scan and classify verified breaking news headlines from Reuters, CNBC, and Google Finance into Positive, Neutral, and Negative impact categories."
    },
    {
      id: "bull",
      title: "Bull Case Moat",
      icon: TrendingUp,
      desc: "We will document long-term growth catalysts, addressable market expansion, and pricing power."
    },
    {
      id: "bear",
      title: "Bear Disconfirmation",
      icon: AlertTriangle,
      desc: "Core requirement: We actively hunt for reasons NOT to invest, including multiple contraction, cyclical capex slowdown, and competitive threats."
    },
    {
      id: "catalysts",
      title: "Upcoming Catalysts",
      icon: Sparkles,
      desc: "We will extract verified calendar dates for upcoming quarterly earnings prints, investor calls, and regulatory milestones."
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-6 py-6 px-4">
      {/* Animated Construction Header */}
      <div className="bg-[#0b110d]/90 border border-brand-light/25 rounded-3xl p-6 flex flex-col gap-4 shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand-deep/30 border border-brand-light/40 flex items-center justify-center text-brand-lime shadow-sm">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold text-brand-lime uppercase tracking-widest block">
                STEP 3: HUMAN-IN-THE-LOOP CHECKPOINT
              </span>
              <h2 className="text-xl font-bold text-white font-mono">
                Interactive Research Plan: {stockData?.name || params.companyQuery}
              </h2>
            </div>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-brand-deep/40 text-brand-lime border border-brand-light/30 font-bold">
            HUMAN APPROVAL REQUIRED
          </span>
        </div>

        {/* Dynamic Construction Checklist */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs">
          {CONSTRUCTION_ITEMS.map((item, idx) => {
            const isDone = constructionStep >= idx;
            return (
              <div
                key={idx}
                className={"flex items-center gap-2 py-1 transition-opacity duration-300 " + (isDone ? "text-slate-200 opacity-100" : "text-slate-600 opacity-40")}
              >
                <span className={"w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold " + (isDone ? "bg-brand-medium text-[#060907]" : "bg-slate-800 text-slate-500")}>
                  {isDone ? "✓" : "○"}
                </span>
                <span>{item}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Visual Interactive Research Map */}
      <div className="relative bg-[#070b08] border border-brand-light/20 rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center gap-6 shadow-2xl overflow-hidden">
        <div className="text-center font-mono text-xs text-slate-400">
          Click any research dimension node to preview the autonomous investigation scope:
        </div>

        {/* Central Company Node + Orbiting Grid */}
        <div className="w-full flex flex-col items-center gap-6 z-10">
          {/* Target Center Node */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-brand-lime via-brand-medium to-brand-deep rounded-2xl blur-md opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse" />
            <div className="relative px-6 py-4 rounded-xl bg-[#0b110d] border-2 border-brand-lime text-center shadow-2xl flex flex-col items-center gap-1">
              <div className="w-9 h-9 rounded-lg bg-brand-deep/40 border border-brand-light/30 flex items-center justify-center text-brand-lime mb-1">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-base font-black text-white font-mono">{stockData?.name || params.companyQuery}</span>
              <span className="text-xs font-mono text-brand-lime font-bold">
                {params.currency === "INR" ? "INR " : "USD "}{Number(params.amount).toLocaleString()} • {params.risk} • {params.horizon}
              </span>
            </div>
          </div>

          {/* 6 Interactive Dimension Nodes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
            {PLAN_NODES.map((node) => {
              const Icon = node.icon;
              const isSelected = selectedNode?.id === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => {
                    soundFx.playClick();
                    setSelectedNode(isSelected ? null : node);
                  }}
                  className={"p-3.5 rounded-2xl border text-left flex flex-col gap-1.5 transition-all duration-300 " + (
                    isSelected
                      ? "bg-brand-deep/40 border-brand-lime shadow-xl shadow-brand-lime/20 scale-105"
                      : "bg-[#0b110d]/80 border-white/[0.08] hover:border-brand-light/40 hover:bg-[#111a14]"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <Icon className="w-4 h-4 text-brand-lime" />
                    <span className="text-[10px] font-mono text-slate-400">Inspect</span>
                  </div>
                  <span className="text-xs font-bold text-white font-mono">{node.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Dimension Node Detail Drawer */}
        {selectedNode && (
          <div className="w-full bg-[#0b110d] border-2 border-brand-lime rounded-2xl p-4 flex flex-col gap-2 font-mono text-xs animate-in fade-in duration-200">
            <div className="flex items-center justify-between text-brand-lime font-bold">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Scope Preview: {selectedNode.title}</span>
              </span>
              <button onClick={() => setSelectedNode(null)} className="text-slate-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-slate-200 font-sans text-xs leading-relaxed">{selectedNode.desc}</p>
          </div>
        )}

        {/* Planned Web Sources Notice */}
        <div className="w-full flex items-center justify-between text-xs font-mono text-slate-400 border-t border-white/[0.08] pt-4">
          <span>Sources to Investigate: <strong>6 Verified Portals</strong> (Official IR, Screener, BSE, Moneycontrol, Reuters, RBI)</span>
          <span className="text-brand-lime font-bold">Confidence: HIGH</span>
        </div>
      </div>

      {/* Decision-Gate Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        <button
          onClick={() => {
            soundFx.playClick();
            onAcceptPlan();
          }}
          className="sm:col-span-2 py-4 px-6 rounded-2xl bg-gradient-to-r from-[#F0FB43] via-[#7ED043] to-[#4FB734] hover:from-[#f4fc65] hover:to-[#5bc93f] text-[#060907] font-black font-mono text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl shadow-brand-medium/30 hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <CheckCircle2 className="w-5 h-5" />
          <span>ACCEPT & LAUNCH AUTONOMOUS RESEARCH</span>
        </button>

        <button
          onClick={() => {
            soundFx.playClick();
            onEditPlan();
          }}
          className="py-4 px-4 rounded-2xl bg-[#0b110d] hover:bg-[#111a14] text-brand-lime border border-brand-light/30 font-bold font-mono text-xs flex items-center justify-center gap-2 transition-all hover:border-brand-lime/60"
        >
          <Edit3 className="w-4 h-4" />
          <span>EDIT PLAN</span>
        </button>
      </div>
    </div>
  );
}
