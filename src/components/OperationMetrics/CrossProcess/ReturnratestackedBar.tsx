import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegendContent,
  ChartLegend,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ReferenceLine,
  XAxis,
} from "recharts";
import { Badge, TrendingUp } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const chartData = [
  { month: "14 Jan", desktop: 60, mobile: 20 },
  { month: "15 Jan", desktop: 40, mobile: 40 },
  { month: "16 Jan", desktop: 10, mobile: 70 },
  { month: "17 Jan", desktop: 20, mobile: 60 },
  { month: "18 Jan", desktop: 30, mobile: 50 },
  { month: "19 Jan", desktop: 50, mobile: 30 },
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
  title: "Yearly",
  value: 1000,
  status: "Above Target",
};

export default function StatsStackCol() {
  return (
    <>
      <Card>
        <div className="relative rounded-lg">
          <span
            className={`absolute inset-x-0 top-0 h-1 rounded-lg ${
              kpi.status === "Above Target"
                ? `bg-green-500`
                : kpi.status === "Below Target"
                ? `bg-red-500`
                : ""
            }`}
          ></span>
        </div>
        <CardHeader className="px-4 py-2">
        <div className="my-2 flex items-baseline gap-2">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-medium text-gray-900">
               Return Rate{" "}
                <span className="text-sm text-gray-500">(hours)</span>
              </h2>
              <Badge className="bg-yellow-50 text-yellow-700 border-yellow-300 h-7 flex items-center">
                Quality & Accuracy
              </Badge>
            </div>

              <h1 className="text-3xl font-bold text-black">90%</h1>
          </div>
          <div className="ml-auto flex items-center gap-x-2 overflow-x-hidden ">
            <Select>
              <SelectTrigger className="w-30 h-7">
                <SelectValue placeholder="By Customer" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="supplier">By Reason</SelectItem>
                <SelectItem value="productType"> Time Series</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
        <CardContent className="px-4">
          <ChartContainer config={chartConfig} className="h-30 w-full">
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
              <ReferenceLine
                isFront={true}
                y={97}
                label="Target"
                stroke="red"
                strokeDasharray="3 3"
              />
              <Bar
                dataKey="desktop"
                stackId="a"
                fill="var(--color-desktop)"
                radius={[0, 0, 4, 4]}
              >
                <LabelList
                  position="insideBottom"
                  offset={8}
                  className="fill-white"
                  fontSize={8}
                />
              </Bar>
              <Bar
                dataKey="mobile"
                stackId="a"
                fill="var(--color-mobile)"
                radius={[4, 4, 0, 0]}
              >
                <LabelList
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
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 font-medium leading-none">
                Utilization lowest in past week{" "}
                <TrendingUp className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-2 leading-none text-muted-foreground">
                12 Jan - 20 Jan
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
