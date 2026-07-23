import { z } from "zod";

export const createResidentSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters")
    .max(100),

  lastName: z
    .string()
    .trim()
    .max(100)
    .optional(),

  email: z
    .email("Invalid email")
    .optional(),

  phone: z
    .string()
    .trim()
    .regex(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .min(10).max(20)
    .optional(),

  wing: z
    .string()
    .trim()
    .max(20)
    .optional(),

  unitNumber: z
    .string()
    .trim()
    .min(1, "Unit number is required")
    .max(20),

  type: z
    .enum(["owner", "tenant", "family"])
    .default("owner"),
});

export const updateResidentSchema = createResidentSchema.partial();