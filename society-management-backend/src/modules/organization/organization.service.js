import { auth } from "../../config/auth.js";
import {
    getAuthHeaders,
    getSessionFromRequest,
} from "../../utils/auth.js";

export async function createOrganization(req, data) {
    const organization = await auth.api.createOrganization({
        headers: getAuthHeaders(req),
        body: {
            name: data.name,
            slug: data.slug,
            metadata: data.metadata,
        },
    });


    return organization;
}

export async function getOrganizations(req) {
    return auth.api.listOrganizations({
        headers: req.headers,
    });
}


export async function getCurrentOrganization(req) {
  return auth.api.getOrganizations({
    headers: getAuthHeaders(req),
  });
}


// export async function getCurrentOrganization(req) {
//     const session = await getSessionFromRequest(req);

//     const activeOrganizationId =
//         session?.session?.activeOrganizationId;

//     if (!activeOrganizationId) {
//         return null;
//     }

//     const organizations = await auth.api.listOrganizations({
//         headers: getAuthHeaders(req),
//     });

//     return (
//         organizations.find(
//             (organization) =>
//                 organization.id === activeOrganizationId
//         ) ?? null
//     );
// }


export async function selectOrganization(req, organizationId) {
    return auth.api.setActiveOrganization({
        headers: getAuthHeaders(req),
        body: {
            organizationId,
        },
    });
}