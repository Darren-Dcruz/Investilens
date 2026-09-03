import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

export interface User {
  id: string;
  username: string;
  email: string;
  passwordHash: string;
  salt: string;
  name: string;
  createdAt: string;
}

export interface Session {
  token: string;
  userId: string;
  createdAt: string;
  expiresAt: string;
}

export interface ResearchHistoryItem {
  id: string;
  userId: string;
  ticker: string;
  companyName: string;
  market: string;
  sector?: string;
  score: number;
  rating: string;
  confidence: string;
  summary: string;
  params: any;
  reportData: any;
  stockData: any;
  createdAt: string;
}

export interface UserWatchlistItem {
  id: string;
  userId: string;
  ticker: string;
  name: string;
  market?: string;
  price?: number;
  change?: string;
  rating?: string;
  score?: number;
  addedAt: string;
}

interface DatabaseSchema {
  users: User[];
  sessions: Session[];
  history: ResearchHistoryItem[];
  watchlist: UserWatchlistItem[];
}

const DATA_DIR = path.join(__dirname, "..", "data");
const DB_FILE = path.join(DATA_DIR, "investilens_db.json");

class Database {
  private data: DatabaseSchema = {
    users: [],
    sessions: [],
    history: [],
    watchlist: []
  };

  constructor() {
    this.init();
  }

