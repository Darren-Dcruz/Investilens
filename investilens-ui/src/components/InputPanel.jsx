import React from "react";
import { DollarSign, Shield, Compass, Calendar, Search, Play, RefreshCw, Zap, TrendingUp, Layers, HelpCircle, Sparkles } from "lucide-react";
import GlassCard3D from "./GlassCard3D.jsx";
import { soundFx } from "../services/soundFx.js";

export default function InputPanel({
  params,
  onChange,
  onStartResearch,
  isRunning,
  onReset
}) {
  const PRESET_AMOUNTS = [
    { label: "?25K", value: "25000", currency: "INR" },
    { label: "?50K (Demo)", value: "50000", currency: "INR" },
    { label: "?1 Lakh", value: "100000", currency: "INR" },
    { label: "$5,000", value: "5000", currency: "USD" }
  ];

  const POPULAR_STOCKS = [
    { key: "HDFC_BANK", name: "HDFC Bank (NSE)", market: "India", budget: "?50,000" },
    { key: "NVIDIA", name: "NVIDIA (NASDAQ)", market: "US", budget: "$10,000" },
    { key: "RELIANCE", name: "Reliance Ind. (NSE)", market: "India", budget: "?50,000" }
  ];

  return (
    <GlassCard3D glowColor="emerald" className="p-4 lg:p-6 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-sm shadow-emerald-500/20">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white font-mono">
              Investor Profile & Target
            </h2>
            <p className="text-[11px] text-slate-400">Step 1: Constraint Calibration</p>
          </div>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.05] text-slate-400 border border-white/[0.1]">
          STEP 1/16
        </span>
      </div>

      {/* Mode Selection Toggle */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-slate-300 flex items-center justify-between font-mono">
          <span>Research Mode</span>
          <span className="text-[10px] text-emerald-400">P0 Priority</span>
        </label>
        <div className="grid grid-cols-2 gap-2 bg-[#06090f] p-1.5 rounded-xl border border-white/[0.06]">
          <button
            type="button"
            onClick={() => {
              soundFx.playClick();
              onChange({ ...params, mode: "stock" });
            }}
            className={`py-2 px-3 text-xs font-mono font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-1.5 ${
              params.mode === "stock"
                ? "bg-gradient-to-r from-emerald-500/25 to-teal-500/25 text-emerald-300 border border-emerald-500/50 shadow-md shadow-emerald-500/10"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            Mode A: Single Stock
          </button>
          <button
            type="button"
            onClick={() => {
              soundFx.playClick();
              onChange({ ...params, mode: "discovery" });
            }}
            className={`py-2 px-3 text-xs font-mono font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-1.5 ${
              params.mode === "discovery"
                ? "bg-gradient-to-r from-indigo-500/25 to-cyan-500/25 text-indigo-300 border border-indigo-500/50 shadow-md shadow-indigo-500/10"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            Mode B: Discovery
          </button>
        </div>
      </div>

      {/* Investment Amount Input */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-slate-300 flex items-center justify-between font-mono">
          <span>Investment Budget</span>
          <span className="text-[10px] text-slate-400">Capital Limit</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-emerald-400 font-mono text-sm font-bold">
            {params.currency === "INR" ? "?" : "$"}
          </div>
          <input
            type="number"
            value={params.amount}
            onChange={(e) => onChange({ ...params, amount: e.target.value })}
            placeholder="50000"
            className="w-full bg-[#06090f] border border-white/[0.08] rounded-xl pl-9 pr-20 py-2.5 text-sm font-mono text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all shadow-inner"
          />
          <select
            value={params.currency}
            onChange={(e) => {
              soundFx.playClick();
              onChange({ ...params, currency: e.target.value });
            }}
            className="absolute inset-y-1.5 right-1.5 bg-slate-800 text-xs font-mono text-slate-200 rounded-lg px-2.5 border border-slate-700 focus:outline-none cursor-pointer hover:bg-slate-700 transition-colors"
          >
            <option value="INR">INR (?)</option>
            <option value="USD">USD ($)</option>
          </select>
        </div>
        {/* Preset Pills */}
        <div className="flex items-center gap-1.5 mt-1 flex-wrap">
          {PRESET_AMOUNTS.map((preset) => (
            <button
              key={preset.label}
              type="button"
              onClick={() => {
                soundFx.playClick();
                onChange({ ...params, amount: preset.value, currency: preset.currency });
              }}
              className={`text-[11px] font-mono px-2.5 py-1 rounded-lg transition-all duration-200 border ${
                params.amount === preset.value && params.currency === preset.currency
                  ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/50 font-bold shadow-sm shadow-emerald-500/20"
                  : "bg-[#06090f]/80 text-slate-400 border-white/[0.06] hover:border-white/[0.2] hover:text-white"
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Target Stock Selection (Mode A) */}
      {params.mode === "stock" ? (
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-slate-300 flex items-center justify-between font-mono">
            <span>Target Stock / Company</span>
            <span className="text-[10px] text-slate-400">Known Asset</span>
          </label>
          <div className="grid grid-cols-3 gap-1.5 mb-1.5">
            {POPULAR_STOCKS.map((stock) => (
              <button
                key={stock.key}
                type="button"
                onClick={() => {
                  soundFx.playClick();
                  onChange({ ...params, stockKey: stock.key, companyQuery: stock.name });
                }}
                className={`p-2.5 text-left rounded-xl border transition-all duration-200 text-xs flex flex-col gap-0.5 ${
                  params.stockKey === stock.key
                    ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-300 shadow-md shadow-emerald-500/10"
                    : "bg-[#06090f] border-white/[0.06] text-slate-400 hover:border-white/[0.2] hover:text-white"
                }`}
              >
                <span className="font-bold font-mono truncate">{stock.key.replace("_", " ")}</span>
                <span className="text-[10px] text-slate-500 truncate">{stock.market}</span>
              </button>
            ))}
          </div>
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3.5 top-3 text-slate-500" />
            <input
              type="text"
              value={params.companyQuery}
              onChange={(e) => onChange({ ...params, companyQuery: e.target.value, stockKey: "CUSTOM" })}
              placeholder="e.g. HDFC Bank, NVIDIA, Reliance..."
              className="w-full bg-[#06090f] border border-white/[0.08] rounded-xl pl-9 pr-3 py-2 text-xs font-mono text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-all shadow-inner"
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-slate-300 font-mono">Preferred Sector / Focus</label>
          <select
            value={params.sector}
            onChange={(e) => {
              soundFx.playClick();
              onChange({ ...params, sector: e.target.value });
            }}
            className="bg-[#06090f] border border-white/[0.08] rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
          >
            <option value="Any Sector">Any Sector (Broad Candidate Discovery)</option>
            <option value="Banking & Financials">Banking & Financial Services</option>
            <option value="Semiconductors & AI">Semiconductors & AI Compute</option>
            <option value="Consumer & Auto EV">Consumer Tech & Auto EV</option>
            <option value="Clean Energy">Clean Energy & Infrastructure</option>
          </select>
        </div>
      )}

      {/* Market Selector & Risk Profile */}
      <div className="grid grid-cols-2 gap-2.5">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-slate-300 font-mono">Market</label>
          <select
            value={params.market}
            onChange={(e) => {
              soundFx.playClick();
              onChange({ ...params, market: e.target.value });
            }}
            className="bg-[#06090f] border border-white/[0.08] rounded-xl px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-emerald-500 cursor-pointer"
          >
            <option value="India">India (NSE / BSE)</option>
            <option value="United States">US (NASDAQ / NYSE)</option>
            <option value="Global">Global Markets</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-slate-300 font-mono">Risk Profile</label>
          <select
            value={params.risk}
            onChange={(e) => {
              soundFx.playClick();
              onChange({ ...params, risk: e.target.value });
            }}
            className="bg-[#06090f] border border-white/[0.08] rounded-xl px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-emerald-500 cursor-pointer"
          >
            <option value="Moderate">Moderate Risk</option>
            <option value="Conservative">Conservative</option>
            <option value="Aggressive">Aggressive Growth</option>
          </select>
        </div>
      </div>

      {/* Investment Horizon */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-slate-300 flex items-center justify-between font-mono">
          <span>Investment Horizon</span>
          <span className="text-[10px] text-slate-400">Time Lock</span>
        </label>
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { label: "< 1 Year", val: "Short-term (< 1 Year)" },
            { label: "3–5 Years", val: "Medium (3–5 Years)" },
            { label: "5–10+ Years", val: "Long-term (5–10+ Years)" }
          ].map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => {
                soundFx.playClick();
                onChange({ ...params, horizon: item.val });
              }}
              className={`py-2 px-2 rounded-xl text-center text-xs font-mono transition-all duration-200 border ${
                params.horizon === item.val
                  ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-300 font-bold shadow-md shadow-emerald-500/10"
                  : "bg-[#06090f] border-white/[0.06] text-slate-400 hover:border-white/[0.2] hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Launch Action Button */}
      <div className="pt-2 flex flex-col gap-2">
        <button
          type="button"
          onClick={() => {
            soundFx.playClick();
            onStartResearch();
          }}
          disabled={isRunning}
          className={`relative group overflow-hidden w-full py-3.5 px-4 rounded-xl font-extrabold text-sm tracking-wide font-mono transition-all duration-300 flex items-center justify-center gap-2 shadow-2xl ${
            isRunning
              ? "bg-slate-900 text-slate-500 border border-slate-800 cursor-not-allowed"
              : "bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-950 shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-[1.02] active:scale-[0.98]"
          }`}
        >
          {/* Animated shine highlight */}
          {!isRunning && (
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-scan" />
          )}

          {isRunning ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin text-slate-400" />
              <span>Autonomous Flow Active...</span>
            </>
          ) : (
            <>
              <Zap className="w-4 h-4 fill-current text-slate-950" />
              <span>LAUNCH RESEARCH PIPELINE</span>
            </>
          )}
        </button>

        <p className="text-[10px] text-center text-slate-500 font-mono">
          Enforces Human-in-the-Loop Decision Gateways (Step 3 & 15).
        </p>
      </div>
    </GlassCard3D>
  );
}
