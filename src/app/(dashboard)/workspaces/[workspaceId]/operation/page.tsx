import ReceivingTab from "@/features/receving/components/ReceivingTab";
import CrossProcessTab from "@/components/OperationMetrics/CrossProcess/CrossProcessTab";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import PutawayTab from "@/components/OperationMetrics/Putaway/PutawayTab";
import PickingTab from "@/components/OperationMetrics/PickingProcess/PickingTab";
import ShippingTab from "@/components/OperationMetrics/Shipping/ShippingTab";


export default function DashboardPage() {
  return (
    <div className="h-full ">
      <Tabs defaultValue="receiving">
        <TabsList >
          <TabsTrigger value="receiving">Receiving</TabsTrigger>
          <TabsTrigger value="cross">Cross Process</TabsTrigger>
          <TabsTrigger value="putaway">Putaway</TabsTrigger>
          <TabsTrigger value="picking">Picking</TabsTrigger>
          <TabsTrigger value="shipping">Shipping</TabsTrigger>

        </TabsList>

        <TabsContent value="receiving">
          <ReceivingTab />

        </TabsContent>
        <TabsContent value="cross">
          <CrossProcessTab />
        </TabsContent>
        <TabsContent value="putaway">
          <PutawayTab />
        </TabsContent>
        <TabsContent value="picking">
          <PickingTab />
        </TabsContent>
        <TabsContent value="shipping">
          <ShippingTab />
        </TabsContent>

      </Tabs>
    </div>
  );
};