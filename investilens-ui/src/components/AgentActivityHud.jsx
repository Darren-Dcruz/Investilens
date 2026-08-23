import React, { useRef, useEffect, useState } from "react";
import { Activity, Globe, Terminal, ShieldCheck, AlertCircle, CheckCircle2, Loader2, FastForward, Check, ExternalLink, Radio, Cpu, Network } from "lucide-react";
import { WORKFLOW_STAGES } from "../services/agentEngine.js";
import GlassCard3D from "./GlassCard3D.jsx";
import HolographicLensCore from "./HolographicLensCore.jsx";
import SourceNodeGraph from "./SourceNodeGraph.jsx";
import { soundFx } from "../services/soundFx.js";

export default function AgentActivityHud({
  currentStageId,
  stagesProgress,
  browserLogs,
  currentUrl,
  browserStatus,
  speed,
  onSetSpeed,
  activeCheckpoint,
  agentState
}) {
  const logEndRef = useRef(null);
  const [hudView, setHudView] = useState("terminal"); // "terminal" | "mesh"

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [browserLogs]);

  const activeStage = WORKFLOW_STAGES.find((s) => s.id === currentStageId) || WORKFLOW_STAGES[0];

  return (
    <GlassCard3D glowColor="cyan" className="p-4 lg:p-6 flex flex-col gap-4 h-full">
      {/* Center Top HUD Header */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-sm shadow-cyan-500/20">
            <Activity className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white font-mono">
              Agent Activity & Webcmd HUD
            </h2>
            <p className="text-[11px] text-slate-400">Live Browser Telemetry & Reasoning Stream</p>
          </div>
        </div>

        {/* Speed Controls */}
        <div className="flex items-center gap-1 bg-[#06090f] p-1 rounded-xl border border-white/[0.06]">
          <button
            onClick={() => {
              soundFx.playClick();
              onSetSpeed(1);
            }}
            className={`px-2.5 py-1 text-[10px] font-mono rounded-lg transition-colors ${
              speed === 1 ? "bg-cyan-500/20 text-cyan-300 font-bold shadow-sm" : "text-slate-400 hover:text-white"
            }`}
            title="Normal Speed (Pitch Mode)"
          >
            1x
          </button>
          <button
            onClick={() => {
              soundFx.playClick();
              onSetSpeed(2);
            }}
            className={`px-2.5 py-1 text-[10px] font-mono rounded-lg transition-colors ${
              speed === 2 ? "bg-cyan-500/20 text-cyan-300 font-bold shadow-sm" : "text-slate-400 hover:text-white"
            }`}
            title="Fast Speed"
          >
            2x
          </button>
          <button
            onClick={() => {
              soundFx.playClick();
              onSetSpeed(0);
            }}
            className={`px-2.5 py-1 text-[10px] font-mono rounded-lg transition-colors ${
              speed === 0 ? "bg-emerald-500/20 text-emerald-300 font-bold shadow-sm" : "text-slate-400 hover:text-white"
            }`}
            title="Instant Speed (Zero Delay)"
          >
            Instant
          </button>
        </div>
      </div>

      {/* 3D Holographic Lens Core Reactor Banner */}
      <HolographicLensCore agentState={agentState} currentStageId={currentStageId} />

      {/* Webcmd Live Browser Emulation Viewport Bar */}
      <div className="bg-[#06090f] border border-white/[0.08] rounded-xl p-3 flex flex-col gap-2 shadow-inner">
        <div className="flex items-center justify-between text-[11px] text-slate-300 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-white font-semibold">Webcmd Session:</span>
            <span className="text-emerald-400 font-bold">{browserStatus || "Ready"}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => {
                soundFx.playClick();
                setHudView("terminal");
              }}
              className={`px-2 py-0.5 rounded text-[10px] transition-colors ${
                hudView === "terminal" ? "bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30" : "text-slate-400 hover:text-white"
              }`}
            >
              Terminal Feed
            </button>
            <button
              onClick={() => {
                soundFx.playClick();
                setHudView("mesh");
              }}
              className={`px-2 py-0.5 rounded text-[10px] transition-colors ${
                hudView === "mesh" ? "bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30" : "text-slate-400 hover:text-white"
              }`}
            >
              3D Node Mesh
            </button>
          </div>
        </div>

        {/* Browser URL Bar with Glow */}
        <div className="flex items-center gap-2 bg-[#090e1a] border border-white/[0.08] rounded-lg px-3 py-2 text-xs font-mono text-slate-200 shadow-inner">
          <Globe className="w-4 h-4 text-cyan-400 flex-shrink-0 animate-pulse" />
          <span className="truncate text-slate-200 text-xs">{currentUrl || "about:blank"}</span>
          {currentUrl && currentUrl !== "about:blank" && (
            <span className="ml-auto text-[10px] px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-bold flex-shrink-0">
              200 OK
            </span>
          )}
        </div>
      </div>

      {/* Dynamic HUD Content: Terminal Feed or Interactive Node Mesh */}
      {hudView === "mesh" ? (
        <SourceNodeGraph currentUrl={currentUrl} isCrawling={agentState === "crawling"} />
      ) : (
        <div className="flex-1 flex flex-col gap-1.5 min-h-[260px] max-h-[360px]">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-mono text-white font-medium">Hermes & Webcmd Telemetry</span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">{browserLogs.length} events logged</span>
          </div>

          <div className="flex-1 bg-[#050811] border border-white/[0.08] rounded-xl p-3.5 overflow-y-auto font-mono text-[11px] leading-relaxed flex flex-col gap-1.5 text-slate-300 shadow-inner">
            {browserLogs.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-slate-500 gap-1.5 my-auto py-8">
                <Terminal className="w-8 h-8 text-slate-700 animate-bounce" />
                <span className="text-slate-400 font-semibold">Awaiting autonomous research launch...</span>
                <span className="text-[10px] text-slate-600">Click Launch Research or Load Demo to trigger workflow</span>
              </div>
            ) : (
              browserLogs.map((log, idx) => (
                <div key={idx} className="flex items-start gap-2 py-0.5 hover:bg-white/[0.03] rounded-lg px-1.5 transition-colors">
                  <span className="text-slate-500 text-[10px] flex-shrink-0 select-none">
                    {log.time}
                  </span>
                  <span
                    className={`text-[9px] uppercase px-1.5 py-0.5 rounded-md font-bold flex-shrink-0 ${
                      log.type === "webcmd"
                        ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30"
                        : log.type === "hermes"
                        ? "bg-indigo-500/15 text-indigo-300 border border-indigo-500/30"
                        : log.type === "checkpoint"
                        ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold animate-pulse"
                        : log.type === "evidence"
                        ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                        : log.type === "error"
                        ? "bg-rose-500/15 text-rose-300 border border-rose-500/30"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    {log.type}
                  </span>
                  <span className={`break-all ${log.type === "checkpoint" ? "text-amber-200 font-bold" : "text-slate-300"}`}>
                    {log.message}
                  </span>
                </div>
              ))
            )}
            <div ref={logEndRef} />
          </div>
        </div>
      )}

      {/* Mini Workflow Pipeline Progress Strip */}
      <div className="border-t border-white/[0.08] pt-3">
        <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2 font-mono">
          <span>Workflow Execution Pipeline</span>
          <span className="text-emerald-400 font-bold">{Math.min(100, Math.round((currentStageId / 16) * 100))}% Complete</span>
        </div>
        <div className="grid grid-cols-8 gap-1.5">
          {WORKFLOW_STAGES.map((s) => {
            const isCompleted = stagesProgress[s.id] === "completed";
            const isActive = currentStageId === s.id;
            const isCurrentCheckpoint = s.isCheckpoint && isActive;

            return (
              <div
                key={s.id}
                title={`Step ${s.id}: ${s.name}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  isCurrentCheckpoint
                    ? "bg-amber-400 shadow-lg shadow-amber-400/50 animate-pulse"
                    : isActive
                    ? "bg-cyan-400 shadow-lg shadow-cyan-400/50 animate-pulse"
                    : isCompleted
                    ? "bg-emerald-500 shadow-sm shadow-emerald-500/30"
                    : "bg-slate-800/80"
                }`}
              />
            );
          })}
        </div>
      </div>
    </GlassCard3D>
  );
}
