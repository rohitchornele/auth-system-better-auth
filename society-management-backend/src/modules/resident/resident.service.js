import { and, eq } from "drizzle-orm";

import { db } from "../../db/index.js";
import { resident } from "../../db/schema/index.js";

import { NotFoundError } from "../../utils/errors.js";

export async function createResident(req, data) {
  const [newResident] = await db
    .insert(resident)
    .values({
      ...data,
      organizationId: req.organizationId,
    })
    .returning();

  return newResident;
}

export async function getResidents(req) {
  return await db.query.resident.findMany({
    where: eq(resident.organizationId, req.organizationId),
  });
}

export async function getResidentById(req, id) {
  const existingResident = await db.query.resident.findFirst({
    where: and(
      eq(resident.id, id),
      eq(resident.organizationId, req.organizationId)
    ),
  });

  if (!existingResident) {
    throw new NotFoundError("Resident not found");
  }

  return existingResident;
}

export async function updateResident(req, id, data) {
  const [updatedResident] = await db
    .update(resident)
    .set(data)
    .where(
      and(
        eq(resident.id, id),
        eq(resident.organizationId, req.organizationId)
      )
    )
    .returning();

  if (!updatedResident) {
    throw new NotFoundError("Resident not found");
  }

  return updatedResident;
}

export async function deleteResident(req, id) {
  const [deletedResident] = await db
    .delete(resident)
    .where(
      and(
        eq(resident.id, id),
        eq(resident.organizationId, req.organizationId)
      )
    )
    .returning();

  if (!deletedResident) {
    throw new NotFoundError("Resident not found");
  }

  return deletedResident;
}