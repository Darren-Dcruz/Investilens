import React, { useState, useEffect } from "react";
import {
  X,
  History,
  Search,
  Trash2,
  ExternalLink,
  Calendar,
  TrendingUp,
  ShieldCheck,
  Building2,
  Sparkles,
  ArrowRight,
  Filter,
  CheckCircle2,
  BarChart3
} from "lucide-react";
import { authService } from "../services/authService.js";
import { soundFx } from "../services/soundFx.js";

export function HistoryModal({ isOpen, onClose, onSelectHistoryItem, onAuthRequired }) {
  const [historyItems, setHistoryItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRatingFilter, setSelectedRatingFilter] = useState("all");
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

  useEffect(() => {
    if (isOpen) {
      loadHistory();
    }
  }, [isOpen]);

  const loadHistory = async () => {
    setLoading(true);
    try {
      const items = await authService.getHistory();
      setHistoryItems(items || []);
    } catch (err) {
      console.error("Failed to load history:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, e) => {
    e.stopPropagation();
    soundFx.playClick();
    try {
      await authService.deleteHistoryItem(id);
      setHistoryItems((prev) => prev.filter((item) => item.id !== id));
      setDeleteConfirmId(null);
    } catch (err) {
      console.error("Failed to delete history item:", err);
    }
  };

  if (!isOpen) return null;

  const token = authService.getToken();

  // Filter items
  const filteredItems = historyItems.filter((item) => {
    const matchesSearch =
      !searchQuery ||
      item.ticker.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.sector && item.sector.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesRating =
      selectedRatingFilter === "all" ||
      (item.rating && item.rating.toLowerCase().includes(selectedRatingFilter.toLowerCase()));

    return matchesSearch && matchesRating;
  });

  const getScoreColor = (score) => {
    if (score >= 80) return "text-[#7ED043] border-[#7ED043]/40 bg-[#7ED043]/10";
    if (score >= 65) return "text-[#F0FB43] border-[#F0FB43]/40 bg-[#F0FB43]/10";
    return "text-orange-400 border-orange-400/40 bg-orange-400/10";
  };

  const formatDate = (isoStr) => {
    if (!isoStr) return "Recent";
    const date = new Date(isoStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Container Glow */}
      <div className="absolute w-[600px] h-[600px] bg-brand-light/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Drawer / Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0A100C]/95 border border-brand-light/30 rounded-3xl shadow-2xl backdrop-blur-2xl flex flex-col overflow-hidden">
        {/* Top Accent Gradient */}
        <div className="h-1.5 bg-gradient-to-r from-[#F0FB43] via-[#7ED043] to-[#328F35]" />

        {/* Modal Header */}
        <div className="p-6 border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-medium/20 border border-brand-light/30 flex items-center justify-center">
              <History className="w-5 h-5 text-brand-lime" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white font-mono tracking-wide">
                  RESEARCH HISTORY & DOSSIERS
                </h3>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-brand-light/15 text-brand-lime font-mono font-bold border border-brand-light/30">
                  {historyItems.length} Sessions
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Saved multi-source research snapshots and quantitative evaluation reports.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Authentication Notice if not logged in */}
        {!token ? (
          <div className="p-8 text-center flex flex-col items-center justify-center my-auto">
            <div className="w-14 h-14 rounded-2xl bg-brand-light/10 border border-brand-light/30 flex items-center justify-center mb-4">
              <ShieldCheck className="w-7 h-7 text-brand-lime" />
            </div>
            <h4 className="text-base font-bold text-white font-mono mb-2">
              Sign In to View Your Research History
            </h4>
            <p className="text-xs text-slate-400 max-w-md mb-6">
              Create a free investor account or sign in to save your comprehensive 18-section research reports, monitor multiple tickers, and review past analyses anytime.
            </p>
            <button
              onClick={() => {
                soundFx.playClick();
                onClose();
                if (onAuthRequired) onAuthRequired();
              }}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#F0FB43] via-[#7ED043] to-[#4FB734] text-[#060907] font-mono text-xs font-extrabold uppercase tracking-wider hover:scale-105 transition-all shadow-lg shadow-brand-medium/20"
            >
              Sign In / Register
            </button>
          </div>
        ) : (
          <>
            {/* Search & Filter Toolbar */}
            <div className="p-4 sm:px-6 bg-white/[0.02] border-b border-white/[0.06] flex flex-col sm:flex-row gap-3 items-center justify-between">
              {/* Search Bar */}
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Search ticker, company, sector..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-black/40 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-light/50"
                />
              </div>

              {/* Rating Filter Pills */}
              <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
                <span className="text-[11px] font-mono text-slate-400 mr-1 flex items-center gap-1">
                  <Filter className="w-3 h-3" /> Rating:
                </span>
                {["all", "buy", "hold"].map((r) => (
                  <button
                    key={r}
                    onClick={() => {
                      soundFx.playClick();
                      setSelectedRatingFilter(r);
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-medium capitalize transition-all ${
                      selectedRatingFilter === r
                        ? "bg-brand-light/20 text-brand-lime border border-brand-light/40"
                        : "text-slate-400 hover:text-white bg-white/[0.03]"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            {/* History List Content */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3.5 custom-scrollbar">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-16 text-slate-400">
                  <div className="w-8 h-8 border-2 border-brand-lime border-t-transparent rounded-full animate-spin mb-3" />
                  <span className="font-mono text-xs">Retrieving research history...</span>
                </div>
              ) : filteredItems.length === 0 ? (
                <div className="text-center py-16 border border-dashed border-white/10 rounded-2xl p-8">
                  <BarChart3 className="w-10 h-10 text-slate-500 mx-auto mb-3" />
                  <h4 className="text-sm font-bold text-slate-300 font-mono">
                    {searchQuery ? "No matching research dossiers found" : "No research history yet"}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                    {searchQuery
                      ? "Try searching for a different ticker or keyword."
                      : "Start a live investment research session to populate your personal verified dossier archive."}
                  </p>
                </div>
              ) : (
                filteredItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      soundFx.playClick();
                      if (onSelectHistoryItem) onSelectHistoryItem(item);
                      onClose();
                    }}
                    className="group relative p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-brand-light/40 transition-all duration-200 cursor-pointer shadow-lg"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      {/* Left: Ticker & Name */}
                      <div className="flex items-start gap-3.5">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#101b13] to-[#0a110d] border border-brand-light/30 flex items-center justify-center font-mono font-black text-white text-base shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
                          {item.ticker.substring(0, 4)}
                        </div>

                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-base font-bold text-white font-mono group-hover:text-brand-lime transition-colors">
                              {item.companyName}
                            </span>
                            <span className="text-xs px-2 py-0.5 rounded-md bg-white/[0.06] text-slate-300 font-mono font-semibold">
                              {item.ticker}
                            </span>
                            <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                              <Calendar className="w-3 h-3" /> {formatDate(item.createdAt)}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 mt-1 flex-wrap">
                            <span className="text-xs text-brand-light font-mono font-medium">
                              {item.market || "Global"}
                            </span>
                            {item.sector && (
                              <>
                                <span className="text-slate-600">•</span>
                                <span className="text-xs text-slate-400">{item.sector}</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Right: Score, Rating Badge & Actions */}
                      <div className="flex items-center gap-3 self-end sm:self-center">
                        {/* Score & Rating */}
                        <div className="text-right">
                          <div className="flex items-center gap-2 justify-end">
                            <span
                              className={`text-sm font-black font-mono px-2.5 py-0.5 rounded-lg border ${getScoreColor(
                                item.score || 75
                              )}`}
                            >
                              {item.score || 75}/100
                            </span>
                          </div>
                          <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 mt-0.5 block">
                            {item.rating || "Moderate Buy"}
                          </span>
                        </div>

                        {/* Action buttons */}
                        <div className="flex items-center gap-1 pl-2 border-l border-white/10">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              soundFx.playClick();
                              if (onSelectHistoryItem) onSelectHistoryItem(item);
                              onClose();
                            }}
                            className="p-2 rounded-xl text-brand-lime hover:bg-brand-light/10 border border-transparent hover:border-brand-light/30 transition-colors"
                            title="Load Research Dossier"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </button>

                          <button
                            type="button"
                            onClick={(e) => handleDelete(item.id, e)}
                            className="p-2 rounded-xl text-slate-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                            title="Delete Session"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Summary Snippet */}
                    {item.summary && (
                      <p className="text-xs text-slate-300 mt-2.5 line-clamp-2 bg-black/20 p-2 rounded-lg border border-white/[0.04]">
                        {item.summary}
                      </p>
                    )}
                  </div>
                ))
              )}
            </div>
          </>
        )}

        {/* Footer */}
        <div className="p-4 px-6 bg-[#070c09] border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-lime" />
            <span>Encrypted local database with deterministic verification audit.</span>
          </div>
          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="px-4 py-1.5 rounded-lg text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
