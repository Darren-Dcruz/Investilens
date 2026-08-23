import React from "react";
import { ArrowRight, HelpCircle, Bookmark, Sparkles } from "lucide-react";
import { soundFx } from "../services/soundFx.js";

export default function Header({ onStart, onOpenHowItWorks, onOpenWatchlist, onGoHome }) {
  return (
    <header className="border-b border-brand-light/15 bg-[#060907]/90 backdrop-blur-2xl sticky top-0 z-40 px-4 lg:px-8 py-3.5 shadow-2xl">
      <div className="flex items-center justify-between max-w-[1700px] mx-auto w-full">
        {/* Brand Logo & Title with Kinetic Shimmer */}
        <div onClick={onGoHome} className="flex items-center gap-3.5 cursor-pointer group select-none">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#F0FB43] via-[#7ED043] to-[#328F35] rounded-2xl blur-md opacity-70 group-hover:opacity-100 transition duration-300 animate-pulse" />
            <div className="relative w-10 h-10 bg-[#0b110d] rounded-xl flex items-center justify-center border border-brand-light/40 shadow-xl">
              <span className="text-xl font-black green-gradient-text transform group-hover:scale-110 transition-transform">
                ⚡
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xl font-black tracking-wider text-white font-mono bg-gradient-to-r from-[#7ED043] via-[#F0FB43] to-white bg-clip-text text-transparent drop-shadow-sm">
                INVESTILENS
              </span>
            </div>
            <span className="text-[10px] font-mono text-brand-light/90 tracking-wider uppercase font-semibold">
              AI-POWERED INVESTMENT RESEARCH
            </span>
          </div>
        </div>

        {/* Minimal Navigation Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Watchlist Trigger */}
          <button
            onClick={() => {
              soundFx.playClick();
              if (onOpenWatchlist) onOpenWatchlist();
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-medium text-slate-300 hover:text-brand-lime border border-white/[0.08] hover:border-brand-light/30 bg-[#0b110d]/80 transition-all duration-200"
          >
            <Bookmark className="w-3.5 h-3.5 text-brand-lime" />
            <span>Watchlist</span>
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              onOpenHowItWorks();
            }}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-medium text-slate-300 hover:text-brand-lime border border-white/[0.08] hover:border-brand-light/30 bg-[#0b110d]/80 transition-all duration-200"
          >
            <HelpCircle className="w-3.5 h-3.5 text-brand-light" />
            <span>How It Works</span>
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              onStart();
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#F0FB43] via-[#7ED043] to-[#4FB734] hover:from-[#f4fc65] hover:to-[#5bc93f] text-[#060907] font-mono text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-brand-medium/20 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
}
