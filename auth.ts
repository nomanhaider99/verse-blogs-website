import NextAuth from "next-auth"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "./drizzle/drizzle"
import { accounts, sessions, users, verificationTokens } from "./drizzle/schema";
import authConfig from "./auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
  ...authConfig,
  session: {
    strategy: "jwt"
  },
  secret: process.env.AUTH_SECRET
});