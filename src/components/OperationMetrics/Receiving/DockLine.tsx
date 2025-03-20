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
import { useGetRecevingAnalytics } from "@/features/receving/api/use-get-recevingAnalytics";
import { useWorkspaceId } from '@/features/workspaces/hooks/use-workspace-id';

// const chartData = [
//   { "month": "18", "customer": 150, "region": 90 },


//   { "month": "19", "customer": 220, "region": 130 },
//   { "month": "20", "customer": 180, "region": 110 },

//   { "month": "21", "customer": 95, "region": 160 },
//   { "month": "22", "customer": 210, "region": 140 },
//   { "month": "23", "customer": 230, "region": 150 },
// ]



const kpi = {
  title: "Yearly",
  value: 1000,
  status: "Above Target",
}

export default function DockLine() {
  const workspaceId = useWorkspaceId();
  const { data: alerts } = useGetRecevingAnalytics({ workspaceId });




  console.log(alerts, "alerts");

  // const chartData = alerts?.map((alert, index) => ({
  //   "date": index + 1,
  //   "peak_hours_data": alert.peak_hours_data,
  //   "non_peak_hours_data": alert.non_peak_hours_data,
  //   "total_value": alert.total_value,
  // }));


  const chartConfig = {
    peak_hours_data: {
      label: "Peak Hours Data",
      color: "hsl(var(--chart-1))",
    },


    non_peak_hours_data: {
      label: "Non Peak Hours Data",
      color: "hsl(var(--chart-2))",
    },

    total_value: {
      label: "Total Value",
      color: "hsl(var(--chart-3))",
    },


  };
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
                <h2 className="text-base font-medium text-gray-900">Dock-to-Stock Time <span className="text-sm text-gray-500">(hours)</span></h2>
               
              </div>

              <h1 className="text-3xl font-bold text-black">90%</h1>
            </div>
            <div className="ml-auto flex items-center gap-x-2 overflow-x-hidden ">

              <Select>
                <SelectTrigger className="w-30 h-7">
                  <SelectValue placeholder="By Supplier" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="supplier">By Supplier</SelectItem>
                  <SelectItem value="productType"> By Product Type</SelectItem>
                </SelectContent>
              </Select>
            
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-4 py-2">
          <ChartContainer config={chartConfig} className='h-30 w-full'>

            <LineChart
              accessibilityLayer
              data={alerts?.documents}
              margin={{
                top: 20,
                left: 12,
                right: 12,
              }}

            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}

              />

              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <ChartLegend content={<ChartLegendContent />} />
              <ReferenceLine isFront={true} y={97} label="Target" stroke="red" strokeDasharray="3 3" />
              <Line
                dataKey="peak_hours_data"
                type="linear"
                stroke="var(--color-peak_hours_data)"
                strokeWidth={2}
                dot={{ fill: "var(--color-peak_hours_data)" }}
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
                dataKey="non_peak_hours_data"
                type="linear"
                stroke="var(--color-non_peak_hours_data)"
                strokeWidth={2}
                dot={{ fill: "var(--color-non_peak_hours_data)" }}
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
                dataKey="total_value"
                type="monotone"
                stroke="var(--color-total_value)"
                strokeWidth={2}
                dot={{ fill: "var(--color-total_value)" }}
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
