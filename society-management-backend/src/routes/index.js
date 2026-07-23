import { Router } from "express";

import authRoutes from "../modules/auth/auth.routes.js";
import organizationRoutes from "../modules/organization/organization.routes.js";
import residentRoutes from "../modules/resident/resident.routes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/organizations", organizationRoutes);
router.use("/residents", residentRoutes);

export default router;