import { Hono } from "hono";
import { handle } from "hono/vercel";

import auth from "@/features/auth/server/route";
import members from "@/features/members/server/route";
import workspaces from "@/features/workspaces/server/route";
import projects from "@/features/projects/server/route";
import tasks from "@/features/tasks/server/route";
import accounts from "@/features/accounts/server/route";
import organizations from "@/features/workspaces/server/organizations";
import alerts from "@/features/alerts/server/route";
import daily_metrics from "@/features/receving/server/route";
const app = new Hono().basePath("/api");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app
  .route("/auth", auth)
  .route("/members", members)
  .route("/workspaces", workspaces)
  .route("/projects", projects)
  .route("/tasks", tasks)
  .route("/accounts", accounts)
  .route("/organizations", organizations)
  .route("/daily_metrics", daily_metrics)
  .route("/alerts", alerts);

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

export type AppType = typeof routes;
