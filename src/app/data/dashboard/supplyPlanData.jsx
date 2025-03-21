import WrapperPieChart from "~/kendo/charts/pie/WrapperPieChart";

import {
  inv_m,
  purchase_m,
} from "~/kendo/rawData/dashboard/supplyPlanDashboard";


export const kpiInv_m = [
  {
    Name: "PO Amount",
    Value: "$128M",
    Trend: "up",
    TargetAch: 100,
    container: <WrapperPieChart series={inv_m} />,
    status: "Below Target",
    Analyze: "/snop/dashboard/analysis/proeffAnalysis",
  },
];
export const kpiPurchase_m = [
  {
    Name: "PO Amount",
    Value: "$128M",
    Trend: "up",
    TargetAch: 100,
    container: <WrapperPieChart series={purchase_m} />,
    status: "Below Target",
    Analyze: "/snop/dashboard/analysis/proeffAnalysis",
  },
];
