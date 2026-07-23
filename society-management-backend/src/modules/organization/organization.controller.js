import * as organizationService from "./organization.service.js";
import { successResponse } from "../../utils/response.js";

export async function createOrganization(req, res, next) {
    try {
        const organization =
            await organizationService.createOrganization(req, req.body);

        return successResponse(
            res,
            organization,
            "Organization created successfully",
            201
        );
    } catch (error) {
        next(error);
    }
}

export async function getOrganizations(req, res, next) {
    try {
        const organizations =
            await organizationService.getOrganizations(req);

        return successResponse(
            res,
            organizations,
            "Organizations fetched successfully"
        );
    } catch (error) {
        next(error);
    }
}

export async function getCurrentOrganization(req, res, next) {
    try {
        const organization =
            await organizationService.getCurrentOrganization(req);

        return successResponse(
            res,
            organization,
            "Current organization fetched successfully"
        );
    } catch (error) {
        next(error);
    }
}

export async function selectOrganization(req, res, next) {
  try {
    const organization =
      await organizationService.selectOrganization(
        req,
        req.body.organizationId
      );

    return successResponse(
      res,
      organization,
      "Organization selected successfully"
    );
  } catch (error) {
    next(error);
  }
}