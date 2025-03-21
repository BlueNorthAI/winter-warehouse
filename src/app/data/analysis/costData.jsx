import WrapperMultiColumnChart from '@/app/kendo/charts/column/WrapperColumnChart'
import WrapperMultiStackColChart from '@/app/kendo/charts/stackcol/WrapperStackColChart'



import {trendCategories_m,
  trendSeries_m,
  plantCategories_m,
  plantSeries_m,
  avgCategories_m,
  avgSeries_m,
  tierCategories_m,
  tierSeries_m} from '@/app/kendo/rawData/analysis/costAnalysis'




export const kpiService_m = [
  {
    Name: 'Production Cost Trend',
    container: <WrapperMultiStackColChart category={trendCategories_m} series={trendSeries_m} />,
  },
  {
    Name: 'Production Cost by Plant',
    container: <WrapperMultiStackColChart category={plantCategories_m} series={plantSeries_m} />, 

  },
  {
    Name: 'Avg Cost per Unit by Production Center',
    container: <WrapperMultiColumnChart category={avgCategories_m} series={avgSeries_m} /> ,
    
  },
  {
    Name:'Tier-1 Suppliers',
    container: <WrapperMultiColumnChart category={tierCategories_m} series={tierSeries_m} />,
  },
]

export const kpiService_q = [
  {
    Name: 'Production Cost Trend',
    container: <WrapperMultiStackColChart category={trendCategories_m} series={trendSeries_m} />,
  },
  {
    Name: 'Production Cost by Plant',
    container: <WrapperMultiStackColChart category={plantCategories_m} series={plantSeries_m} />, 

  },
  {
    Name: 'Avg Cost per Unit by Production Center',
    container: <WrapperMultiColumnChart category={avgCategories_m} series={avgSeries_m} /> ,
    
  },
  {
    Name:'Tier-1 Suppliers',
    container: <WrapperMultiColumnChart category={tierCategories_m} series={tierSeries_m} />,
  },
]

export const kpiService_y = [
  {
    Name: 'Production Cost Trend',
    container: <WrapperMultiStackColChart category={trendCategories_m} series={trendSeries_m} />,
  },
  {
    Name: 'Production Cost by Plant',
    container: <WrapperMultiStackColChart category={plantCategories_m} series={plantSeries_m} />, 

  },
  {
    Name: 'Avg Cost per Unit by Production Center',
    container: <WrapperMultiColumnChart category={avgCategories_m} series={avgSeries_m} /> ,
    
  },
  {
    Name:'Tier-1 Suppliers',
    container: <WrapperMultiColumnChart category={tierCategories_m} series={tierSeries_m} />,
  },
]

export const kpiCost_m = [
  {
    Name: 'Production Cost Trend',
    container: <WrapperMultiStackColChart category={trendCategories_m} series={trendSeries_m} />,
  },
  {
    Name: 'Production Cost by Plant',
    container: <WrapperMultiStackColChart category={plantCategories_m} series={plantSeries_m} />, 

  },
  {
    Name: 'Avg Cost per Unit by Production Center',
    container: <WrapperMultiColumnChart category={avgCategories_m} series={avgSeries_m} /> ,
    
  },
  {
    Name:'Tier-1 Suppliers',
    container: <WrapperMultiColumnChart category={tierCategories_m} series={tierSeries_m} />,
  },
]

export const kpiCost_q = [
  {
    Name: 'Production Cost Trend',
    container: <WrapperMultiStackColChart category={trendCategories_m} series={trendSeries_m} />,
  },
  {
    Name: 'Production Cost by Plant',
    container: <WrapperMultiStackColChart category={plantCategories_m} series={plantSeries_m} />, 

  },
  {
    Name: 'Avg Cost per Unit by Production Center',
    container: <WrapperMultiColumnChart category={avgCategories_m} series={avgSeries_m} /> ,
    
  },
  {
    Name:'Tier-1 Suppliers',
    container: <WrapperMultiColumnChart category={tierCategories_m} series={tierSeries_m} />,
  },
]

export const kpiCost_y = [
  {
    Name: 'Production Cost Trend',
    container: <WrapperMultiStackColChart category={trendCategories_m} series={trendSeries_m} />,
  },
  {
    Name: 'Production Cost by Plant',
    container: <WrapperMultiStackColChart category={plantCategories_m} series={plantSeries_m} />, 

  },
  {
    Name: 'Avg Cost per Unit by Production Center',
    container: <WrapperMultiColumnChart category={avgCategories_m} series={avgSeries_m} /> ,
    
  },
  {
    Name:'Tier-1 Suppliers',
    container: <WrapperMultiColumnChart category={tierCategories_m} series={tierSeries_m} />,
  },
]
