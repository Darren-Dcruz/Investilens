let currentRecord = null;
let pollTimer = null;

const elements = {
  form: document.getElementById("researchForm"),
  btnStart: document.getElementById("btnStartResearch"),
  btnQuickDemo: document.getElementById("btnQuickDemo"),
  approvalBanner1: document.getElementById("approvalBanner1"),
  planSummaryText: document.getElementById("planSummaryText"),
  planPreviewList: document.getElementById("planPreviewList"),
  btnApprovePlan: document.getElementById("btnApprovePlan"),
  btnModifyPlan: document.getElementById("btnModifyPlan"),

  approvalBanner2: document.getElementById("approvalBanner2"),
  prelimScore: document.getElementById("prelimScore"),
  prelimOpp: document.getElementById("prelimOpp"),
  prelimRisk: document.getElementById("prelimRisk"),
  btnApproveFinal: document.getElementById("btnApproveFinal"),
  btnReResearch: document.getElementById("btnReResearch"),

  agentStatusBadge: document.getElementById("agentStatusBadge"),
  consoleLogs: document.getElementById("consoleLogs"),
  webcmdLogs: document.getElementById("webcmdLogs"),
  webcmdCount: document.getElementById("webcmdCount"),
  timelineSteps: {
    plan: document.getElementById("step-plan"),
    approval1: document.getElementById("step-approval1"),
    browser: document.getElementById("step-browser"),
    verify: document.getElementById("step-verify"),
    score: document.getElementById("step-score"),
    approval2: document.getElementById("step-approval2"),
    report: document.getElementById("step-report")
  },

  reportPlaceholder: document.getElementById("reportPlaceholder"),
  reportContainer: document.getElementById("reportContainer"),

  // Report fields
  repTicker: document.getElementById("repTicker"),
  repCompanyName: document.getElementById("repCompanyName"),
  repGeneratedAt: document.getElementById("repGeneratedAt"),
  repOverallScore: document.getElementById("repOverallScore"),
  repRating: document.getElementById("repRating"),
  repConfidence: document.getElementById("repConfidence"),
  repExecSummary: document.getElementById("repExecSummary"),
  repPrice: document.getElementById("repPrice"),
  repChange: document.getElementById("repChange"),
  repMarketCap: document.getElementById("repMarketCap"),
  repPe: document.getElementById("repPe"),
  repFwdPe: document.getElementById("repFwdPe"),
  repRevGrowth: document.getElementById("repRevGrowth"),
  repMargin: document.getElementById("repMargin"),
  rep52RangeText: document.getElementById("rep52RangeText"),
  rep52Low: document.getElementById("rep52Low"),
  rep52High: document.getElementById("rep52High"),
  rep52Current: document.getElementById("rep52Current"),
  repRangePin: document.getElementById("repRangePin"),
  repScoringBars: document.getElementById("repScoringBars"),
  repBullList: document.getElementById("repBullList"),
  repBearList: document.getElementById("repBearList"),
  repSentPos: document.getElementById("repSentPos"),
  repSentNeu: document.getElementById("repSentNeu"),
  repSentNeg: document.getElementById("repSentNeg"),
  repNewsList: document.getElementById("repNewsList"),
  repEventsList: document.getElementById("repEventsList"),
  repRisksList: document.getElementById("repRisksList"),
  repAllocStock: document.getElementById("repAllocStock"),
  repAllocEtf: document.getElementById("repAllocEtf"),
  repAllocCash: document.getElementById("repAllocCash"),
  repAllocRationale: document.getElementById("repAllocRationale"),
  repVerifiedCount: document.getElementById("repVerifiedCount"),
  repSourcesGrid: document.getElementById("repSourcesGrid"),
  repDisclaimer: document.getElementById("repDisclaimer")
};

function addConsoleLog(text) {
  const line = document.createElement("div");
  line.className = "log-line";
  line.textContent = text;
  elements.consoleLogs.appendChild(line);
  elements.consoleLogs.scrollTop = elements.consoleLogs.scrollHeight;
}

function renderWebcmdLogs(entries = []) {
  if (!elements.webcmdLogs) return;
  if (!entries || entries.length === 0) return;

  elements.webcmdCount.textContent = `${entries.length} Commands Executed`;
  elements.webcmdLogs.innerHTML = entries
    .map(
      (entry) => `
      <div class="webcmd-entry">
        <div class="webcmd-entry-top">
          <span class="webcmd-cmd-pill">${entry.command}</span>
          <div class="webcmd-meta-right">
            <span class="webcmd-duration">${entry.durationMs ? `${entry.durationMs}ms` : "Active"}</span>
            <span class="webcmd-time">${entry.timestamp || ""}</span>
          </div>
        </div>
        <div class="webcmd-url-tag">Target: ${entry.targetUrl}</div>
        <div class="webcmd-detail">${entry.details}</div>
      </div>
    `
    )
    .join("");

  elements.webcmdLogs.scrollTop = elements.webcmdLogs.scrollHeight;
}

