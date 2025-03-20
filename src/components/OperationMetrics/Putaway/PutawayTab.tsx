'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AverageputawaytimeperunitBox from "@/components/OperationMetrics/Putaway/AverageputawaytimeperunitBox";
import TotalputawaycycletimeControl from "@/components/OperationMetrics/Putaway/TotalputawaycycletimeControl";
import AverageputawaytimeperlpnHeat from "@/components/OperationMetrics/Putaway/AverageputawaytimeperlpnHeat";
import TotaltraveldistanceperLine from "@/components/OperationMetrics/Putaway/TotaltraveldistanceperLine";
import UnitsputawayperlabourBar from "@/components/OperationMetrics/Putaway/UnitsputawayperlabourBar";
import PutawayaccuraterateGauge from "@/components/OperationMetrics/Putaway/PutawayaccuraterateGauge";
import StroagelocationoptimizationHeat from "@/components/OperationMetrics/Putaway/StroagelocationoptimizationHeat";
import PutawaycompletedperLine from "@/components/OperationMetrics/Putaway/PutawaycompletedperLine";
import UnitsputawayperLine from "@/components/OperationMetrics/Putaway/UnitsputawayperLine";
import LocationaccurateHeat from "@/components/OperationMetrics/Putaway/LocationaccurateHeat";
import StroagetypecomplianceStacedbar from "@/components/OperationMetrics/Putaway/StroagetypecomplianceStacedbar";
import VerificationsuccessControl from "@/components/OperationMetrics/Putaway/VerificationsuccessControl";
import WronglocataionputawayHeat from "@/components/OperationMetrics/Putaway/WronglocataionputawayHeat";
import StorageconditioncomplianceGauge from "@/components/OperationMetrics/Putaway/StorageconditioncomplianceGauge";
import AveragetraveldistanceHeat from "@/components/OperationMetrics/Putaway/AveragetraveldistanceHeat";
import EquipmentutilizationLine from "@/components/OperationMetrics/Putaway/EquipmentutilizationLine";
import LabourhoursperputawayBox from "@/components/OperationMetrics/Putaway/LabourhoursperputawayBox";
import CostperputawayUnitArea from "@/components/OperationMetrics/Putaway/CostperputawayUnitArea";

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
                    <AverageputawaytimeperunitBox />
                    <TotalputawaycycletimeControl />
                    <AverageputawaytimeperlpnHeat />
                    <TotaltraveldistanceperLine />
                    <UnitsputawayperlabourBar />
                    <PutawayaccuraterateGauge />
                    <StroagelocationoptimizationHeat />
                    <PutawaycompletedperLine /> 
                    <UnitsputawayperLine />
                    <LocationaccurateHeat />
                    <StroagetypecomplianceStacedbar />
                    <VerificationsuccessControl />
                    <WronglocataionputawayHeat />
                    <StorageconditioncomplianceGauge />
                    <AveragetraveldistanceHeat />
                    <EquipmentutilizationLine />
                    <LabourhoursperputawayBox />
                    <CostperputawayUnitArea />

                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}