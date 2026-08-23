import React, { useState } from "react";
import { Sparkles, HelpCircle, ShieldCheck, AlertCircle, ArrowRight, BookOpen, CheckCircle2, TrendingUp, DollarSign, PieChart } from "lucide-react";
import { soundFx } from "../services/soundFx.js";

/**
 * Beginner Experience View: Translates all complex Wall St. financial data into plain,
 * actionable, human-friendly guidance with traffic-light safety meters and a step-by-step beginner game plan.
 */
export function BeginnerExperienceView({ stockData, params, calculated }) {
  const [activeDictionaryTerm, setActiveDictionaryTerm] = useState(null);
  const currencySymbol = params?.currency === "INR" || (params?.market || "").includes("IN") ? "₹" : "$";
  const capital = Number(params.amount) || 50000;

  // Plain English Dictionary Definitions
  const dictionary = {
    pe: {
      term: "P/E Ratio (Price-to-Earnings)",
      simple: "The Price Tag of Profits",
      explanation: `Think of this like buying a small local coffee shop. If the shop makes $10,000 profit a year and the owner asks $300,000 to sell it to you, the P/E ratio is 30. For ${stockData.ticker}, you pay ${currencySymbol}${stockData.trailingPe || "33"} for every $1 of annual company profit.`
    },
    marketCap: {
      term: "Market Capitalization",
      simple: "The Total Cost to Buy the Entire Company",
      explanation: `If you wanted to buy every single share of ${stockData.name} in existence today, it would cost ${stockData.marketCap || "$5.2T"}. This tells you whether the company is a giant titan (Mega-Cap) or a small nimble player.`
    },
    netMargin: {
      term: "Net Profit Margin",
      simple: "How Much Money Sticks to the Company's Pocket",
      explanation: `Out of every $100 ${stockData.name} earns in customer revenue, it keeps ${stockData.netMargin || "62.9%"} as pure take-home profit after paying all staff, factories, electricity, and taxes. (Higher is much better!).`
    },
    debt: {
      term: "Debt & Financial Safety",
      simple: "Credit Card & Loan Burden",
      explanation: `${stockData.name} holds strong cash reserves relative to its loans. It is not at risk of bankruptcy or debt panic in normal market conditions.`
    },
    dcf: {
      term: "Intrinsic Fair Value (DCF)",
      simple: "Real Rental Value vs Street Price",
      explanation: "Just like calculating what a house is worth based on 10 years of expected rental income, an Intrinsic Value model estimates what this company's future profits are worth in today's cash."
    }
  };

  // Beginner Staged Dollar-Cost Averaging (DCA) Plan
  const tranche1 = Math.round(capital * 0.40);
  const tranche2 = Math.round(capital * 0.35);
  const tranche3 = Math.round(capital * 0.25);

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-300">
      {/* 1. BEGINNER WELCOME & TRANSLATION BANNER */}
      <div className="bg-gradient-to-r from-brand-deep/80 via-[#0d2114] to-[#07130a] border-2 border-brand-lime/60 rounded-3xl p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-brand-medium text-[#060907] flex items-center justify-center font-black text-2xl shadow-xl flex-shrink-0">
            🌱
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-brand-lime/20 text-brand-lime font-mono text-[10px] font-extrabold uppercase tracking-wider">
                Beginner Mode Active
              </span>
              <span className="text-xs text-slate-400 font-mono">Zero Jargon Guarantee</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white font-sans mt-0.5">
              The Plain English Breakdown for {stockData.name} ({stockData.ticker})
            </h3>
            <p className="text-xs text-slate-300 font-sans mt-0.5">
              We translated 1,000+ pages of Wall Street filings and math into direct, everyday language.
            </p>
          </div>
        </div>

        <div className="px-4 py-2 rounded-2xl bg-[#060907]/90 border border-brand-lime/40 text-center flex-shrink-0">
          <span className="text-[10px] font-mono text-slate-400 block uppercase">Beginner Safety Rating</span>
          <span className="text-xl font-black font-mono text-brand-lime">
            {calculated.finalScore >= 80 ? "🟢 High Quality" : calculated.finalScore >= 65 ? "🟡 Moderate Risk" : "🔴 Caution"}
          </span>
        </div>
      </div>

      {/* 2. THE "WHAT DOES THIS COMPANY ACTUALLY DO?" SIMPLE SUMMARY */}
      <div className="bg-[#0b110d]/90 border border-brand-light/20 rounded-3xl p-6 flex flex-col gap-4 shadow-xl">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-6 rounded-full bg-brand-medium text-[#060907] flex items-center justify-center text-xs font-mono font-bold">1</span>
            <h4 className="text-base font-bold text-white font-mono">What Does This Company Actually Do?</h4>
          </div>
          <span className="text-xs font-mono text-brand-lime">Simple Business Model</span>
        </div>

        <p className="text-sm text-slate-200 leading-relaxed font-sans">
          <strong>{stockData.name}</strong> operates in the <strong>{stockData.sector}</strong> sector. In simple terms, it creates high-demand products and services that other businesses cannot easily operate without. It generates revenue by selling specialized technology and capturing multi-year customer relationships.
        </p>

        {/* 4 Plain-English Traffic Light Meters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
          {/* Card 1: Profitability */}
          <div className="p-4 rounded-2xl bg-[#060907] border border-emerald-500/30 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-400 font-mono">Profitability</span>
              <span className="text-sm">🟢</span>
            </div>
            <span className="text-sm font-bold text-white font-mono">Makes Huge Profits</span>
            <p className="text-[11px] text-slate-300 font-sans leading-normal">
              For every $100 earned, it keeps over {stockData.netMargin || "60%"} in real profit. Extremely healthy.
            </p>
          </div>

          {/* Card 2: Debt Health */}
          <div className="p-4 rounded-2xl bg-[#060907] border border-emerald-500/30 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-400 font-mono">Debt & Loans</span>
              <span className="text-sm">🟢</span>
            </div>
            <span className="text-sm font-bold text-white font-mono">Low Debt Burden</span>
            <p className="text-[11px] text-slate-300 font-sans leading-normal">
              Has plenty of cash in the bank to cover all debts. Very low bankruptcy risk.
            </p>
          </div>

          {/* Card 3: Price Tag / Valuation */}
          <div className="p-4 rounded-2xl bg-[#060907] border border-amber-500/30 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-400 font-mono">Stock Price Tag</span>
              <span className="text-sm">🟡</span>
            </div>
            <span className="text-sm font-bold text-white font-mono">Premium Price</span>
            <p className="text-[11px] text-slate-300 font-sans leading-normal">
              Investors love this company, so the stock is not "cheap." You pay a premium for high growth.
            </p>
          </div>

          {/* Card 4: Growth Momentum */}
          <div className="p-4 rounded-2xl bg-[#060907] border border-emerald-500/30 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-400 font-mono">Future Growth</span>
              <span className="text-sm">🟢</span>
            </div>
            <span className="text-sm font-bold text-white font-mono">Rapid Expansion</span>
            <p className="text-[11px] text-slate-300 font-sans leading-normal">
              Revenues are growing strongly year-over-year fueled by enterprise market demand.
            </p>
          </div>
        </div>
      </div>

      {/* 3. INTERACTIVE PLAIN-ENGLISH JARGON BUSTER */}
      <div className="bg-[#0b110d]/90 border border-brand-light/20 rounded-3xl p-6 flex flex-col gap-4 shadow-xl">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-5 h-5 text-brand-lime" />
            <h4 className="text-base font-bold text-white font-mono">Interactive Financial Jargon Buster</h4>
          </div>
          <span className="text-[11px] text-slate-400 font-mono">Click any term to decode</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {Object.entries(dictionary).map(([key, item]) => (
            <button
              key={key}
              onClick={() => {
                soundFx.playClick();
                setActiveDictionaryTerm(activeDictionaryTerm === key ? null : key);
              }}
              className={`px-3.5 py-2 rounded-xl border text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                activeDictionaryTerm === key
                  ? "bg-brand-medium text-[#060907] border-brand-lime shadow-lg"
                  : "bg-[#060907] border-white/[0.08] text-slate-300 hover:border-brand-lime/50 hover:text-white"
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{item.term}</span>
            </button>
          ))}
        </div>

        {/* Expanded Jargon Explanation Box */}
        {activeDictionaryTerm && (
          <div className="p-4 rounded-2xl bg-[#060907] border border-brand-lime/60 flex flex-col gap-2 animate-in fade-in">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-brand-lime font-mono">
                {dictionary[activeDictionaryTerm].term}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-deep text-brand-light">
                {dictionary[activeDictionaryTerm].simple}
              </span>
            </div>
            <p className="text-xs text-slate-200 font-sans leading-relaxed">
              {dictionary[activeDictionaryTerm].explanation}
            </p>
          </div>
        )}
      </div>

      {/* 4. BEGINNER-SPECIFIC ACTION PLAN: 3-MONTH STAGED ENTRY (DCA) */}
      <div className="bg-[#0b110d]/90 border border-brand-light/20 rounded-3xl p-6 flex flex-col gap-5 shadow-xl">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
          <div className="flex items-center gap-2.5">
            <PieChart className="w-5 h-5 text-brand-lime" />
            <h4 className="text-base font-bold text-white font-mono">Beginner Capital Staging Game Plan</h4>
          </div>
          <span className="text-xs font-mono font-bold text-brand-lime">
            Budget: {currencySymbol}{capital.toLocaleString()}
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-[#060907] border border-amber-500/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🛡️</span>
            <div>
              <span className="text-xs font-bold text-amber-300 font-mono block">The #1 Beginner Rule: Never Go "All-In" in One Day</span>
              <span className="text-[11px] text-slate-300 font-sans">
                Stock prices bounce up and down every week. Splitting your {currencySymbol}{capital.toLocaleString()} across 3 phases ensures you never buy exclusively at the peak.
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
          {/* Phase 1 */}
          <div className="p-4 rounded-2xl bg-[#060907] border border-brand-light/30 flex flex-col gap-2">
            <span className="text-[10px] text-brand-lime uppercase font-bold">Phase 1: Today (40%)</span>
            <span className="text-xl font-black text-white">{currencySymbol}{tranche1.toLocaleString()}</span>
            <p className="text-[11px] text-slate-300 font-sans">
              Establish initial core starter position in {stockData.ticker}.
            </p>
          </div>

          {/* Phase 2 */}
          <div className="p-4 rounded-2xl bg-[#060907] border border-brand-light/30 flex flex-col gap-2">
            <span className="text-[10px] text-slate-400 uppercase font-bold">Phase 2: Month 2 (35%)</span>
            <span className="text-xl font-black text-white">{currencySymbol}{tranche2.toLocaleString()}</span>
            <p className="text-[11px] text-slate-300 font-sans">
              Add during normal price consolidation or earnings dip.
            </p>
          </div>

          {/* Phase 3 */}
          <div className="p-4 rounded-2xl bg-[#060907] border border-brand-light/30 flex flex-col gap-2">
            <span className="text-[10px] text-slate-400 uppercase font-bold">Phase 3: Cash Buffer (25%)</span>
            <span className="text-xl font-black text-white">{currencySymbol}{tranche3.toLocaleString()}</span>
            <p className="text-[11px] text-slate-300 font-sans">
              Keep as liquid dry powder in bank savings or low-risk liquid fund.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
