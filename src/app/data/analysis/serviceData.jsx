import WrapperMultiLineChart from '~/kendo/charts/line/WrapperLineChart'
import WrapperMultiStackColChart from '~/kendo/charts/stackcol/WrapperStackColChart'

import {
  discountproductCategories_m, discountproductSeries_m, cancellationCategories_m, cancellationSeries_m,
invCategories_m,
invSeries_m} from '~/kendo/rawData/analysis/serviceAnalysis'




export const kpiChat = [
  {
    Name: "End Customer backorder Performance",
    sub: "Globalorder performance",
    container: (
      <WrapperMultiStackColChart
        category={discountproductCategories_m}
        series={discountproductSeries_m}
      />
    ),
  },

  {
    Name: "OTIF Performance",
    sub: "OTIF (commit) and OTIF (ship),End Customer order lines committed/shipped,% of total order lines",
    container: (
      <WrapperMultiLineChart
        category={cancellationCategories_m}
        series={cancellationSeries_m}
      />
    ),
  },
];

export const kpiService_m = [
  {
    Name: "End Customer backorder Performance",
    sub: "Globalorder performance",
    container: (
      <WrapperMultiStackColChart
        category={discountproductCategories_m}
        series={discountproductSeries_m}
      />
    ),
  },

  {
    Name: "OTIF Performance",
    sub: "OTIF (commit) and OTIF (ship),End Customer order lines committed/shipped,% of total order lines",
    container: (
      <WrapperMultiLineChart
        category={cancellationCategories_m}
        series={cancellationSeries_m}
      />
    ),
  },
];

export const kpiInv_m = [
  {
    Name: "Inventory Performance",
    sub: "Inventory values per week,$M",
    container: (
      <WrapperMultiStackColChart
        category={invCategories_m}
        series={invSeries_m}
      />
    ),
  },
];
