// Hybrid Authentication and Data Service supporting Supabase (PostgreSQL) and Local Fallback

import { initSupabase, isSupabaseConfigured, getSupabaseConfig } from "./supabaseClient.js";

const TOKEN_KEY = "investilens_auth_token";
const USER_KEY = "investilens_user";

export const authService = {
  isUsingSupabase() {
    return isSupabaseConfigured();
  },

  getSupabaseConfigStatus() {
    return getSupabaseConfig();
  },

  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  },

  setToken(token) {
    if (token) {
      localStorage.setItem(TOKEN_KEY, token);
    } else {
      localStorage.removeItem(TOKEN_KEY);
    }
  },

  getCachedUser() {
    const raw = localStorage.getItem(USER_KEY);
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  },

  setCachedUser(user) {
    if (user) {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(USER_KEY);
    }
  },

  getAuthHeaders() {
    const token = this.getToken();
    const headers = { "Content-Type": "application/json" };
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    return headers;
  },

  // Helper to ensure profile exists in Supabase public.profiles table
  async syncProfile(supabase, user, meta = {}) {
    if (!supabase || !user) return;
    try {
      const username = meta.username || user.user_metadata?.username || user.email?.split("@")[0] || "investor";
      const full_name = meta.name || meta.full_name || user.user_metadata?.full_name || user.user_metadata?.name || "Investor";

      await supabase.from("profiles").upsert({
        id: user.id,
        username,
        full_name,
        updated_at: new Date().toISOString()
      }, { onConflict: "id" });
    } catch (e) {
      console.warn("Supabase profile sync note:", e);
    }
  },

  // -------------------------------------------------------------
  // REGISTRATION
  // -------------------------------------------------------------
  async register({ username, email, password, name }) {
    const supabase = initSupabase();

    if (supabase) {
      const { data, error } = await supabase.auth.signUp({
        email: email.trim().toLowerCase(),
        password,
        options: {
          data: {
            username: username.trim().toLowerCase(),
            full_name: name || username,
            name: name || username
          }
        }
      });

      if (error) {
        throw new Error(error.message);
      }

      if (!data.user) {
        throw new Error("Registration failed. Please verify your details.");
      }

      const formattedUser = {
        id: data.user.id,
        email: data.user.email,
        username: username || data.user.email.split("@")[0],
        name: name || username || "Investor",
        createdAt: data.user.created_at
      };

      const token = data.session?.access_token || data.user.id;
      this.setToken(token);
      this.setCachedUser(formattedUser);

      // Explicitly sync to public.profiles table
      await this.syncProfile(supabase, data.user, { username, name });

      return {
        user: formattedUser,
        token,
        session: data.session
      };
    }

    // Fallback to server API
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password, name })
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || "Registration failed");
    }

    this.setToken(data.token);
    this.setCachedUser(data.user);
    return data;
  },

  // -------------------------------------------------------------
  // LOGIN
  // -------------------------------------------------------------
  async login({ identifier, password }) {
    const supabase = initSupabase();

    if (supabase) {
      let emailToUse = identifier.trim().toLowerCase();
      if (!emailToUse.includes("@")) {
        try {
          const { data: profile } = await supabase
            .from("profiles")
            .select("id")
            .eq("username", emailToUse)
            .single();

          if (profile) {
            emailToUse = `${emailToUse}@investilens.ai`;
          }
        } catch (e) {
          // ignore
        }
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email: emailToUse,
        password
      });

      if (error) {
        throw new Error(error.message);
      }

      const user = data.user;
      const formattedUser = {
        id: user.id,
        email: user.email,
        username: user.user_metadata?.username || user.email?.split("@")[0] || "investor",
        name: user.user_metadata?.full_name || user.user_metadata?.name || "Investor",
        createdAt: user.created_at
      };

      const token = data.session?.access_token || user.id;
      this.setToken(token);
      this.setCachedUser(formattedUser);

      // Ensure profile row exists
      await this.syncProfile(supabase, user);

      return {
        user: formattedUser,
        token,
        session: data.session
      };
    }

    // Fallback to server API
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identifier, password })
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || "Login failed");
    }

    this.setToken(data.token);
    this.setCachedUser(data.user);
    return data;
  },

  // -------------------------------------------------------------
  // LOGOUT
  // -------------------------------------------------------------
  async logout() {
    const supabase = initSupabase();
    if (supabase) {
      try {
        await supabase.auth.signOut();
      } catch (e) {
        console.warn("Supabase sign out error:", e);
      }
    }

    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        headers: this.getAuthHeaders()
      });
    } catch (e) {
      // ignore
    } finally {
      this.setToken(null);
      this.setCachedUser(null);
    }
  },

  // -------------------------------------------------------------
  // CURRENT USER SESSION
  // -------------------------------------------------------------
  async getCurrentUser() {
    const supabase = initSupabase();

    if (supabase) {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session || !session.user) {
          this.setToken(null);
          this.setCachedUser(null);
          return null;
        }

        const user = session.user;
        const formattedUser = {
          id: user.id,
          email: user.email,
          username: user.user_metadata?.username || user.email?.split("@")[0] || "investor",
          name: user.user_metadata?.full_name || user.user_metadata?.name || "Investor",
          createdAt: user.created_at
        };

        this.setToken(session.access_token);
        this.setCachedUser(formattedUser);

        // Ensure profiles table has row
        await this.syncProfile(supabase, user);

        // Fetch counts from Supabase
        const { count: historyCount } = await supabase
          .from("research_history")
          .select("*", { count: "exact", head: true })
          .eq("user_id", user.id);

        const { count: watchlistCount } = await supabase
          .from("user_watchlist")
          .select("*", { count: "exact", head: true })
          .eq("user_id", user.id);

        return {
          user: formattedUser,
          stats: {
            totalResearches: historyCount || 0,
            watchlistCount: watchlistCount || 0
          }
        };
      } catch (e) {
        console.warn("Supabase get session failed:", e);
      }
    }

    const token = this.getToken();
    if (!token) return null;

    try {
      const res = await fetch("/api/auth/me", {
        headers: this.getAuthHeaders()
      });

      if (!res.ok) {
        this.setToken(null);
        this.setCachedUser(null);
        return null;
      }

      const data = await res.json();
      this.setCachedUser(data.user);
      return data;
    } catch (e) {
      return this.getCachedUser() ? { user: this.getCachedUser() } : null;
    }
  },

  // -------------------------------------------------------------
  // RESEARCH HISTORY (SUPABASE POSTGRESQL + FALLBACK)
  // -------------------------------------------------------------
  async getHistory() {
    const supabase = initSupabase();

    if (supabase) {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) return [];

        const { data, error } = await supabase
          .from("research_history")
          .select("*")
          .eq("user_id", session.user.id)
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Supabase getHistory error:", error);
          throw error;
        }

        return (data || []).map((row) => ({
          id: row.id,
          userId: row.user_id,
          ticker: row.ticker,
          companyName: row.company_name,
          market: row.market,
          sector: row.sector,
          score: row.score,
          rating: row.rating,
          confidence: row.confidence,
          summary: row.summary,
          params: row.params,
          reportData: row.report_data,
          stockData: row.stock_data,
          createdAt: row.created_at
        }));
      } catch (e) {
        console.error("Supabase history query failed:", e);
      }
    }

    // Fallback to server API
    const token = this.getToken();
    if (!token) return [];

    try {
      const res = await fetch("/api/history", {
        headers: this.getAuthHeaders()
      });
      if (!res.ok) return [];
      return await res.json();
    } catch (e) {
      console.error("Failed to fetch history:", e);
      return [];
    }
  },

  async saveHistoryItem(item) {
    const supabase = initSupabase();

    if (supabase) {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) return null;

        const recordToInsert = {
          user_id: session.user.id,
          ticker: (item.ticker || "UNKNOWN").toUpperCase(),
          company_name: item.companyName || item.name || item.ticker,
          market: item.market || "United States",
          sector: item.sector || "Equity Research",
          score: Number(item.score ?? item.overallScore ?? 75),
          rating: item.rating || "Moderate Buy",
          confidence: item.confidence || item.evidenceConfidence || "HIGH",
          summary: item.summary || "Fundamental and quantitative research dossier.",
          params: item.params || {},
          report_data: item.reportData || null,
          stock_data: item.stockData || null
        };

        const { data, error } = await supabase
          .from("research_history")
          .insert(recordToInsert)
          .select()
          .single();

        if (error) {
          console.error("Supabase saveHistoryItem error:", error);
          throw error;
        }

        console.log("✓ Saved research dossier to Supabase research_history table:", data.id);
        return {
          id: data.id,
          userId: data.user_id,
          ticker: data.ticker,
          companyName: data.company_name,
          market: data.market,
          sector: data.sector,
          score: data.score,
          rating: data.rating,
          confidence: data.confidence,
          summary: data.summary,
          params: data.params,
          reportData: data.report_data,
          stockData: data.stock_data,
          createdAt: data.created_at
        };
      } catch (e) {
        console.error("Supabase save history failed:", e);
      }
    }

    // Fallback to server API
    const token = this.getToken();
    if (!token) return null;

    try {
      const res = await fetch("/api/history", {
        method: "POST",
        headers: this.getAuthHeaders(),
        body: JSON.stringify(item)
      });
      if (!res.ok) return null;
      return await res.json();
    } catch (e) {
      console.warn("Failed to save history item:", e);
      return null;
    }
  },

  async deleteHistoryItem(id) {
    const supabase = initSupabase();

    if (supabase) {
      try {
        const { error } = await supabase
          .from("research_history")
          .delete()
          .eq("id", id);

        if (error) throw error;
        return { success: true };
      } catch (e) {
        console.error("Supabase deleteHistoryItem error:", e);
      }
    }

    const res = await fetch(`/api/history/${id}`, {
      method: "DELETE",
      headers: this.getAuthHeaders()
    });
    if (!res.ok) throw new Error("Failed to delete history item");
    return await res.json();
  },

  // -------------------------------------------------------------
  // WATCHLIST (SUPABASE POSTGRESQL + FALLBACK)
  // -------------------------------------------------------------
  async getWatchlist() {
    const supabase = initSupabase();

    if (supabase) {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) return [];

        const { data, error } = await supabase
          .from("user_watchlist")
          .select("*")
          .eq("user_id", session.user.id)
          .order("added_at", { ascending: false });

        if (error) throw error;
        return (data || []).map((row) => ({
          id: row.id,
          ticker: row.ticker,
          name: row.name,
          market: row.market,
          price: row.price,
          change: row.change,
          score: row.score,
          rating: row.rating,
          addedAt: row.added_at
        }));
      } catch (e) {
        console.error("Supabase getWatchlist error:", e);
      }
    }

    const res = await fetch("/api/user/watchlist", {
      headers: this.getAuthHeaders()
    });
    if (!res.ok) return [];
    return await res.json();
  },

  async addToWatchlist(item) {
    const supabase = initSupabase();

    if (supabase) {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) return null;

        const { data, error } = await supabase
          .from("user_watchlist")
          .upsert({
            user_id: session.user.id,
            ticker: item.ticker.toUpperCase(),
            name: item.name || item.ticker,
            market: item.market || "United States",
            price: item.price || 0,
            change: item.change || "+0.0%",
            score: item.score || 75,
            rating: item.rating || "Moderate Buy"
          })
          .select()
          .single();

        if (error) throw error;
        return data;
      } catch (e) {
        console.error("Supabase addToWatchlist error:", e);
      }
    }

    const res = await fetch("/api/user/watchlist", {
      method: "POST",
      headers: this.getAuthHeaders(),
      body: JSON.stringify(item)
    });
    if (!res.ok) return null;
    return await res.json();
  },

  async removeFromWatchlist(tickerOrId) {
    const supabase = initSupabase();

    if (supabase) {
      try {
        const { error } = await supabase
          .from("user_watchlist")
          .delete()
          .or(`id.eq.${tickerOrId},ticker.eq.${tickerOrId.toUpperCase()}`);

        if (error) throw error;
        return { success: true };
      } catch (e) {
        console.error("Supabase removeFromWatchlist error:", e);
      }
    }

    const res = await fetch(`/api/user/watchlist/${tickerOrId}`, {
      method: "DELETE",
      headers: this.getAuthHeaders()
    });
    if (!res.ok) return { success: false };
    return await res.json();
  }
};
