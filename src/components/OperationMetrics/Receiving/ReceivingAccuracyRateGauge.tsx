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

import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"




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
export default function ReceivingAccuracyRateGauge() {
  const totalVisitors = chartData[0].desktop + chartData[0].mobile
 



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
            <h2 className="text-base font-medium text-gray-900">Receiving Accuracy Rate<span className="text-sm text-gray-500">(hours)</span></h2>
            <h1 className="text-3xl font-bold text-black">90%</h1>
          </div>
          <div className="ml-auto flex items-center gap-x-2 overflow-x-hidden ">
         
            <Select>
              <SelectTrigger className="w-30 h-7">
                <SelectValue placeholder="By Shift" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="statisticalProcessControl">Statistical Process Control</SelectItem>

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

      <CardFooter className='grid grid-cols-3 gap-2'>
        <div className="grid gap-2 text-sm col-span-2">
          <div className="flex-col items-center gap-2 font-medium leading-none">
            Inbound peaks 6-8 AM, Outbound peaks 4-6 PM 
          </div>
          <div className=" leading-none text-muted-foreground">
            Jan 08 - Jan 13
           
          </div>
         
        </div>
        
        <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-300 h-7 ">
          Productivity
        </Badge>
      
      </CardFooter>
             
            </Card>
  );
}
