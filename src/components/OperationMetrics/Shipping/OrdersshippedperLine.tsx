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
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { TrendingUp } from 'lucide-react';

import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"

  
  const chartData = [
    { month: "January", desktop: 186, mobile: 80,tv:140 },
    { month: "February", desktop: 305, mobile: 200,tv:400 },
    { month: "March", desktop: 237, mobile: 120,tv:180 },
    { month: "April", desktop: 73, mobile: 190,tv:200 },
    { month: "May", desktop: 209, mobile: 130,tv:340 },
    { month: "June", desktop: 214, mobile: 140,tv:280 },
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
export default function OrdersshippedperLine() {



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
            <h2 className="text-base font-medium text-gray-900"> Orders Shipped per Line <span className="text-sm text-gray-500">(orders)</span></h2>
            <h1 className="text-3xl font-bold text-black">90%</h1>
          </div>
          <div className="ml-auto flex items-center gap-x-2 overflow-x-hidden ">
            <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-300 h-7 flex items-center">
              Productivity Metrics
            </Badge>
            <Select>
              <SelectTrigger className="w-30 h-7">
                <SelectValue placeholder="By Ship Method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="costComponent">By Ship Method

                      </SelectItem>
                <SelectItem value="costComponent">Time Series</SelectItem>

              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-4 py-2">
      <ChartContainer
          config={chartConfig}
          className=" max-h-[250px] pb-0 "
        >
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
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
           <Line
              dataKey="desktop"
              type="monotone"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={{fill: "var(--color-desktop)"}}
              activeDot={{r: 6}}
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
              type="monotone"
              stroke="var(--color-mobile)"
              strokeWidth={2}
              dot={{fill: "var(--color-mobile)"}}
              activeDot={{r: 6}}
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
              dot={{fill: "var(--color-tv)"}}
              activeDot={{r: 6}}>

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
