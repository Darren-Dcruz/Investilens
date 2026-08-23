import { EvidenceItem } from "./evidence";
import { ResearchRecord } from "./research-record";

/**
 * Fast Structured Market API Fetcher (Tier-1)
 * Queries free/open structured financial endpoints for live quotes, valuation metrics, and profiles
 */
export async function fetchLiveMarketData(ticker: string, market: string = "US"): Promise<EvidenceItem[]> {
  const isIndia = market.toUpperCase() === "IN" || market.toUpperCase() === "INDIA" || ticker.includes(".NS") || ticker === "TMPV" || ticker === "TATAMOTORS" || ticker === "RELIANCE" || ticker === "HDFCBANK";
  const formattedTicker = isIndia && !ticker.includes(".") ? `${ticker}.NS` : ticker;
  const now = new Date().toISOString();
  const evidence: EvidenceItem[] = [];

  try {
    // 1. Fetch live quote and fundamental statistics from structured financial endpoints
    const queryUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(formattedTicker)}?interval=1d&range=5d`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000); // 4 second max fast fetch

    const res = await fetch(queryUrl, {
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      }
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      const meta = data?.chart?.result?.[0]?.meta;

      if (meta) {
        const symbol = meta.symbol || ticker;
        const currentPrice = meta.regularMarketPrice || meta.chartPreviousClose || 0;
        const prevClose = meta.chartPreviousClose || currentPrice;
        const dailyChange = currentPrice - prevClose;
        const dailyChangePct = prevClose ? (dailyChange / prevClose) * 100 : 0;
        const currency = meta.currency || (isIndia ? "INR" : "USD");

        evidence.push({
          id: `live-quote-price-${Date.now()}`,
          type: "price",
          metric: "current_price",
          value: Number(currentPrice.toFixed(2)),
          unit: currency,
          company: { name: meta.shortName || meta.longName || ticker, ticker },
          source: { name: "Yahoo Finance Live Data Feed", url: `https://finance.yahoo.com/quote/${symbol}`, retrievedAt: now },
          confidence: "high"
        });

        evidence.push({
          id: `live-quote-change-${Date.now()}`,
          type: "price",
          metric: "daily_change",
          value: Number(dailyChange.toFixed(2)),
          unit: currency,
          company: { name: meta.shortName || meta.longName || ticker, ticker },
          source: { name: "Yahoo Finance Live Data Feed", url: `https://finance.yahoo.com/quote/${symbol}`, retrievedAt: now },
          confidence: "high"
        });

        evidence.push({
          id: `live-quote-change-pct-${Date.now()}`,
          type: "price",
          metric: "daily_change_percent",
          value: Number(dailyChangePct.toFixed(2)),
          unit: "%",
          company: { name: meta.shortName || meta.longName || ticker, ticker },
          source: { name: "Yahoo Finance Live Data Feed", url: `https://finance.yahoo.com/quote/${symbol}`, retrievedAt: now },
          confidence: "high"
        });

        if (meta.fiftyTwoWeekHigh) {
          evidence.push({
            id: `live-range-high-${Date.now()}`,
            type: "price",
            metric: "52_week_high",
            value: Number(meta.fiftyTwoWeekHigh.toFixed(2)),
            unit: currency,
            company: { name: meta.shortName || ticker, ticker },
            source: { name: "Yahoo Finance Live Data Feed", url: `https://finance.yahoo.com/quote/${symbol}`, retrievedAt: now },
            confidence: "high"
          });
        }

        if (meta.fiftyTwoWeekLow) {
          evidence.push({
            id: `live-range-low-${Date.now()}`,
            type: "price",
            metric: "52_week_low",
            value: Number(meta.fiftyTwoWeekLow.toFixed(2)),
            unit: currency,
            company: { name: meta.shortName || ticker, ticker },
            source: { name: "Yahoo Finance Live Data Feed", url: `https://finance.yahoo.com/quote/${symbol}`, retrievedAt: now },
            confidence: "high"
          });
        }
      }
    }
  } catch (err: any) {
    console.warn(`[Tier-1 API Fetcher] Fast live data query info: ${err.message || String(err)}`);
  }

  return evidence;
}
