export interface SourceDefinition {
  id: string;
  name: string;
  category: "market_data" | "financials" | "news" | "exchange" | "macro";
  baseUrl: string;
  buildStockUrl?: (ticker: string, market?: string) => string;
  buildNewsUrl?: (ticker: string, company?: string) => string;
  description: string;
  supportsScraping: boolean;
}

export const APPROVED_SOURCES: Record<string, SourceDefinition> = {
  yahoo_finance: {
    id: "yahoo_finance",
    name: "Yahoo Finance",
    category: "market_data",
    baseUrl: "https://finance.yahoo.com",
    buildStockUrl: (ticker) => `https://finance.yahoo.com/quote/${ticker}/`,
    buildNewsUrl: (ticker) => `https://finance.yahoo.com/quote/${ticker}/news/`,
    description: "Real-time quotes, key statistics, financials, and aggregated news.",
    supportsScraping: true
  },
  google_finance: {
    id: "google_finance",
    name: "Google Finance",
    category: "market_data",
    baseUrl: "https://www.google.com/finance",
    buildStockUrl: (ticker, market) => {
      const exchange = market === "IN" ? "NSE" : "NASDAQ";
      return `https://www.google.com/finance/quote/${ticker}:${exchange}`;
    },
    description: "Fast multi-market quotes, interactive overview, and news feeds.",
    supportsScraping: true
  },
  nasdaq: {
    id: "nasdaq",
    name: "Nasdaq",
    category: "exchange",
    baseUrl: "https://www.nasdaq.com",
    buildStockUrl: (ticker) => `https://www.nasdaq.com/market-activity/stocks/${ticker.toLowerCase()}`,
    buildNewsUrl: (ticker) => `https://www.nasdaq.com/market-activity/stocks/${ticker.toLowerCase()}/news-headlines`,
    description: "Official exchange data, analyst consensus, earnings calendar, and company filings.",
    supportsScraping: true
  },
  marketwatch: {
    id: "marketwatch",
    name: "MarketWatch",
    category: "market_data",
    baseUrl: "https://www.marketwatch.com",
    buildStockUrl: (ticker) => `https://www.marketwatch.com/investing/stock/${ticker.toLowerCase()}`,
    buildNewsUrl: (ticker) => `https://www.marketwatch.com/investing/stock/${ticker.toLowerCase()}?mod=search_symbol`,
    description: "Detailed valuation, financial statements, and market analysis.",
    supportsScraping: true
  },
  cnbc: {
    id: "cnbc",
    name: "CNBC",
    category: "news",
    baseUrl: "https://www.cnbc.com",
    buildStockUrl: (ticker) => `https://www.cnbc.com/quotes/${ticker}`,
    buildNewsUrl: (ticker, company) => `https://www.cnbc.com/quotes/${ticker}?tab=news`,
    description: "Breaking business news, market commentary, and executive interviews.",
    supportsScraping: true
  },
  reuters: {
    id: "reuters",
    name: "Reuters",
    category: "news",
    baseUrl: "https://www.reuters.com/markets",
    buildStockUrl: (ticker) => `https://www.reuters.com/markets/companies/${ticker}.O`,
    buildNewsUrl: (ticker, company) => `https://www.reuters.com/site-search/?query=${encodeURIComponent(company || ticker)}`,
    description: "Global financial journalism, macro analysis, and objective corporate reporting.",
    supportsScraping: true
  },
  investing_com: {
    id: "investing_com",
    name: "Investing.com",
    category: "market_data",
    baseUrl: "https://www.investing.com",
    buildStockUrl: (ticker) => `https://www.investing.com/search/?q=${ticker}`,
    description: "Comprehensive financial instruments, technical indicators, and ratios.",
    supportsScraping: true
  },
  marketscreener: {
    id: "marketscreener",
    name: "MarketScreener",
    category: "financials",
    baseUrl: "https://www.marketscreener.com",
    buildStockUrl: (ticker) => `https://www.marketscreener.com/quote/stock/${ticker}/`,
    description: "Deep fundamental analysis, consensus estimates, and financial health metrics.",
    supportsScraping: true
  },
  nse_india: {
    id: "nse_india",
    name: "NSE India",
    category: "exchange",
    baseUrl: "https://www.nseindia.com",
    buildStockUrl: (ticker) => `https://www.nseindia.com/get-quotes/equity?symbol=${encodeURIComponent(ticker)}`,
    description: "National Stock Exchange of India official market feed and corporate filings.",
    supportsScraping: true
  },
  bse_india: {
    id: "bse_india",
    name: "BSE India",
    category: "exchange",
    baseUrl: "https://www.bseindia.com",
    buildStockUrl: (ticker) => `https://www.bseindia.com/stock-share-price/equity/${encodeURIComponent(ticker)}`,
    description: "Bombay Stock Exchange official quotes, corporate announcements, and circulars.",
    supportsScraping: true
  },
  wsj: {
    id: "wsj",
    name: "The Wall Street Journal",
    category: "news",
    baseUrl: "https://www.wsj.com",
    buildStockUrl: (ticker) => `https://www.wsj.com/market-data/quotes/${ticker}`,
    buildNewsUrl: (ticker, company) => `https://www.wsj.com/search?q=${encodeURIComponent(company || ticker)}`,
    description: "In-depth investigative journalism, economic analysis, and executive commentary.",
    supportsScraping: false
  },
  financial_times: {
    id: "financial_times",
    name: "Financial Times",
    category: "news",
    baseUrl: "https://www.ft.com",
    buildStockUrl: (ticker) => `https://markets.ft.com/data/equities/tearsheet/summary?s=${ticker}`,
    description: "Global business perspective and capital market reporting.",
    supportsScraping: false
  }
};

/**
 * Returns prioritized sources based on the market
 * Currently configured for single focused source: Reuters Markets Desk
 */
export function getRecommendedSourcesForMarket(market: string = "US"): SourceDefinition[] {
  return [
    APPROVED_SOURCES.reuters
  ];
}
