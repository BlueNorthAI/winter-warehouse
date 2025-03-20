"use client";

import { usePathname } from "next/navigation";

import { UserButton } from "@/features/auth/components/user-button";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";
import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import { MobileSidebar } from "./mobile-sidebar";
import { Badge } from "@/components/ui/badge"



const pathnameMap = {
  "tasks": {
    title: "My Tasks",
    description: "View all of your tasks here",
  },
  "projects": {
    title: "My Project",
    description: "View tasks of your project here"
  },
  "analytics": {
    title: "Analytics",
    description: "View analytics of your workspace here",
  },
  "control": {
    title: "Control Tower",
    description: "View control of your workspace here",
  },
  "track": {
    title: "Track & Trace",
    description: "View cost of your workspace here",
  },
  "warehouse": {
    title: "Warehouse Operations Analytics",
    description: "View metrics for warehouse processes",
  },
  "shippingAnalysis": {
    title: "Root Cause Analysis",
    description: "View metrics for shipping processes",
  },
  "putawayAnalysis": {
    title: "Root Cause Analysis",
    description: "View metrics for putaway processes",
  },
  "pickingAnalysis": {
    title: "Root Cause Analysis",
    description: "View metrics for picking processes",
  },
  "recivingAnalysis": {
    title: "Root Cause Analysis",
    description: "View metrics for reciving processes",
  },
  "benchmark": {
    title: "Benchmarking",
    description: "View metrics for benchmarking processes",
  },
  "costAnalysis": {
    title: "Cost Analytics",
    description: "View metrics for cost management",
  },
  "invdis": {
    title: "Inventory Redistribution Optimization",
    description: "View metrics for inventory redistribution optimization",
  },
  "invrca": {
    title: "Inventory Root Cause Analysis",
    description: "View metrics for stock out issue flow chart",
  },
};

const defaultMap = {
  title: "Home",
  description: "Monitor all of your projects and tasks here",
};

export const Navbar = () => {
  const pathname = usePathname();
  const pathnameParts = pathname.split("/");
  const pathnameKey = pathnameParts[3] as keyof typeof pathnameMap;
  const workspaceId = useWorkspaceId();
  const { data: workspaces } = useGetWorkspaces();
  const { title, description } = pathnameMap[pathnameKey] || defaultMap;

  // Find the current workspace based on the workspaceId
  const workspace = workspaces?.documents.find((ws) => ws.$id === workspaceId);

  return (
    <nav className="pt-4 px-6 flex items-center justify-between">
      <div className="flex-col hidden lg:flex">
        <h1 className="text-2xl font-semibold">
          {title}
        </h1>
        <p className="text-muted-foreground">
          {description}
        </p>




      </div>
      <MobileSidebar />
      <div className="flex items-center gap-2">
      {workspace && (
        <Badge variant="outline" className="text-xs font-normal  p-1">
          {workspace.orgId} - {workspace.businessUnitId} - {workspace.facilityId}
        </Badge>
      )}
      <UserButton />
      </div>
    </nav>
  );
};
