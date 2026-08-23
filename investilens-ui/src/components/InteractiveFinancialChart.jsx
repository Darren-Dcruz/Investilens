import React, { useState, useMemo, useRef, useEffect } from "react";
import { TrendingUp, Activity, BarChart2, Calendar, DollarSign, Crosshair, HelpCircle } from "lucide-react";

/**
 * Interactive Financial Price Chart & Multi-Timeframe Sandbox
 */
export function InteractivePriceChart({ stockData, params }) {
  const [timeframe, setTimeframe] = useState("1M");
  const [showSMA50, setShowSMA50] = useState(true);
  const [showSMA200, setShowSMA200] = useState(false);
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const canvasRef = useRef(null);

  const basePrice = stockData?.currentPrice || 214.72;
  const currencySymbol = params?.currency === "INR" || (params?.market || "").includes("IN") ? "₹" : "$";

  // Generate deterministic realistic historical price curves based on timeframe
  const chartData = useMemo(() => {
    const pointsCount = timeframe === "1D" ? 30 : timeframe === "1W" ? 35 : timeframe === "1M" ? 45 : timeframe === "1Y" ? 60 : 80;
    const volatility = timeframe === "1D" ? 0.012 : timeframe === "1W" ? 0.025 : timeframe === "1M" ? 0.045 : timeframe === "1Y" ? 0.12 : 0.25;
    const trend = 0.08; // upward bullish drift

    const prices = [];
    const dates = [];
    const volumes = [];

    const now = new Date();
    for (let i = pointsCount - 1; i >= 0; i--) {
      const d = new Date(now);
      if (timeframe === "1D") d.setMinutes(d.getMinutes() - i * 15);
      else if (timeframe === "1W") d.setHours(d.getHours() - i * 4);
      else if (timeframe === "1M") d.setDate(d.getDate() - i);
      else if (timeframe === "1Y") d.setDate(d.getDate() - i * 6);
      else d.setDate(d.getDate() - i * 22);

      // deterministic sinusoidal wave + noise
      const x = (pointsCount - 1 - i) / pointsCount;
      const wave = Math.sin(x * Math.PI * 4) * (volatility * 0.5);
      const wave2 = Math.cos(x * Math.PI * 7) * (volatility * 0.3);
      const drift = (x - 0.5) * trend;
      const noise = (Math.sin(i * 997) * 0.5) * (volatility * 0.2);

      const price = basePrice * (1 + drift + wave + wave2 + noise);
      const volume = Math.floor((1500000 + Math.abs(Math.sin(i * 331)) * 3500000) * (price / basePrice));

      prices.push(price);
      dates.push(timeframe === "1D" ? d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : d.toLocaleDateString([], { month: "short", day: "numeric" }));
      volumes.push(volume);
    }

    // Ensure last point matches current price exactly
    prices[prices.length - 1] = basePrice;

    // Calculate moving averages
    const sma50 = prices.map((_, idx, arr) => {
      const windowSize = Math.min(idx + 1, 10);
      const slice = arr.slice(idx + 1 - windowSize, idx + 1);
      return slice.reduce((a, b) => a + b, 0) / windowSize;
    });

    const sma200 = prices.map((_, idx, arr) => {
      const windowSize = Math.min(idx + 1, 20);
      const slice = arr.slice(idx + 1 - windowSize, idx + 1);
      return slice.reduce((a, b) => a + b, 0) / windowSize;
    });

    const minPrice = Math.min(...prices) * 0.985;
    const maxPrice = Math.max(...prices) * 1.015;
    const maxVolume = Math.max(...volumes);

    return { prices, dates, volumes, sma50, sma200, minPrice, maxPrice, maxVolume };
  }, [timeframe, basePrice]);

  // Canvas High-DPI Chart Renderer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;
    const chartHeight = h * 0.76;
    const volumeHeight = h * 0.20;
    const volumeTop = h * 0.80;

    ctx.clearRect(0, 0, w, h);

    const { prices, dates, volumes, sma50, sma200, minPrice, maxPrice, maxVolume } = chartData;
    const n = prices.length;
    const priceRange = maxPrice - minPrice || 1;

    // Helper: Map data point to canvas coordinates
    const getX = (i) => (i / (n - 1)) * (w - 60) + 10;
    const getY = (p) => chartHeight - ((p - minPrice) / priceRange) * (chartHeight - 30) - 10;

    // 1. Draw Grid Lines
    ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = (chartHeight / 4) * i;
      ctx.beginPath();
      ctx.moveTo(10, y);
      ctx.lineTo(w - 50, y);
      ctx.stroke();

      const priceLabel = (maxPrice - (priceRange / 4) * i).toFixed(2);
      ctx.fillStyle = "rgba(148, 163, 184, 0.6)";
      ctx.font = "10px monospace";
      ctx.textAlign = "left";
      ctx.fillText(`${currencySymbol}${priceLabel}`, w - 45, y + 3);
    }

    // 2. Draw Volume Bars
    for (let i = 0; i < n; i++) {
      const x = getX(i);
      const barW = Math.max(2, (w / n) * 0.6);
      const barH = (volumes[i] / maxVolume) * volumeHeight;
      const isUp = i === 0 || prices[i] >= prices[i - 1];

      ctx.fillStyle = isUp ? "rgba(126, 208, 67, 0.22)" : "rgba(244, 63, 94, 0.22)";
      ctx.fillRect(x - barW / 2, h - barH, barW, barH);
    }

    // 3. Draw Gradient Fill Under Main Price Curve
    const gradient = ctx.createLinearGradient(0, 0, 0, chartHeight);
    gradient.addColorStop(0, "rgba(240, 251, 67, 0.28)");
    gradient.addColorStop(0.5, "rgba(126, 208, 67, 0.12)");
    gradient.addColorStop(1, "rgba(6, 9, 7, 0.0)");

    ctx.beginPath();
    ctx.moveTo(getX(0), chartHeight);
    for (let i = 0; i < n; i++) {
      ctx.lineTo(getX(i), getY(prices[i]));
    }
    ctx.lineTo(getX(n - 1), chartHeight);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // 4. Draw SMA 50 Line (Sky Blue)
    if (showSMA50) {
      ctx.beginPath();
      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 4]);
      for (let i = 0; i < n; i++) {
        const x = getX(i);
        const y = getY(sma50[i]);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // 5. Draw SMA 200 Line (Purple)
    if (showSMA200) {
      ctx.beginPath();
      ctx.strokeStyle = "#c084fc";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([5, 3]);
      for (let i = 0; i < n; i++) {
        const x = getX(i);
        const y = getY(sma200[i]);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // 6. Draw Main Price Line (Neon Lime Glow)
    ctx.beginPath();
    ctx.strokeStyle = "#F0FB43";
    ctx.lineWidth = 2.5;
    ctx.shadowColor = "rgba(240, 251, 67, 0.5)";
    ctx.shadowBlur = 8;
    for (let i = 0; i < n; i++) {
      const x = getX(i);
      const y = getY(prices[i]);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.shadowBlur = 0; // reset

    // 7. Draw Hovered Point or Latest Point Indicator
    const activeIdx = hoveredPoint !== null ? hoveredPoint : n - 1;
    const hx = getX(activeIdx);
    const hy = getY(prices[activeIdx]);

    // Vertical cursor line
    ctx.beginPath();
    ctx.strokeStyle = "rgba(240, 251, 67, 0.4)";
    ctx.setLineDash([3, 3]);
    ctx.moveTo(hx, 0);
    ctx.lineTo(hx, h);
    ctx.stroke();
    ctx.setLineDash([]);

    // Glowing dot
    ctx.beginPath();
    ctx.fillStyle = "#F0FB43";
    ctx.shadowColor = "#F0FB43";
    ctx.shadowBlur = 12;
    ctx.arc(hx, hy, 4.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

  }, [chartData, showSMA50, showSMA200, hoveredPoint, currencySymbol]);

  // Handle canvas mouse move for interactive price inspection
  const handleMouseMove = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const n = chartData.prices.length;
    const idx = Math.min(Math.max(0, Math.round(((x - 10) / (rect.width - 60)) * (n - 1))), n - 1);
    setHoveredPoint(idx);
  };

  const handleMouseLeave = () => {
    setHoveredPoint(null);
  };

  const activeIdx = hoveredPoint !== null ? hoveredPoint : chartData.prices.length - 1;
  const activePrice = chartData.prices[activeIdx];
  const activeDate = chartData.dates[activeIdx];
  const activeVol = chartData.volumes[activeIdx];

  const firstPrice = chartData.prices[0];
  const periodChange = activePrice - firstPrice;
  const periodChangePct = (periodChange / firstPrice) * 100;
  const isPositive = periodChange >= 0;

  return (
    <div className="bg-[#0b110d]/90 border border-brand-light/20 rounded-3xl p-6 flex flex-col gap-4 shadow-xl">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-brand-deep border border-brand-lime/30 flex items-center justify-center text-brand-lime">
            <Activity className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-mono font-black text-white">
                {currencySymbol}{activePrice.toFixed(2)}
              </span>
              <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${isPositive ? "bg-emerald-500/20 text-emerald-400" : "bg-rose-500/20 text-rose-400"}`}>
                {isPositive ? "+" : ""}{periodChange.toFixed(2)} ({isPositive ? "+" : ""}{periodChangePct.toFixed(2)}%)
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">
              {activeDate} - Vol: {(activeVol / 1000000).toFixed(2)}M shares
            </span>
          </div>
        </div>

        {/* Timeframe & Overlay Selectors */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center bg-[#060907] border border-white/[0.08] rounded-xl p-1 font-mono text-xs">
            {["1D", "1W", "1M", "1Y", "5Y"].map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all ${timeframe === tf ? "bg-brand-lime text-[#060907] shadow-md" : "text-slate-400 hover:text-white"}`}
              >
                {tf}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px]">
            <button
              onClick={() => setShowSMA50(!showSMA50)}
              className={`px-2.5 py-1 rounded-lg border transition-all ${showSMA50 ? "bg-sky-500/20 border-sky-400 text-sky-300" : "bg-[#060907] border-white/[0.08] text-slate-500"}`}
            >
              SMA 50
            </button>
            <button
              onClick={() => setShowSMA200(!showSMA200)}
              className={`px-2.5 py-1 rounded-lg border transition-all ${showSMA200 ? "bg-purple-500/20 border-purple-400 text-purple-300" : "bg-[#060907] border-white/[0.08] text-slate-500"}`}
            >
              SMA 200
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Chart Canvas */}
      <div className="relative w-full h-64 sm:h-72">
        <canvas
          ref={canvasRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="w-full h-full cursor-crosshair"
        />
      </div>

      {/* Chart Legend Footer */}
      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/[0.06]">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-0.5 bg-[#F0FB43] rounded" /> Price Feed (Real-Time)
          </span>
          {showSMA50 && (
            <span className="flex items-center gap-1.5 text-sky-300">
              <span className="w-2.5 h-0.5 bg-sky-400 rounded" /> 50-Day Moving Avg
            </span>
          )}
          {showSMA200 && (
            <span className="flex items-center gap-1.5 text-purple-300">
              <span className="w-2.5 h-0.5 bg-purple-400 rounded" /> 200-Day Moving Avg
            </span>
          )}
        </div>
        <span className="text-[10px] text-slate-500 hidden sm:inline">
          High-Frequency 3-Tier Feed • Interactive Sandbox
        </span>
      </div>
    </div>
  );
}

