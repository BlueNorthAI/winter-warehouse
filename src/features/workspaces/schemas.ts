import { z } from "zod";

export const createWorkspaceSchema = z.object({
  name: z.string().trim().min(1, "Required"),
  image: z.union([
    z.instanceof(File),
    z.string().transform((value) => value === "" ? undefined : value),
  ])
    .optional(),
  orgId: z.string().optional(),
  businessUnitId: z.string().optional(),
  facilityId: z.string().optional(),
});

export const updateWorkspaceSchema = z.object({
  name: z.string().trim().min(1, "Must be 1 or more characters").optional(),
  image: z.union([
    z.instanceof(File),
    z.string().transform((value) => value === "" ? undefined : value),
  ])
    .optional(),
   orgId: z.string().optional(),
   businessUnitId: z.string().optional(),
   facilityId: z.string().optional(),
});
