import React from 'react';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

import {
  ChartContainer,
  ChartLegendContent,
  ChartLegend,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Bar, BarChart, CartesianGrid, LabelList, Line, ReferenceLine, XAxis } from "recharts"


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

  status: 'Above Target',

}
export default function AvgProcessingColumn() {


  return (
    <Card >
      <div className="relative rounded-lg">
        <span
          className={`absolute inset-x-0 top-0 h-1 rounded-lg ${kpi.status === 'Above Target'
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
            <div className="flex items-baseline">
              <h2 className="text-base font-medium text-gray-900">Average Processing Time<span className="text-sm text-gray-500">(per Receipt)</span></h2>

            </div>
            <h1 className="text-4xl font-bold text-black">
              185
            </h1>
          </div>
          <div className="ml-auto flex items-center gap-x-2 overflow-x-hidden ">
            <Select>
              <SelectTrigger className="w-30 h-7">
                <SelectValue placeholder="By Document Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="documentType">By Document Type</SelectItem>

              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-4 py-2">
        <ChartContainer config={chartConfig}>
        
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <ChartLegend content={<ChartLegendContent />} />
              <ReferenceLine y={185} label="Inbound" stroke="blue" strokeDasharray="3 3" isFront={true} />
              <ReferenceLine y={100} label="Outbound" stroke="red" strokeDasharray="3 3" isFront={true} />
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}>
                <LabelList
                  position="insideBottom"
                  offset={8}
                  className="fill-white"
                  fontSize={8}
                />
              </Bar>
          
        
       
        <Line
          dot={false}
          strokeWidth={2}
          strokeLinecap="round"
          type="monotone"
          dataKey="desktop"
          stroke="#3B7AD9"
          yAxisId="right"
          legendType="rect"
          name="Amount Spent"
            />
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
        <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-300 h-7 flex items-center">
          Time
        </Badge>
      </CardFooter>

    </Card>
  );
}