  private init() {
    try {
      if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
      }

      if (fs.existsSync(DB_FILE)) {
        const raw = fs.readFileSync(DB_FILE, "utf-8");
        this.data = JSON.parse(raw);
        if (!this.data.users) this.data.users = [];
        if (!this.data.sessions) this.data.sessions = [];
        if (!this.data.history) this.data.history = [];
        if (!this.data.watchlist) this.data.watchlist = [];
      } else {
        this.seedInitialData();
        this.save();
      }
    } catch (err) {
      console.error("[DB] Failed to load database file, initializing empty:", err);
      this.seedInitialData();
      this.save();
    }
  }

  private seedInitialData() {
    // Seed a default demo account for instant hackathon testing: demo@investilens.ai / demo123
    const salt = crypto.randomBytes(16).toString("hex");
    const passwordHash = crypto.scryptSync("demo123", salt, 64).toString("hex");
    const demoUserId = "usr_demo_investor";

    const demoUser: User = {
      id: demoUserId,
      username: "demo_investor",
      email: "demo@investilens.ai",
      passwordHash,
      salt,
      name: "Alex Vance (Demo)",
      createdAt: new Date(Date.now() - 86400000 * 5).toISOString()
    };

    this.data.users.push(demoUser);

    // Seed sample initial history for demo user
    this.data.history.push({
      id: "hist_sample_nvda",
      userId: demoUserId,
      ticker: "NVDA",
      companyName: "NVIDIA Corp.",
      market: "United States",
      sector: "Semiconductors & AI Hardware",
      score: 86,
      rating: "Strong Buy",
      confidence: "HIGH",
      summary: "Dominant AI accelerator market share (>85%), explosive data center segment revenue growth, and expanding gross margins (>75%).",
      params: {
        ticker: "NVDA",
        companyQuery: "NVIDIA Corp.",
        market: "United States",
        sector: "Semiconductors & AI Hardware",
        amount: 50000,
        currency: "USD",
        risk: "moderate",
        horizon: "3-5 years"
      },
      reportData: null,
      stockData: null,
      createdAt: new Date(Date.now() - 3600000 * 4).toISOString()
    });

    this.data.history.push({
      id: "hist_sample_tsla",
      userId: demoUserId,
      ticker: "TSLA",
      companyName: "Tesla, Inc.",
      market: "United States",
      sector: "Automotive & Clean Energy",
      score: 68,
      rating: "Hold / Accumulate",
      confidence: "HIGH",
      summary: "Leading EV market presence and autonomous driving optionality offset by near-term auto gross margin compression and rising EV competition.",
      params: {
        ticker: "TSLA",
        companyQuery: "Tesla, Inc.",
        market: "United States",
        sector: "Automotive & Clean Energy",
        amount: 25000,
        currency: "USD",
        risk: "high",
        horizon: "3-5 years"
      },
      reportData: null,
      stockData: null,
      createdAt: new Date(Date.now() - 86400000 * 2).toISOString()
    });
  }

  public save() {
    try {
      if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
      }
      fs.writeFileSync(DB_FILE, JSON.stringify(this.data, null, 2), "utf-8");
    } catch (err) {
      console.error("[DB] Failed to save database to disk:", err);
    }
  }

  // --- Users ---
  public findUserById(id: string): User | undefined {
    return this.data.users.find((u) => u.id === id);
  }

  public findUserByEmailOrUsername(identifier: string): User | undefined {
    const clean = identifier.trim().toLowerCase();
    return this.data.users.find(
      (u) => u.email.toLowerCase() === clean || u.username.toLowerCase() === clean
    );
  }

  public createUser(user: User): User {
    this.data.users.push(user);
    this.save();
    return user;
  }

  // --- Sessions ---
  public createSession(userId: string, durationDays: number = 30): Session {
    const token = crypto.randomBytes(32).toString("hex");
    const now = new Date();
    const expiresAt = new Date(now.getTime() + durationDays * 24 * 60 * 60 * 1000).toISOString();

    const session: Session = {
      token,
      userId,
      createdAt: now.toISOString(),
      expiresAt
    };

    // Remove older sessions for this user if > 10
    this.data.sessions = this.data.sessions.filter(
      (s) => s.userId !== userId || new Date(s.expiresAt) > now
    );
    this.data.sessions.push(session);
    this.save();
    return session;
  }

  public getSession(token: string): (Session & { user: Omit<User, "passwordHash" | "salt"> }) | null {
    const session = this.data.sessions.find((s) => s.token === token);
    if (!session) return null;

    if (new Date(session.expiresAt) < new Date()) {
      this.deleteSession(token);
      return null;
    }

    const user = this.findUserById(session.userId);
    if (!user) {
      this.deleteSession(token);
      return null;
    }

    const { passwordHash, salt, ...safeUser } = user;
    return {
      ...session,
      user: safeUser
    };
  }

  public deleteSession(token: string): boolean {
    const initialLen = this.data.sessions.length;
    this.data.sessions = this.data.sessions.filter((s) => s.token !== token);
    if (this.data.sessions.length !== initialLen) {
      this.save();
      return true;
    }
    return false;
  }

  // --- History ---
  public getUserHistory(userId: string): ResearchHistoryItem[] {
    return this.data.history
      .filter((h) => h.userId === userId)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  public getHistoryItem(id: string, userId?: string): ResearchHistoryItem | undefined {
    return this.data.history.find(
      (h) => h.id === id && (!userId || h.userId === userId)
    );
  }

  public addHistoryItem(item: Omit<ResearchHistoryItem, "id" | "createdAt">): ResearchHistoryItem {
    const id = `hist_${Date.now()}_${crypto.randomBytes(4).toString("hex")}`;
    const newItem: ResearchHistoryItem = {
      id,
      ...item,
      createdAt: new Date().toISOString()
    };

    // Check if an existing history item exists for same user and ticker created in last 5 minutes -> update it
    const recentIndex = this.data.history.findIndex(
      (h) => h.userId === item.userId && h.ticker === item.ticker &&
      Math.abs(new Date().getTime() - new Date(h.createdAt).getTime()) < 300000
    );

    if (recentIndex >= 0) {
      this.data.history[recentIndex] = { ...this.data.history[recentIndex], ...newItem, id: this.data.history[recentIndex].id };
      this.save();
      return this.data.history[recentIndex];
    }

    this.data.history.unshift(newItem);
    this.save();
    return newItem;
  }

  public deleteHistoryItem(id: string, userId: string): boolean {
    const initialLen = this.data.history.length;
    this.data.history = this.data.history.filter((h) => !(h.id === id && h.userId === userId));
    if (this.data.history.length !== initialLen) {
      this.save();
      return true;
    }
    return false;
  }

  // --- Watchlist ---
  public getUserWatchlist(userId: string): UserWatchlistItem[] {
    return this.data.watchlist
      .filter((w) => w.userId === userId)
      .sort((a, b) => new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime());
  }

  public addToWatchlist(item: Omit<UserWatchlistItem, "id" | "addedAt">): UserWatchlistItem {
    // Check if already in watchlist
    const existing = this.data.watchlist.find(
      (w) => w.userId === item.userId && w.ticker.toUpperCase() === item.ticker.toUpperCase()
    );
    if (existing) {
      existing.price = item.price ?? existing.price;
      existing.change = item.change ?? existing.change;
      existing.score = item.score ?? existing.score;
      existing.rating = item.rating ?? existing.rating;
      this.save();
      return existing;
    }

    const id = `watch_${Date.now()}_${crypto.randomBytes(3).toString("hex")}`;
    const newItem: UserWatchlistItem = {
      id,
      ...item,
      ticker: item.ticker.toUpperCase(),
      addedAt: new Date().toISOString()
    };
    this.data.watchlist.unshift(newItem);
    this.save();
    return newItem;
  }

  public removeFromWatchlist(tickerOrId: string, userId: string): boolean {
    const initialLen = this.data.watchlist.length;
    this.data.watchlist = this.data.watchlist.filter(
      (w) => !(w.userId === userId && (w.id === tickerOrId || w.ticker.toUpperCase() === tickerOrId.toUpperCase()))
    );
    if (this.data.watchlist.length !== initialLen) {
      this.save();
      return true;
    }
    return false;
  }
}

export const db = new Database();
