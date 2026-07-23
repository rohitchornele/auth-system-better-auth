import { z } from "zod";

export const workspaceSchema = z.object({
  name: z.string().min(3, "Name is required"),

  slug: z
    .string()
    .min(3)
    .regex(/^[a-z0-9-]+$/, "Invalid slug"),

  societyType: z.string().min(1),

  address: z.string().min(1),

  city: z.string().min(1),

  state: z.string().min(1),

  pincode: z.string().min(6),

  country: z.string().min(1),
});