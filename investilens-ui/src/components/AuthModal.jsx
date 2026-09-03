import React, { useState, useEffect } from "react";
import {
  X,
  Lock,
  User,
  Mail,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  AlertCircle,
  Zap,
  CheckCircle2
} from "lucide-react";
import { authService } from "../services/authService.js";
import { soundFx } from "../services/soundFx.js";

export function AuthModal({ isOpen, onClose, onAuthSuccess }) {
  const [mode, setMode] = useState("login"); // "login" | "register"
  const [formData, setFormData] = useState({
    identifier: "",
    username: "",
    email: "",
    password: "",
    name: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const resetForm = () => {
    setFormData({
      identifier: "",
      username: "",
      email: "",
      password: "",
      name: ""
    });
    setError(null);
    setSuccessMsg(null);
  };

  // Clear inputs and messages whenever modal is opened
  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    setError(null);
  };

  const handleClose = () => {
    soundFx.playClick();
    resetForm();
    onClose();
  };

  const handleModeChange = (newMode) => {
    soundFx.playClick();
    setMode(newMode);
    resetForm();
  };

  const handleDemoFill = async () => {
    soundFx.playClick();
    setMode("login");
    setFormData({
      identifier: "demo@investilens.ai",
      username: "",
      email: "",
      password: "demo123",
      name: ""
    });
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);
    setLoading(true);

    try {
      let result;
      if (mode === "login") {
        result = await authService.login({
          identifier: formData.identifier,
          password: formData.password
        });
        soundFx.playCheckpointAlert();
        setSuccessMsg(`Welcome back, ${result.user?.name || "Investor"}!`);
      } else {
        result = await authService.register({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          name: formData.name
        });
        soundFx.playCheckpointAlert();
        setSuccessMsg(`Account created successfully! Welcome to InvestiLens.`);
      }

      setTimeout(() => {
        resetForm();
        if (onAuthSuccess) onAuthSuccess(result.user);
        onClose();
      }, 900);
    } catch (err) {
      let msg = err.message || "Authentication failed. Please try again.";
      if (msg.includes("Invalid login credentials")) {
        msg = "Invalid email or password. Please verify your credentials.";
      } else if (msg.includes("Email not confirmed")) {
        msg = "Please confirm your email address in your inbox or disable email confirmation in your Supabase Auth settings.";
      }
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Backdrop glow */}
      <div className="absolute w-[500px] h-[500px] bg-brand-light/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Modal Box */}
      <div className="relative w-full max-w-md bg-[#0B110D]/95 border border-brand-light/25 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl overflow-hidden">
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F0FB43] via-[#7ED043] to-[#328F35]" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon & Title */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#132216] to-[#0A120D] border border-brand-light/30 flex items-center justify-center mb-3 shadow-lg shadow-brand-medium/20">
            <ShieldCheck className="w-6 h-6 text-brand-lime animate-pulse" />
          </div>
          <h3 className="text-xl font-extrabold text-white font-mono tracking-wide">
            {mode === "login" ? "INVESTOR ACCESS" : "CREATE INVESTOR ACCOUNT"}
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-[280px]">
            {mode === "login"
              ? "Sign in to access your multi-source research dossiers & saved history."
              : "Register to save live research sessions, track tickers, and access past reports."}
          </p>
        </div>

        {/* Mode Selector Tabs */}
        <div className="grid grid-cols-2 gap-1 p-1 bg-white/[0.03] border border-white/[0.06] rounded-2xl mb-5">
          <button
            type="button"
            onClick={() => handleModeChange("login")}
            className={`py-2 text-xs font-mono font-bold rounded-xl transition-all ${
              mode === "login"
                ? "bg-brand-medium/30 text-brand-lime border border-brand-light/40 shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            SIGN IN
          </button>
          <button
            type="button"
            onClick={() => handleModeChange("register")}
            className={`py-2 text-xs font-mono font-bold rounded-xl transition-all ${
              mode === "register"
                ? "bg-brand-medium/30 text-brand-lime border border-brand-light/40 shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            CREATE ACCOUNT
          </button>
        </div>

        {/* Feedback Alert */}
        {error && (
          <div className="flex items-start gap-2.5 p-3 mb-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs animate-shake">
            <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {successMsg && (
          <div className="flex items-center gap-2.5 p-3 mb-4 rounded-xl bg-brand-light/10 border border-brand-light/30 text-brand-lime text-xs animate-fadeIn">
            <CheckCircle2 className="w-4 h-4 text-brand-lime flex-shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Auth Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {mode === "register" && (
            <>
              <div>
                <label className="block text-[11px] font-mono font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Vance"
                    required
                    className="w-full pl-10 pr-4 py-2 bg-black/40 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-light/60 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Username
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="e.g. alex_investor"
                    required
                    className="w-full pl-10 pr-4 py-2 bg-black/40 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-light/60 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@investilens.ai"
                    required
                    className="w-full pl-10 pr-4 py-2 bg-black/40 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-light/60 transition-colors"
                  />
                </div>
              </div>
            </>
          )}

          {mode === "login" && (
            <div>
              <label className="block text-[11px] font-mono font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Email Address or Username
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  name="identifier"
                  value={formData.identifier}
                  onChange={handleChange}
                  placeholder="alex@investilens.ai"
                  required
                  className="w-full pl-10 pr-4 py-2 bg-black/40 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-light/60 transition-colors"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-[11px] font-mono font-semibold text-slate-300 uppercase tracking-wider mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="w-full pl-10 pr-4 py-2 bg-black/40 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-light/60 transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#F0FB43] via-[#7ED043] to-[#4FB734] hover:from-[#f4fc65] hover:to-[#5bc93f] text-[#060907] font-mono text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-brand-medium/20 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50"
          >
            {loading ? (
              <span className="inline-block animate-spin">⏳</span>
            ) : (
              <>
                <span>{mode === "login" ? "AUTHENTICATE & ENTER" : "CREATE ACCOUNT"}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Quick Demo Login Option */}
        <div className="mt-5 pt-3 border-t border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
            <Sparkles className="w-3.5 h-3.5 text-brand-lime" />
            <span>Fast Testing:</span>
          </div>
          <button
            type="button"
            onClick={handleDemoFill}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold text-brand-lime bg-brand-light/10 hover:bg-brand-light/20 border border-brand-light/30 transition-all duration-200"
          >
            <Zap className="w-3 h-3" />
            <span>⚡ Use Demo Account</span>
          </button>
        </div>
      </div>
    </div>
  );
}
