import express from "express";
import cors from "cors";
import helmet from "helmet";
import pinoHttp from "pino-http";

import routes from "./routes/index.js";
import { errorHandler } from "./middleware/error.js";
import { fromNodeHeaders, toNodeHandler } from "better-auth/node";
import { auth } from "./config/auth.js";

const app = express();

/* ------------------------- Middleware ------------------------- */

app.use(helmet());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5000",
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use(pinoHttp({ transport: process.env.NODE_ENV !== "production" ? { target: "pino-pretty", } : undefined, }));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

/* ------------------------- Health Check ------------------------- */

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "🚀 Portl API is running successfully",
  });
});

/* ------------------------- API Routes ------------------------- */

app.get("/api/me", async (req, res) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });
  return res.json(session);
});

app.all("/api/auth/*splat", toNodeHandler(auth));

app.use("/api", routes);


/* ------------------------- 404 ------------------------- */

app.use((req, res) => {
  return res.status(404).json({
    success: false,
    message: `Cannot ${req.method} ${req.originalUrl}`,
  });
});

/* ------------------------- Error Handler ------------------------- */

app.use(errorHandler);

export default app;