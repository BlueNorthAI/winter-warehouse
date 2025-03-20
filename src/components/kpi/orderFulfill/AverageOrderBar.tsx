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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"


import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"


const chartData = [
    { location: "Store 126", time: 4.2 },
    { location: "Store 214", time: 5.8 },
    { location: "DC", time: 6.3 },
  ];

const chartConfig = {
  time: {
    label: "Time",
    color: "hsl(var(--chart-1))",
  },
  location: {
    label: "Location",
    color: "hsl(var(--chart-2))",
  },
}
const kpi = {

  status: 'Above Target',

}
export default function AverageOrderBar() {
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
                : ''
            }`}
        ></span>
      </div>

      <CardHeader className="px-4 py-2">
        <div className="my-2 flex items-baseline gap-2">
          <div>
            <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold text-black">Average Order Processing Time</h1>
            </div>
            <h2 className="text-base font-medium text-gray-900">Time from order receipt to shipment readiness
            </h2>
          </div>
         
        </div>

    
      </CardHeader >
      <CardContent className="px-4 py-2">
      <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="location"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="time" fill="var(--color-time)" radius={4} >
            <LabelList dataKey="time" position="insideTop" fill="white" />
            </Bar>

          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter >

<div className="flex w-full items-start gap-2 text-sm">
  <div className="grid gap-2">
    <div className="flex items-center gap-2 font-medium leading-none">
      Average queue time for appointments is 10 min
    </div>
    <div className="flex items-center gap-2 leading-none text-muted-foreground">
      Jan 12 - Jan 20
    </div>
  </div>
</div>

</CardFooter>
    </Card>
  );
}
