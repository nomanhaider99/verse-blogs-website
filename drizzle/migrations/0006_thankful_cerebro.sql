CREATE TYPE "public"."gender" AS ENUM('MALE', 'FEMALE');--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "gender" "gender";