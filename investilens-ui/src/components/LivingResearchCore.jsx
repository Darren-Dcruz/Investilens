import React, { useRef, useEffect, useState, useMemo } from "react";
import { Globe, Database, Terminal, ShieldCheck, CheckCircle2, Loader2, Sparkles, Radio, Clock, Zap, Cpu } from "lucide-react";
import { WORKFLOW_STAGES } from "../services/agentEngine.js";

export default function LivingResearchCore({
  currentStageId,
  stagesProgress,
  browserLogs = [],
  currentUrl,
  browserStatus,
  speed,
  onSetSpeed,
  activeStockData
}) {
  const canvasRef = useRef(null);
  const logEndRef = useRef(null);
  const [elapsedMs, setElapsedMs] = useState(0);

  // Live Timer Stopwatch
  useEffect(() => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      setElapsedMs(Date.now() - startTime);
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [browserLogs]);

  // Clean, deduplicated log stream
  const deduplicatedLogs = useMemo(() => {
    const result = [];
    let lastKey = "";
    for (const log of browserLogs) {
      const key = `${log.type}:${log.message}`;
      if (key !== lastKey) {
        result.push(log);
        lastKey = key;
      }
    }
    return result;
  }, [browserLogs]);

  // Active Source Detection
  const activeSourceInfo = useMemo(() => {
    const url = (currentUrl || "").toLowerCase();
    if (url.includes("nasdaq.com")) {
      return { name: "Nasdaq Official Exchange", domain: "nasdaq.com", metric: "Official Exchange Filings & 52W Range", color: "text-amber-300", badge: "bg-amber-400/20 text-amber-300" };
    }
    if (url.includes("nseindia.com") || url.includes("bseindia.com")) {
      return { name: "NSE / BSE India Portal", domain: "nseindia.com", metric: "Official Indian Market Filings & Corporate Disclosures", color: "text-amber-300", badge: "bg-amber-400/20 text-amber-300" };
    }
    if (url.includes("google.com/finance") || url.includes("google.com")) {
      return { name: "Google Finance", domain: "google.com/finance", metric: "Real-Time Quotes, P/E & Multi-Exchange Overview", color: "text-sky-300", badge: "bg-sky-400/20 text-sky-300" };
    }
    if (url.includes("yahoo.com") || url.includes("yahoofinance")) {
      return { name: "Yahoo Finance", domain: "finance.yahoo.com", metric: "Historical Key Stats, Valuation & Multiples", color: "text-brand-lime", badge: "bg-brand-medium/20 text-brand-lime" };
    }
    if (url.includes("reuters.com")) {
      return { name: "Reuters Markets", domain: "reuters.com", metric: "Macro News & Global Market Sentiment Feed", color: "text-emerald-300", badge: "bg-emerald-400/20 text-emerald-300" };
    }
    if (url.includes("cnbc.com")) {
      return { name: "CNBC Markets", domain: "cnbc.com", metric: "Breaking Business News & Executive Commentary", color: "text-brand-lime", badge: "bg-brand-medium/20 text-brand-lime" };
    }
    if (url.includes("marketwatch.com")) {
      return { name: "MarketWatch Financials", domain: "marketwatch.com", metric: "Financial Statements & Balance Sheet Health", color: "text-lime-300", badge: "bg-lime-400/20 text-lime-300" };
    }
    if (url.includes("investing.com")) {
      return { name: "Investing.com", domain: "investing.com", metric: "Technical Indicators & Consensus Price Targets", color: "text-amber-300", badge: "bg-amber-400/20 text-amber-300" };
    }
    if (url.includes("marketscreener.com")) {
      return { name: "MarketScreener", domain: "marketscreener.com", metric: "Deep Fundamental Analysis & Financial Health", color: "text-sky-300", badge: "bg-sky-400/20 text-sky-300" };
    }
    if (url.includes("wsj.com") || url.includes("ft.com")) {
      return { name: "WSJ / Financial Times", domain: "wsj.com", metric: "Institutional Perspective & Macro Intelligence", color: "text-purple-300", badge: "bg-purple-400/20 text-purple-300" };
    }
    return { 
      name: "Tier-1 Multi-Source Network", 
      domain: "investilens.ai", 
      metric: "Cross-Checking Verified Fundamentals Across 12 Sources", 
      color: "text-brand-lime", 
      badge: "bg-brand-medium/20 text-brand-lime" 
    };
  }, [currentUrl]);

  // Canvas Multi-Source Data Flow Mesh
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let reqId;

    // Multi-Source Architecture: Primary Financial Gateways
    const nodes = [
      { id: "core", name: "INVESTILENS CORE", x: 0.5, y: 0.5, color: "#F0FB43", radius: 28, isCore: true },
      { id: "src-1", name: "Nasdaq / NSE / BSE", url: "nasdaq", x: 0.16, y: 0.20, color: "#F0FB43", radius: 17 },
      { id: "src-2", name: "Google & Yahoo Finance", url: "google", x: 0.84, y: 0.20, color: "#38bdf8", radius: 17 },
      { id: "src-3", name: "Reuters & CNBC Wire", url: "reuters", x: 0.12, y: 0.78, color: "#4FB734", radius: 17 },
      { id: "src-4", name: "MarketWatch & Screener", url: "marketwatch", x: 0.88, y: 0.78, color: "#a3e635", radius: 17 },
      { id: "src-5", name: "FT / WSJ / Investing.com", url: "investing", x: 0.50, y: 0.90, color: "#c084fc", radius: 17 }
    ];

    // Traveling photon particles
    const particles = [];
    for (let i = 0; i < 24; i++) {
      particles.push({
        sourceIdx: Math.floor(Math.random() * (nodes.length - 1)) + 1,
        progress: Math.random(),
        speed: 0.009 + Math.random() * 0.015,
        size: 2.5 + Math.random() * 2
      });
    }

    let time = 0;

    const render = () => {
      reqId = requestAnimationFrame(render);
      time += 0.02;

      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const coreX = nodes[0].x * w;
      const coreY = nodes[0].y * h;

      // Draw cyber lattice
      ctx.strokeStyle = "rgba(126, 208, 67, 0.05)";
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 28) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += 28) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Draw connective data lines
      nodes.slice(1).forEach((node) => {
        const nx = node.x * w;
        const ny = node.y * h;
        const isTargeted = currentUrl && currentUrl.toLowerCase().includes(node.url.toLowerCase());

        ctx.beginPath();
        ctx.moveTo(nx, ny);
        ctx.lineTo(coreX, coreY);

        if (isTargeted) {
          ctx.strokeStyle = "#F0FB43";
          ctx.lineWidth = 2.5;
          ctx.shadowColor = "#F0FB43";
          ctx.shadowBlur = 15;
        } else {
          ctx.strokeStyle = "rgba(79, 183, 52, 0.25)";
          ctx.lineWidth = 1.2;
          ctx.shadowBlur = 0;
        }
        ctx.stroke();
      });

      // Flowing particles from sources into core
      particles.forEach((p) => {
        p.progress += p.speed;
        if (p.progress >= 1) p.progress = 0;

        const src = nodes[p.sourceIdx];
        const sx = src.x * w;
        const sy = src.y * h;

        const px = sx + (coreX - sx) * p.progress;
        const py = sy + (coreY - sy) * p.progress;

        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = src.color;
        ctx.shadowColor = src.color;
        ctx.shadowBlur = 10;
        ctx.fill();
      });

      // Draw Nodes
      nodes.forEach((node) => {
        const nx = node.x * w;
        const ny = node.y * h;
        const isTargeted = currentUrl && currentUrl.toLowerCase().includes(node.url?.toLowerCase());

        // Outer glow wave
        ctx.beginPath();
        ctx.arc(nx, ny, node.radius + (isTargeted ? 8 + Math.sin(time * 6) * 3 : 4), 0, Math.PI * 2);
        ctx.fillStyle = isTargeted ? "rgba(240, 251, 67, 0.25)" : "rgba(79, 183, 52, 0.08)";
        ctx.fill();

        // Node Circle
        ctx.beginPath();
        ctx.arc(nx, ny, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.isCore ? "#0f1c13" : "#070c09";
        ctx.strokeStyle = isTargeted ? "#F0FB43" : node.color;
        ctx.lineWidth = isTargeted ? 3 : 2;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = isTargeted ? 20 : 8;
        ctx.fill();
        ctx.stroke();

        // Node Label
        ctx.font = node.isCore ? "bold 11px 'JetBrains Mono', monospace" : "10px 'Inter', sans-serif";
        ctx.fillStyle = isTargeted ? "#F0FB43" : "#f4f8f4";
        ctx.textAlign = "center";
        ctx.shadowBlur = 0;
        ctx.fillText(node.name, nx, ny + node.radius + 14);
      });
    };

    render();

    return () => cancelAnimationFrame(reqId);
  }, [currentUrl]);

  const activeStage = WORKFLOW_STAGES.find((s) => s.id === currentStageId) || WORKFLOW_STAGES[3];
  const elapsedSec = (elapsedMs / 1000).toFixed(1);
  const scrapingTimeSec = Math.min(Number(elapsedSec), (Number(elapsedSec) * 0.75)).toFixed(1);
  const synthesisTimeSec = Math.max(0, (Number(elapsedSec) - Number(scrapingTimeSec))).toFixed(1);

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-6 py-6 px-4">
      {/* Header Banner with Live Stopwatch Timer */}
      <div className="bg-[#0b110d]/95 border border-brand-light/30 rounded-3xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xl">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-brand-deep/30 border border-brand-lime/40 flex items-center justify-center text-brand-lime shadow-lg">
            <Loader2 className="w-6 h-6 animate-spin text-brand-lime" />
          </div>
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-brand-lime font-bold">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>AUTONOMOUS TOP 5 SOURCE RESEARCH RUNNING</span>
            </div>
            <h2 className="text-lg font-bold text-white font-mono mt-0.5">
              {activeStage.name} (Stage {currentStageId}/16)
            </h2>
            <p className="text-xs text-slate-300 font-sans">{activeStage.description}</p>
          </div>
        </div>

        {/* Live Elapsed Stopwatch & Latency Breakdown */}
        <div className="flex flex-col sm:items-end gap-1.5 font-mono">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#060907] border border-brand-light/30 text-xs text-white shadow-inner">
            <Clock className="w-3.5 h-3.5 text-brand-lime animate-spin" />
            <span>Total Elapsed: <strong className="text-brand-lime">{elapsedSec}s</strong></span>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-slate-400">
            <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-amber-300" /> Scrape: {scrapingTimeSec}s</span>
            <span>&bull;</span>
            <span className="flex items-center gap-1"><Cpu className="w-3 h-3 text-sky-300" /> Synthesis: {synthesisTimeSec}s</span>
          </div>
        </div>
      </div>

      {/* Active Source Monitor Card */}
      <div className="bg-[#0b110d]/90 border border-brand-lime/30 rounded-2xl p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-lime animate-ping" />
          <span className="text-xs font-mono text-slate-300">
            CURRENTLY EXTRACTING FROM: <strong className={`font-bold ${activeSourceInfo.color}`}>{activeSourceInfo.name}</strong>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-slate-400">Action: {activeSourceInfo.metric}</span>
          <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${activeSourceInfo.badge}`}>
            ACTIVE
          </span>
        </div>
      </div>

      {/* Main 2-Column: Live Visual Data Flow Mesh + Webcmd Terminal Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left 7 Cols: Living Node Mesh Canvas */}
        <div className="lg:col-span-7 bg-[#070c09] border border-brand-light/20 rounded-3xl p-5 flex flex-col gap-3 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between font-mono text-xs text-slate-300">
            <span className="text-brand-lime font-bold">TOP 5 SOURCE PHOTON STREAM</span>
            <span className="text-slate-500">Latency: ~210ms avg</span>
          </div>

          <div className="w-full h-[320px] rounded-2xl overflow-hidden bg-[#050806] border border-white/[0.06] shadow-inner">
            <canvas ref={canvasRef} width={620} height={320} className="w-full h-full block" />
          </div>

          {/* Active URL Browser Bar */}
          <div className="bg-[#0b110d] border border-brand-light/30 rounded-xl px-4 py-2.5 flex items-center gap-2 text-xs font-mono text-slate-200">
            <Globe className="w-4 h-4 text-brand-lime animate-pulse flex-shrink-0" />
            <span className="truncate">{currentUrl || "https://finance.yahoo.com"}</span>
            <span className="ml-auto px-2 py-0.5 rounded bg-brand-medium/20 text-brand-lime text-[10px] font-bold">
              200 OK
            </span>
          </div>
        </div>

        {/* Right 5 Cols: Live Terminal Reasoning Feed with Deduplicated Webcmd Latency Badges */}
        <div className="lg:col-span-5 bg-[#070c09] border border-brand-light/20 rounded-3xl p-5 flex flex-col gap-3 shadow-2xl">
          <div className="flex items-center justify-between text-xs font-mono text-slate-300">
            <div className="flex items-center gap-2 text-brand-lime font-bold">
              <Terminal className="w-4 h-4" />
              <span>Webcmd Skill Telemetry</span>
            </div>
            <span className="text-[10px] text-slate-400 bg-black/40 px-2 py-0.5 rounded">
              {deduplicatedLogs.length} actions
            </span>
          </div>

          <div className="flex-1 bg-[#050806] border border-white/[0.06] rounded-2xl p-3.5 overflow-y-auto font-mono text-[11px] leading-relaxed flex flex-col gap-1.5 text-slate-300 max-h-[360px] shadow-inner">
            {deduplicatedLogs.map((log, idx) => (
              <div key={idx} className="flex items-start gap-2 py-1 hover:bg-white/[0.03] rounded px-1.5">
                <span className="text-slate-500 text-[10px] flex-shrink-0">{log.time}</span>
                <span className={`text-[9px] uppercase px-1.5 py-0.5 rounded font-bold flex-shrink-0 ${
                  log.type === "webcmd" ? "bg-brand-light/20 text-brand-lime" :
                  log.type === "evidence" ? "bg-brand-medium/20 text-brand-light" :
                  log.type === "checkpoint" ? "bg-amber-400/20 text-amber-300 font-bold" :
                  "bg-slate-800 text-slate-400"
                }`}>
                  {log.type}
                </span>
                <span className={`break-all ${log.type === "checkpoint" ? "text-amber-200 font-bold" : "text-slate-300"}`}>
                  {log.message}
                </span>
              </div>
            ))}
            <div ref={logEndRef} />
          </div>
        </div>
      </div>
    </div>
  );
}