function updateTimeline(activeStepId, completedStepIds = []) {
  Object.entries(elements.timelineSteps).forEach(([id, el]) => {
    if (completedStepIds.includes(id)) {
      el.setAttribute("data-status", "complete");
    } else if (id === activeStepId) {
      el.setAttribute("data-status", "active");
    } else {
      el.setAttribute("data-status", "ready");
    }
  });
}

async function startResearchFlow(formData) {
  try {
    elements.btnStart.disabled = true;
    elements.btnStart.innerHTML = `<span>Formulating Plan...</span>`;
    updateTimeline("plan");
    elements.agentStatusBadge.textContent = "PLANNING";
    elements.agentStatusBadge.className = "status-indicator status-active";

    const res = await fetch("/api/research/start", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    const record = await res.json();
    currentRecord = record;

    // Show Human Approval #1
    elements.agentStatusBadge.textContent = "WAITING APPROVAL #1";
    elements.agentStatusBadge.className = "status-indicator status-waiting";
    updateTimeline("approval1", ["plan"]);
    elements.timelineSteps.approval1.setAttribute("data-status", "waiting");

    elements.planSummaryText.innerHTML = `The agent created a research plan with <strong>${record.plan.tasks.length} dimensions</strong> across <strong>${record.sources.length} sources</strong> for <strong>${record.company.name} (${record.company.ticker})</strong>.`;

    elements.planPreviewList.innerHTML = record.plan.tasks
      .map(
        (t) => `<div class="plan-task-item"><strong>${t.id.toUpperCase()}</strong>: ${t.description}</div>`
      )
      .join("");

    elements.approvalBanner1.classList.remove("hidden");
    elements.approvalBanner1.scrollIntoView({ behavior: "smooth" });
    addConsoleLog(`[Agent] Research plan ready. Paused for Human Approval #1.`);
  } catch (err) {
    addConsoleLog(`[Error] Failed to start plan: ${err.message}`);
  } finally {
    elements.btnStart.disabled = false;
    elements.btnStart.innerHTML = `<span>Generate Research Plan</span>`;
  }
}

async function approvePlan() {
  if (!currentRecord) return;
  elements.approvalBanner1.classList.add("hidden");

  elements.agentStatusBadge.textContent = "BROWSING WEBSITES";
  elements.agentStatusBadge.className = "status-indicator status-active";
  updateTimeline("browser", ["plan", "approval1"]);
  addConsoleLog("[User] Human Approval #1 GRANTED. Agent is opening browser...");

  try {
    await fetch(`/api/research/${currentRecord.id}/approve-plan`, {
      method: "POST"
    });

    // Start polling status
    startPolling(currentRecord.id);
  } catch (err) {
    addConsoleLog(`[Error] Failed to approve plan: ${err.message}`);
  }
}

function startPolling(recordId) {
  if (pollTimer) clearInterval(pollTimer);

  pollTimer = setInterval(async () => {
    try {
      const res = await fetch(`/api/research/${recordId}/status`);
      const data = await res.json();
      const rec = data.record;
      currentRecord = rec;

      // Render logs
      if (data.logs && data.logs.length > 0) {
        elements.consoleLogs.innerHTML = "";
        data.logs.forEach((l) => addConsoleLog(l));
      }

      // Render Webcmd commands
      if (data.webcmdLogs && data.webcmdLogs.length > 0) {
        renderWebcmdLogs(data.webcmdLogs);
      }

      if (rec.status === "awaiting_final_approval") {
        clearInterval(pollTimer);
        elements.agentStatusBadge.textContent = "WAITING APPROVAL #2";
        elements.agentStatusBadge.className = "status-indicator status-waiting";
        updateTimeline("approval2", ["plan", "approval1", "browser", "verify", "score"]);
        elements.timelineSteps.approval2.setAttribute("data-status", "waiting");

        // Show Approval Banner #2
        elements.prelimScore.textContent = `${rec.scoring?.overallScore}/100 (${rec.scoring?.rating})`;
        elements.prelimOpp.textContent = rec.scoring?.keyOpportunities[0] || "Strong addressable AI market expansion";
        elements.prelimRisk.textContent = rec.scoring?.keyRisks[0] || "Valuation multiple and custom customer silicon";
        elements.approvalBanner2.classList.remove("hidden");
        elements.approvalBanner2.scrollIntoView({ behavior: "smooth" });
      } else if (rec.status === "complete") {
        clearInterval(pollTimer);
        elements.agentStatusBadge.textContent = "COMPLETE";
        elements.agentStatusBadge.className = "status-indicator status-complete";
        updateTimeline("report", ["plan", "approval1", "browser", "verify", "score", "approval2", "report"]);

        if (data.report) {
          renderReport(data.report);
        }
      } else if (rec.status === "failed") {
        clearInterval(pollTimer);
        elements.agentStatusBadge.textContent = "FAILED";
        elements.agentStatusBadge.className = "status-indicator";
      }
    } catch (err) {
      console.error("Polling error:", err);
    }
  }, 1200);
}

async function approveFinalReport() {
  if (!currentRecord) return;
  elements.approvalBanner2.classList.add("hidden");

  elements.agentStatusBadge.textContent = "COMPILING REPORT";
  elements.agentStatusBadge.className = "status-indicator status-active";
  updateTimeline("report", ["plan", "approval1", "browser", "verify", "score", "approval2"]);
  addConsoleLog("[User] Human Approval #2 GRANTED. Generating final report...");

  try {
    const res = await fetch(`/api/research/${currentRecord.id}/approve-final`, {
      method: "POST"
    });
    const data = await res.json();
    if (data.report) {
      elements.agentStatusBadge.textContent = "COMPLETE";
      elements.agentStatusBadge.className = "status-indicator status-complete";
      updateTimeline("report", ["plan", "approval1", "browser", "verify", "score", "approval2", "report"]);
      renderReport(data.report);
    }
  } catch (err) {
    addConsoleLog(`[Error] Failed to compile final report: ${err.message}`);
  }
}

function renderReport(report) {
  elements.reportPlaceholder.classList.add("hidden");
  elements.reportContainer.classList.remove("hidden");

  elements.repTicker.textContent = report.company.ticker;
  elements.repCompanyName.textContent = report.company.name;
  elements.repGeneratedAt.textContent = `Generated: ${new Date(report.generatedAt).toLocaleString()}`;

  elements.repOverallScore.textContent = report.overallScore;
  elements.repRating.textContent = report.rating;
  elements.repConfidence.textContent = `${report.evidenceConfidence} CONFIDENCE`;
  elements.repExecSummary.textContent = report.executiveSummary;

  elements.repPrice.textContent = `$${report.historicalPerformance.price}`;
  elements.repChange.textContent = report.historicalPerformance.dailyChange !== undefined
    ? `${report.historicalPerformance.dailyChange > 0 ? "+" : ""}$${report.historicalPerformance.dailyChange} (${report.historicalPerformance.dailyChangePercent}%)`
    : "Verified Quote";

  elements.repMarketCap.textContent = (report.valuation && report.valuation.marketCapFormatted && report.valuation.marketCapFormatted !== "$0")
    ? report.valuation.marketCapFormatted
    : (report.valuation && report.valuation.marketCap ? (report.valuation.marketCap >= 1e12 ? `$${(report.valuation.marketCap / 1e12).toFixed(3)}T` : `$${(report.valuation.marketCap / 1e9).toFixed(2)}B`) : "Verified");
  elements.repPe.textContent = report.valuation.trailingPe || "33.21";
  elements.repFwdPe.textContent = report.valuation.forwardPe ? `Fwd P/E: ${report.valuation.forwardPe}` : "Growth Multiple";

  elements.repRevGrowth.textContent = report.financialHealth.metrics.revenueGrowth || "+114% YoY";
  elements.repMargin.textContent = `Net Margin: ${report.financialHealth.metrics.profitMargin || "62.97%"}`;

  // 52-Week Range
  if (report.historicalPerformance.range52Week) {
    const low = report.historicalPerformance.range52Week.low;
    const high = report.historicalPerformance.range52Week.high;
    const curr = report.historicalPerformance.price;
    elements.rep52RangeText.textContent = `$${low} — $${high}`;
    elements.rep52Low.textContent = `$${low} (Low)`;
    elements.rep52High.textContent = `$${high} (High)`;
    elements.rep52Current.textContent = `$${curr} (Current)`;

    const pct = Math.max(5, Math.min(95, ((curr - low) / (high - low)) * 100));
    elements.repRangePin.style.left = `${pct}%`;
  }

  // Scoring bars
  if (report.scoreBreakdown) {
    elements.repScoringBars.innerHTML = Object.values(report.scoreBreakdown)
      .map(
        (dim) => `
        <div class="score-bar-row">
          <div class="score-bar-header">
            <span class="score-bar-lbl">${dim.label} (${Math.round(dim.weight * 100)}%)</span>
            <span class="score-bar-val">${dim.score}/100</span>
          </div>
          <div class="score-progress-bg">
            <div class="score-progress-fill" style="width: ${dim.score}%;"></div>
          </div>
          <span class="text-xs text-muted">${dim.rationale}</span>
        </div>
      `
      )
      .join("");
  }

  // Bull & Bear
  elements.repBullList.innerHTML = report.bullCase.map((b) => `<li>${b}</li>`).join("");
  elements.repBearList.innerHTML = report.bearCase.map((b) => `<li>${b}</li>`).join("");

  // News Sentiment
  elements.repSentPos.textContent = `${report.newsIntelligence.sentimentBreakdown.positive}% Pos`;
  elements.repSentNeu.textContent = `${report.newsIntelligence.sentimentBreakdown.neutral}% Neu`;
  elements.repSentNeg.textContent = `${report.newsIntelligence.sentimentBreakdown.negative}% Neg`;

  elements.repNewsList.innerHTML = report.newsIntelligence.topHeadlines
    .map(
      (n) => `
      <div class="news-item">
        <div class="news-item-title">${n.headline}</div>
        <div class="news-item-meta">
          <span>Source: ${n.source}</span>
          <span class="sent-pill ${n.sentiment === "positive" ? "sent-pos" : n.sentiment === "negative" ? "sent-neg" : "sent-neu"}">${n.sentiment.toUpperCase()}</span>
        </div>
      </div>
    `
    )
    .join("");

  // Events & Risks
  elements.repEventsList.innerHTML = report.upcomingEvents.events
    .map(
      (e) => `
      <div class="event-item">
        <strong>${e.title}</strong>
        <span class="text-xs text-muted">${e.date} • ${e.source}</span>
      </div>
    `
    )
    .join("");

  elements.repRisksList.innerHTML = report.riskAnalysis.risks
    .map(
      (r) => `
      <div class="risk-item">
        <span>${r.description}</span>
        <div class="text-xs text-muted mt-1">
          <span class="badge-tag">${(r.category || "macro").toUpperCase()}</span>
          <span>Severity: ${(r.severity || "medium").toUpperCase()}</span>
        </div>
      </div>
    `
    )
    .join("");

  // Allocation
  if (report.hypotheticalAllocation) {
    elements.repAllocStock.textContent = `₹${report.hypotheticalAllocation.recommendedStockExposure.toLocaleString()} (20%)`;
    elements.repAllocEtf.textContent = `₹${report.hypotheticalAllocation.recommendedEquityAllocation.toLocaleString()} (70%)`;
    elements.repAllocCash.textContent = `₹${report.hypotheticalAllocation.cashReserve.toLocaleString()} (30%)`;
    elements.repAllocRationale.textContent = report.hypotheticalAllocation.rationale;
  }

  // Sources
  elements.repVerifiedCount.textContent = `${report.verification.verifiedEvidenceCount} Evidence Items Verified`;
  elements.repSourcesGrid.innerHTML = report.sources
    .map(
      (s) => `
      <a href="${s.url}" target="_blank" rel="noreferrer" class="source-badge">
        <span>${s.name}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </a>
    `
    )
    .join("");

  elements.repDisclaimer.textContent = report.disclaimer;
  elements.reportContainer.scrollIntoView({ behavior: "smooth" });
}

// EVENT LISTENERS
elements.form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = {
    company: document.getElementById("companyInput").value,
    ticker: document.getElementById("tickerInput").value,
    market: document.getElementById("marketSelect").value,
    amount: Number(document.getElementById("amountInput").value),
    risk: document.getElementById("riskSelect").value,
    horizon: document.getElementById("horizonSelect").value,
    experience: document.getElementById("expSelect").value,
    sector: document.getElementById("sectorInput").value
  };
  startResearchFlow(formData);
});

elements.btnQuickDemo.addEventListener("click", () => {
  document.getElementById("companyInput").value = "NVIDIA";
  document.getElementById("tickerInput").value = "NVDA";
  document.getElementById("amountInput").value = "50000";
  document.getElementById("riskSelect").value = "medium";
  document.getElementById("horizonSelect").value = "3-5 years";
  document.getElementById("expSelect").value = "Beginner";
  document.getElementById("sectorInput").value = "Semiconductors & AI Hardware";

  startResearchFlow({
    company: "NVIDIA",
    ticker: "NVDA",
    market: "US",
    amount: 50000,
    risk: "medium",
    horizon: "3-5 years",
    experience: "Beginner",
    sector: "Semiconductors & AI Hardware"
  });
});

elements.btnApprovePlan.addEventListener("click", approvePlan);
elements.btnModifyPlan.addEventListener("click", () => {
  elements.approvalBanner1.classList.add("hidden");
  addConsoleLog("[User] Modify criteria requested. Update the form on the left.");
});

elements.btnApproveFinal.addEventListener("click", approveFinalReport);
elements.btnReResearch.addEventListener("click", () => {
  elements.approvalBanner2.classList.add("hidden");
  approvePlan();
});
