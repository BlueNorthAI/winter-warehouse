/* eslint-disable react/prop-types */
import React from 'react';


import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

import {
  ChartContainer,
} from "@/components/ui/chart"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { TrendingUp } from 'lucide-react';

const chartData = [{ month: "january", desktop: 1260, mobile: 570 }]


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
export default function PerfectOrderGauge() {
  const totalVisitors = chartData[0].desktop + chartData[0].mobile
  // const workspaceId = useParams().workspaceId;  
  // const emptyStyles = { background: '#ef4444' };
  // const progressStyles = { background: '#22c55e' };


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
            <div className="flex items-center gap-2">

            <h1 className="text-3xl font-bold text-black">Perfect Order Rate</h1> 
            </div>

            <h2 className="text-base font-medium text-gray-900">Percentage of orders delivered complete, accurate, on-time, and undamaged</h2>
          </div>
          <div className="ml-auto flex items-center gap-x-2 overflow-x-hidden ">

            <Select>
              <SelectTrigger className="w-30 h-7">
                <SelectValue placeholder="Overall KPI" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="supplier">Overall KPI</SelectItem>
                <SelectItem value="productType"> Time Period</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
  
      </CardHeader>
      <CardContent className="px-4 py-2">
        <ChartContainer config={chartConfig} className="mx-auto  max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground" >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
          >
           
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        >
                          Hours
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
           
            <RadialBar
              dataKey="desktop"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-desktop)"
              className="stroke-transparent stroke-2"
            />
       
          </RadialBarChart>
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
