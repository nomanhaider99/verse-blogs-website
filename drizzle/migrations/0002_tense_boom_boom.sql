ALTER TABLE "authenticator" DROP CONSTRAINT "authenticator_userId_credentialID_pk";--> statement-breakpoint
ALTER TABLE "verificationToken" DROP CONSTRAINT "verificationToken_identifier_token_pk";--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "password" varchar(35) NOT NULL;