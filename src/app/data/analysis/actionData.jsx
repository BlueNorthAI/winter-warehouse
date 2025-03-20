import WrapperMultiBarChart from "@/app/kendo/charts/bar/WrapperBarChart"
// import WrapperMap from '~/kendo/map/WrapperMap'
import {
  orderTrendCategories_m,
  orderTrendSeries_m,
  discountproductCategories_m,
  discountproductSeries_m
} from '@/app/kendo/rawData/analysis/actionAnalysis';



export const kpiService_m = [
  {
    Name: "Current backorders",
    container: (
      <WrapperMultiBarChart
        category={orderTrendCategories_m}
        series={orderTrendSeries_m}
      />
    ),
  },

];

export const kpiInv_m = [
  {
    Name: "Global Stock",
    container: (
      <WrapperMultiBarChart
        category={discountproductCategories_m}
        series={discountproductSeries_m}
      />
    ),
  },
 
];

