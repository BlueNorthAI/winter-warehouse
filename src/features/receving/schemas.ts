import { z } from "zod";

export const createDailyMetricsSchema = z.object({
  date: z.string().trim().min(1, "Required"),
  warehouse_id: z.string().trim().min(1, "Required"),
  process_type: z.string().trim().min(1, "Required"),
  metric_type: z.string().trim().min(1, "Required"),
  metric_name: z.string().trim().min(1, "Required"),
  total_value: z.number().min(0, "Required"),
  unit: z.string().trim().min(1, "Required"),
  peak_hours_data: z.number().min(0, "Required"),
  non_peak_hours_data: z.number().min(0, "Required"),
  workspaceId: z.string().trim().min(1, "Required")
});
