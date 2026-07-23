CREATE TYPE "public"."resident_status" AS ENUM('active', 'inactive');--> statement-breakpoint
CREATE TYPE "public"."resident_type" AS ENUM('owner', 'tenant', 'family');--> statement-breakpoint
CREATE TABLE "resident" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"organization_id" varchar(255) NOT NULL,
	"user_id" varchar(255),
	"first_name" varchar(100) NOT NULL,
	"last_name" varchar(100),
	"email" varchar(255),
	"phone" varchar(20),
	"wing" varchar(20),
	"unit_number" varchar(20) NOT NULL,
	"type" "resident_type" DEFAULT 'owner' NOT NULL,
	"status" "resident_status" DEFAULT 'active' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "resident" ADD CONSTRAINT "resident_organization_id_organization_id_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organization"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "resident" ADD CONSTRAINT "resident_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE set null ON UPDATE no action;