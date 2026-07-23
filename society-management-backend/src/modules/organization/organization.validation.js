import { z } from "zod";

export const createOrganizationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Organization name must be at least 3 characters.")
    .max(100, "Organization name cannot exceed 100 characters."),

  slug: z
    .string()
    .trim()
    .toLowerCase()
    .min(3, "Slug must be at least 3 characters.")
    .max(100, "Slug cannot exceed 100 characters.")
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug can only contain lowercase letters, numbers and hyphens."
    ),

  metadata: z.object({
    societyType: z
      .string()
      .trim()
      .min(1, "Society type is required."),

    address: z
      .string()
      .trim()
      .min(5, "Address is required."),

    city: z
      .string()
      .trim()
      .min(2, "City is required."),

    state: z
      .string()
      .trim()
      .min(2, "State is required."),

    pincode: z
      .string()
      .trim()
      .regex(/^[1-9][0-9]{5}$/, "Invalid pincode."),

    country: z
      .string()
      .trim()
      .min(2, "Country is required."),
  }),
});