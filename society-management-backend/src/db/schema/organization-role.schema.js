// import crypto from "crypto";

// import {
//   pgTable,
//   pgEnum,
//   text,
//   timestamp,
//   unique,
// } from "drizzle-orm/pg-core";

// import { organization, user } from "./auth.schema.js";

// export const organizationRoleEnum = pgEnum("organization_role", [
//   "owner",
//   "admin",
//   "manager",
//   "security",
//   "accountant",
//   "resident",
// ]);

// export const organizationRole = pgTable(
//   "organization_roles",
//   {
//     id: text("id")
//       .$defaultFn(() => crypto.randomUUID())
//       .primaryKey(),

//     organizationId: text("organization_id")
//       .notNull()
//       .references(() => organization.id, {
//         onDelete: "cascade",
//       }),

//     userId: text("user_id")
//       .notNull()
//       .references(() => user.id, {
//         onDelete: "cascade",
//       }),

//     role: organizationRoleEnum("role")
//       .notNull()
//       .default("resident"),

//     createdAt: timestamp("created_at")
//       .defaultNow()
//       .notNull(),

//     updatedAt: timestamp("updated_at")
//       .defaultNow()
//       .$onUpdate(() => new Date())
//       .notNull(),
//   },
//   (table) => ({
//     organizationUserUnique: unique().on(
//       table.organizationId,
//       table.userId
//     ),
//   })
// );