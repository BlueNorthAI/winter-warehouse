import OnTimeDeliveryHeatmap from "@/components/engines/service/OnTimeDeliveryHeatmap"
import OnTimeDeliveryTrend from "@/components/engines/service/OnTimeDeliveryTrend"
import OnTimeDeepDive from "@/components/engines/service/OnTimeDeepDive"
export default function ServiceTab() {
  return (
    <div>
    <div className="grid grid-cols-2 gap-4">
        <OnTimeDeliveryHeatmap />
        <OnTimeDeliveryTrend />
    </div>
    <div className="mt-4">
        <OnTimeDeepDive />
    
    </div>
    </div>
  )
}
