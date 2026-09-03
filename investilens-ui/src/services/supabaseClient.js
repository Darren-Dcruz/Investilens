import { createClient } from "@supabase/supabase-js";

const STORAGE_KEY = "investilens_supabase_custom_config";

export function getSupabaseConfig() {
  const envUrl = import.meta.env.VITE_SUPABASE_URL;
  const envKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (envUrl && envKey && !envUrl.includes("your-project-ref")) {
    return { url: envUrl, anonKey: envKey, source: "env" };
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.url && parsed.anonKey) {
        return { url: parsed.url, anonKey: parsed.anonKey, source: "custom" };
      }
    }
  } catch (e) {
    console.warn("Error reading local Supabase config:", e);
  }

  return { url: null, anonKey: null, source: "none" };
}

export function saveSupabaseConfig(url, anonKey) {
  if (url && anonKey) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ url: url.trim(), anonKey: anonKey.trim() }));
    // Reset client
    _supabaseClient = null;
    return initSupabase();
  } else {
    localStorage.removeItem(STORAGE_KEY);
    _supabaseClient = null;
  }
}

export function isSupabaseConfigured() {
  const config = getSupabaseConfig();
  return Boolean(config.url && config.anonKey);
}

let _supabaseClient = null;

export function initSupabase() {
  const config = getSupabaseConfig();
  if (!config.url || !config.anonKey) {
    return null;
  }

  if (!_supabaseClient) {
    _supabaseClient = createClient(config.url, config.anonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    });
  }

  return _supabaseClient;
}

export const supabase = initSupabase();
