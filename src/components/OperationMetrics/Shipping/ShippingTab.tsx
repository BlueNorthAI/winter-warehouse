'use client';


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


import OrderleadtimeBox from "@/components/OperationMetrics/Shipping/OrderleadtimeBox";
import LoadingtimepertruckHeat from "@/components/OperationMetrics/Shipping/LoadingtimepertruckHeat";
import DocktodepaturetimeLine from "@/components/OperationMetrics/Shipping/DocktodepaturetimeLine";
import AverageloadingtimepertrailerControl from "@/components/OperationMetrics/Shipping/AverageloadingtimepertrailerControl";
import OrderprocessedperdockdooeBar from "@/components/OperationMetrics/Shipping/OrderprocessedperdockdooeBar";
import UnitsshiftperlabourhoursLine from "@/components/OperationMetrics/Shipping/UnitsshiftperlabourhoursLine";
import PerfectshiprateGauge from "@/components/OperationMetrics/Shipping/PerfectshiprateGauge";
import OntimeShippingRateControl from "@/components/OperationMetrics/Shipping/OntimeshippingrateControl";
import LinesShippedperArea from "@/components/OperationMetrics/Shipping/LinesshippedperArea";
import OrdersshippedperLine from "@/components/OperationMetrics/Shipping/OrdersshippedperLine";
import UnitshippedperControl from "@/components/OperationMetrics/Shipping/UnitshippedperControl"; 
import ShippingaccuracyrateControl from "@/components/OperationMetrics/Shipping/ShippingaccuracyrateControl";
import OrdercompletenessrateGauge from "@/components/OperationMetrics/Shipping/OrdercompletenessrateGauge";
import DocumentationaccuracyBar from "@/components/OperationMetrics/Shipping/DocumentationaccuracyBar"; 
import PackingqualityControl from "@/components/OperationMetrics/Shipping/PackingqualityControl";
import LoadingaccuracyHeat from "@/components/OperationMetrics/Shipping/LaodingaccuracyHeat";
import DockdoorutilizationLine from "@/components/OperationMetrics/Shipping/DockdoorutilizationLine";
import TrailercubeutilizationBubble from "@/components/OperationMetrics/Shipping/TrailercubeutilizationBubble";
import LaborhourpershippingBox from "@/components/OperationMetrics/Shipping/LaborhourpershippingBox";
import CostpershippedunitArea from "@/components/OperationMetrics/Shipping/CostpershippedunitArea";
import DocumentationprocessingBox from "@/components/OperationMetrics/Shipping/ShippingdocumentationprocessingBox";


export default function ShippingTab() {
    return (
        <div>
            <Tabs defaultValue="daily">
                <div className="mt-2 w-100 flex justify-between p-4 rounded-lg border bg-white">
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
                         Shipping Process
                    </h2>

                    <div className="flex items-center justify-end">
                        <TabsList className="w-full">
                            <TabsTrigger value="daily">Daily</TabsTrigger>
                            {/* <TabsTrigger value="weekly">Weekly</TabsTrigger>
                            <TabsTrigger value="monthly">Monthly</TabsTrigger> */}

                        </TabsList>
                    </div>
                </div>
                <TabsContent value="daily">
                    <div className="py-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                      <OrderleadtimeBox />
                      <LoadingtimepertruckHeat />
                      <DocktodepaturetimeLine />
                      <AverageloadingtimepertrailerControl />
                      <OrderprocessedperdockdooeBar />
                      <UnitsshiftperlabourhoursLine />
                    <PerfectshiprateGauge />
                      <OntimeShippingRateControl />
                      <LinesShippedperArea />
                      <UnitshippedperControl />
                      <OrdersshippedperLine />
                      <ShippingaccuracyrateControl />
                      <OrdercompletenessrateGauge />
                      <DocumentationaccuracyBar />
                      <PackingqualityControl />
                      <LoadingaccuracyHeat />
                      <DockdoorutilizationLine />
                      <TrailercubeutilizationBubble />
                      <LaborhourpershippingBox />
                      <CostpershippedunitArea />
                      <DocumentationprocessingBox />


                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}