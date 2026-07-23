import { fromNodeHeaders } from "better-auth/node";
import { auth } from "../config/auth.js";
import { getSessionFromRequest } from "../utils/auth.js";

export async function authenticate(req, res, next) {
  try {
    const data = await getSessionFromRequest(req);

    if (!data?.session || !data?.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    req.user = data.user;
    req.session = data.session;

    next();
  } catch (error) {
    next(error);
  }
}