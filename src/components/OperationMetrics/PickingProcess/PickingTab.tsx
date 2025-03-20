'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AveragepicktimeperorderBox from "@/components/OperationMetrics/PickingProcess/AveragepicktimeperorderBox";
import OrderprocessingtimeControl from "@/components/OperationMetrics/PickingProcess/OrderprocessingtimeLine";
import TimetofirstpickHeat from "@/components/OperationMetrics/PickingProcess/TimetofirstpickHeat";
import AveragepackingtimeperlineControl from "@/components/OperationMetrics/PickingProcess/AveragepackingtimeperlineControl";
import UnitspickedperlabourhourBar from "@/components/OperationMetrics/PickingProcess/UnitspickedperlabourhourBar";
import PickaccuracyrateControl from "@/components/OperationMetrics/PickingProcess/PickaccuracyrateControl";
import Perfectpickrategauge from "@/components/OperationMetrics/PickingProcess/Perfectpickrategauge";
import PickpathoptimizationscoreHeat from "@/components/OperationMetrics/PickingProcess/PickpathoptimizationscoreHeat";
import OrderspickedperLine from "@/components/OperationMetrics/PickingProcess/OrderspickedperLine";
import LinespickedperArea from "@/components/OperationMetrics/PickingProcess/LinespickedperArea";
import UnitpickedperControl from "@/components/OperationMetrics/PickingProcess/UnitpickedperControl";
import PickaccuracyrateControlam from "@/components/OperationMetrics/PickingProcess/PickaccuracyrateControlam";
import ShortpicksrateHeat from "@/components/OperationMetrics/PickingProcess/ShortpicksrateHeat";   
import SubstitutionrateLine from "@/components/OperationMetrics/PickingProcess/SubstitutionrateLine";
import WrongitempickHeat from "@/components/OperationMetrics/PickingProcess/WrongitempickHeat";
import DamagedduringpickingControl from "@/components/OperationMetrics/PickingProcess/DamagedduringpickingControl";
import AveragetraveldistanceperHeat from "@/components/OperationMetrics/PickingProcess/AveragetraveldistanceperHeat";
import CartequipementutilizationLine from "@/components/OperationMetrics/PickingProcess/CartequipementutilizationLine";
import LaborhoursperpickedorderBox from "@/components/OperationMetrics/PickingProcess/LaborhoursperpickedorderBox";
import CostperpiuckedunitArea from "@/components/OperationMetrics/PickingProcess/CostperpiuckedunitArea";
import PickpackOptimizationrateLine from "@/components/OperationMetrics/PickingProcess/PickpackOptimizationrateLine";


export default function PickingTab() {


    return (
        <div>
            <Tabs defaultValue="daily">
                <div className="mt-2 w-100 flex justify-between p-4 rounded-lg border bg-white">
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
                        Picking Process
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
                       <AveragepicktimeperorderBox />
                       <OrderprocessingtimeControl />
                       <TimetofirstpickHeat />
                       <AveragepackingtimeperlineControl />
                       <UnitspickedperlabourhourBar />
                       <PickaccuracyrateControl />
                       <Perfectpickrategauge /> 
                       <PickpathoptimizationscoreHeat />
                       <OrderspickedperLine />
                       <LinespickedperArea />
                       <UnitpickedperControl />
                       <PickaccuracyrateControlam />
                       <ShortpicksrateHeat />
                       <SubstitutionrateLine />
                       <WrongitempickHeat />
                       <DamagedduringpickingControl />
                       <AveragetraveldistanceperHeat />
                       <CartequipementutilizationLine />
                       <LaborhoursperpickedorderBox />
                       <CostperpiuckedunitArea />
                       <PickpackOptimizationrateLine />

                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}