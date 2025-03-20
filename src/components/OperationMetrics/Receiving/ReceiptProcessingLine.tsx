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
import { CartesianGrid, LabelList, Line, LineChart, ReferenceLine, XAxis } from "recharts"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { TrendingUp } from 'lucide-react';

const chartData = [
  { month: "18", desktop: 186, mobile: 80 },
  { month: "19", desktop: 305, mobile: 200 },
  { month: "20", desktop: 237, mobile: 120 },
  { month: "21", desktop: 73, mobile: 190 },
  { month: "22", desktop: 209, mobile: 130 },
  { month: "23", desktop: 214, mobile: 140 },
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
  title: "Yearly",
  value: 1000,
  status: "Above Target",
}

export default function ReceiptProcessingLine() {

  return (
    <>
      <Card>
        <div className="relative rounded-lg">
          <span
            className={`absolute inset-x-0 top-0 h-1 rounded-lg ${kpi.status === 'Above Target'
              ? `bg-green-500`
              : kpi.status === 'Below Target'
                ? `bg-red-500`
                : ''}`}
          ></span>
        </div>
        <CardHeader className="px-4 py-2">

          <div className="my-2 flex items-baseline gap-2">


            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-medium text-gray-900">Receipt Processing Time<span className="text-sm text-gray-500">(Hours)</span></h2>
              </div>
              <h1 className="text-3xl font-bold text-black">90%</h1>
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
          <ChartContainer config={chartConfig} className='h-30 w-full'>

            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                top: 20,
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <ChartLegend content={<ChartLegendContent />} />

              <ReferenceLine isFront={true} y={97} label="Target" stroke="red" strokeDasharray="3 3" />
              <Line
                dataKey="desktop"
                type="linear"
                stroke="var(--color-desktop)"
                strokeWidth={2}
                dot={{ fill: "var(--color-desktop)" }}
                activeDot={{ r: 6 }}
              >
                <LabelList
                  position="top"
                  offset={8}
                  className="fill-foreground"
                  fontSize={8}
                />
              </Line>
              <Line
                dataKey="mobile"
                type="linear"
                stroke="var(--color-mobile)"
                strokeWidth={2}
                dot={{ fill: "var(--color-mobile)" }}
                activeDot={{ r: 6 }}
              >
                <LabelList
                  position="top"
                  offset={8}
                  className="fill-foreground"
                  fontSize={8}
                />
              </Line>
              <Line
                dataKey="tv"
                type="monotone"
                stroke="var(--color-tv)"
                strokeWidth={2}
                dot={{ fill: "var(--color-tv)" }}
                activeDot={{ r: 6 }}>

                <LabelList
                  position="top"
                  offset={8}
                  className="fill-foreground"
                  fontSize={8}
                />
              </Line>
            </LineChart>
          </ChartContainer>

        </CardContent>


        <CardFooter >

          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 font-medium leading-none">
                Average queue time for appointments is 10 min <TrendingUp className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-2 leading-none text-muted-foreground">
                Jan 12 - Jan 20
              </div>
            </div>
          </div>
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-300 h-7 flex items-center">
            Time
          </Badge>
        </CardFooter>

      </Card >
    </>
  );
}
