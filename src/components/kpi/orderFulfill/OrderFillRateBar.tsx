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
  { region: "Northeast", fulfilled: 97.2, target: 96 },
  { region: "Southeast", fulfilled: 95.8, target: 96 },
  { region: "West", fulfilled: 94.3, target: 96 },
];

const chartConfig = {
  fulfilled: {
    label: "Fulfilled",
    color: "hsl(var(--chart-1))",
  },
  target: {
    label: "Target",
    color: "hsl(var(--chart-2))",
  },
}
const kpi = {

  status: 'Above Target',

}
export default function OrderFillRateBar() {
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
            <h1 className="text-3xl font-bold text-black">Order Fill Rate</h1>
            </div>
            <h2 className="text-base font-medium text-gray-900">Percentage of order line items fulfilled from available inventory
            </h2>
          </div>
         
        </div>

    
      </CardHeader >
      <CardContent className="px-4 py-2">
      <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="region"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="fulfilled" fill="var(--color-fulfilled)" radius={4} >
            <LabelList dataKey="fulfilled" position="insideTop" fill="white" />
            </Bar>
            <Bar dataKey="target" fill="var(--color-target)" radius={4} >
            <LabelList dataKey="target" position="insideTop" fill="white"   />
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
