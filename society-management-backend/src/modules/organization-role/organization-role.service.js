// import { and, eq } from "drizzle-orm";

// import { db } from "../../db/index.js";
// import { organizationRole } from "../../db/schema/index.js";
// import { ROLE_PERMISSIONS } from "../../access-control/role-permissions.js";
// import { ConflictError, NotFoundError } from "../../utils/errors.js";

// export async function getUserRole(organizationId, userId) {
//     const roleRecord = await db.query.organizationRole.findFirst({
//         where: and(
//             eq(organizationRole.organizationId, organizationId),
//             eq(organizationRole.userId, userId)
//         ),
//     });

//     return roleRecord?.role ?? null;
// }

// export async function assignRole(organizationId, userId, role) {
//     const existingRole = await getUserRole(organizationId, userId);

//     if (existingRole) {
//         throw new ConflictError("User already has a role in this organization.");
//     }

//     const [newRole] = await db
//         .insert(organizationRole)
//         .values({
//             organizationId,
//             userId,
//             role,
//         })
//         .returning();

//     return newRole;
// }

// export async function updateRole(organizationId, userId, role) {
//     const [updatedRole] = await db
//         .update(organizationRole)
//         .set({ role })
//         .where(
//             and(
//                 eq(organizationRole.organizationId, organizationId),
//                 eq(organizationRole.userId, userId)
//             )
//         )
//         .returning();

//     if (!updatedRole) {
//         throw new NotFoundError("Role assignment not found.");
//     }

//     return updatedRole;
// }


// export async function hasPermission(
//     organizationId,
//     userId,
//     permission
// ) {
//     const role = await getUserRole(
//         organizationId,
//         userId
//     );

//     if (!role) {
//         return false;
//     }

//     const permissions =
//         ROLE_PERMISSIONS[role] ?? [];

//     return permissions.includes(permission);
// }