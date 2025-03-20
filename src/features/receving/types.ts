import { Models } from "node-appwrite";

export type DailyMetrics = Models.Document & {
  date: string;
  warehouse_id: string;
  process_type: string;
  metric_type: string;
  metric_name: string;
  total_value: number;
  unit: string;
  peak_hours_data: number;
  non_peak_hours_data: number;
  workspaceId: string;
};
