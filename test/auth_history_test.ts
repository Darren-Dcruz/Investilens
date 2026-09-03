async function runTests() {
  console.log("=== STARTING AUTH & HISTORY SUITE TESTS ===");

  const baseUrl = "http://localhost:3008";

  // 1. Register a test user
  const randomSuffix = Math.floor(Math.random() * 10000);
  const testUser = {
    username: `investor_${randomSuffix}`,
    email: `investor_${randomSuffix}@test.com`,
    password: "SecurePassword123!",
    name: `Test Investor ${randomSuffix}`
  };

  console.log("\n[1] Testing Registration...");
  const regRes = await fetch(`${baseUrl}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(testUser)
  });
  const regData = await regRes.json();
  if (!regRes.ok) throw new Error(`Register failed: ${JSON.stringify(regData)}`);
  console.log("✓ Registered user:", regData.user.username, "Token received:", !!regData.token);

  const token = regData.token;

  // 2. Test /api/auth/me
  console.log("\n[2] Testing /api/auth/me...");
  const meRes = await fetch(`${baseUrl}/api/auth/me`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const meData = await meRes.json();
  if (!meRes.ok) throw new Error(`Auth me failed: ${JSON.stringify(meData)}`);
  console.log("✓ Verified current user:", meData.user.email, "Stats:", meData.stats);

  // 3. Test saving a research history item
  console.log("\n[3] Testing Research History Save...");
  const sampleHistory = {
    ticker: "AAPL",
    companyName: "Apple Inc.",
    market: "United States",
    sector: "Consumer Electronics & Services",
    score: 84,
    rating: "Strong Buy",
    confidence: "HIGH",
    summary: "Massive installed active device base of 2.2B+ units, accelerating Services segment gross margins (74%), and upcoming generative AI hardware upgrade cycle.",
    params: {
      ticker: "AAPL",
      companyQuery: "Apple Inc.",
      market: "United States",
      sector: "Consumer Electronics & Services",
      amount: 50000,
      currency: "USD",
      risk: "moderate",
      horizon: "3-5 years"
    }
  };

  const saveRes = await fetch(`${baseUrl}/api/history`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(sampleHistory)
  });
  const savedItem = await saveRes.json();
  if (!saveRes.ok) throw new Error(`Save history failed: ${JSON.stringify(savedItem)}`);
  console.log("✓ Saved history item id:", savedItem.id, "Ticker:", savedItem.ticker);

  // 4. Test retrieving user history list
  console.log("\n[4] Testing History Retrieval...");
  const listRes = await fetch(`${baseUrl}/api/history`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const historyList = await listRes.json();
  if (!listRes.ok) throw new Error(`List history failed: ${JSON.stringify(historyList)}`);
  console.log(`✓ Retrieved ${historyList.length} history item(s) for user.`);

  // 5. Test single history item fetch
  console.log("\n[5] Testing Single History Item Fetch...");
  const singleRes = await fetch(`${baseUrl}/api/history/${savedItem.id}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const singleItem = await singleRes.json();
  if (!singleRes.ok) throw new Error(`Single history fetch failed: ${JSON.stringify(singleItem)}`);
  console.log("✓ Single item fetch confirmed:", singleItem.companyName, "Score:", singleItem.score);

  // 6. Test Watchlist endpoints
  console.log("\n[6] Testing User Watchlist...");
  const watchAddRes = await fetch(`${baseUrl}/api/user/watchlist`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      ticker: "MSFT",
      name: "Microsoft Corporation",
      price: 420.5,
      rating: "Strong Buy",
      score: 89
    })
  });
  const watchItem = await watchAddRes.json();
  console.log("✓ Added to watchlist:", watchItem.ticker, watchItem.name);

  const watchGetRes = await fetch(`${baseUrl}/api/user/watchlist`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const watchList = await watchGetRes.json();
  console.log(`✓ User watchlist now contains ${watchList.length} stock(s).`);

  // 7. Test Login of demo user
  console.log("\n[7] Testing Demo User Login & Pre-seeded History...");
  const demoLoginRes = await fetch(`${baseUrl}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      identifier: "demo@investilens.ai",
      password: "demo123"
    })
  });
  const demoLoginData = await demoLoginRes.json();
  const demoHistoryRes = await fetch(`${baseUrl}/api/history`, {
    headers: { Authorization: `Bearer ${demoLoginData.token}` }
  });
  const demoHistory = await demoHistoryRes.json();
  console.log(`✓ Demo user logged in! Found ${demoHistory.length} pre-seeded historical research session(s):`, demoHistory.map((h: any) => h.ticker).join(", "));

  console.log("\n=============================================");
  console.log("ALL AUTH & HISTORY TEST SUITES PASSED! ✓");
  console.log("=============================================");
}

runTests().catch((err) => {
  console.error("Test failed:", err);
  process.exit(1);
});
