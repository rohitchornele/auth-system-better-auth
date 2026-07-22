import { Router } from "express";
import { getCurrentUser } from "./auth.controller.js";

const authRoutes = Router();

authRoutes.get("/session", getCurrentUser);

export default authRoutes;