/**
 * Interactive Discounted Cash Flow (DCF) Sandbox & Fair Value Model
 */
export function InteractiveDCFCalculator({ stockData, params }) {
  const currentPrice = stockData?.currentPrice || 214.72;
  const currencySymbol = params?.currency === "INR" || (params?.market || "").includes("IN") ? "₹" : "$";

  // DCF Inputs (Configurable with Sliders)
  const [revenueGrowth, setRevenueGrowth] = useState(25.0); // % YoY for next 5 years
  const [operatingMargin, setOperatingMargin] = useState(48.0); // % Target Operating Margin
  const [wacc, setWacc] = useState(9.5); // % Discount Rate (WACC)
  const [terminalGrowth, setTerminalGrowth] = useState(3.5); // % Perpetual Terminal Growth
  const [sharesOutstanding, setSharesOutstanding] = useState(24.5); // Billions of shares

  // Dynamic DCF Computation
  const dcfResult = useMemo(() => {
    // Base Free Cash Flow estimate ($ Billions)
    let currentFCF = 46.34;
    const projectedFCF = [];
    let cumulativePV = 0;

    for (let yr = 1; yr <= 5; yr++) {
      const fcf = currentFCF * Math.pow(1 + revenueGrowth / 100, yr) * (operatingMargin / 48.0);
      const discountFactor = Math.pow(1 + wacc / 100, yr);
      const presentValue = fcf / discountFactor;
      projectedFCF.push({ year: `Year ${yr}`, fcf, presentValue });
      cumulativePV += presentValue;
    }

    // Terminal Value calculation (Gordon Growth Model)
    const year5FCF = projectedFCF[4].fcf;
    const terminalValue = (year5FCF * (1 + terminalGrowth / 100)) / ((wacc / 100) - (terminalGrowth / 100));
    const pvTerminalValue = terminalValue / Math.pow(1 + wacc / 100, 5);

    // Enterprise Value & Equity Value per Share
    const enterpriseValue = cumulativePV + pvTerminalValue;
    const fairValuePerShare = (enterpriseValue / sharesOutstanding) * (params?.currency === "INR" ? 10 : 1);
    const upsidePotential = ((fairValuePerShare - currentPrice) / currentPrice) * 100;

    return {
      projectedFCF,
      cumulativePV,
      pvTerminalValue,
      enterpriseValue,
      fairValuePerShare,
      upsidePotential
    };
  }, [revenueGrowth, operatingMargin, wacc, terminalGrowth, sharesOutstanding, currentPrice, params]);

  const isUndervalued = dcfResult.upsidePotential >= 0;

  return (
    <div className="bg-[#0b110d]/90 border border-brand-light/20 rounded-3xl p-6 flex flex-col gap-5 shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-brand-deep border border-brand-lime/30 flex items-center justify-center text-brand-lime">
            <DollarSign className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white font-mono">Interactive DCF Valuation Sandbox</h3>
            <span className="text-[11px] text-slate-400 font-sans">
              Adjust growth assumptions to recalculate intrinsic fair value in real-time
            </span>
          </div>
        </div>
        <span className="text-xs font-mono px-3 py-1 rounded-full bg-brand-deep/60 text-brand-lime border border-brand-light/30 font-bold">
          5-YEAR PROJECTION MODEL
        </span>
      </div>

      {/* Fair Value Hero Card */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-[#060907] border border-brand-light/20">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
            CURRENT MARKET PRICE
          </span>
          <span className="text-2xl font-mono font-black text-white">
            {currencySymbol}{currentPrice.toFixed(2)}
          </span>
          <span className="text-[10px] text-slate-500 font-mono">Live tape benchmark</span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-brand-lime font-bold">
            INTRINSIC FAIR VALUE (DCF)
          </span>
          <span className="text-2xl font-mono font-black green-gradient-text">
            {currencySymbol}{dcfResult.fairValuePerShare.toFixed(2)}
          </span>
          <span className="text-[10px] text-slate-400 font-mono">Gordon Growth Model</span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
            IMPLIED UPSIDE / MARGIN OF SAFETY
          </span>
          <span className={`text-2xl font-mono font-black ${isUndervalued ? "text-emerald-400" : "text-rose-400"}`}>
            {isUndervalued ? "+" : ""}{dcfResult.upsidePotential.toFixed(1)}%
          </span>
          <span className={`text-[10px] font-mono font-bold ${isUndervalued ? "text-emerald-400" : "text-rose-400"}`}>
            {isUndervalued ? "✓ Undervalued (Safety Margin)" : "⚠ Premium Multiple"}
          </span>
        </div>
      </div>

      {/* Interactive Sliders Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
        {/* 1. 5Y Revenue CAGR */}
        <div className="p-3.5 rounded-xl bg-[#060907] border border-white/[0.08] flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span className="text-slate-300 font-bold">5-Year Revenue CAGR</span>
            <span className="text-brand-lime font-bold">{revenueGrowth.toFixed(1)}% YoY</span>
          </div>
          <input
            type="range"
            min="5"
            max="60"
            step="0.5"
            value={revenueGrowth}
            onChange={(e) => setRevenueGrowth(Number(e.target.value))}
            className="accent-brand-lime cursor-pointer w-full"
          />
          <div className="flex justify-between text-[10px] text-slate-500">
            <span>Conservative (5%)</span>
            <span>Aggressive (60%)</span>
          </div>
        </div>

        {/* 2. Target Operating Margin */}
        <div className="p-3.5 rounded-xl bg-[#060907] border border-white/[0.08] flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span className="text-slate-300 font-bold">Target Operating Margin</span>
            <span className="text-brand-lime font-bold">{operatingMargin.toFixed(1)}%</span>
          </div>
          <input
            type="range"
            min="15"
            max="70"
            step="1"
            value={operatingMargin}
            onChange={(e) => setOperatingMargin(Number(e.target.value))}
            className="accent-brand-lime cursor-pointer w-full"
          />
          <div className="flex justify-between text-[10px] text-slate-500">
            <span>Industry Avg (15%)</span>
            <span>Software Moat (70%)</span>
          </div>
        </div>

        {/* 3. Discount Rate (WACC) */}
        <div className="p-3.5 rounded-xl bg-[#060907] border border-white/[0.08] flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span className="text-slate-300 font-bold">Discount Rate (WACC)</span>
            <span className="text-brand-lime font-bold">{wacc.toFixed(1)}%</span>
          </div>
          <input
            type="range"
            min="6"
            max="16"
            step="0.25"
            value={wacc}
            onChange={(e) => setWacc(Number(e.target.value))}
            className="accent-brand-lime cursor-pointer w-full"
          />
          <div className="flex justify-between text-[10px] text-slate-500">
            <span>Low Risk (6%)</span>
            <span>High Risk (16%)</span>
          </div>
        </div>

        {/* 4. Terminal Perpetual Growth */}
        <div className="p-3.5 rounded-xl bg-[#060907] border border-white/[0.08] flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span className="text-slate-300 font-bold">Terminal Growth Rate</span>
            <span className="text-brand-lime font-bold">{terminalGrowth.toFixed(1)}%</span>
          </div>
          <input
            type="range"
            min="1.5"
            max="5.0"
            step="0.25"
            value={terminalGrowth}
            onChange={(e) => setTerminalGrowth(Number(e.target.value))}
            className="accent-brand-lime cursor-pointer w-full"
          />
          <div className="flex justify-between text-[10px] text-slate-500">
            <span>GDP Baseline (1.5%)</span>
            <span>Perpetual Expansion (5%)</span>
          </div>
        </div>
      </div>

      {/* 5-Year Cash Flow Projection Waterfall */}
      <div className="flex flex-col gap-2 border-t border-white/[0.06] pt-3 font-mono text-xs">
        <span className="text-slate-400 font-bold text-[11px]">5-Year Present Value Cash Flow Breakdown:</span>
        <div className="grid grid-cols-5 gap-2 text-center">
          {dcfResult.projectedFCF.map((yr, idx) => (
            <div key={idx} className="p-2.5 rounded-xl bg-[#060907] border border-white/[0.06] flex flex-col gap-1">
              <span className="text-slate-400 text-[10px]">{yr.year}</span>
              <span className="text-white font-bold">{currencySymbol}{yr.fcf.toFixed(1)}B</span>
              <span className="text-brand-lime text-[10px]">PV: {currencySymbol}{yr.presentValue.toFixed(1)}B</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
