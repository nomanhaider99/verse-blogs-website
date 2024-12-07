import {
    pgTable,
    varchar,
    text,
    integer,
    uniqueIndex,
    timestamp,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// Account Table
export const accounts = pgTable(
    "accounts",
    {
        id: varchar("id", { length: 36 }).primaryKey().default("gen_random_uuid()"),
        userId: varchar("user_id", { length: 36 }).notNull(),
        type: varchar("type", { length: 255 }).notNull(),
        provider: varchar("provider", { length: 255 }).notNull(),
        providerAccountId: varchar("provider_account_id", { length: 255 }).notNull(),
        refreshToken: text("refresh_token"),
        accessToken: text("access_token"),
        expiresAt: integer("expires_at"),
        tokenType: varchar("token_type", { length: 255 }),
        scope: varchar("scope", { length: 255 }),
        idToken: text("id_token"),
        sessionState: varchar("session_state", { length: 255 }),
    },
    (table) => ({
        uniqueProviderAccountId: uniqueIndex(
            "unique_provider_account_id"
        ).on(table.provider, table.providerAccountId),
    })
);

// User Table
export const users = pgTable(
    "users",
    {
        id: varchar("id", { length: 36 }).primaryKey().default("gen_random_uuid()"),
        name: varchar("name", { length: 255 }),
        email: varchar("email", { length: 255 }).unique(),
        password: varchar("password", { length: 255 }).notNull(),
        emailVerified: timestamp("email_verified"),
        image: varchar("image", { length: 255 }),
    }
);

// Defining Relations
export const accountsRelations = relations(accounts, ({ one }) => ({
    user: one(users, {
        fields: [accounts.userId],
        references: [users.id],
        onDelete: "cascade",
    }),
}));

export const usersRelations = relations(users, ({ many }) => ({
    accounts: many(accounts),
}));
