import React from "react";
import { Newspaper, TrendingUp, TrendingDown, Minus, ExternalLink } from "lucide-react";

export default function NewsSentimentTab({ stockData }) {
  const news = stockData?.newsSentiment || {
    positivePercent: 62,
    neutralPercent: 23,
    negativePercent: 15,
    totalArticlesParsed: 18,
    articles: []
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Sentiment Overview Gauge */}
      <div className="bg-[#080d19] border border-slate-800/90 rounded-xl p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2">
            <Newspaper className="w-4 h-4 text-cyan-400" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono">
              News Sentiment Intelligence (Step 8)
            </h3>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            {news.totalArticlesParsed} ARTICLES ANALYZED
          </span>
        </div>

        <p className="text-xs text-slate-400">
          News sentiment reflects the agent's natural-language classification of recent verified press articles, not an objective market probability.
        </p>

        {/* Multi-segment Sentiment Bar */}
        <div className="flex flex-col gap-2 pt-2">
          <div className="h-4 w-full rounded-full overflow-hidden flex font-mono text-[10px] font-bold text-slate-950">
            <div
              style={{ width: `${news.positivePercent}%` }}
              className="bg-emerald-500 h-full flex items-center justify-center transition-all duration-500"
            >
              {news.positivePercent}%
            </div>
            <div
              style={{ width: `${news.neutralPercent}%` }}
              className="bg-slate-500 h-full flex items-center justify-center transition-all duration-500 text-slate-100"
            >
              {news.neutralPercent}%
            </div>
            <div
              style={{ width: `${news.negativePercent}%` }}
              className="bg-rose-500 h-full flex items-center justify-center transition-all duration-500"
            >
              {news.negativePercent}%
            </div>
          </div>

          <div className="flex items-center justify-between text-xs font-mono pt-1">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Positive ({news.positivePercent}%)
            </span>
            <span className="flex items-center gap-1.5 text-slate-400 font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-500" /> Neutral ({news.neutralPercent}%)
            </span>
            <span className="flex items-center gap-1.5 text-rose-400 font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" /> Negative ({news.negativePercent}%)
            </span>
          </div>
        </div>
      </div>

      {/* News Articles Feed */}
      <div className="flex flex-col gap-3">
        {news.articles?.map((article, idx) => (
          <div
            key={idx}
            className="bg-[#080d19] border border-slate-800/80 rounded-xl p-4 flex flex-col gap-2 hover:border-slate-700 transition-colors"
          >
            <div className="flex items-start justify-between gap-3">
              <h4 className="text-xs font-bold text-white font-mono leading-snug">
                {article.headline}
              </h4>
              <span
                className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded flex-shrink-0 ${
                  article.sentiment === "POSITIVE"
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    : article.sentiment === "NEGATIVE"
                    ? "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                    : "bg-slate-800 text-slate-400 border border-slate-700"
                }`}
              >
                {article.sentiment}
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {article.summary}
            </p>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-1 border-t border-slate-800/60 mt-1">
              <span>Source: <strong className="text-slate-400">{article.source}</strong> • {article.date}</span>
              <span className="text-cyan-400">Impact: {article.impact}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
