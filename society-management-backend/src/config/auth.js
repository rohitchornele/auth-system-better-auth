import { betterAuth } from "better-auth";
import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { db } from "../db/index.js";
import { env } from "./env.js";
import { organization } from "better-auth/plugins"
import * as schema from "../db/schema/index.js"

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        schema
    }),

    secret: env.BETTER_AUTH_SECRET,
    baseURL: env.BETTER_AUTH_URL,

    trustedOrigins: [
        "http://localhost:5173",
        "http://localhost:5000",
    ],

    emailAndPassword: {
        enabled: true,
    },

    session: {
        expiresIn: 60 * 60 * 24 * 7, // 7 days
        updateAge: 60 * 60 * 24, // 1 day
    },

    plugins: [
        organization({
            ac,
            roles: {
                owner,
                admin,
                member,
            },
        }),
    ]
});