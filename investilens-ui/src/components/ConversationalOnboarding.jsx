import React, { useState } from "react";
import { Search, DollarSign, Shield, Calendar, ArrowRight, ArrowLeft, CheckCircle2, Sparkles, Building2, Cpu, Zap, User } from "lucide-react";
import { soundFx } from "../services/soundFx.js";
import { MOCK_STOCKS } from "../data/mockStocks.js";

export default function ConversationalOnboarding({
  params,
  onChange,
  onCompleteSetup,
  userLevel,
  setUserLevel
}) {
  const [step, setStep] = useState(1); // 1: Company, 2: Budget, 3: Risk, 4: Horizon, 5: Review

  const POPULAR_COMPANIES = [
    { key: "NVIDIA", name: "NVIDIA Corp.", ticker: "NVDA", market: "United States (NASDAQ)", sector: "Semiconductors & AI", currency: "USD", icon: Cpu },
    { key: "TESLA", name: "Tesla Inc.", ticker: "TSLA", market: "United States (NASDAQ)", sector: "Automobile & Clean Tech", currency: "USD", icon: Zap },
    { key: "HDFC_BANK", name: "HDFC Bank", ticker: "HDFCBANK", market: "India (NSE)", sector: "Banking & Financials", currency: "INR", icon: Building2 },
    { key: "RELIANCE", name: "Reliance Industries", ticker: "RELIANCE", market: "India (NSE)", sector: "Telecom & Retail", currency: "INR", icon: Zap }
  ];

  const BUDGET_PRESETS = [
    { label: "INR 25,000", value: "25000", currency: "INR" },
    { label: "INR 50,000 (Demo)", value: "50000", currency: "INR" },
    { label: "INR 1,00,000", value: "100000", currency: "INR" },
    { label: "USD $5,000", value: "5000", currency: "USD" }
  ];

  const SECTORS = [
    "Semiconductors & AI",
    "Automobile & Clean Tech",
    "Banking & Financials",
    "Software & Cloud",
    "Consumer Tech & Hardware",
    "Energy & Industrial",
    "Healthcare & Biotech"
  ];

  const handleNext = () => {
    soundFx.playClick();
    if (step < 5) setStep(step + 1);
    else onCompleteSetup();
  };

  const handleBack = () => {
    soundFx.playClick();
    if (step > 1) setStep(step - 1);
  };

  const handleSelectCompany = (comp) => {
    soundFx.playClick();
    onChange({
      ...params,
      stockKey: comp.key,
      companyQuery: comp.name,
      ticker: comp.ticker,
      sector: comp.sector,
      market: comp.market.includes("India") ? "India" : "United States",
      currency: comp.currency || (comp.market.includes("India") ? "INR" : "USD")
    });
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-6 py-6 px-4">
      {/* Interactive Experience Level Switcher (Beginner vs Advanced) */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between bg-[#0b110d] border border-brand-light/20 rounded-2xl p-2.5">
          <div className="flex items-center gap-2 px-2">
            <User className="w-4 h-4 text-brand-lime" />
            <span className="text-xs font-mono text-slate-300">Research Experience Level:</span>
          </div>
          <div className="flex items-center gap-1.5 bg-[#060907] p-1 rounded-xl border border-white/[0.06]">
            <button
              onClick={() => {
                soundFx.playClick();
                setUserLevel("beginner");
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all duration-200 ${
                userLevel === "beginner"
                  ? "bg-brand-medium text-[#060907] shadow-md shadow-brand-medium/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              🌱 Beginner (Plain English)
            </button>
            <button
              onClick={() => {
                soundFx.playClick();
                setUserLevel("advanced");
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all duration-200 ${
                userLevel === "advanced"
                  ? "bg-brand-lime text-[#060907] shadow-md shadow-brand-lime/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              📊 Advanced (Full Wall St. Ratios)
            </button>
          </div>
        </div>

        {/* Dynamic Mode Explainer Callout */}
        <div className={`p-3 rounded-xl border text-xs font-mono flex items-center justify-between transition-all ${
          userLevel === "beginner"
            ? "bg-emerald-950/20 border-emerald-500/30 text-emerald-300"
            : "bg-brand-deep/30 border-brand-lime/40 text-brand-lime"
        }`}>
          <span>
            {userLevel === "beginner"
              ? "🌱 Beginner Mode: Financial jargon decoded into simple metaphors, traffic-light safety meters, and dollar-cost averaging guides."
              : "📊 Advanced Mode: Wall St. Multiples Deck, ROIC-WACC Spread, Altman Z-Score, and 2-way DCF Sensitivity Grids enabled."}
          </span>
          <span className="text-[10px] font-bold uppercase opacity-80 ml-2">Personalized</span>
        </div>
      </div>

      {/* Journey Progress Tracker */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
          <span className="text-brand-lime font-bold uppercase tracking-wider">YOUR INVESTMENT RESEARCH JOURNEY</span>
          <span>STEP {step} OF 5</span>
        </div>
        <div className="flex items-center justify-between relative px-2">
          <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-slate-800 -translate-y-1/2 z-0" />
          <div
            className="absolute top-1/2 left-4 h-0.5 bg-gradient-to-r from-brand-lime to-brand-medium -translate-y-1/2 z-0 transition-all duration-500"
            style={{ width: `${((step - 1) / 4) * 100}%` }}
          />

          {[
            { id: 1, label: "Company" },
            { id: 2, label: "Budget" },
            { id: 3, label: "Risk" },
            { id: 4, label: "Horizon" },
            { id: 5, label: "Review" }
          ].map((item) => (
            <div key={item.id} className="relative z-10 flex flex-col items-center gap-1.5">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                  step > item.id
                    ? "bg-brand-medium text-[#060907] shadow-md shadow-brand-medium/30"
                    : step === item.id
                    ? "bg-brand-lime text-[#060907] ring-4 ring-brand-lime/20 shadow-lg shadow-brand-lime/40"
                    : "bg-slate-800 text-slate-400 border border-slate-700"
                }`}
              >
                {step > item.id ? "✓" : item.id}
              </div>
              <span className={`text-[10px] font-mono ${step >= item.id ? "text-brand-light font-bold" : "text-slate-500"}`}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Storyteller Step Card */}
      <div className="bg-[#0b110d]/90 border border-brand-light/20 rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-2xl relative overflow-hidden">
        {/* Subtle Ambient Flare */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-light/10 rounded-full blur-3xl pointer-events-none" />

        {/* STEP 1: COMPANY SELECTION */}
        {step === 1 && (
          <div className="flex flex-col gap-5 animate-in fade-in slide-in-from-right-4 duration-300">
            <div>
              <span className="text-xs font-mono font-bold text-brand-lime uppercase tracking-widest block mb-1">
                TARGET ASSET IDENTIFICATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
                Which company would you like to research?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Select a popular stock or enter your custom ticker and sector. InvestiLens will scan official filings, exchange quotes, financial multiples, and news feeds.
              </p>
            </div>

            {/* Popular Presets Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {POPULAR_COMPANIES.map((comp) => {
                const Icon = comp.icon;
                return (
                  <button
                    key={comp.key}
                    onClick={() => handleSelectCompany(comp)}
                    className={`p-3 rounded-2xl border text-left flex flex-col gap-1 transition-all duration-300 ${
                      params.stockKey === comp.key || params.companyQuery === comp.name
                        ? "bg-brand-medium/20 border-brand-lime shadow-xl shadow-brand-medium/15"
                        : "bg-[#060907]/80 border-white/[0.08] hover:border-brand-light/40 hover:bg-[#0f1812]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-7 h-7 rounded-lg bg-brand-deep/40 border border-brand-light/30 flex items-center justify-center text-brand-lime">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-brand-lime font-bold">
                        {comp.ticker}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-white font-mono mt-0.5">{comp.name}</span>
                    <span className="text-[10px] text-slate-400 truncate">{comp.sector}</span>
                  </button>
                );
              })}
            </div>

            {/* Detailed Custom Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-white/[0.08]">
              <div>
                <label className="text-[11px] font-mono text-slate-400 block mb-1">Company Name</label>
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3.5 top-3 text-brand-light" />
                  <input
                    type="text"
                    value={params.companyQuery}
                    onChange={(e) => onChange({ ...params, companyQuery: e.target.value, stockKey: "CUSTOM" })}
                    placeholder="e.g. NVIDIA, Tesla, Tata Motors"
                    className="w-full bg-[#060907] border border-brand-light/25 rounded-xl pl-10 pr-3 py-2.5 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-brand-lime focus:ring-1 focus:ring-brand-lime/20"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-mono text-slate-400 block mb-1">Stock Ticker Symbol</label>
                <input
                  type="text"
                  value={params.ticker || (params.stockKey === "NVIDIA" ? "NVDA" : params.stockKey === "TESLA" ? "TSLA" : params.stockKey === "HDFC_BANK" ? "HDFCBANK" : params.stockKey === "RELIANCE" ? "RELIANCE" : params.companyQuery)}
                  onChange={(e) => onChange({ ...params, ticker: e.target.value.toUpperCase() })}
                  placeholder="e.g. NVDA, TSLA, HDFCBANK"
                  className="w-full bg-[#060907] border border-brand-light/25 rounded-xl px-3.5 py-2.5 text-xs font-mono font-bold text-brand-lime uppercase placeholder-slate-500 focus:outline-none focus:border-brand-lime focus:ring-1 focus:ring-brand-lime/20"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono text-slate-400 block mb-1">Market & Exchange</label>
                <select
                  value={params.market}
                  onChange={(e) => onChange({ ...params, market: e.target.value, currency: e.target.value === "India" ? "INR" : "USD" })}
                  className="w-full bg-[#060907] border border-brand-light/25 rounded-xl px-3 py-2.5 text-xs font-mono text-slate-200 focus:outline-none focus:border-brand-lime"
                >
                  <option value="United States">United States (NASDAQ / NYSE)</option>
                  <option value="India">India (NSE / BSE)</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-mono text-slate-400 block mb-1">Industry Sector</label>
                <select
                  value={params.sector || "Semiconductors & AI"}
                  onChange={(e) => onChange({ ...params, sector: e.target.value })}
                  className="w-full bg-[#060907] border border-brand-light/25 rounded-xl px-3 py-2.5 text-xs font-mono text-slate-200 focus:outline-none focus:border-brand-lime"
                >
                  {SECTORS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Selected Company Identity Badge */}
            {params.companyQuery && (
              <div className="p-3.5 rounded-xl bg-brand-deep/20 border border-brand-medium/40 flex items-center justify-between text-xs font-mono animate-in fade-in">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-lime animate-ping" />
                  <span className="text-slate-200">
                    Selected Target: <strong className="text-brand-lime">{params.companyQuery}</strong> ({params.ticker || "Auto-detected"}) &bull; {params.sector || "General"}
                  </span>
                </div>
                <span className="text-brand-light font-bold text-[11px]">Ready for Scope ✓</span>
              </div>
            )}
          </div>
        )}

        {/* STEP 2: BUDGET */}
        {step === 2 && (
          <div className="flex flex-col gap-5 animate-in fade-in slide-in-from-right-4 duration-300">
            <div>
              <span className="text-xs font-mono font-bold text-brand-lime uppercase tracking-widest block mb-1">
                CAPITAL CONSTRAINT
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
                How much are you planning to invest?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                This helps the system determine appropriate diversification and position sizing in the hypothetical model.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-brand-lime font-mono text-lg font-black">
                {params.currency === "INR" ? "INR" : "USD"}
              </div>
              <input
                type="number"
                value={params.amount}
                onChange={(e) => onChange({ ...params, amount: e.target.value })}
                className="w-full bg-[#060907] border border-brand-light/30 rounded-2xl pl-16 pr-24 py-4 text-xl font-mono font-bold text-white focus:outline-none focus:border-brand-lime focus:ring-2 focus:ring-brand-lime/20 transition-all shadow-inner"
              />
              <select
                value={params.currency}
                onChange={(e) => {
                  soundFx.playClick();
                  onChange({ ...params, currency: e.target.value });
                }}
                className="absolute inset-y-2 right-2 bg-slate-800 text-xs font-mono text-slate-200 rounded-xl px-3 border border-slate-700 focus:outline-none cursor-pointer"
              >
                <option value="INR">INR (₹)</option>
                <option value="USD">USD ($)</option>
              </select>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {BUDGET_PRESETS.map((preset) => (
                <button
                  key={preset.label}
                  onClick={() => {
                    soundFx.playClick();
                    onChange({ ...params, amount: preset.value, currency: preset.currency });
                  }}
                  className={`p-3 rounded-xl border font-mono text-xs font-bold transition-all ${
                    params.amount === preset.value && params.currency === preset.currency
                      ? "bg-brand-medium/25 border-brand-lime text-brand-lime shadow-md"
                      : "bg-[#060907] border-white/[0.08] text-slate-400 hover:border-brand-light/40 hover:text-white"
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-brand-deep/20 border border-brand-medium/30 text-xs font-mono text-brand-light">
              System Note: The agent calibrates risk buffers and liquid cash reserves according to your capital constraint.
            </div>
          </div>
        )}

        {/* STEP 3: RISK TOLERANCE */}
        {step === 3 && (
          <div className="flex flex-col gap-5 animate-in fade-in slide-in-from-right-4 duration-300">
            <div>
              <span className="text-xs font-mono font-bold text-brand-lime uppercase tracking-widest block mb-1">
                RISK TOLERANCE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
                How much risk are you comfortable with?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                We will actively hunt for disconfirming hazards that violate your tolerance threshold.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {[
                { level: "Conservative", desc: "Prioritize capital preservation, low debt, and predictable steady cash flows.", color: "text-brand-light" },
                { level: "Moderate", desc: "Balanced approach seeking solid compounders with controlled volatility.", color: "text-brand-lime" },
                { level: "Aggressive", desc: "High growth frontier, willing to accept price swings for expanding market share.", color: "text-brand-medium" }
              ].map((item) => (
                <button
                  key={item.level}
                  onClick={() => {
                    soundFx.playClick();
                    onChange({ ...params, risk: item.level });
                  }}
                  className={`p-5 rounded-2xl border text-left flex flex-col gap-2 transition-all ${
                    params.risk === item.level
                      ? "bg-brand-medium/20 border-brand-lime shadow-xl shadow-brand-medium/20"
                      : "bg-[#060907] border-white/[0.08] text-slate-400 hover:border-brand-light/40 hover:text-white"
                  }`}
                >
                  <span className={`text-base font-bold font-mono ${item.color}`}>{item.level}</span>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">{item.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 4: HORIZON */}
        {step === 4 && (
          <div className="flex flex-col gap-5 animate-in fade-in slide-in-from-right-4 duration-300">
            <div>
              <span className="text-xs font-mono font-bold text-brand-lime uppercase tracking-widest block mb-1">
                TIME HORIZON
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
                What is your investment horizon?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Determines whether the research emphasizes short-term catalysts or multi-year structural moats.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {[
                { title: "Short-term", span: "< 1 Year", note: "Focuses on upcoming quarterly earnings, NIM repricing, and macroeconomic catalysts." },
                { title: "Medium-term", span: "3–5 Years", note: "Evaluates post-merger synergies, branch deposit mobilization, and sustainable ROE." },
                { title: "Long-term", span: "5–10+ Years", note: "Analyzes industry dominance, compound moat durability, and generational compounding." }
              ].map((item) => (
                <button
                  key={item.title}
                  onClick={() => {
                    soundFx.playClick();
                    onChange({ ...params, horizon: `${item.title} (${item.span})` });
                  }}
                  className={`p-5 rounded-2xl border text-left flex flex-col gap-2 transition-all ${
                    params.horizon.includes(item.title)
                      ? "bg-brand-medium/20 border-brand-lime shadow-xl shadow-brand-medium/20"
                      : "bg-[#060907] border-white/[0.08] text-slate-400 hover:border-brand-light/40 hover:text-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold font-mono text-white">{item.title}</span>
                    <span className="text-xs font-mono font-bold text-brand-lime">{item.span}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">{item.note}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 5: REVIEW & OBJECTIVE CONFIRMATION */}
        {step === 5 && (
          <div className="flex flex-col gap-5 animate-in fade-in slide-in-from-right-4 duration-300">
            <div>
              <span className="text-xs font-mono font-bold text-brand-lime uppercase tracking-widest block mb-1">
                OBJECTIVE SUMMARY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
                INVESTILENS now understands your objective.
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Ready to generate the autonomous multi-source research plan.
              </p>
            </div>

            <div className="bg-[#060907] border border-brand-light/30 rounded-2xl p-5 flex flex-col gap-2.5 font-mono text-xs shadow-inner">
              <div className="flex justify-between border-b border-white/[0.08] pb-2">
                <span className="text-slate-400">Target Asset:</span>
                <span className="text-brand-lime font-bold">
                  {params.companyQuery} ({params.ticker || "Auto-detected"}) &bull; {params.sector || "General"}
                </span>
              </div>
              <div className="flex justify-between border-b border-white/[0.08] pb-2">
                <span className="text-slate-400">Market & Exchange:</span>
                <span className="text-white font-bold">{params.market}</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.08] pb-2">
                <span className="text-slate-400">Investment Budget:</span>
                <span className="text-white font-bold">
                  {params.currency === "INR" ? "INR ₹" : "USD $"}{Number(params.amount).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between border-b border-white/[0.08] pb-2">
                <span className="text-slate-400">Investor Experience:</span>
                <span className="text-brand-light font-bold capitalize">{userLevel} Mode</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.08] pb-2">
                <span className="text-slate-400">Risk Profile:</span>
                <span className="text-brand-light font-bold">{params.risk}</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.08] pb-2">
                <span className="text-slate-400">Time Horizon:</span>
                <span className="text-white font-bold">{params.horizon}</span>
              </div>

              {/* Verified Sources Scope */}
              <div className="pt-2">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1.5">
                  Verified Data & News Sources (Multi-Source Cross-Verification):
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Nasdaq",
                    "NSE India",
                    "BSE India",
                    "Yahoo Finance",
                    "Google Finance",
                    "Reuters",
                    "CNBC",
                    "MarketWatch",
                    "Investing.com",
                    "MarketScreener",
                    "Financial Times",
                    "The Wall Street Journal"
                  ].map((src) => (
                    <span
                      key={src}
                      className="px-2.5 py-0.5 rounded-lg bg-brand-deep/40 border border-brand-lime/30 text-[11px] text-brand-lime font-mono font-bold"
                    >
                      ✓ {src}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-brand-deep/20 border border-brand-medium/40 text-xs font-mono text-brand-lime">
              ✓ Ready to construct multi-source research plan with 2 Human-in-the-Loop approval checkpoints across 12 tier-1 sources.
            </div>
          </div>
        )}

        {/* Bottom Navigation Buttons */}
        <div className="flex items-center justify-between border-t border-white/[0.08] pt-4 mt-2">
          {step > 1 ? (
            <button
              onClick={handleBack}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#060907] border border-white/[0.1] text-slate-300 hover:text-white font-mono text-xs font-bold transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          ) : <div />}

          <button
            onClick={handleNext}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-[#F0FB43] via-[#7ED043] to-[#4FB734] hover:from-[#f4fc65] hover:to-[#5bc93f] text-[#060907] font-mono text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-brand-medium/25 hover:scale-105 active:scale-95 transition-all"
          >
            <span>{step === 5 ? "GENERATE RESEARCH PLAN" : "CONTINUE"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
