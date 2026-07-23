// import { hasPermission } from "../modules/organization-role/organization-role.service.js";
// import { ForbiddenError } from "../utils/errors.js";

// export function authorize(permission) {
//   return async (req, res, next) => {
//     try {
//       const allowed = await hasPermission(
//         req.organizationId,
//         req.user.id,
//         permission
//       );

//       if (!allowed) {
//         throw new ForbiddenError(
//           "You do not have permission to perform this action."
//         );
//       }

//       return next();
//     } catch (error) {
//       return next(error);
//     }
//   };
// }



import { auth } from "../config/auth.js";
import { ForbiddenError } from "../utils/errors.js";

export function authorize(permissions) {
  return async (req, res, next) => {
    try {
      const result = await auth.api.hasPermission({
        headers: req.headers,
        body: {
          organizationId: req.organizationId,
          permissions,
        },
      });

      if (!result.success) {
        throw new ForbiddenError(
          "You do not have permission to perform this action."
        );
      }

      next();
    } catch (error) {
      next(error);
    }
  };
}