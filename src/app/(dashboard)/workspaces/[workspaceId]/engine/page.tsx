// import DashboardLayout from "@/components/dashboard-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ExecutiveTab from "@/components/engines/executive/ExecutiveTab"
import OperationTab from "@/components/engines/operation/OperationTab"
import CostTab from "@/components/engines/cost/CostTab"
import LoadTab from "@/components/engines/load/LoadTab"
import ServiceTab from "@/components/engines/service/ServiceTab"


export default function Page() {
  return (
    // <DashboardLayout/>

    <div>
      <Tabs defaultValue="service">
        <TabsList>
          <TabsTrigger value="executive">Executive</TabsTrigger>
          <TabsTrigger value="operations">Operations</TabsTrigger>
          <TabsTrigger value="service">Service</TabsTrigger>
          <TabsTrigger value="loading">Loading Efficiency</TabsTrigger>
          <TabsTrigger value="cost">Cost</TabsTrigger>
        </TabsList>
        <TabsContent value="executive">
          <ExecutiveTab />
        </TabsContent>
        <TabsContent value="operations">
          <OperationTab />
        </TabsContent>
        <TabsContent value="cost">
          <CostTab />
        </TabsContent>
        <TabsContent value="loading">
          <LoadTab />
        </TabsContent>
        <TabsContent value="service">
          <ServiceTab />
        </TabsContent>
      </Tabs>
    </div>
  ) 
}

