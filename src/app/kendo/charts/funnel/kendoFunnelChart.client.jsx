import * as React from "react";
import {
  Chart,
  ChartSeries,

  ChartSeriesItem,
  ChartSeriesLabels,
ChartLegend
} from "@progress/kendo-react-charts";
import "hammerjs";

  export function FunnelChartContainer ({series}){
  const [dynamicSlope] = React.useState(true);
  const [dynamicHeight] = React.useState(false);
    return(
    <Chart
      style={{
        margin: "auto",
        width:400,
        height: 250,
      }}
    >
      <ChartSeries>
        <ChartSeriesItem
          type="funnel"
          data={series}
          categoryField="name"
          field="data"
          dynamicSlope={dynamicSlope}
          dynamicHeight={dynamicHeight}
        >
          <ChartSeriesLabels color="white" background="none" format="N0" />
        </ChartSeriesItem>
      </ChartSeries>
      <ChartLegend visible={false} />
    </Chart>
    );
  }

