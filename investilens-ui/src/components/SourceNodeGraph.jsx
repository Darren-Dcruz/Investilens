import React, { useRef, useEffect, useState } from "react";
import { Globe, Database, Radio, Sparkles } from "lucide-react";

export default function SourceNodeGraph({ sources = [], currentUrl = "", isCrawling = false }) {
  const canvasRef = useRef(null);
  const [selectedNode, setSelectedNode] = useState(null);

  const nodes = [
    { id: "core", name: "INVESTILENS AGENT", type: "core", x: 0.5, y: 0.5, color: "#10b981", radius: 24 },
    { id: "src-1", name: "Google Finance", url: "google.com/finance", type: "market_data", x: 0.20, y: 0.25, color: "#06b6d4", radius: 16 },
    { id: "src-2", name: "Nasdaq / NSE", url: "nasdaq.com", type: "exchange", x: 0.80, y: 0.25, color: "#f59e0b", radius: 16 },
    { id: "src-3", name: "MarketWatch", url: "marketwatch.com", type: "financials", x: 0.18, y: 0.75, color: "#8b5cf6", radius: 16 },
    { id: "src-4", name: "Reuters Markets", url: "reuters.com", type: "news", x: 0.5, y: 0.88, color: "#3b82f6", radius: 16 },
    { id: "src-5", name: "CNBC Desk", url: "cnbc.com", type: "news", x: 0.82, y: 0.75, color: "#10b981", radius: 16 }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let reqId;
    let particles = [];

    // Particle beams between core and nodes
    for (let i = 0; i < 20; i++) {
      particles.push({
        targetIdx: Math.floor(Math.random() * (nodes.length - 1)) + 1,
        progress: Math.random(),
        speed: 0.006 + Math.random() * 0.008
      });
    }

    const render = () => {
      reqId = requestAnimationFrame(render);
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      // Draw background cyber grid
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 24) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += 24) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      const coreX = nodes[0].x * w;
      const coreY = nodes[0].y * h;

      // Draw connecting laser lines
      nodes.slice(1).forEach((node, i) => {
        const nx = node.x * w;
        const ny = node.y * h;
        const isTargeted = currentUrl && currentUrl.toLowerCase().includes(node.url.toLowerCase());

        ctx.beginPath();
        ctx.moveTo(coreX, coreY);
        ctx.lineTo(nx, ny);

        if (isTargeted) {
          ctx.strokeStyle = "rgba(6, 182, 212, 0.8)";
          ctx.lineWidth = 2.5;
          ctx.shadowColor = "#06b6d4";
          ctx.shadowBlur = 12;
        } else {
          ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
          ctx.lineWidth = 1;
          ctx.shadowBlur = 0;
        }
        ctx.stroke();
      });

      // Draw traveling photon energy pulses
      particles.forEach((p) => {
        p.progress += isCrawling ? p.speed * 2.5 : p.speed;
        if (p.progress >= 1) p.progress = 0;

        const targetNode = nodes[p.targetIdx];
        const tx = targetNode.x * w;
        const ty = targetNode.y * h;

        const px = coreX + (tx - coreX) * p.progress;
        const py = coreY + (ty - coreY) * p.progress;

        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = targetNode.color;
        ctx.shadowColor = targetNode.color;
        ctx.shadowBlur = 8;
        ctx.fill();
      });

      // Draw Nodes
      nodes.forEach((node) => {
        const nx = node.x * w;
        const ny = node.y * h;
        const isCore = node.type === "core";
        const isTargeted = currentUrl && currentUrl.toLowerCase().includes(node.url?.toLowerCase());

        // Outer pulse ring
        ctx.beginPath();
        ctx.arc(nx, ny, node.radius + (isTargeted ? 8 : 4), 0, Math.PI * 2);
        ctx.fillStyle = isTargeted ? "rgba(6, 182, 212, 0.25)" : "rgba(255, 255, 255, 0.04)";
        ctx.fill();

        // Node circle
        ctx.beginPath();
        ctx.arc(nx, ny, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = isCore ? "#0e1e2d" : "#09121d";
        ctx.strokeStyle = isTargeted ? "#06b6d4" : node.color;
        ctx.lineWidth = isTargeted ? 2.5 : 1.5;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = isTargeted ? 15 : 6;
        ctx.fill();
        ctx.stroke();

        // Label
        ctx.font = isCore ? "bold 10px 'JetBrains Mono', monospace" : "9px 'Inter', sans-serif";
        ctx.fillStyle = isTargeted ? "#38bdf8" : "#cbd5e1";
        ctx.textAlign = "center";
        ctx.shadowBlur = 0;
        ctx.fillText(node.name, nx, ny + node.radius + 14);
      });
    };

    render();

    return () => cancelAnimationFrame(reqId);
  }, [currentUrl, isCrawling]);

  return (
    <div className="relative bg-[#070b14] border border-slate-800/90 rounded-xl p-3 flex flex-col gap-2 overflow-hidden shadow-inner">
      <div className="flex items-center justify-between font-mono text-[11px]">
        <div className="flex items-center gap-1.5 text-cyan-400 font-bold">
          <Radio className="w-3.5 h-3.5 animate-pulse" />
          <span>LIVE WEBCMD CRAWL MESH (6 NODES)</span>
        </div>
        <span className="text-[10px] text-slate-500">Autonomous Web Stream</span>
      </div>

      <div className="relative w-full h-[180px]">
        <canvas
          ref={canvasRef}
          width={460}
          height={180}
          className="w-full h-full block rounded-lg cursor-crosshair"
        />
      </div>
    </div>
  );
}
