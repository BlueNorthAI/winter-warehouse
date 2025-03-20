import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"



export default function CostTab() {
  return (
    <Tabs defaultValue="utilization">
      <TabsList>
        <TabsTrigger value="utilization">Utilization</TabsTrigger>
        <TabsTrigger value="damage">Damage Rate</TabsTrigger>
       
      </TabsList>
      <TabsContent value="utilization">
        <div>
          <h1>Utilization</h1>
        </div>
      </TabsContent>
      <TabsContent value="damage">
        <div>
          <h1>Damage Rate</h1>
        </div>
      </TabsContent>
     
    
    </Tabs>
  )
}
