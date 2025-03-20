import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import CarrierScoreTab from "@/components/engines/cost/CarrierScoreTab"
import Top20CarriersTab from "@/components/engines/cost/Top20CarriersTab"
export default function CostTab() {
  return (
    <Tabs defaultValue="scorecard">
      <TabsList>
        <TabsTrigger value="top20">Top 20 Carriers</TabsTrigger>
        <TabsTrigger value="scorecard">Carrier Scorecard</TabsTrigger>
        <TabsTrigger value="prime">Prime Tender Acceptance Rate</TabsTrigger>
       
      </TabsList>
      <TabsContent value="top20">
<Top20CarriersTab />
      </TabsContent>
      <TabsContent value="scorecard">
        <div>
          <CarrierScoreTab />
        </div>
      </TabsContent>
      <TabsContent value="cost">
        <div>
          <h1>Cost</h1>
        </div>
      </TabsContent>
      <TabsContent value="prime">
        <div>
          <h1>Prime Tender Acceptance Rate</h1>
        </div>
      </TabsContent>
    
    </Tabs>
  )
}
