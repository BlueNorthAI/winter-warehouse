/* eslint-disable react/prop-types */
import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import {
  ChartContainer,
} from "@/components/ui/chart"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { TrendingUp } from 'lucide-react';

import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
  } from "@progress/kendo-react-charts";
  
  const series: number[] = [
    20, 1, 18, 3, 15, 5, 10, 6, 9, 6, 10, 5, 13, 3, 16, 1, 19, 1, 20, 2, 18, 5,
    12, 7, 10, 8,
  ];


const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
};

const kpi = {
 
  status: '',
  
}
export default function DamagedduringpickingControl() {


  return (
    <Card >
              <div className="relative rounded-lg">
                <span
                  className={`absolute inset-x-0 top-0 h-1 rounded-lg ${
                    kpi.status === 'Above Target'
                      ? `bg-green-500`
                      : kpi.status === 'Below Target'
                        ? `bg-red-500`
                        : 'bg-yellow-500'
                  }`}
                ></span>
              </div>
        
      <CardHeader className="px-4 py-2">
        <div className="my-2 flex items-baseline gap-2">
          <div>
            <h2 className="text-base font-medium text-gray-900">Damaged During Picking  <span className="text-sm text-gray-500">onitrs)</span></h2>
            <h1 className="text-3xl font-bold text-black">90%</h1>
          </div>
          <div className="ml-auto flex items-center gap-x-2 overflow-x-hidden ">
            <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-300 h-7 flex items-center">
             Accuracy
            </Badge>
            <Select>
              <SelectTrigger className="w-30 h-7">
                <SelectValue placeholder="By Product Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="costComponent">By Product Type
                </SelectItem>
                <SelectItem value="costComponent">By Zone</SelectItem>

              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-4 py-2">
        <ChartContainer config={chartConfig} className="mx-auto  max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground" >
        <Chart>
      <ChartSeries>
        <ChartSeriesItem
          type="line"
          data={series}
          markers={{ visible: true }}
          labels={{ visible: true }}
          style="normal"
        />
      </ChartSeries>
    </Chart>
        </ChartContainer>
  
      </CardContent>

      <CardFooter>
        <div className="grid gap-2 text-sm">
          <div className="flex items-center gap-2 font-medium leading-none">
            Inbound peaks 6-8 AM, Outbound peaks 4-6 PM <TrendingUp className="h-4 w-4" />
          </div>
          <div className="flex items-center gap-2 leading-none text-muted-foreground">
            Jan 08 - Jan 13
          </div>
        </div>
      </CardFooter>
         
            </Card>
  );
}
