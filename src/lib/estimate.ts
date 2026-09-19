import { z } from "zod";

export const estimateSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Enter a valid email."),
  phone: z.string().trim().min(7, "Enter a phone number we can reach."),
  propertyType: z.enum(["House", "Townhome / condo", "Other"]),
  job: z.enum(["Interior", "Exterior", "Both", "Not sure yet"]),
  scope: z.enum(["1–2 rooms", "Several rooms", "Whole interior", "Partial exterior", "Full exterior", "Not sure"]),
  contactMethod: z.enum(["Phone", "Email", "Either"]),
  message: z.string().trim().max(2000).optional(),
});

export type EstimateInput = z.infer<typeof estimateSchema>;
