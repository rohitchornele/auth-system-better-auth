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

    // await assignRole(
    //     organization.id,
    //     req.user.id,
    //     ROLES.OWNER
    // );

    return organization;
}

export async function getOrganizations(req) {
    return auth.api.listOrganizations({
        headers: req.headers,
    });
}

export async function getCurrentOrganization(req) {
    const session = await getSessionFromRequest(req);

    return session?.session?.activeOrganizationId ?? null;
}