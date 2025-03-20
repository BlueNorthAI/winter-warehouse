import WrapperMultiBarColorChart from '../../kendo/charts/barColor/WrapperColorBarChart'
import {
  pro1Data,
  pro2Data,
  pro3Data,
  pro4Data,
  pro5Data,
  pro6Data,

} from "@/app/kendo/rawData/analysis/skuproAnalysis";





export const kpiService_m = [
  {
    Name: "OTIF at commit, order lines missed",
    sub: "Service metrics by product group",
    container: <WrapperMultiBarColorChart seriesData={pro1Data} />,
  },

  {
    Name: "# End-Customer backorder",
    sub: "",
    container: <WrapperMultiBarColorChart seriesData={pro2Data} />,
  },

  {
    Name: "$ End-Customer backorders",
    sub: "",
    container: <WrapperMultiBarColorChart seriesData={pro3Data} />,
  },
];

export const kpiInv_m = [
  {
    Name: "Shortage in 8 weeks",
    sub: "",
    container: <WrapperMultiBarColorChart seriesData={pro4Data} />,
  },

  {
    Name: "# End-Customer backorders",
    sub: "",
    container: <WrapperMultiBarColorChart seriesData={pro5Data} />,
  },

  {
    Name: "$ End-Customer backorder",
    sub: "",
    container: <WrapperMultiBarColorChart seriesData={pro6Data} />,
  },
];

