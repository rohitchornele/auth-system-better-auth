import * as authService from "./auth.service.js";
import { successResponse } from "../../utils/response.js";

export async function getSession(req, res) {
  return successResponse(
    res,
    {
      user: req.user,
      session: req.session,
    },
    "Session fetched successfully"
  );
}

export async function getCurrentUser(req, res) {
  return successResponse(
    res,
    req.user,
    "Current user fetched successfully"
  );
}