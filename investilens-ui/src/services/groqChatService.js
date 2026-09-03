// Groq LLM Cloud Chat Service for InvestiLens Dossier Sidekick

const GROQ_STORAGE_KEY = "investilens_groq_api_key";

export function getGroqApiKey() {
  const envKey = import.meta.env.VITE_GROQ_API_KEY || import.meta.env.GROQ_API_KEY;
  if (envKey && !envKey.includes("your_groq_api_key")) {
    return envKey.trim();
  }

  try {
    const local = localStorage.getItem(GROQ_STORAGE_KEY);
    if (local) return local.trim();
  } catch (e) {
    // ignore
  }

  return "";
}

export function saveGroqApiKey(key) {
  if (key && key.trim()) {
    localStorage.setItem(GROQ_STORAGE_KEY, key.trim());
  } else {
    localStorage.removeItem(GROQ_STORAGE_KEY);
  }
}

export async function askGroqDossierAssistant({ query, stockData, params, calculated, chatHistory = [] }) {
  const apiKey = getGroqApiKey();
  if (!apiKey) {
    throw new Error("GROQ_API_KEY_REQUIRED");
  }

  const systemPrompt = `You are the InvestiLens AI Research Sidekick, an elite quantitative financial analyst and investment intelligence assistant.
You are helping an investor analyze a specific stock based on verified fundamental evidence, deterministic quantitative scoring, valuation multiples, and risk factors.

ACTIVE STOCK RESEARCH CONTEXT:
- Company Name: ${stockData.name}
- Ticker: ${stockData.ticker}
- Market: ${stockData.market || params?.market || "United States"}
- Sector: ${stockData.sector || params?.sector || "Equity Research"}
- Current Price: ${stockData.currentPrice || "Latest Market Band"}
- Rating: ${stockData.rating || "Moderate Buy"}
- Overall Deterministic Score: ${stockData.overallScore || 75}/100
- Evidence Confidence: ${stockData.evidenceConfidence || "HIGH"}

FINANCIAL HEALTH & BREAKDOWN SCORES:
- Financial Health: ${stockData.scores?.financialHealth || 75}/100
- Growth Potential: ${stockData.scores?.growthPotential || 72}/100
- Valuation Multiple: ${stockData.scores?.valuation || 65}/100
- Historical Performance: ${stockData.scores?.historicalPerformance || 70}/100
- Debt & Leverage Safety: ${stockData.scores?.debtLeverage || 72}/100
- News Sentiment: ${stockData.scores?.newsEvents || 68}/100
- Risk Profile: ${stockData.scores?.riskProfile || 65}/100

VERIFIED BULL CASE CATALYSTS:
${(stockData.bullCase || []).map((b, i) => `${i + 1}. ${b.title}: ${b.desc} (Impact: ${b.impact || "HIGH"})`).join("\n")}

CRITICAL BEAR CASE HAZARDS & RISKS:
${(stockData.bearCase || []).map((b, i) => `${i + 1}. ${b.title}: ${b.desc} (Impact: ${b.impact || "HIGH"})`).join("\n")}

EVIDENCE LOCKER SAMPLES:
${(stockData.evidence || []).slice(0, 6).map((e) => `- ${e.claim || e.metric}: ${e.value || "Verified"} (Source: ${e.sourceA?.name || "Official Exchange / Filing"})`).join("\n")}

INVESTOR PROFILE:
- Capital Budget: ${params?.currency || "USD"} ${Number(params?.amount || 50000).toLocaleString()}
- Investment Horizon: ${params?.horizon || "3–5 Years"}
- Risk Appetite: ${params?.risk || "Moderate"}

INSTRUCTIONS:
1. Answer the user's question with precise, insightful financial depth using the above verified research data.
2. Maintain an analytical, institutional yet clear tone. Highlight numbers, percentages, and trade-offs.
3. If asked about buying/selling, provide balanced analytical perspectives referencing the bull/bear case without making direct legal financial recommendations.
4. Format responses using clean GitHub markdown (bullet points, bold text, headings where helpful).`;

  const messagesPayload = [
    { role: "system", content: systemPrompt },
    ...chatHistory.slice(-6).map((m) => ({
      role: m.sender === "user" ? "user" : "assistant",
      content: m.text
    })),
    { role: "user", content: query }
  ];

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: messagesPayload,
      temperature: 0.5,
      max_tokens: 1024
    })
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData?.error?.message || `Groq API Error (${response.status})`);
  }

  const data = await response.json();
  const reply = data?.choices?.[0]?.message?.content;
  if (!reply) throw new Error("Empty response received from Groq LLM");

  return reply;
}
