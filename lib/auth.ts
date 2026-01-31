import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";

export const SESSION_OPTIONS = {
  password: process.env.SESSION_SECRET ?? "change-me-in-production-min-32-chars",
  cookieName: "admin_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    maxAge: 60 * 60 * 24, // 24 hours
    sameSite: "lax" as const,
  },
};

export interface SessionData {
  loggedIn: boolean;
  email?: string;
}

export async function getSession() {
  const cookieStore = await cookies();
  return getIronSession<SessionData>(cookieStore, SESSION_OPTIONS);
}

export async function requireAuth() {
  const session = await getSession();
  if (!session.loggedIn) {
    return null;
  }
  return session;
}

export async function verifyAdmin(email: string, password: string): Promise<boolean> {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;

  if (!adminEmail || !adminPasswordHash) {
    // Fallback: if only plain password is set (dev only)
    const plainPassword = process.env.ADMIN_PASSWORD;
    if (plainPassword && email === adminEmail && password === plainPassword) {
      return true;
    }
    return false;
  }

  if (email !== adminEmail) return false;
  return bcrypt.compare(password, adminPasswordHash);
}
