import { fromNodeHeaders } from "better-auth/node";
import { auth } from "../../config/auth.js";

export async function getCurrentUser(req) {
  return await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });
}