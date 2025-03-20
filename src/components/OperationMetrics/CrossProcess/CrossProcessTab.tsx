'use client';


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import OtifLine from "@/components/OperationMetrics/CrossProcess/OtifLine";
import OntimerateLine from "@/components/OperationMetrics/CrossProcess/OntimerateLine";
import InfullrateLine from "@/components/OperationMetrics/CrossProcess/InfullrateLine";
import LinefillrateBar from "@/components/OperationMetrics/CrossProcess/LinefillrateBar";
import OrderfillrateBar from "@/components/OperationMetrics/CrossProcess/OrderfillrateBar";
import UnitfillrateBar from "@/components/OperationMetrics/CrossProcess/UnitfillrateBar";
import OrdercycletimeLine from "@/components/OperationMetrics/CrossProcess/OrdercycletimeLine";
import OrderprocessingleadLine from "@/components/OperationMetrics/CrossProcess/OrderprocessingleadLine";
import Rushorderprocessingline from "@/components/OperationMetrics/CrossProcess/Rushorderprocessingline";
// import TotallabourcostperunitArea from "@/components/OperationMetrics/CrossProcess/TotallabourcostperunitArea";
// import OperationcostperunitArea from "@/components/OperationMetrics/CrossProcess/OperationcostperunitArea";
import FillratebyskuBar from "@/components/OperationMetrics/CrossProcess/FillratebyskuBar";
import OrderaccurancyGauge from "@/components/OperationMetrics/CrossProcess/OrderaccurancyGauge";
import LineaccuracyLine from "@/components/OperationMetrics/CrossProcess/LineaccuracyLine";
import PickingaccuracyHeat from "@/components/OperationMetrics/CrossProcess/PickingaccuracyHeat";
import DocumentationaccuracyBar from "@/components/OperationMetrics/CrossProcess/DocumentationaccuracyBar";
// import OrdercycletimeColumn from "@/components/OperationMetrics/CrossProcess/OrdercycletimeColumn";
import Customerpromisetimegauge from "@/components/OperationMetrics/CrossProcess/Customerpromisetimegauge";
import ClamisrateLine from "@/components/OperationMetrics/CrossProcess/ClamisrateLine";
import EquipmentutilizationHeat from "@/components/OperationMetrics/CrossProcess/EquipmentutilizationHeat";
import PerfectorderrateGauge from "@/components/OperationMetrics/CrossProcess/PerfectorderrateGauge";
import LabourutilizationHeat from "@/components/OperationMetrics/CrossProcess/LabourutilizationHeat";
import StroagespaceutilizationHeat from "@/components/OperationMetrics/CrossProcess/StroagespaceutilizationHeat";
import DockdoorutilizationHeat from "@/components/OperationMetrics/CrossProcess/DockdoorutilizationHeat";


export default function CrossProcessTab() {
    return (
        <div>
            <Tabs defaultValue="daily">
                <div className="mt-2 w-100 flex justify-between p-4 rounded-lg border bg-white">
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
                        Cross Process
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
                       <OtifLine />
                       <OntimerateLine />
                       <InfullrateLine />
                       <PerfectorderrateGauge />


                       <LinefillrateBar />
                      
                       <OrderfillrateBar />
                       <UnitfillrateBar />
                       <FillratebyskuBar />
                       <OrderaccurancyGauge />
                
                       <LineaccuracyLine />

                       <PickingaccuracyHeat />
                       <DocumentationaccuracyBar />
                       {/* <OrdercycletimeColumn /> */}
                       <OrdercycletimeLine />
                       <OrderprocessingleadLine />
                       <Rushorderprocessingline />
                       <Customerpromisetimegauge />
                       <ClamisrateLine />
                       <PerfectorderrateGauge />
                       <EquipmentutilizationHeat />
                       <LabourutilizationHeat />
                       <StroagespaceutilizationHeat />
                       <DockdoorutilizationHeat />

                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}