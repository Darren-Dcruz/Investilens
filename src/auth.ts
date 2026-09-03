import crypto from "node:crypto";
import http from "node:http";
import { db, User } from "./db";

export function hashPassword(password: string, salt?: string): { hash: string; salt: string } {
  const userSalt = salt || crypto.randomBytes(16).toString("hex");
  const hash = crypto.scryptSync(password, userSalt, 64).toString("hex");
  return { hash, salt: userSalt };
}

export function verifyPassword(password: string, hash: string, salt: string): boolean {
  const calculatedHash = crypto.scryptSync(password, salt, 64).toString("hex");
  return crypto.timingSafeEqual(Buffer.from(hash, "hex"), Buffer.from(calculatedHash, "hex"));
}

export function registerUser(params: {
  username: string;
  email: string;
  password: string;
  name?: string;
}): { user: Omit<User, "passwordHash" | "salt">; token: string } {
  const username = (params.username || "").trim().toLowerCase();
  const email = (params.email || "").trim().toLowerCase();
  const password = params.password || "";
  const name = (params.name || username || "Investor").trim();

  if (!username || username.length < 3) {
    throw new Error("Username must be at least 3 characters long");
  }
  if (!email || !email.includes("@")) {
    throw new Error("Please provide a valid email address");
  }
  if (!password || password.length < 6) {
    throw new Error("Password must be at least 6 characters long");
  }

  const existingEmail = db.findUserByEmailOrUsername(email);
  if (existingEmail) {
    throw new Error("An account with this email or username already exists");
  }

  const existingUsername = db.findUserByEmailOrUsername(username);
  if (existingUsername) {
    throw new Error("Username is already taken");
  }

  const { hash, salt } = hashPassword(password);
  const userId = `usr_${Date.now()}_${crypto.randomBytes(4).toString("hex")}`;

  const newUser: User = {
    id: userId,
    username,
    email,
    passwordHash: hash,
    salt,
    name,
    createdAt: new Date().toISOString()
  };

  db.createUser(newUser);
  const session = db.createSession(userId);

  const { passwordHash: _, salt: __, ...safeUser } = newUser;
  return {
    user: safeUser,
    token: session.token
  };
}

export function loginUser(params: {
  identifier: string; // email or username
  password: string;
}): { user: Omit<User, "passwordHash" | "salt">; token: string } {
  const identifier = (params.identifier || "").trim();
  const password = params.password || "";

  if (!identifier || !password) {
    throw new Error("Please provide your username/email and password");
  }

  const user = db.findUserByEmailOrUsername(identifier);
  if (!user) {
    throw new Error("Invalid username/email or password");
  }

  const isValid = verifyPassword(password, user.passwordHash, user.salt);
  if (!isValid) {
    throw new Error("Invalid username/email or password");
  }

  const session = db.createSession(user.id);
  const { passwordHash: _, salt: __, ...safeUser } = user;

  return {
    user: safeUser,
    token: session.token
  };
}

export function getAuthenticatedUser(req: http.IncomingMessage): Omit<User, "passwordHash" | "salt"> | null {
  const authHeader = req.headers["authorization"] || "";
  let token = "";

  if (authHeader.startsWith("Bearer ")) {
    token = authHeader.substring(7).trim();
  } else if (typeof req.headers["x-auth-token"] === "string") {
    token = req.headers["x-auth-token"].trim();
  }

  if (!token) return null;

  const session = db.getSession(token);
  if (!session) return null;

  return session.user;
}
