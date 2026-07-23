import express from "express";
import cors from "cors";
import helmet from "helmet";
import pinoHttp from "pino-http";
import { toNodeHandler } from "better-auth/node";

import { auth } from "./config/auth.js";
import routes from "./routes/index.js";
import authRoutes from "./modules/auth/auth.routes.js";
import organizationRoutes from "./modules/organization/organization.routes.js";
import residentRoutes from "./modules/resident/resident.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

/* -------------------------------------------------------------------------- */
/*                                Middleware                                  */
/* -------------------------------------------------------------------------- */

app.use(helmet());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5000",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  })
);

app.use(
  pinoHttp({
    transport:
      process.env.NODE_ENV !== "production"
        ? {
          target: "pino-pretty",
        }
        : undefined,
  })
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

/* -------------------------------------------------------------------------- */
/*                               Better Auth                                  */
/* -------------------------------------------------------------------------- */

app.all("/api/auth/*splat", toNodeHandler(auth));

/* -------------------------------------------------------------------------- */
/*                                 API Routes                                 */
/* -------------------------------------------------------------------------- */

// app.use("/api/auth", authRoutes);
// app.use("/api/organizations", organizationRoutes);
// app.use("/api/residents", residentRoutes);

app.use("/api", routes);

/* -------------------------------------------------------------------------- */
/*                               Health Check                                 */
/* -------------------------------------------------------------------------- */

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "🚀 Portl API is running successfully",
  });
});

/* -------------------------------------------------------------------------- */
/*                                 Not Found                                  */
/* -------------------------------------------------------------------------- */

app.use((req, res) => {
  return res.status(404).json({
    success: false,
    message: `Cannot ${req.method} ${req.originalUrl}`,
  });
});

/* -------------------------------------------------------------------------- */
/*                               Error Handler                                */
/* -------------------------------------------------------------------------- */

app.use(errorHandler);

export default app;