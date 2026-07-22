import app from "./src/app.js";
import { env } from "./src/config/env.js";
import logger from "./src/config/logger.js";
import { connectDB } from "./src/db/index.js";

const PORT = env.PORT;

await connectDB();

const server = app.listen(PORT, () => {
  console.log(`
=========================================
🚀 Portl Backend Started
🌍 Environment : ${env.NODE_ENV}
📡 Server      : http://localhost:${PORT}
=========================================
`);
});

process.on("SIGINT", () => {
  console.log("\n🛑 Shutting down server...");
  server.close(() => {
    console.log("✅ Server stopped");
    process.exit(0);
  });
});

process.on("SIGTERM", () => {
  console.log("\n🛑 Shutting down server...");
  server.close(() => {
    console.log("✅ Server stopped");
    process.exit(0);
  });
});

logger.info(`🚀 Server running on port ${PORT}`);