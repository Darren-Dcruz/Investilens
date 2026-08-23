# INVESTILENS — Backend Integration Specification

This document provides the exact REST & WebSocket API specification for connecting your Hermes Agent + Webcmd backend to the InvestiLens UI.

---

## 1. Architecture Overview

```text
[ React Frontend UI ]
        |
        |--- (1) POST /api/research/plan ---------> [ Backend / FastAPI or Express ]
        |                                                     |
        |<-- Returns Proposed Plan & Checkpoint 1 <----------| (Hermes + Gemini)
        |
        |--- (2) POST /api/research/approve ------> [ Webcmd Browser Engine ]
        |                                                     |
        |<-- (3) SSE/WS Telemetry Stream <--------------------| (Visits 5-8 URLs, scrapes DOM, extracts XBRL)
        |                                                     |
        |                                           [ Scoring & Cross-Verification ]
        |                                                     |
        |<-- (4) Returns Checkpoint 2 (Report Ready) <--------|
        |
        |--- (5) POST /api/research/finalize -----> [ Final Markdown Dossier ]
```

---

## 2. API Endpoints Contract

### A. Formulate Research Plan (Step 2 & 3)
- **Method**: `POST`
- **Path**: `/api/research/plan`
- **Request Body**:
```json
{
  "mode": "stock",
  "amount": 50000,
  "currency": "INR",
  "market": "India",
  "risk": "Moderate",
  "horizon": "Medium (3–5 Years)",
  "company": "HDFC Bank",
  "sector": "Banking & Financials"
}
```
- **Response (200 OK)**:
```json
{
  "status": "PLAN_READY",
  "requires_approval": true,
  "checkpoint": "plan_approval",
  "target_company": "HDFC Bank Ltd.",
  "planned_sources": [
    "https://www.hdfcbank.com/investor-relations",
    "https://www.screener.in/company/HDFCBANK/",
    "https://www.bseindia.com",
    "https://www.moneycontrol.com",
    "https://www.reuters.com",
    "https://rbi.org.in"
  ],
  "audit_dimensions": [
    "Financial Health & NIM",
    "Revenue & Profit Trends",
    "Debt & Credit-to-Deposit Ratio",
    "Valuation Multiples",
    "Bull Growth Drivers",
    "Bear Risk Disconfirmation",
    "News Sentiment",
    "Upcoming Catalysts"
  ]
}
```

---

### B. Approve & Execute Webcmd Autonomous Research (Step 4 – 14)
- **Method**: `POST`
- **Path**: `/api/research/execute`
- **Request Body**:
```json
{
  "plan_approved": true,
  "session_id": "sess_hdfc_01"
}
```
- **WebSocket / SSE Stream (`/stream`) Payload**:
```json
{
  "stage_id": 4,
  "type": "webcmd",
  "message": "GET https://screener.in/company/HDFCBANK/ -> 200 OK (88 KB)",
  "url": "https://screener.in/company/HDFCBANK/",
  "browser_status": "Extracting balance sheet DOM"
}
```

---

### C. Deterministic Score Calculation Schema (Step 12)
Your backend must compute the score deterministically using the exact weighted formula:
```python
def calculate_score(scores: dict) -> int:
    return round(
        (scores["financialHealth"] * 0.25) +
        (scores["growthPotential"] * 0.20) +
        (scores["historicalPerformance"] * 0.15) +
        (scores["valuation"] * 0.15) +
        (scores["debtLeverage"] * 0.10) +
        (scores["newsEvents"] * 0.10) +
        (scores["riskProfile"] * 0.05)
    )
```

---

## 3. Launching the UI

```bash
# 1. Enter the project directory
cd C:\Users\julie\.gemini\antigravity\scratch\investilens-ui

# 2. Start Vite Dev Server (Lag-free 60fps)
npm run dev

# 3. Open in Browser
http://localhost:3000
```
