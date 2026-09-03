import React, { useState } from "react";
import {
  ArrowRight,
  HelpCircle,
  Bookmark,
  Sparkles,
  History,
  User,
  LogOut,
  ChevronDown,
  ShieldCheck,
  LogIn
} from "lucide-react";
import { soundFx } from "../services/soundFx.js";

export default function Header({
  currentUser,
  historyCount = 0,
  onStart,
  onOpenHowItWorks,
  onOpenWatchlist,
  onOpenHistory,
  onOpenAuth,
  onLogout,
  onGoHome
}) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <header className="border-b border-brand-light/15 bg-[#060907]/90 backdrop-blur-2xl sticky top-0 z-40 px-4 lg:px-8 py-3 shadow-2xl">
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
          {/* Research History Trigger */}
          <button
            onClick={() => {
              soundFx.playClick();
              if (onOpenHistory) onOpenHistory();
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-medium text-slate-300 hover:text-brand-lime border border-white/[0.08] hover:border-brand-light/30 bg-[#0b110d]/80 transition-all duration-200"
          >
            <History className="w-3.5 h-3.5 text-brand-light" />
            <span>History</span>
            {currentUser && historyCount > 0 && (
              <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono font-bold bg-brand-light/20 text-brand-lime border border-brand-light/30">
                {historyCount}
              </span>
            )}
          </button>

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
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-medium text-slate-300 hover:text-brand-lime border border-white/[0.08] hover:border-brand-light/30 bg-[#0b110d]/80 transition-all duration-200"
          >
            <HelpCircle className="w-3.5 h-3.5 text-brand-light" />
            <span>How It Works</span>
          </button>

          {/* User Account / Auth Trigger */}
          {currentUser ? (
            <div className="relative">
              <button
                onClick={() => {
                  soundFx.playClick();
                  setIsUserMenuOpen(!isUserMenuOpen);
                }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-brand-medium/20 hover:bg-brand-medium/30 border border-brand-light/30 text-white font-mono text-xs transition-all duration-200"
              >
                <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-[#7ED043] to-[#F0FB43] text-black font-extrabold flex items-center justify-center text-xs">
                  {(currentUser.name || currentUser.username || "U")[0].toUpperCase()}
                </div>
                <span className="font-semibold max-w-[100px] truncate hidden sm:inline">
                  {currentUser.name || currentUser.username}
                </span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {/* User Dropdown */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-[#0c140f] border border-brand-light/30 rounded-2xl shadow-2xl p-2 z-50 animate-fadeIn backdrop-blur-xl">
                  <div className="p-2.5 border-b border-white/[0.08] mb-1">
                    <p className="text-xs font-bold text-white truncate font-mono">
                      {currentUser.name || currentUser.username}
                    </p>
                    <p className="text-[10px] text-slate-400 truncate">
                      {currentUser.email}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setIsUserMenuOpen(false);
                      if (onOpenHistory) onOpenHistory();
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs font-mono text-slate-300 hover:text-brand-lime hover:bg-white/[0.04] rounded-xl transition-colors"
                  >
                    <History className="w-3.5 h-3.5 text-brand-light" />
                    <span>My Research Dossiers ({historyCount})</span>
                  </button>

                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setIsUserMenuOpen(false);
                      if (onLogout) onLogout();
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs font-mono text-red-400 hover:bg-red-500/10 rounded-xl transition-colors mt-1"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => {
                soundFx.playClick();
                if (onOpenAuth) onOpenAuth();
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-medium text-slate-200 hover:text-brand-lime border border-white/[0.12] hover:border-brand-light/40 bg-white/[0.04] hover:bg-white/[0.08] transition-all duration-200"
            >
              <LogIn className="w-3.5 h-3.5 text-brand-lime" />
              <span>Sign In</span>
            </button>
          )}

          {/* Get Started CTA */}
          <button
            onClick={() => {
              soundFx.playClick();
              onStart();
            }}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#F0FB43] via-[#7ED043] to-[#4FB734] hover:from-[#f4fc65] hover:to-[#5bc93f] text-[#060907] font-mono text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-brand-medium/20 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
}
