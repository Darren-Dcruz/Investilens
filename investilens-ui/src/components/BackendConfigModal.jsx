import React, { useState } from "react";
import { Server, Check, X } from "lucide-react";

export default function BackendConfigModal({ isOpen, onClose, config, onSaveConfig }) {
  const [mode, setMode] = useState(config.mode || "simulation");
  const [apiUrl, setApiUrl] = useState(config.apiUrl || "http://localhost:8000/api");
  const [wsUrl, setWsUrl] = useState(config.wsUrl || "ws://localhost:8000/stream");

  if (!isOpen) return null;

  const handleSave = () => {
    onSaveConfig({ mode, apiUrl, wsUrl });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#0b110d] border border-brand-light/30 rounded-2xl max-w-lg w-full p-6 shadow-2xl flex flex-col gap-5">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
          <div className="flex items-center gap-2">
            <Server className="w-5 h-5 text-brand-lime" />
            <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
              Backend Integration Config
            </h3>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-slate-300">Execution Engine Mode</label>
          <div className="grid grid-cols-2 gap-2 bg-[#060907] p-1 rounded-lg border border-white/[0.08]">
            <button
              onClick={() => setMode("simulation")}
              className={`py-2 text-xs font-mono font-bold rounded ${
                mode === "simulation"
                  ? "bg-brand-medium/20 text-brand-lime border border-brand-lime/40"
                  : "text-slate-400"
              }`}
            >
              Simulation Mode
            </button>
            <button
              onClick={() => setMode("live")}
              className={`py-2 text-xs font-mono font-bold rounded ${
                mode === "live"
                  ? "bg-brand-lime text-[#060907]"
                  : "text-slate-400"
              }`}
            >
              Live Hermes Bridge
            </button>
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            {mode === "simulation"
              ? "Runs the complete interactive demo flow with realistic data and checkpoint pauses."
              : "Connects to your teammate's Hermes + Webcmd agent controller via REST/WebSocket."}
          </p>
        </div>

        {mode === "live" && (
          <div className="flex flex-col gap-3 font-mono text-xs">
            <div className="flex flex-col gap-1">
              <label className="text-slate-400">Hermes Agent REST Endpoint</label>
              <input
                type="text"
                value={apiUrl}
                onChange={(e) => setApiUrl(e.target.value)}
                placeholder="http://localhost:8000/api/research"
                className="bg-[#060907] border border-brand-light/30 rounded px-3 py-2 text-white focus:outline-none focus:border-brand-lime"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-slate-400">Webcmd Telemetry Stream (WebSocket / SSE)</label>
              <input
                type="text"
                value={wsUrl}
                onChange={(e) => setWsUrl(e.target.value)}
                placeholder="ws://localhost:8000/stream"
                className="bg-[#060907] border border-brand-light/30 rounded px-3 py-2 text-white focus:outline-none focus:border-brand-lime"
              />
            </div>
          </div>
        )}

        <div className="flex justify-end gap-2 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 font-mono text-xs hover:bg-slate-700"
          >
            Close
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-brand-lime to-brand-medium text-[#060907] font-mono text-xs font-bold flex items-center gap-1.5"
          >
            <Check className="w-3.5 h-3.5" />
            Save Configuration
          </button>
        </div>
      </div>
    </div>
  );
}
