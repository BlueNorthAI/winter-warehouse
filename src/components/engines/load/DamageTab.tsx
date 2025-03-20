import DamageRate from "@/components/engines/load/DamageRateTrend"
import DamageRateTrend from "@/components/engines/load/DamageRateTrend"
import DamageRateDeepDive from "@/components/engines/load/DamageRateDeepDive"
export default function DamageTab() {
  return (
    <div>
    <div className="grid grid-cols-2 gap-4">
        <DamageRate />
        <DamageRateTrend />
    </div>
    <div className="mt-4">
        <DamageRateDeepDive />
    
    </div>
    </div>
  )
}
