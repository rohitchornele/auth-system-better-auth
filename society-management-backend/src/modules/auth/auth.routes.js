import { Router } from "express";
import * as authController from "./auth.controller.js";
import { authenticate } from "../../middleware/auth.middleware.js";

const authRoutes = Router();

authRoutes.get("/session", authenticate, authController.getSession);
authRoutes.get("/me", authenticate, authController.getCurrentUser);

export default authRoutes;