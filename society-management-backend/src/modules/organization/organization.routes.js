import { Router } from "express";
import * as organizationController from "./organization.controller.js";
import { authenticate } from "../../middleware/auth.middleware.js";
import { validate } from "../../middleware/validate.middleware.js";
import { createOrganizationSchema } from "./organization.validation.js";

const router = Router();

router.post(
  "/",
  authenticate,
  validate(createOrganizationSchema),
  organizationController.createOrganization
);

router.get(
  "/",
  authenticate,
  organizationController.getOrganizations
);

router.get(
  "/current",
  authenticate,
  organizationController.getCurrentOrganization
);

export default router;