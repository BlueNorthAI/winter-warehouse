import { z } from "zod";


export const createAlertSchema = z.object({
  id: z.string().trim().min(1, "Required"),
  warehouseId: z.string().trim().min(1, "Required"),
  type: z.string().trim().min(1, "Required"),
  process: z.string().trim().min(1, "Required"),
  status: z.string().trim().min(1, "Required"),
  description: z.string().trim().min(1, "Required"),
  details: z.string().trim().min(1, "Required"),
  severity: z.string().trim().min(1, "Required"),
  action: z.string().trim().min(1, "Required"),
  owner: z.string().trim().min(1, "Required"),
  workspaceId: z.string().trim().min(1, "Required")
});
