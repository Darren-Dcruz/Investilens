import React, { useState, useEffect } from "react";
import {
  X,
  Database,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ExternalLink,
  Shield,
  Key,
  Globe,
  Sparkles
} from "lucide-react";
import {
  getSupabaseConfig,
  saveSupabaseConfig,
  isSupabaseConfigured
} from "../services/supabaseClient.js";
import { soundFx } from "../services/soundFx.js";

const SQL_SCHEMA = `-- 1. Profiles Table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 2. Research History Table
CREATE TABLE IF NOT EXISTS public.research_history (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  ticker TEXT NOT NULL,
  company_name TEXT NOT NULL,
  market TEXT DEFAULT 'United States',
  sector TEXT,
  score INTEGER NOT NULL,
  rating TEXT NOT NULL,
  confidence TEXT DEFAULT 'HIGH',
  summary TEXT,
  params JSONB DEFAULT '{}'::jsonb,
  report_data JSONB,
  stock_data JSONB,
  created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 3. Watchlist Table
CREATE TABLE IF NOT EXISTS public.user_watchlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  ticker TEXT NOT NULL,
  name TEXT NOT NULL,
  market TEXT DEFAULT 'United States',
  price NUMERIC,
  change TEXT,
  score INTEGER,
  rating TEXT,
  added_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  UNIQUE (user_id, ticker)
);

-- 4. Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.research_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_watchlist ENABLE ROW LEVEL SECURITY;

-- 5. RLS Policies
CREATE POLICY "Public profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users own history" ON public.research_history FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users own watchlist" ON public.user_watchlist FOR ALL USING (auth.uid() = user_id);

-- 6. Trigger for New Users
CREATE OR REPLACE FUNCTION public.handle_new_user() RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, username, full_name)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'username', split_part(NEW.email, '@', 1)), COALESCE(NEW.raw_user_meta_data->>'full_name', 'Investor'));
  RETURN NEW;
END; $$ LANGUAGE plpgsql SECURITY DEFINER;
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();`;

