import * as authService from "./auth.service.js";

export async function getCurrentUser(req, res, next) {
  try {
    const session = await authService.getCurrentUser(req);

    return res.status(200).json({
      success: true,
      data: session,
    });
  } catch (error) {
    next(error);
  }
}