ALTER TABLE "user" ALTER COLUMN "name" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "name" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "email" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "email" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "password" SET DATA TYPE text;