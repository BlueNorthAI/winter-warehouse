import Analytics from "@/features/analytics/components/dashboard";
import { Filters } from "@/components/anaytics/filters";
import MultipleChartTypes from "@/components/chartui/MultipleChartTypes";


export default function DashboardPage() {

  
  return (
    <div className="h-full ">
        <Filters  />
      <Analytics />
      <MultipleChartTypes />
    </div>
  );  
};