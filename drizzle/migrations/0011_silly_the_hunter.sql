ALTER TABLE "blogs" ADD COLUMN "content" text;--> statement-breakpoint
ALTER TABLE "blogs" DROP COLUMN IF EXISTS "body";