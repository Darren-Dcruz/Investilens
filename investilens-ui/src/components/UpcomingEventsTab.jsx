import React from "react";
import { Calendar, Clock, AlertCircle, ArrowUpRight } from "lucide-react";

export default function UpcomingEventsTab({ stockData }) {
  const events = stockData?.upcomingEvents || [];

  return (
    <div className="flex flex-col gap-5">
      {/* Notice Banner */}
      <div className="bg-[#080d19] border border-slate-800/90 rounded-xl p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-amber-400" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono">
              Upcoming Material Catalysts & Events (Step 9)
            </h3>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
            VERIFIED CALENDAR
          </span>
        </div>
        <p className="text-xs text-slate-400">
          Catalysts detected across corporate filings, exchange disclosures, and regulatory calendars. The agent never invents dates.
        </p>
      </div>

      {/* Timeline Event Cards */}
      <div className="flex flex-col gap-3">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="bg-[#080d19] border border-slate-800/80 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:border-slate-700 transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex flex-col items-center justify-center text-amber-400 font-mono text-[10px] font-bold flex-shrink-0">
                <Clock className="w-4 h-4 mb-0.5" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-bold text-white font-mono">{event.title}</h4>
                  <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 border border-slate-700">
                    {event.type}
                  </span>
                </div>
                <p className="text-xs text-slate-300">{event.impact}</p>
              </div>
            </div>

            <div className="sm:text-right font-mono text-xs flex-shrink-0">
              <span className="text-emerald-400 font-bold block">{event.date}</span>
              <span className="text-[10px] text-slate-500 uppercase">Significance: {event.significance}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
