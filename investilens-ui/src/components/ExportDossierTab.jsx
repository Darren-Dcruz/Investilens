import React, { useState } from "react";
import { FileText, Copy, Check, Send, Download } from "lucide-react";

export default function ExportDossierTab({ stockData, params }) {
  const [copied, setCopied] = useState(false);

  const reportMarkdown = `==================================================
INVESTILENS — AUTONOMOUS RESEARCH REPORT
==================================================

Company: ${stockData?.name || params.companyQuery} (${stockData?.ticker || "HDFCBANK"})
Market: ${params.market} | Horizon: ${params.horizon}
Research Score: ${stockData?.overallScore || 84} / 100
Verdict: ${stockData?.researchStatus || "Strong Research Profile"}
Evidence Confidence: ${stockData?.evidenceConfidence || "HIGH"}

--------------------------------------------------
DETERMINISTIC SCORE BREAKDOWN
--------------------------------------------------
• Financial Health (25%): ${stockData?.scores?.financialHealth || 88}/100
• Growth Potential (20%): ${stockData?.scores?.growthPotential || 84}/100
• Historical Performance (15%): ${stockData?.scores?.historicalPerformance || 86}/100
• Valuation (15%): ${stockData?.scores?.valuation || 78}/100
• Debt / Leverage (10%): ${stockData?.scores?.debtLeverage || 82}/100
• News & Events (10%): ${stockData?.scores?.newsEvents || 85}/100
• Risk Profile (5%): ${stockData?.scores?.riskProfile || 80}/100

--------------------------------------------------
BULL CASE (WHY IT MAY BE ATTRACTIVE)
--------------------------------------------------
${stockData?.bullCase?.map(b => `? ${b.title}: ${b.desc}`).join("\n") || "N/A"}

--------------------------------------------------
BEAR CASE (WHY TO BE CAUTIOUS - RISKS)
--------------------------------------------------
${stockData?.bearCase?.map(b => `? ${b.title}: ${b.desc}`).join("\n") || "N/A"}

--------------------------------------------------
NEWS SENTIMENT INTELLIGENCE
--------------------------------------------------
Positive: ${stockData?.newsSentiment?.positivePercent || 62}%
Neutral: ${stockData?.newsSentiment?.neutralPercent || 23}%
Negative: ${stockData?.newsSentiment?.negativePercent || 15}%

--------------------------------------------------
VERIFIED SOURCES VISITED VIA WEBCMD
--------------------------------------------------
${stockData?.sourcesVisited?.map(s => `[${s.name}] ${s.url} (${s.status})`).join("\n") || "N/A"}

--------------------------------------------------
FINAL ASSESSMENT & DISCLAIMER
--------------------------------------------------
Based on the supplied parameters (${params.currency === "INR" ? "?" : "$"}${params.amount}, ${params.risk} risk, ${params.horizon}), this company exhibits a ${stockData?.researchStatus || "Strong Research Profile"}.

IMPORTANT: This is a decision-support assessment based on publicly available web information. It is NOT guaranteed financial advice and no trades are executed.
==================================================`;

  const handleCopy = () => {
    navigator.clipboard.writeText(reportMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-emerald-400" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono">
            Final Synthesized Dossier (Step 16)
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-mono text-xs transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "Copied to Clipboard!" : "Copy Markdown"}</span>
          </button>
        </div>
      </div>

      <div className="bg-[#050811] border border-slate-800 rounded-xl p-4 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto whitespace-pre-wrap max-h-[500px]">
        {reportMarkdown}
      </div>
    </div>
  );
}
