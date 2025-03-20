
import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import { Bar, BarChart, CartesianGrid, LabelList, ReferenceLine, XAxis } from "recharts"

import { Badge } from '@/components/ui/badge';
import { Select, SelectValue, SelectItem, SelectContent, SelectTrigger } from '@/components/ui/select';

const chartData = [
  { month: "15", desktop: 186, mobile: 80 },
  { month: "16", desktop: 305, mobile: 200 },
  { month: "17", desktop: 237, mobile: 120 },
  { month: "18", desktop: 73, mobile: 190 },
  { month: "19", desktop: 209, mobile: 130 },
  { month: "20", desktop: 214, mobile: 140 },
]

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
export default function ReturnsProcessingRateColumn() {
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
                        : 'bg-orange-500'
                  }`}
                ></span>
              </div>
        
              <CardHeader className="px-4 py-2">
        <div className="my-2 flex items-baseline gap-2">
          <div>
            <h2 className="text-base font-medium text-gray-900">Returns Processing Rate<span className="text-sm text-gray-500">(Expected vs Received)</span></h2>
            <h1 className="text-3xl font-bold text-black">90%</h1>
          </div>
          <div className="ml-auto flex items-center gap-x-2 overflow-x-hidden">
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-300 h-7 flex items-center">
              Quality
            </Badge>
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
              </CardHeader >
              <CardContent className="px-4 py-2">  <ChartContainer config={chartConfig}>
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <ReferenceLine y={185} label="Inbound" stroke="blue" strokeDasharray="3 3" isFront={true}/>
          <ReferenceLine y={100} label="Outbound" stroke="red" strokeDasharray="3 3" isFront={true}/>
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}  > <LabelList
            position="insideBottom"
            offset={8}
            className="fill-white"
            fontSize={8}
          />
          </Bar>
        </BarChart>
      </ChartContainer>
    
      </CardContent>
      <CardFooter>
        <div className="grid gap-2 text-sm">
          <div className="flex items-center font-medium ">
            Monday volumes 25% higher than weekly average
          </div>
          <div className="flex items-center gap-x-2 leading-none text-muted-foreground">
            Jan 15 - Jan 20
          </div>
        </div>
      </CardFooter>
  </Card>
  );
}
