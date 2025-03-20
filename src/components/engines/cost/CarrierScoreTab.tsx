
import Top10Lanes from "@/components/engines/cost/Top10Lanes"
import PrimeTender from "@/components/engines/cost/PrimeTender"
import ValueLostLine from "@/components/engines/cost/ValueLostLine"
import TotalSpendLine from "@/components/engines/cost/TotalSpendLine"
import DamageRateLine from "@/components/engines/cost/DamageRateLine"
import OntimeLine from "@/components/engines/cost/OntimeLine"
import MissingDataLine from "@/components/engines/cost/MissingDataLine"


export default function CostTab() {
  return (
<div className="grid grid-cols-2 gap-4">

       <Top10Lanes />

<div className="grid grid-cols-3 gap-4">
<PrimeTender />

<ValueLostLine />

<TotalSpendLine />
    
<DamageRateLine />

<OntimeLine />

<MissingDataLine />

</div>
</div>

  )
}
