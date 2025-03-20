import OrderCycleLine from "@/components/kpi/orderFulfill/OrderCycleLine";
import PerfectOrderGauge from "@/components/kpi/orderFulfill/PerfectOrderGauge";
import OrderFillRateBar from "@/components/kpi/orderFulfill/OrderFillRateBar";
import AverageOrderBar from "@/components/kpi/orderFulfill/AverageOrderBar";
import SplitShipmentLine from "@/components/kpi/orderFulfill/SplitShipmentLine";



export default function OrderFulfillTab() {
    return (
        <div className="grid grid-cols-4 gap-4">
            <OrderCycleLine />
            <PerfectOrderGauge />
            <OrderFillRateBar />
            <AverageOrderBar />
            <SplitShipmentLine />
        </div>
    );
}
