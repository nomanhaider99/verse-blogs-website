ALTER TABLE "blogs" ADD COLUMN "image" text;--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "created_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "created_at" timestamp DEFAULT now();