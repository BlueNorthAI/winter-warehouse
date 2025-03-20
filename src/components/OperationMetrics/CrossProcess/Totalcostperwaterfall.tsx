import * as React from 'react';

import {
    Chart,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels

} from '@progress/kendo-react-charts';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const pointColor = (point: any) => {
    const summary = point.dataItem.summary;


    if (summary) {
        return summary === 'total' ? '#555' : 'gray';
    }

    if (point.value > 0) {
        return 'green';
    } else {
        return 'red';
    }
}
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
  } from '@/components/ui/card';
  import { Badge } from "@/components/ui/badge"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { TrendingUp } from 'lucide-react';



const data = [
  {
      period: 'Beginning\\nBalance',
      amount: 50000
  },
  {
      period: 'Jan',
      amount: 17000
  },
  {
      period: 'Feb',
      amount: 14000
  },
  {
      period: 'Mar',
      amount: -12000
  },
  {
      period: 'Q1',
      summary: 'runningTotal'
  },
  {
      period: 'Apr',
      amount: -22000
  },
  {
      period: 'May',
      amount: -18000
  },
  {
      period: 'Jun',
      amount: 10000
  },
  {
      period: 'Q2',
      summary: 'runningTotal'
  },
  {
      period: 'Ending\\nBalance',
      summary: 'total'
  }
]


const kpi = {
  title: "Yearly",
  value: 1000,
  status: "Above Target",
};

export default function StatsStackCol() {
  return (
    <>
      <Card>
        <div className="relative rounded-lg">
          <span
            className={`absolute inset-x-0 top-0 h-1 rounded-lg ${
              kpi.status === "Above Target"
                ? `bg-green-500`
                : kpi.status === "Below Target"
                ? `bg-red-500`
                : ""
            }`}
          ></span>
        </div>
        <CardHeader className="px-4 py-2">
        <div className="my-2 flex items-baseline gap-2">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-medium text-gray-900">
                Total Cost Per Unit{" "}
                <span className="text-sm text-gray-500">(hours)</span>
              </h2>
              <Badge className="bg-yellow-50 text-yellow-700 border-yellow-300 h-7 flex items-center">
               Cost Management
              </Badge>
            </div>

              <h1 className="text-3xl font-bold text-black">90%</h1>
          </div>
          <div className="ml-auto flex items-center gap-x-2 overflow-x-hidden ">
            <Select>
              <SelectTrigger className="w-30 h-7">
                <SelectValue placeholder="By Customer" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="supplier">By Priority Level</SelectItem>
                <SelectItem value="productType">By Service Level Agreement</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
        <CardContent className="px-4">
        <Chart>
        <ChartSeries>
            <ChartSeriesItem
                type="waterfall"
                data={data}
                color={pointColor}
                field="amount"
                categoryField="period"
                summaryField="summary"
            >
                <ChartSeriesLabels format="C0" position="insideEnd" />
            </ChartSeriesItem>
        </ChartSeries>
        <ChartValueAxis>
            <ChartValueAxisItem />
        </ChartValueAxis>
    </Chart>
        </CardContent>

        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 font-medium leading-none">
                Transportation Cost{" "}
                <TrendingUp className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-2 leading-none text-muted-foreground">
                12 Jan - 20 Jan
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
