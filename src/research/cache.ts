/**
 * In-Memory & TTL Caching Layer (Step 3)
 * Caches research reports, evidence, and live quotes for 15 minutes to eliminate duplicate API requests
 * and ensure blazing fast sub-second response times for production users.
 */
interface CacheEntry<T> {
  data: T;
  expiresAt: number;
}

class ResearchCache {
  private store = new Map<string, CacheEntry<any>>();
  private defaultTTLMs = 15 * 60 * 1000; // 15 Minutes

  set<T>(key: string, data: T, ttlMs: number = this.defaultTTLMs): void {
    this.store.set(key.toUpperCase(), {
      data,
      expiresAt: Date.now() + ttlMs
    });
  }

  get<T>(key: string): T | null {
    const entry = this.store.get(key.toUpperCase());
    if (!entry) return null;

    if (Date.now() > entry.expiresAt) {
      this.store.delete(key.toUpperCase());
      return null;
    }

    return entry.data as T;
  }

  has(key: string): boolean {
    return this.get(key) !== null;
  }

  clear(): void {
    this.store.clear();
  }
}

export const researchCache = new ResearchCache();
