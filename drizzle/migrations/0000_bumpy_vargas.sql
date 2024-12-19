CREATE TABLE IF NOT EXISTS "accounts" (
	"id" varchar(36) PRIMARY KEY DEFAULT 'gen_random_uuid()' NOT NULL,
	"user_id" varchar(36) NOT NULL,
	"type" varchar(255) NOT NULL,
	"provider" varchar(255) NOT NULL,
	"provider_account_id" varchar(255) NOT NULL,
	"refresh_token" text,
	"access_token" text,
	"expires_at" integer,
	"token_type" varchar(255),
	"scope" varchar(255),
	"id_token" text,
	"session_state" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" varchar(36) PRIMARY KEY DEFAULT 'gen_random_uuid()' NOT NULL,
	"name" varchar(255),
	"email" varchar(255),
	"password" varchar(255) NOT NULL,
	"email_verified" timestamp,
	"image" varchar(255),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "unique_provider_account_id" ON "accounts" USING btree ("provider","provider_account_id");