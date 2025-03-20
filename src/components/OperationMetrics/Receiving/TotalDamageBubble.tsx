import * as React from 'react';

import {
    Chart,
    ChartTooltip,
    ChartSeries,
    ChartSeriesItem,
    ChartXAxis,
    ChartXAxisItem,
    ChartYAxis,

    ChartYAxisItem,
    ChartLegend
} from '@progress/kendo-react-charts';
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



const xPlotBands = [
    {
        from: -5000,
        to: 0,
        color: '#00f',
        opacity: 0.05
    }
]

const bubbleChartData = [
    {
        x: -2500,
        y: 50000,
        size: 500000,
        category: 'Microsoft'
    },
    {
        x: 500,
        y: 110000,
        size: 7600000,
        category: 'Starbucks'
    },
    {
        x: 7000,
        y: 19000,
        size: 700000,
        category: 'Google'
    },
    {
        x: 1400,
        y: 150000,
        size: 700000,
        category: 'Publix Super Markets'
    },
    {
        x: 2400,
        y: 30000,
        size: 300000,
        category: 'PricewaterhouseCoopers'
    },
    {
        x: 2450,
        y: 34000,
        size: 90000,
        category: 'Cisco'
    },
    {
        x: 2700,
        y: 34000,
        size: 400000,
        category: 'Accenture'
    },
    {
        x: 2900,
        y: 40000,
        size: 450000,
        category: 'Deloitte'
    },
    {
        x: 3000,
        y: 55000,
        size: 900000,
        category: 'Whole Foods Market'
    }
];
;


const kpi = {
  title: "Yearly",
  value: 1000,
  status: "Above Target",
};

export default function TotalDamage() {
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
              Total Damage
                  <span className="text-sm text-gray-500">(# and Value)</span>
              </h2>
           
            </div>

              <h1 className="text-3xl font-bold text-black">90%</h1>
          </div>
          <div className="ml-auto flex items-center gap-x-2 overflow-x-hidden ">
            <Select>
              <SelectTrigger className="w-30 h-7">
                <SelectValue placeholder="Volume" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="supplier">Volume</SelectItem>
                <SelectItem value="productType">Weight</SelectItem>
                <SelectItem value="productType">utilization</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
        <CardContent className="px-4">
        <Chart className="h-[220px]">
        <ChartSeries>
            <ChartSeriesItem
                type="bubble"
                xField="x"
                yField="y"
                sizeField="size"
                categoryField="category"
                data={bubbleChartData}
            />
        </ChartSeries>
        <ChartXAxis>
            <ChartXAxisItem
                axisCrossingValue={-5000}
                majorUnit={2000}
                plotBands={xPlotBands}
                labels={{ format: '{0:N0}', skip: 1, rotation: 'auto' }}
            />
        </ChartXAxis>
        <ChartYAxis>
            <ChartYAxisItem labels={{ format: '{0:N0}' }} />
        </ChartYAxis>
        <ChartLegend visible={true} />
        <ChartTooltip format="{3}: {2:N0} applications" opacity={1} />
    </Chart>
        </CardContent>

        <CardFooter className='grid grid-cols-3 gap-2'>
          <div className="grid gap-2 text-sm col-span-2">
            <div className="flex-col items-center gap-2 font-medium leading-none">
              Average processing time is 15 min
            </div>
            <div className="leading-none text-muted-foreground">
              Jan 10 - Jan 17
            </div>
          </div>

          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-300 h-7">
            Efficiency
          </Badge>
        </CardFooter>
      </Card>
    </>
  );
}
