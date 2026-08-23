import React from "react";
import { ArrowRight, HelpCircle, ShieldCheck, Database, TrendingUp, Sparkles, Globe } from "lucide-react";
import InvestmentIntelligenceOrb from "./InvestmentIntelligenceOrb.jsx";
import { soundFx } from "../services/soundFx.js";

export default function HeroSection({ onBegin, onOpenHowItWorks }) {
  const handleStart = () => {
    soundFx.playClick();
    onBegin();
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 py-8 lg:py-12 overflow-hidden w-full max-w-[1700px] mx-auto">
      {/* Subtle Faint Technical Grid Background (4% opacity) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#7ED0430a_1px,transparent_1px),linear-gradient(to_bottom,#7ED0430a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Background Ambient Green Shimmer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-light/10 rounded-full blur-[160px] pointer-events-none" />

      {/* TOP BRAND ANCHOR */}
      <div className="flex flex-col items-center gap-2.5 z-20 mb-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-deep/30 border border-brand-light/25 text-brand-lime text-xs font-mono font-bold tracking-widest uppercase shadow-sm">
          <span className="w-2 h-2 rounded-full bg-brand-lime animate-ping" />
          <span>Autonomous Multi-Source Investment Intelligence</span>
        </div>

        {/* Large Prominent INVESTILENS Typography */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight font-mono">
          <span className="bg-gradient-to-r from-[#7ED043] via-[#F0FB43] to-white bg-clip-text text-transparent drop-shadow-md">
            INVESTILENS
          </span>
        </h1>

        <p className="text-sm sm:text-base text-slate-300 max-w-xl font-sans font-normal leading-relaxed">
          Smarter research. Better decisions.
          <span className="block text-slate-400 text-xs sm:text-sm mt-0.5">
            Cross-checks official filings, balances bull & bear cases, and explains every metric in plain English.
          </span>
        </p>

        {/* Primary CTA Button */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mt-3">
          <button
            onClick={handleStart}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#F0FB43] via-[#7ED043] to-[#4FB734] hover:from-[#f4fc65] hover:to-[#5bc93f] text-[#060907] font-black text-sm uppercase tracking-wider font-mono shadow-xl shadow-[#7ED043]/20 hover:shadow-[#F0FB43]/40 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>GET STARTED</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              onOpenHowItWorks();
            }}
            className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-[#0b110d]/90 hover:bg-[#111a14] text-slate-200 border border-brand-light/30 font-mono text-xs font-bold transition-all duration-300 hover:border-brand-lime/50 shadow-lg"
          >
            <HelpCircle className="w-4 h-4 text-brand-light" />
            <span>How It Works</span>
          </button>
        </div>
      </div>

      {/* HERO COMPOSITION: SIDE VISUALS + CENTRAL 3D GLOBE + DATA STREAMS */}
      <div className="relative w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 items-center gap-4 my-4 z-10">
        {/* LEFT SIDE FLOATING VISUALS (3 Cols) */}
        <div className="hidden lg:flex flex-col gap-4 lg:col-span-3 items-end text-right">
          {/* Floating Card 1: Market Signals */}
          <div className="w-full max-w-xs p-4 rounded-2xl bg-[#0b110d]/75 backdrop-blur-md border border-brand-light/20 shadow-xl flex flex-col gap-2 hover:border-brand-light/40 transition-all duration-300 animate-in fade-in slide-in-from-left-4">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-brand-lime font-bold">LIVE MARKET SIGNAL</span>
              <span className="text-[10px] text-brand-light">+1.42% Momentum</span>
            </div>
            {/* SVG Sparkline Wave */}
            <div className="w-full h-8 flex items-center justify-center py-1">
              <svg className="w-full h-full text-brand-lime stroke-current fill-none stroke-[2]" viewBox="0 0 100 25">
                <path d="M0 20 L20 15 L35 18 L55 8 L75 12 L90 3 L100 6" />
              </svg>
            </div>
            <span className="text-[10px] font-mono text-slate-400">
              62% Positive Sentiment Classification
            </span>
          </div>

          {/* Floating Card 2: Multi-Source Crawl */}
          <div className="w-full max-w-xs p-4 rounded-2xl bg-[#0b110d]/75 backdrop-blur-md border border-brand-light/20 shadow-xl flex flex-col gap-1.5 hover:border-brand-light/40 transition-all duration-300 animate-in fade-in slide-in-from-left-6">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-white font-bold">MULTI-SOURCE CRAWL</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-brand-deep/50 text-brand-lime font-bold">TOP 5 SOURCES</span>
            </div>
            <p className="text-[11px] text-slate-300 font-sans text-right">
              Reuters Markets Desk (Focused High-Speed Extraction).
            </p>
          </div>
        </div>

        {/* CENTER: 3D INTERACTIVE GREEN INTELLIGENCE GLOBE (6 Cols) */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
          <InvestmentIntelligenceOrb onClick={handleStart} />
        </div>

        {/* RIGHT SIDE FLOATING VISUALS (3 Cols) */}
        <div className="hidden lg:flex flex-col gap-4 lg:col-span-3 items-start text-left">
          {/* Floating Card 3: Research Pipeline Status */}
          <div className="w-full max-w-xs p-4 rounded-2xl bg-[#0b110d]/75 backdrop-blur-md border border-brand-light/20 shadow-xl flex flex-col gap-2 hover:border-brand-light/40 transition-all duration-300 animate-in fade-in slide-in-from-right-4">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-brand-lime font-bold">RESEARCH PIPELINE</span>
              <span className="text-[10px] text-brand-light">ACTIVE</span>
            </div>
            <div className="flex flex-col gap-1 text-[11px] font-mono text-slate-300">
              <div className="flex items-center justify-between">
                <span>Financials & NIM</span>
                <span className="text-brand-lime font-bold">✓</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Cross-Source Audits</span>
                <span className="text-brand-lime font-bold">✓</span>
              </div>
              <div className="flex items-center justify-between text-slate-500">
                <span>Peer Moat Analysis</span>
                <span>◌</span>
              </div>
              <div className="flex items-center justify-between text-slate-500">
                <span>Bear Disconfirmation</span>
                <span>◌</span>
              </div>
            </div>
          </div>

          {/* Floating Card 4: Deterministic Scoring Engine */}
          <div className="w-full max-w-xs p-4 rounded-2xl bg-[#0b110d]/75 backdrop-blur-md border border-brand-light/20 shadow-xl flex flex-col gap-1.5 hover:border-brand-light/40 transition-all duration-300 animate-in fade-in slide-in-from-right-6">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-white font-bold">DETERMINISTIC SCORING</span>
              <span className="text-[10px] text-brand-lime font-bold">100% EXPLAINABLE</span>
            </div>
            <p className="text-[11px] text-slate-300 font-sans text-left">
              Non-blackbox 7-dimension weighted mathematical formula.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Trust Bar */}
      <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mt-2 z-10">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-brand-light" /> Human-in-the-Loop Decisions
        </span>
        <span>•</span>
        <span>Zero Confirmation Bias</span>
        <span>•</span>
        <span>Decision-Support Only</span>
      </div>
    </section>
  );
}
