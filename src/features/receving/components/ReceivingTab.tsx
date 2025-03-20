'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import DockLine from '@/components/OperationMetrics/Receiving/DockLine';
import UnloadTimeHeat from '@/components/OperationMetrics/Receiving/UnloadTimeHeat';
import ReceiptProcessingLine from '@/components/OperationMetrics/Receiving/ReceiptProcessingLine';

import UnitsReceivedLaborBar from '@/components/OperationMetrics/Receiving/UnitsReceivedLaborBar';
import CostperUnitReceivedArea from '@/components/OperationMetrics/Receiving/CostperUnitReceivedArea';
import ReceivingAccuracyRateGauge from '@/components/OperationMetrics/Receiving/ReceivingAccuracyRateGauge';
import AvgProcessingColumn from '@/components/OperationMetrics/Receiving/AvgProcessingColumn';
import NumTrucksLine from '@/components/OperationMetrics/Receiving/NumTrucksLine';
import ReceivingAccuracyRateControl from '@/components/OperationMetrics/Receiving/ReceivingAccuracyRateControl';
import DamageRateReceiptHeat from '@/components/OperationMetrics/Receiving/DamageRateReceiptHeat';
import LinesReceivedHourLine from '@/components/OperationMetrics/Receiving/LinesReceivedHourLine';
import UnitsReceivedHourLine from '@/components/OperationMetrics/Receiving/UnitsReceivedHourLine';
import ReceiptsProcessedHourLine from '@/components/OperationMetrics/Receiving/ReceiptsProcessedHourLine';

import QualityCheckPassGauge from '@/components/OperationMetrics/Receiving/QualityCheckPassGauge';
import ReturnsProcessingRateColumn from '@/components/OperationMetrics/Receiving/ReturnsProcessingRateColumn';
import ReceiptDocumentationAccuracyControl from '@/components/OperationMetrics/Receiving/ReceiptDocumentationAccuracyControl';
import TotalDamageBubble from '@/components/OperationMetrics/Receiving/TotalDamageBubble';

import AppAdherenceRateGauge from '@/components/OperationMetrics/Receiving/AppAdherenceRateGauge';
import LaborhourperReceiptBox from '@/components/OperationMetrics/Receiving/LaborhourperReceiptBox';
import DockDoorUtilizationRateHeat from '@/components/OperationMetrics/Receiving/DockDoorUtilizationRateHeat';
import AvgQueueTimeAppLine from '@/components/OperationMetrics/Receiving/AvgQueueTimeAppLine';

import CostperRecivedUnitArea from '@/components/OperationMetrics/Receiving/CostperRecivedUnitArea';


export default function ReceivingTab() {
    return (
        <div>
            <Tabs defaultValue="daily">
                <div className="mt-2 w-100 flex justify-between p-4 rounded-lg border bg-white">
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
                        Receiving Process
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
                        {/* <OtifLine date='2023-10-01' /> */}
                        <DockLine />
                        <UnloadTimeHeat />
                        <ReceiptProcessingLine />
                        <AvgProcessingColumn />
                        <UnitsReceivedLaborBar />
                        <CostperUnitReceivedArea />
                        <ReceivingAccuracyRateGauge />
                        <NumTrucksLine />
                        <ReceiptsProcessedHourLine />
                        <LinesReceivedHourLine />
                        <UnitsReceivedHourLine />
                        <ReceivingAccuracyRateControl />
                        <DamageRateReceiptHeat />
                        <QualityCheckPassGauge />
                        <ReturnsProcessingRateColumn />
                        <ReceiptDocumentationAccuracyControl />
                        <TotalDamageBubble />
                        <DockDoorUtilizationRateHeat />
                        <AvgQueueTimeAppLine />
                        <AppAdherenceRateGauge />
                        <LaborhourperReceiptBox />
                        <CostperRecivedUnitArea />
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}