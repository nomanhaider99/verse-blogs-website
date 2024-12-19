CREATE TABLE IF NOT EXISTS "blogs" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text,
	"body" text,
	"userId" text NOT NULL,
	CONSTRAINT "blogs_body_unique" UNIQUE("body")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "blogs" ADD CONSTRAINT "blogs_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
