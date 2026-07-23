import * as organizationService from "../modules/organization/organization.service.js";
import { UnauthorizedError } from "../utils/errors.js";

export async function requireOrganization(req, res, next) {
  try {
    const organizationId =
      await organizationService.getCurrentOrganization(req);

    if (!organizationId) {
      throw new UnauthorizedError(
        "No active organization selected"
      );
    }

    req.organizationId = organizationId;

    next();
  } catch (error) {
    next(error);
  }
}