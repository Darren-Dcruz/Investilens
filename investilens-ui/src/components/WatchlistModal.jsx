import React, { useState, useEffect } from "react";
import { Bookmark, Trash2, ArrowUpRight, TrendingUp, ShieldAlert, Sparkles, X, Layers, Building2, ExternalLink } from "lucide-react";
import { getSavedWatchlist, removeStockFromWatchlist } from "../services/watchlistService.js";
import { soundFx } from "../services/soundFx.js";

/**
 * Persistent Portfolio Watchlist & Multi-Asset Tracking Modal
 */
export function WatchlistModal({ isOpen, onClose, onSelectStock }) {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    if (isOpen) {
      setWatchlist(getSavedWatchlist());
    }
  }, [isOpen]);

  const handleDelete = (e, ticker) => {
    e.stopPropagation();
    soundFx.playClick();
    const updated = removeStockFromWatchlist(ticker);
    setWatchlist(updated);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="w-full max-w-4xl bg-[#090f0b] border-2 border-brand-lime/60 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col gap-6 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-brand-deep border border-brand-lime/40 flex items-center justify-center text-brand-lime shadow-lg">
              <Bookmark className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white font-mono">Portfolio Watchlist & Saved Dossiers</h3>
                <span className="px-2 py-0.5 rounded-full bg-brand-lime/20 text-brand-lime text-[10px] font-mono font-bold">
                  {watchlist.length} SAVED
                </span>
              </div>
              <p className="text-xs text-slate-400 font-sans mt-0.5">
                Persistent multi-asset research dossiers saved locally across your browser sessions
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white flex items-center justify-center transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Watchlist Grid */}
        <div className="flex-1 overflow-y-auto flex flex-col gap-3 pr-1">
          {watchlist.length === 0 ? (
            <div className="p-12 text-center flex flex-col items-center justify-center gap-3 text-slate-500 font-mono text-xs">
              <Bookmark className="w-10 h-10 text-slate-600 stroke-[1.5]" />
              <span>Your portfolio watchlist is currently empty.</span>
              <span className="text-[11px] text-slate-600">Run research on any asset and click "Bookmark Dossier" to track it here.</span>
            </div>
          ) : (
            watchlist.map((item) => (
              <div
                key={item.ticker}
                onClick={() => {
                  soundFx.playClick();
                  onSelectStock(item);
                  onClose();
                }}
                className="p-4 rounded-2xl bg-[#060907] border border-brand-light/20 hover:border-brand-lime transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group"
              >
                {/* Asset Identity */}
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#0b1610] border border-white/[0.08] flex items-center justify-center text-brand-lime font-mono font-black text-sm flex-shrink-0 group-hover:border-brand-lime transition-all">
                    {item.ticker.slice(0, 3)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-white font-mono group-hover:text-brand-lime transition-colors">
                        {item.name}
                      </span>
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-brand-deep/50 text-brand-lime border border-brand-light/30">
                        {item.ticker}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 font-sans mt-0.5 flex items-center gap-2">
                      <span>{item.sector}</span>
                      <span>•</span>
                      <span>Saved: {item.savedAt}</span>
                    </div>
                  </div>
                </div>

                {/* Score, Multiples & Action */}
                <div className="flex items-center gap-4 sm:gap-6 ml-auto sm:ml-0 font-mono text-xs">
                  <div className="text-right">
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider block">PRICE</span>
                    <span className="font-bold text-white text-sm">
                      {item.currentPrice ? `$${item.currentPrice}` : item.marketCap}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider block">SCORE</span>
                    <span className="font-black text-base green-gradient-text">
                      {item.score}/100
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => handleDelete(e, item.ticker)}
                      title="Remove from Watchlist"
                      className="p-2 rounded-xl bg-white/[0.04] hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 transition-all"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>

                    <div className="px-3 py-1.5 rounded-xl bg-brand-deep text-brand-lime border border-brand-lime/40 group-hover:bg-brand-medium group-hover:text-[#060907] transition-all flex items-center gap-1 font-bold">
                      <span>View</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-white/[0.08] pt-3 flex items-center justify-between font-mono text-[11px] text-slate-400">
          <span>✓ Persistent Local Storage Enabled</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-[#060907] border border-white/[0.1] text-slate-300 hover:text-white transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
