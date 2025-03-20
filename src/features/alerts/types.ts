import { Models } from "node-appwrite";

// export enum TaskStatus {
//   BACKLOG = "BACKLOG",
//   TODO = "TODO",
//   IN_PROGRESS = "IN_PROGRESS",
//   IN_REVIEW = "IN_REVIEW",
//   DONE = "DONE"
// };

export type Alert = Models.Document & {

  id: string;
  warehouseId: string;
  type: string;
  process: string;
  status: string;
  description: string;
  details: string;
  severity: string;
  action: string;
  owner: string;
};

