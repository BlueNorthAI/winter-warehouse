/* eslint-disable react/prop-types */
import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

import { Chart, ChartSeries, ChartSeriesItem } from '@progress/kendo-react-charts';
import {
  ChartContainer,
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
// import { useParams } from 'next/navigation';


const data = [
    {
        lower: 2.5,
        q1: 3.925,
        median: 4.15,
        q3: 4.45,
        upper: 5.1,
        mean: 4.1,
        year: '2000'
    },
    {
        lower: 2.4,
        q1: 3.725,
        median: 4.95,
        q3: 5.85,
        upper: 7.7,
        mean: 4.9,
        outliers: [2.1, 8.3, 9.8],
        year: '2001'
    },
    {
        lower: 1.7,
        q1: 2.3,
        median: 3.9,
        q3: 5,
        upper: 5.5,
        mean: 3.7,
        outliers: [1.1, 9.1],
        year: '2002'
    },
    {
        lower: 2.2,
        q1: 2.5,
        median: 3.1,
        q3: 3.975,
        upper: 4.3,
        mean: 3.2,
        outliers: [1.6, 1.8, 9.8],
        year: '2003'
    },
    {
        lower: 1.9,
        q1: 2.7,
        median: 3.35,
        q3: 4.575,
        upper: 5.7,
        mean: 3.6,
        outliers: [1.1, 8.3],
        year: '2004'
    },
    {
        lower: 1.7,
        q1: 2.65,
        median: 3.3,
        q3: 4.05,
        upper: 5,
        mean: 3.4,
        year: '2005'
    },
    {
        lower: 1.4,
        q1: 2.25,
        median: 3.3,
        q3: 4.65,
        upper: 5.7,
        mean: 3.4,
        year: '2006'
    },
    {
        lower: 1.9,
        q1: 2.85,
        median: 4,
        q3: 4.45,
        upper: 6.1,
        mean: 3.9,
        outliers: [1, 1.2],
        year: '2007'
    },
    {
        lower: 1.5,
        q1: 2.35,
        median: 4.1,
        q3: 5.225,
        upper: 5.7,
        mean: 3.9,
        outliers: [9, 9.5],
        year: '2008'
    },
    {
        lower: 1.8,
        q1: 2.325,
        median: 3.35,
        q3: 4,
        upper: 5.4,
        mean: 3.3,
        outliers: [1, 6],
        year: '2009'
    },
    {
        lower: 1.8,
        q1: 2.75,
        median: 3.35,
        q3: 3.825,
        upper: 4.9,
        mean: 3.4,
        year: '2010'
    },
    {
        lower: 1.7,
        q1: 2.275,
        median: 3.2,
        q3: 3.825,
        upper: 5.5,
        mean: 3.2,
        outliers: [0.5, 6.7],
        year: '2011'
    },
    {
        lower: 1.2,
        q1: 1.95,
        median: 2.45,
        q3: 3.075,
        upper: 3.5,
        mean: 2.5,
        year: '2012'
    },
    {
        lower: 1.3,
        q1: 1.9,
        median: 3.05,
        q3: 3.425,
        upper: 4,
        mean: 2.7,
        outliers: [7, 8.5],
        year: '2013'
    }
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
 
  status: '',
  
}
export default function LabourhoursperputawayBox() {
  // const workspaceId = useParams().workspaceId;  
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
                        : 'bg-yellow-500'
                  }`}
                ></span>
              </div>
        
      <CardHeader className="px-4 py-2">
        <div className="my-2 flex items-baseline gap-2">
          <div>
            <h2 className="text-base font-medium text-gray-900">Labour Hours per Putaway <span className="text-sm text-gray-500">(hours)</span></h2>
            <h1 className="text-3xl font-bold text-black">90%</h1>
          </div>
          <div className="ml-auto flex items-center gap-x-2 overflow-x-hidden ">
            <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-300 h-7 flex items-center">
              Efficiency Metrics
            </Badge>
            <Select>
              <SelectTrigger className="w-30 h-7">
                <SelectValue placeholder="By Order Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="costComponent">By Product Type </SelectItem>
                <SelectItem value="costComponent">By Volume </SelectItem>

              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-4 py-2">
        <ChartContainer config={chartConfig} className="mx-auto  max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground" >
        <Chart>
        <ChartSeries>
            <ChartSeriesItem
                type="boxPlot"
                lowerField="lower"
                q1Field="q1"
                medianField="median"
                q3Field="q3"
                upperField="upper"
                outliersField="outliers"
                meanField="mean"
                categoryField="year"
                data={data}
            />
        </ChartSeries>
    </Chart>
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
