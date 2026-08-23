const WATCHLIST_STORAGE_KEY = "investilens_saved_watchlist_v1";

/**
 * Loads the user's saved research watchlist from LocalStorage
 */
export function getSavedWatchlist() {
  try {
    const raw = localStorage.getItem(WATCHLIST_STORAGE_KEY);
    if (!raw) {
      // Default sample portfolio items for immediate demo value
      return [
        {
          id: "saved-nvda",
          name: "NVIDIA Corp.",
          ticker: "NVDA",
          exchange: "NASDAQ",
          sector: "Semiconductors & AI Compute",
          currentPrice: 214.72,
          priceChange: "-0.98%",
          marketCap: "$5.20T",
          pe: 33.2,
          score: 88,
          rating: "Strong Bullish",
          confidence: "HIGH",
          savedAt: new Date(Date.now() - 3600000 * 2).toLocaleDateString(),
          alerts: "Upcoming Q3 Earnings Disclosure"
        },
        {
          id: "saved-tatamotors",
          name: "Tata Motors Ltd.",
          ticker: "TATAMOTORS",
          exchange: "NSE India",
          sector: "Automotive & EV",
          currentPrice: 317.90,
          priceChange: "-0.73%",
          marketCap: "₹3.17T",
          pe: 37.1,
          score: 84,
          rating: "Bullish",
          confidence: "HIGH",
          savedAt: new Date(Date.now() - 3600000 * 24).toLocaleDateString(),
          alerts: "70% EV Passenger Car Dominance"
        }
      ];
    }
    return JSON.parse(raw);
  } catch (err) {
    console.warn("Watchlist parse error:", err);
    return [];
  }
}

/**
 * Saves a new stock research report into persistent LocalStorage
 */
export function saveStockToWatchlist(stockData, calculated, params) {
  try {
    const current = getSavedWatchlist();
    const existingIdx = current.findIndex(item => item.ticker === stockData.ticker);

    const newEntry = {
      id: `saved-${stockData.ticker.toLowerCase()}-${Date.now()}`,
      name: stockData.name,
      ticker: stockData.ticker,
      exchange: stockData.exchange || "US/IN",
      sector: stockData.sector,
      currentPrice: stockData.currentPrice,
      priceChange: stockData.priceChange || "+0.0%",
      marketCap: stockData.marketCap || "$50B",
      pe: stockData.trailingPe || 28.0,
      score: calculated?.finalScore || stockData.scores?.overallScore || 85,
      rating: calculated?.profileVerdict || "Bullish",
      confidence: "HIGH",
      savedAt: new Date().toLocaleDateString(),
      alerts: stockData.upcomingEvents?.[0]?.title || "Normal Trading Cycle",
      params: params || {}
    };

    if (existingIdx >= 0) {
      current[existingIdx] = newEntry; // update
    } else {
      current.unshift(newEntry); // prepend
    }

    localStorage.setItem(WATCHLIST_STORAGE_KEY, JSON.stringify(current));
    return current;
  } catch (err) {
    console.warn("Error saving to watchlist:", err);
    return [];
  }
}

/**
 * Removes a stock from the saved watchlist
 */
export function removeStockFromWatchlist(ticker) {
  try {
    const current = getSavedWatchlist();
    const filtered = current.filter(item => item.ticker !== ticker);
    localStorage.setItem(WATCHLIST_STORAGE_KEY, JSON.stringify(filtered));
    return filtered;
  } catch (err) {
    console.warn("Error removing from watchlist:", err);
    return [];
  }
}
