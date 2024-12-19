ALTER TABLE "blogs" DROP CONSTRAINT "blogs_body_unique";--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "description" text;