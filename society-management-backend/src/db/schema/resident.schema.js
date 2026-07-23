import {
  pgTable,
  uuid,
  varchar,
  timestamp,
  pgEnum,
} from "drizzle-orm/pg-core";
import { organization, user } from "./auth.schema.js";

export const residentTypeEnum = pgEnum("resident_type", [
  "owner",
  "tenant",
  "family",
]);

export const residentStatusEnum = pgEnum("resident_status", [
  "active",
  "inactive",
]);

export const resident = pgTable("resident", {
  id: uuid("id").defaultRandom().primaryKey(),

  organizationId: varchar("organization_id", { length: 255 })
    .notNull()
    .references(() => organization.id, {
      onDelete: "cascade",
    }),

  userId: varchar("user_id", { length: 255 }).references(() => user.id, {
    onDelete: "set null",
  }),

  firstName: varchar("first_name", { length: 100 }).notNull(),

  lastName: varchar("last_name", { length: 100 }),

  email: varchar("email", { length: 255 }),

  phone: varchar("phone", { length: 20 }),

  wing: varchar("wing", { length: 20 }),

  unitNumber: varchar("unit_number", { length: 20 }).notNull(),

  type: residentTypeEnum("type")
    .default("owner")
    .notNull(),

  status: residentStatusEnum("status")
    .default("active")
    .notNull(),

  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull(),

  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});