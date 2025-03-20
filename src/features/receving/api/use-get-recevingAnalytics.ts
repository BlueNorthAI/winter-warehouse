import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";


interface UseGetRecevingAnalyticsProps {
  workspaceId: string;
};


export const useGetRecevingAnalytics = ({
  workspaceId,
}: UseGetRecevingAnalyticsProps) => {

  const query = useQuery({
    queryKey: ["receving-analytics", workspaceId],
    queryFn: async () => {
      const response = await client.api.daily_metrics.$get({
        query: {
          workspaceId
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch accounts");
      }

      const { data } = await response.json();
      console.log(data, "api/use-get-receving-analytics.ts");
      return data;
    },
  });

  return query;
};
