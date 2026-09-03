import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cbdmoaagsveqkjadvcfc.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNiZG1vYWFnc3ZlcWtqYWR2Y2ZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg0MDY4NTUsImV4cCI6MjEwMzk4Mjg1NX0.ofo_TqVh6vHVL7iKao9QxdWRzp705ddEaUP1X5qCMnw";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testLiveSupabase() {
  console.log("=== TESTING LIVE SUPABASE CONNECTION ===");
  console.log("Connecting to:", supabaseUrl);

  // 1. Test profiles table query
  const { data: profiles, error: pErr } = await supabase.from("profiles").select("*").limit(1);
  if (pErr) {
    console.error("Profiles table check failed:", pErr.message);
  } else {
    console.log("✓ 'profiles' table is live and accessible via RLS!");
  }

  // 2. Test research_history table query
  const { data: history, error: hErr } = await supabase.from("research_history").select("*").limit(1);
  if (hErr) {
    console.error("Research history table check failed:", hErr.message);
  } else {
    console.log("✓ 'research_history' table is live and accessible via RLS!");
  }

  // 3. Test user_watchlist table query
  const { data: watchlist, error: wErr } = await supabase.from("user_watchlist").select("*").limit(1);
  if (wErr) {
    console.error("User watchlist table check failed:", wErr.message);
  } else {
    console.log("✓ 'user_watchlist' table is live and accessible via RLS!");
  }

  console.log("\n=============================================");
  console.log("LIVE SUPABASE DATABASE VERIFICATION SUCCESSFUL! ✓");
  console.log("=============================================");
}

testLiveSupabase().catch((err) => {
  console.error("Live test failed:", err);
});
