import { z } from "zod";
import { Hono } from "hono";
import { Query } from "node-appwrite";
import { zValidator } from "@hono/zod-validator";

import { getMember } from "@/features/members/utils";

import { sessionMiddleware } from "@/lib/session-middleware";
import { DATABASE_ID,  DAILY_METRICS_ID } from "@/config";

import { DailyMetrics } from "../types";

const app = new Hono()

   .get(
    "/",
    sessionMiddleware,
    zValidator("query", z.object({ workspaceId: z.string() })),
     async (c) => {
      const user = c.get("user");
      const databases = c.get("databases");


      const { workspaceId } = c.req.valid("query");
      console.log(workspaceId, "workspaceId");
       
      if (!workspaceId) {
        return c.json({ error: "Missing workspaceId" }, 400);
      }

      const member = await getMember({
        databases,
        workspaceId,
        userId: user.$id,
      });
      console.log(member, "member");
      if (!member) {
        return c.json({ error: "Unauthorized" }, 401);
      }
      console.log(DATABASE_ID, "DATABASE_ID");
      console.log(DAILY_METRICS_ID, "DAILY_METRICS_ID");
      const daily_metrics = await databases.listDocuments<DailyMetrics>(
        DATABASE_ID,
        DAILY_METRICS_ID,

        [
          Query.equal("workspaceId", workspaceId),
          Query.orderDesc("$createdAt"),
        ],

      );
     console.log(daily_metrics.documents, "Server-Daily_Metrics-Route.ts");
        return c.json({ data: daily_metrics  });
    }
  )
  




export default app;
