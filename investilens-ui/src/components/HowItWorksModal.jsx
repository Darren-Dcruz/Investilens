import React from "react";
import { X, ArrowRight, ShieldCheck, Database, Scale, Globe, Brain } from "lucide-react";
import { soundFx } from "../services/soundFx.js";

export default function HowItWorksModal({ isOpen, onClose, onStart }) {
  if (!isOpen) return null;

  const STEPS = [
    {
      num: "01",
      title: "Set Your Investment Objective",
      desc: "Specify your target company, budget, risk tolerance, and time horizon. The system calibrates all analysis to your personal constraints.",
      icon: Brain
    },
    {
      num: "02",
      title: "Review & Approve Research Plan",
      desc: "InvestiLens formulates a 6-source visual research scope. You have full human-in-the-loop control to approve or edit the plan before web browsing begins.",
      icon: ShieldCheck
    },
    {
      num: "03",
      title: "Autonomous Multi-Source Web Crawl",
      desc: "Webcmd crawls official filings, exchange disclosures (XBRL), financial statements, and reputable news in real-time.",
      icon: Globe
    },
    {
      num: "04",
      title: "Cross-Verification & Bear Disconfirmation",
      desc: "Every major claim is cross-checked across two independent sources. The agent actively hunts for disconfirming hazards to prevent confirmation bias.",
      icon: Scale
    },
    {
      num: "05",
      title: "Deterministic 7-Dimension Score & Dossier",
      desc: "Scores the company using a transparent, weighted formula. Delivers an interactive decision-support dossier with zero black-box numbers.",
      icon: Database
    }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative overflow-hidden bg-[#0a110d] border border-brand-light/30 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
          <div className="flex flex-col">
            <span className="text-[10px] font-mono font-bold text-brand-lime uppercase tracking-widest">
              INVESTILENS WORKFLOW
            </span>
            <h2 className="text-xl font-bold text-white font-mono mt-0.5">
              How InvestiLens Works
            </h2>
          </div>
          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-3.5 max-h-[60vh] overflow-y-auto pr-1">
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="p-4 rounded-2xl bg-[#060907] border border-brand-light/15 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-deep/30 border border-brand-light/30 flex items-center justify-center text-brand-lime font-mono text-xs font-bold flex-shrink-0">
                  <Icon className="w-5 h-5 text-brand-light" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-brand-lime font-bold">{s.num}</span>
                    <h3 className="text-xs font-bold text-white font-mono">{s.title}</h3>
                  </div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action CTA */}
        <div className="flex items-center justify-between border-t border-white/[0.08] pt-4">
          <span className="text-xs font-mono text-slate-400">
            Decision-Support Only • No Trades Executed
          </span>
          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
              onStart();
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#F0FB43] via-[#7ED043] to-[#4FB734] hover:from-[#f4fc65] hover:to-[#5bc93f] text-[#060907] font-mono text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-brand-medium/25 hover:scale-105 transition-all"
          >
            <span>GET STARTED</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
