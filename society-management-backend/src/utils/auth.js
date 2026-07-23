// utils/auth.js

import { fromNodeHeaders } from "better-auth/node";
import { auth } from "../config/auth.js";

export function getAuthHeaders(req) {
  return fromNodeHeaders(req.headers);
}

export async function getSessionFromRequest(req) {
  return auth.api.getSession({
    headers: getAuthHeaders(req),
  });
}