export const MOCK_STOCKS = {
  HDFC_BANK: {
    ticker: "HDFCBANK",
    exchange: "NSE / BSE",
    market: "India",
    name: "HDFC Bank Ltd.",
    sector: "Banking & Financial Services",
    currency: "INR",
    currentPrice: 1724.50,
    priceChange: "+1.42%",
    iconType: "bank",
    summary: "India's largest private sector bank by assets, boasting an extensive nationwide branch network, industry-leading low-cost CASA deposit base, and solid post-merger integration trajectory.",
    
    scores: {
      financialHealth: 88,
      growthPotential: 84,
      historicalPerformance: 86,
      valuation: 78,
      debtLeverage: 82,
      newsEvents: 85,
      riskProfile: 80
    },
    
    overallScore: 84,
    evidenceConfidence: "HIGH",
    sourcesCount: 6,
    researchStatus: "Strong Research Profile",
    disclaimer: "This research assessment is generated via multi-source web cross-verification for decision-support purposes only. It does not constitute investment advice or order execution.",
    
    evidence: [
      {
        id: "ev-1",
        claim: "Q3 Net Interest Income (NII) grew 11.2% YoY with Net Interest Margin (NIM) stabilizing at 3.46%",
        sourceA: { name: "HDFC Bank Q3 Financial Disclosure", type: "Official Filing", url: "https://hdfcbank.com/investor-relations/q3-results", match: true },
        sourceB: { name: "Screener.in Verified Financials", type: "Financial Platform", url: "https://screener.in/company/HDFCBANK", match: true },
        confidence: "HIGH",
        status: "VERIFIED",
        metric: "NII & NIM",
        discrepancy: null
      },
      {
        id: "ev-2",
        claim: "Gross Non-Performing Assets (GNPA) maintained at low 1.36%, Net NPA at 0.38%",
        sourceA: { name: "BSE Regulatory Filing (XBRL)", type: "Regulatory", url: "https://bseindia.com/filings/hdfcbank", match: true },
        sourceB: { name: "Moneycontrol Banking Audit", type: "Financial News", url: "https://moneycontrol.com/india/stockpricequote/banks-private/hdfcbank", match: true },
        confidence: "HIGH",
        status: "VERIFIED",
        metric: "Asset Quality",
        discrepancy: null
      },
      {
        id: "ev-3",
        claim: "Deposit growth outpaced credit growth at 15.1% YoY to rebalance Credit-to-Deposit (CD) ratio",
        sourceA: { name: "RBI Banking Statistics Bulletin", type: "Regulatory / Central Bank", url: "https://rbi.org.in/bulletin", match: true },
        sourceB: { name: "Reuters India Financial Desk", type: "News Agency", url: "https://reuters.com/business/finance/hdfc-bank-q3", match: true },
        confidence: "HIGH",
        status: "VERIFIED",
        metric: "Liquidity & CD Ratio",
        discrepancy: "Minor 0.2% variance in foreign currency deposit calculation between RBI and bank disclosure"
      },
      {
        id: "ev-4",
        claim: "Consolidated Return on Assets (RoA) at 1.95% and Return on Equity (RoE) normalized at 15.8%",
        sourceA: { name: "Annual Report FY2025 Extract", type: "Annual Report", url: "https://hdfcbank.com/annual-reports", match: true },
        sourceB: { name: "Tickertape Financial Engine", type: "Data Provider", url: "https://tickertape.in/stocks/hdfc-bank", match: true },
        confidence: "HIGH",
        status: "VERIFIED",
        metric: "Profitability",
        discrepancy: null
      }
    ],
    
    bullCase: [
      {
        title: "Post-Merger Synergies Accelerating",
        desc: "Cross-selling mortgage loans to the legacy 90M+ HDFC Bank customer base is ramping up, yielding lower customer acquisition costs.",
        impact: "HIGH",
        source: "Annual Report & Management Call"
      },
      {
        title: "Market-Leading CASA Ratio",
        desc: "Maintains a robust low-cost deposit ratio of ~37.7%, insulating the bank from rapid central bank repo rate spikes.",
        impact: "HIGH",
        source: "RBI Disclosure"
      },
      {
        title: "Prudent Underwriting & Clean Balance Sheet",
        desc: "Consistently lowest provision cost among major emerging market tier-1 lenders with Gross NPAs below 1.4%.",
        impact: "MEDIUM",
        source: "Moneycontrol & Screener"
      }
    ],
    
    bearCase: [
      {
        title: "Credit-to-Deposit (CD) Ratio Pressure",
        desc: "CD ratio remaining elevated (~100%) post-HDFC Ltd merger forces aggressive branch deposit mobilization, which may compress NIMs temporarily.",
        impact: "HIGH",
        source: "Motilal Oswal & Reuters"
      },
      {
        title: "FII Outflow Sensitivity",
        desc: "High foreign institutional ownership (>52%) exposes the stock to global macroeconomic liquidity shifts and currency fluctuations.",
        impact: "MEDIUM",
        source: "Trendlyne Institutional Tracker"
      },
      {
        title: "Fintech Disruption in Retail Payments",
        desc: "Intensified competition from UPI payment aggregators for fee-based transactional income.",
        impact: "LOW",
        source: "Economic Times Fintech Review"
      }
    ],
    
    newsSentiment: {
      positivePercent: 62,
      neutralPercent: 23,
      negativePercent: 15,
      totalArticlesParsed: 18,
      articles: [
        {
          headline: "HDFC Bank deposits grow 15.1% in Q3; loan growth steady at 12.8%",
          source: "LiveMint",
          date: "Yesterday",
          sentiment: "POSITIVE",
          impact: "HIGH",
          summary: "Aggressive branch expansion pays off as retail deposits accelerate, alleviating merger liquidity overhang."
        },
        {
          headline: "RBI relaxes certain liquidity coverage ratio guidelines for tier-1 banks",
          source: "Economic Times",
          date: "3 days ago",
          sentiment: "POSITIVE",
          impact: "MEDIUM",
          summary: "Provides operational breathing room for large private lenders managing credit rebalancing."
        },
        {
          headline: "Foreign institutional investors trim Indian banking exposure on bond yield movements",
          source: "Bloomberg",
          date: "5 days ago",
          sentiment: "NEGATIVE",
          impact: "MEDIUM",
          summary: "Short-term selling pressure observed across large-cap financial indices."
        },
        {
          headline: "HDFC Bank expands digital rural credit initiative across 10,000 new village hubs",
          source: "Business Standard",
          date: "1 week ago",
          sentiment: "NEUTRAL",
          impact: "LOW",
          summary: "Long-term priority sector lending fulfillment with neutral short-term earnings impact."
        }
      ]
    },
    
    upcomingEvents: [
      {
        title: "Q4 FY2026 Financial Results & Board Meeting",
        date: "April 18, 2026",
        significance: "HIGH",
        type: "Earnings",
        impact: "Crucial quarterly print on NIM stabilization and dividend announcement."
      },
      {
        title: "RBI Monetary Policy Committee (MPC) Rate Decision",
        date: "May 8, 2026",
        significance: "HIGH",
        type: "Macro / Regulatory",
        impact: "Determines cost of funds trajectory and loan repricing dynamics."
      },
      {
        title: "Annual Analyst & Investor Day Conference",
        date: "June 12, 2026",
        significance: "MEDIUM",
        type: "Corporate Event",
        impact: "Management guidance on 3-year digital transformation and subsidiary monetization."
      }
    ],
    
    hypotheticalAllocation: {
      totalBudget: "INR 50,000",
      strategy: "Balanced Core Compounder Strategy (3-5 Year Horizon)",
      allocations: [
        { asset: "HDFC Bank Ltd. (NSE: HDFCBANK)", amount: 22500, percent: 45, role: "Core Private Banking Pillar", rationale: "High asset quality, 15%+ steady compounding potential" },
        { asset: "Tata Motors Ltd. (NSE: TATAMOTORS)", amount: 12500, percent: 25, role: "Cyclical EV Growth Satellite", rationale: "EV market share & JLR cash flow momentum" },
        { asset: "Reliance Industries (NSE: RELIANCE)", amount: 10000, percent: 20, role: "Diversified Conglomerate Defense", rationale: "Telecom 5G cash cow + Retail ecosystem" },
        { asset: "Liquid Research Reserve (Overnight/Cash)", amount: 5000, percent: 10, role: "Tactical Volatility Buffer", rationale: "Dry powder for staged entry on dips" }
      ]
    },
    
    sourcesVisited: [
      { name: "Yahoo Finance (HDFCBANK.NS)", url: "https://finance.yahoo.com/quote/HDFCBANK.NS/", status: "200 OK", bytes: "142 KB", depth: 3 },
      { name: "NSE India Official Exchange", url: "https://www.nseindia.com/get-quotes/equity?symbol=HDFCBANK", status: "200 OK", bytes: "110 KB", depth: 2 },
      { name: "Google Finance India", url: "https://www.google.com/finance/quote/HDFCBANK:NSE", status: "200 OK", bytes: "88 KB", depth: 2 },
      { name: "Reuters India Markets", url: "https://www.reuters.com/markets/companies/HDBK.NS", status: "200 OK", bytes: "74 KB", depth: 1 },
      { name: "MarketWatch Global", url: "https://www.marketwatch.com/investing/stock/hdfcbank", status: "200 OK", bytes: "96 KB", depth: 2 }
    ]
  },
  
  NVIDIA: {
    ticker: "NVDA",
    exchange: "NASDAQ",
    market: "United States",
    name: "NVIDIA Corporation",
    sector: "Semiconductors & AI Compute",
    currency: "USD",
    currentPrice: 138.25,
    priceChange: "+3.18%",
    iconType: "chip",
    summary: "Dominant designer of high-performance graphics processing units (GPUs) and full-stack accelerated computing platforms powering the global generative AI revolution.",
    
    scores: {
      financialHealth: 94,
      growthPotential: 92,
      historicalPerformance: 96,
      valuation: 62,
      debtLeverage: 90,
      newsEvents: 88,
      riskProfile: 74
    },
    
    overallScore: 86,
    evidenceConfidence: "HIGH",
    sourcesCount: 7,
    researchStatus: "Strong Research Profile",
    disclaimer: "This research assessment is generated via multi-source web cross-verification for decision-support purposes only. It does not constitute investment advice or order execution.",
    
    evidence: [
      {
        id: "nv-1",
        claim: "Data Center segment revenue reached $30.8B in the quarter, representing 112% YoY hyper-expansion",
        sourceA: { name: "NVIDIA SEC 10-Q Quarterly Filing", type: "SEC Regulatory", url: "https://sec.gov/edgar/data/1045810", match: true },
        sourceB: { name: "Bloomberg Terminal Transcript", type: "Financial Data", url: "https://bloomberg.com/quote/NVDA:US", match: true },
        confidence: "HIGH",
        status: "VERIFIED",
        metric: "Data Center Compute Revenue",
        discrepancy: null
      }
    ],
    
    bullCase: [
      {
        title: "CUDA Moat & Software Ecosystem Monopoly",
        desc: "Over 5 million developers locked into NVIDIA's CUDA programming layer create high switching costs for hyperscalers.",
        impact: "HIGH",
        source: "Gartner AI Infrastructure Report"
      },
      {
        title: "Blackwell GPU Supercycle",
        desc: "Full order books across Microsoft Azure, AWS, Google Cloud, and Meta for Blackwell architectures.",
        impact: "HIGH",
        source: "Morgan Stanley Equity Research"
      }
    ],
    
    bearCase: [
      {
        title: "Hyperscaler Custom Silicon In-House Efforts",
        desc: "Custom ASICs (Google TPU, AWS Trainium, Meta MTIA) could erode long-term pricing power for inference workloads.",
        impact: "HIGH",
        source: "Semianalysis Research"
      },
      {
        title: "Elevated Valuation Multiples",
        desc: "Trading at premium multiples leaves less margin of safety if enterprise cloud capex growth moderates.",
        impact: "MEDIUM",
        source: "FactSet & Yahoo Finance"
      }
    ],
    
    newsSentiment: {
      positivePercent: 74,
      neutralPercent: 16,
      negativePercent: 10,
      totalArticlesParsed: 22,
      articles: [
        {
          headline: "NVIDIA Blackwell chips shipping at volume scale; enterprise demand accelerates",
          source: "CNBC",
          date: "Yesterday",
          sentiment: "POSITIVE",
          impact: "HIGH",
          summary: "Supply packaging yields improving ahead of target schedule."
        }
      ]
    },
    
    upcomingEvents: [
      {
        title: "GTC Global AI Conference Keynote",
        date: "March 18, 2026",
        significance: "HIGH",
        type: "Architecture Launch",
        impact: "Unveiling next-generation Rubin architecture roadmap."
      }
    ],
    
    hypotheticalAllocation: {
      totalBudget: "USD 10,000",
      strategy: "High-Growth AI Hardware Strategy",
      allocations: [
        { asset: "NVIDIA Corp (NASDAQ: NVDA)", amount: 4500, percent: 45, role: "Core AI Compute Anchor", rationale: "Leading GPU architecture" },
        { asset: "Microsoft Corp (NASDAQ: MSFT)", amount: 2500, percent: 25, role: "Enterprise Software Partner", rationale: "Azure infrastructure scale" },
        { asset: "TSMC (NYSE: TSM)", amount: 2000, percent: 20, role: "Foundry Manufacturer", rationale: "Exclusive advanced node supplier" },
        { asset: "Cash / Treasury Reserve", amount: 1000, percent: 10, role: "Capital Reserve", rationale: "Volatility buffer" }
      ]
    },
    
    sourcesVisited: [
      { name: "Yahoo Finance Live Multiples", url: "https://finance.yahoo.com/quote/NVDA/", status: "200 OK", bytes: "148 KB", depth: 3 },
      { name: "Nasdaq Official Market Activity", url: "https://www.nasdaq.com/market-activity/stocks/nvda", status: "200 OK", bytes: "175 KB", depth: 2 },
      { name: "Google Finance Overview", url: "https://www.google.com/finance/quote/NVDA:NASDAQ", status: "200 OK", bytes: "92 KB", depth: 2 },
      { name: "Reuters Markets Desk", url: "https://www.reuters.com/markets/companies/NVDA", status: "200 OK", bytes: "86 KB", depth: 2 },
      { name: "MarketWatch Financial Statements", url: "https://www.marketwatch.com/investing/stock/nvda", status: "200 OK", bytes: "115 KB", depth: 2 }
    ]
  },

  RELIANCE: {
    ticker: "RELIANCE",
    exchange: "NSE / BSE",
    market: "India",
    name: "Reliance Industries Ltd.",
    sector: "Oil-to-Chemicals, Telecom & Retail",
    currency: "INR",
    currentPrice: 2980.00,
    priceChange: "+0.85%",
    iconType: "energy",
    summary: "India's highest market-cap conglomerate with a trinity of cash-generating refining assets, telecom disruptor Jio, and nationwide retail leadership.",
    scores: {
      financialHealth: 85,
      growthPotential: 82,
      historicalPerformance: 84,
      valuation: 75,
      debtLeverage: 72,
      newsEvents: 80,
      riskProfile: 78
    },
    overallScore: 80,
    evidenceConfidence: "HIGH",
    sourcesCount: 5,
    researchStatus: "Strong Research Profile",
    disclaimer: "This research assessment is generated via multi-source web cross-verification for decision-support purposes only. It does not constitute investment advice or order execution.",
    evidence: [
      {
        id: "rel-1",
        claim: "Jio telecom ARPU increased to INR 182 with 5G standalone network coverage spanning all 22 circles",
        sourceA: { name: "RIL Investor Presentation Q3", type: "Official Filing", url: "https://ril.com/investors", match: true },
        sourceB: { name: "TRAI Telecom Monthly Report", type: "Regulatory", url: "https://trai.gov.in", match: true },
        confidence: "HIGH",
        status: "VERIFIED",
        metric: "Telecom ARPU & 5G Coverage",
        discrepancy: null
      }
    ],
    bullCase: [
      {
        title: "Potential Consumer Business Demergers",
        desc: "Anticipated value unlocking via standalone listings of retail and telecom arms.",
        impact: "HIGH",
        source: "Jefferies India Research"
      }
    ],
    bearCase: [
      {
        title: "Heavy Ongoing Capital Expenditures",
        desc: "Significant capex across green energy gigafactories keeps net debt-to-EBITDA slightly elevated.",
        impact: "MEDIUM",
        source: "Screener.in & ICICI Direct"
      }
    ],
    newsSentiment: {
      positivePercent: 58,
      neutralPercent: 30,
      negativePercent: 12,
      totalArticlesParsed: 15,
      articles: [
        { headline: "Jio launches AI Cloud welcome offer for Indian smartphone users", source: "Mint", date: "2 days ago", sentiment: "POSITIVE", impact: "MEDIUM", summary: "Drives subscriber stickiness." }
      ]
    },
    upcomingEvents: [
      { title: "RIL Board Meeting & Q4 Numbers", date: "April 24, 2026", significance: "HIGH", type: "Earnings", impact: "Key disclosures on retail segment footfalls." }
    ],
    hypotheticalAllocation: {
      totalBudget: "INR 50,000",
      strategy: "Conglomerate Core Strategy",
      allocations: [
        { asset: "Reliance Industries", amount: 20000, percent: 40, role: "Anchor", rationale: "Dominant market position" },
        { asset: "HDFC Bank", amount: 20000, percent: 40, role: "Financials", rationale: "Credit growth beneficiary" },
        { asset: "Cash Reserve", amount: 10000, percent: 20, role: "Liquidity", rationale: "Rebalancing buffer" }
      ]
    },
    sourcesVisited: [
      { name: "Yahoo Finance India (RELIANCE.NS)", url: "https://finance.yahoo.com/quote/RELIANCE.NS/", status: "200 OK", bytes: "135 KB", depth: 3 },
      { name: "NSE India Official Portal", url: "https://www.nseindia.com/get-quotes/equity?symbol=RELIANCE", status: "200 OK", bytes: "115 KB", depth: 2 },
      { name: "Google Finance (RELIANCE:NSE)", url: "https://www.google.com/finance/quote/RELIANCE:NSE", status: "200 OK", bytes: "85 KB", depth: 2 },
      { name: "Reuters India Desk", url: "https://www.reuters.com/markets/companies/RELI.NS", status: "200 OK", bytes: "72 KB", depth: 2 },
      { name: "MarketWatch India", url: "https://www.marketwatch.com/investing/stock/reliance", status: "200 OK", bytes: "90 KB", depth: 2 }
    ]
  }
};
