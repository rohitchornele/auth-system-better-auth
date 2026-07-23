import { z } from "zod";

export const workspaceSchema = z.object({
    name: z
        .string()
        .trim()
        .min(3, "Society name must be at least 3 characters.")
        .max(100),

    type: z.string().min(1, "Select a society type."),

    address: z
        .string()
        .trim()
        .min(5, "Address is required."),

    city: z.string().trim().min(2),

    state: z.string().trim().min(2),

    country: z.string().trim(),

    pincode: z
        .string()
        .regex(/^\d{6}$/, "Enter a valid pincode."),
});