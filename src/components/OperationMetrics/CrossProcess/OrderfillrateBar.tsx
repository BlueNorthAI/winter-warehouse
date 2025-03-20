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
import { Bar, BarChart, CartesianGrid, LabelList, ReferenceLine, XAxis, YAxis } from "recharts"


const chartData = [
  { month: "12", desktop: 186, mobile: 80 },
  { month: "13", desktop: 305, mobile: 200 },
  { month: "14", desktop: 237, mobile: 120 },
  { month: "15", desktop: 73, mobile: 190 },
  { month: "16", desktop: 209, mobile: 130 },
  { month: "17", desktop: 214, mobile: 140 },
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
  label: {
    color: "hsl(var(--background))",
  },
};

const kpi = {

  status: '',

}
export default function UnitsReceivedLaborBar() {
  // const workspaceId = useParams().workspaceId;
  // const emptyStyles = { background: '#ef4444' };
  // const progressStyles = { background: '#22c55e' };


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
            <div className="flex items-center gap-2">
              <h2 className="text-base font-medium text-gray-900">Order Fill Rate <span className="text-sm text-gray-500">(units)</span></h2>
              <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-300 h-7 flex items-center">Fill Rate</Badge>
            </div>

            <h1 className="text-3xl font-bold text-black">90%</h1>
          </div>
          <div className="ml-auto flex items-center gap-x-2 overflow-x-hidden ">

            <Select>
              <SelectTrigger className="w-30 h-7">
                <SelectValue placeholder="By Supplier" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="supplier">By Customer</SelectItem>
                <SelectItem value="productType"> By Region</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
  
      </CardHeader>
      <CardContent className="px-4 py-2">
        <ChartContainer config={chartConfig} className="max-h-[250px] " >
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="desktop" type="number" hide />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />  
            <ReferenceLine x={200} label="Target" stroke="red" strokeDasharray="3 3" />
            <Bar
              dataKey="desktop"
              layout="vertical"
              fill="var(--color-desktop)"
              radius={4}
            >
              <LabelList
                dataKey="month"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={12}
              />
              <LabelList
                dataKey="desktop"
                position="insideRight"
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
          <div className="flex items-center gap-2 font-medium">
            Picking team averaging lowest OT at 8 hours/FTE
          </div>
          <div className="flex items-center gap-2 leading-none text-muted-foreground">
            Jan 12 - Jan 17
          </div>
        </div>
      </CardFooter>

    </Card>
  );
}
