/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import {
  WrenchScrewdriverIcon,
  CircleStackIcon
} from '@heroicons/react/24/outline';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import { Bar, BarChart, CartesianGrid, LabelList, ReferenceLine, XAxis, YAxis } from "recharts"
import { useParams } from 'next/navigation';

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
export default function BarChartCard() {
  const workspaceId = useParams().workspaceId;
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

        <div className="my-2 flex items-baseline gap-2 ">

          <div>
            <h2 className="text-base font-medium text-gray-900">
            Overtime Hours per FTE <span className="text-xs text-gray-500">(# of hours)</span>
            </h2>
            <h1 className="text-4xl font-bold text-black">
              12.5
            </h1>
          </div>

          {/* <div className="ml-auto  overflow-x-hidden px-2 text-center text-sm font-medium text-gray-700"> 
                  
                    <Progress value={kpi.TargetAch}  indicatorColor={`${ kpi.TargetAch > 50? "bg-green-400" : "bg-red-400"}`}  className="ml-auto h-2 w-[50%]" />
                   </div> */}
        </div>
      </CardHeader >
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
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
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
      <CardFooter className="flex divide-x divide-gray-200 bg-gray-50 border-t p-0 ">

        <div className="flex w-0 flex-1">
          <Link
            href={`/workspaces/${workspaceId}/pickingAnalysis`} // Fixed here
            className="relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2 border border-transparent text-sm font-semibold  hover:bg-rose-500 hover:text-white rounded-bl-lg"
          >
            <span className="py-4 inline-flex flex-1 items-center justify-center gap-x-3 text-sm font-semibold hover:text-white">
              <WrenchScrewdriverIcon
                className="h-5 w-5"
                aria-hidden="true"
              />
              Analyze
            </span>
          </Link>
        </div>

        <div className="-ml-px flex flex-1">
          <Link
            href='' // Fixed here
            className="relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2 border border-transparent text-sm font-semibold hover:bg-rose-500 hover:text-white"
          >
            <span className="py-4 inline-flex flex-1 items-center justify-center gap-x-3 text-sm font-semibold hover:text-white rounded-br-lg">
              <CircleStackIcon
                className="h-5 w-5"
                aria-hidden="true"
              />
              Explore Data
            </span>
          </Link>
        </div>

        {/* <div className="-ml-px flex flex-1">
          <Link
            href='' // Fixed here
            className="relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2 border border-transparent text-sm font-semibold hover:bg-rose-500 hover:text-white rounded-br-lg"
          >
            <span className="py-4 inline-flex flex-1 items-center justify-center gap-x-3 text-sm font-semibold hover:text-white">
              <LightBulbIcon className="h-5 w-5" aria-hidden="true" />
              Insights
            </span>
          </Link>
        </div> */}

      </CardFooter>
    </Card>
  );
}
