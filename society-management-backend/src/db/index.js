import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "../config/env.js";
import { sql } from "drizzle-orm";

const client = postgres(env.DATABASE_URL);

export const db = drizzle(client);

export async function connectDB() {
  try {
    await db.execute(sql`SELECT 1`);
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Database connection failed");
    console.error(error);
    process.exit(1);
  }
}