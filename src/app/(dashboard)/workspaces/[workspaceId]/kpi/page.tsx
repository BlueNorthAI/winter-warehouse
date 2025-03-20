"use client"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import OrderFulfillTab from "@/components/kpi/orderFulfill/OrderFulfillTab";
export default function DashboardPage() {
  return (
    <div className="h-full ">
      <Tabs defaultValue="order-fulfill">
        <TabsList >
          <TabsTrigger value="order-fulfill">Order Fulfillment</TabsTrigger>
         

        </TabsList>

        <TabsContent value="order-fulfill">
          <OrderFulfillTab />
        </TabsContent>

      </Tabs>
    </div>
  );
};