export function SupabaseConfigModal({ isOpen, onClose, onConfigSaved }) {
  const [url, setUrl] = useState("");
  const [anonKey, setAnonKey] = useState("");
  const [copied, setCopied] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState("connect"); // "connect" | "sql"

  useEffect(() => {
    if (isOpen) {
      const config = getSupabaseConfig();
      setUrl(config.url || "");
      setAnonKey(config.anonKey || "");
      setSavedSuccess(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = (e) => {
    e.preventDefault();
    soundFx.playClick();
    if (!url || !anonKey) return;

    saveSupabaseConfig(url, anonKey);
    setSavedSuccess(true);
    soundFx.playCheckpointAlert();

    setTimeout(() => {
      if (onConfigSaved) onConfigSaved();
      onClose();
    }, 800);
  };

  const handleClear = () => {
    soundFx.playClick();
    saveSupabaseConfig(null, null);
    setUrl("");
    setAnonKey("");
    if (onConfigSaved) onConfigSaved();
  };

  const handleCopySql = () => {
    soundFx.playClick();
    navigator.clipboard.writeText(SQL_SCHEMA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isConfigured = isSupabaseConfigured();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Backdrop Glow */}
      <div className="absolute w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative w-full max-w-xl bg-[#09110D]/95 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl overflow-hidden">
        {/* Top Accent Gradient */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#3ECF8E] via-[#7ED043] to-[#F0FB43]" />

        {/* Close Button */}
        <button
          onClick={() => {
            soundFx.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon & Title */}
        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#0A1A12] border border-[#3ECF8E]/40 flex items-center justify-center shadow-lg shadow-[#3ECF8E]/20">
            <Database className="w-6 h-6 text-[#3ECF8E] animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-white font-mono tracking-wide">
                SUPABASE DATABASE SETUP
              </h3>
              {isConfigured ? (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono font-bold border border-emerald-500/40 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> LIVE
                </span>
              ) : (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono font-bold border border-amber-500/40">
                  SETUP REQUIRED
                </span>
              )}
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Connect your production PostgreSQL database and real Supabase user authentication.
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="grid grid-cols-2 gap-1 p-1 bg-white/[0.03] border border-white/[0.06] rounded-2xl mb-5">
          <button
            type="button"
            onClick={() => {
              soundFx.playClick();
              setActiveTab("connect");
            }}
            className={`py-2 text-xs font-mono font-bold rounded-xl transition-all ${
              activeTab === "connect"
                ? "bg-[#3ECF8E]/20 text-[#3ECF8E] border border-[#3ECF8E]/40 shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            1. CONNECT CREDENTIALS
          </button>
          <button
            type="button"
            onClick={() => {
              soundFx.playClick();
              setActiveTab("sql");
            }}
            className={`py-2 text-xs font-mono font-bold rounded-xl transition-all ${
              activeTab === "sql"
                ? "bg-[#3ECF8E]/20 text-[#3ECF8E] border border-[#3ECF8E]/40 shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            2. SQL SCHEMA MIGRATION
          </button>
        </div>

        {/* TAB 1: CONNECT CREDENTIALS */}
        {activeTab === "connect" && (
          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block text-[11px] font-mono font-semibold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                <span>Supabase Project URL</span>
                <a
                  href="https://supabase.com/dashboard"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] text-[#3ECF8E] hover:underline flex items-center gap-1 normal-case font-sans"
                >
                  Find in Supabase Dashboard <ExternalLink className="w-3 h-3" />
                </a>
              </label>
              <div className="relative">
                <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://xyzproject.supabase.co"
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-black/50 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#3ECF8E]/60 font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Supabase Anon / Public Key
              </label>
              <div className="relative">
                <Key className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="password"
                  value={anonKey}
                  onChange={(e) => setAnonKey(e.target.value)}
                  placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-black/50 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#3ECF8E]/60 font-mono"
                />
              </div>
            </div>

            {savedSuccess && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs animate-fadeIn">
                <CheckCircle2 className="w-4 h-4" />
                <span>Supabase credentials saved and initialized successfully!</span>
              </div>
            )}

            <div className="flex items-center gap-2 pt-2">
              <button
                type="submit"
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#3ECF8E] via-[#7ED043] to-[#F0FB43] hover:from-[#45dc98] hover:to-[#f5fc67] text-[#060907] font-mono text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-[#3ECF8E]/20 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Save & Connect Database</span>
              </button>

              {isConfigured && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="py-3 px-4 rounded-xl bg-white/[0.04] hover:bg-red-500/20 text-slate-400 hover:text-red-300 border border-white/10 hover:border-red-500/30 font-mono text-xs transition-colors"
                >
                  Disconnect
                </button>
              )}
            </div>
          </form>
        )}

        {/* TAB 2: SQL SCHEMA MIGRATION */}
        {activeTab === "sql" && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-300 font-mono">
                Paste this into your <strong>Supabase Dashboard &rarr; SQL Editor</strong>:
              </span>
              <button
                type="button"
                onClick={handleCopySql}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-[#3ECF8E]/20 hover:bg-[#3ECF8E]/30 text-[#3ECF8E] border border-[#3ECF8E]/40 transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "COPIED TO CLIPBOARD!" : "COPY SQL"}</span>
              </button>
            </div>

            <pre className="p-3.5 bg-black/60 border border-white/10 rounded-xl text-[11px] font-mono text-emerald-300/90 max-h-56 overflow-y-auto custom-scrollbar select-all">
              {SQL_SCHEMA}
            </pre>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-[11px] text-slate-400 flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-[#3ECF8E] flex-shrink-0 mt-0.5" />
              <span>
                This creates the <code className="text-white">profiles</code>, <code className="text-white">research_history</code>, and <code className="text-white">user_watchlist</code> tables with Row Level Security so each user's dossiers remain private to their login.
              </span>
            </div>
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-5 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <span>PostgreSQL + Supabase Auth</span>
          <span>InvestiLens v3.0 Production</span>
        </div>
      </div>
    </div>
  );
}
