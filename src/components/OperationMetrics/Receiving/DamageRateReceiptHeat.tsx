/* eslint-disable react/prop-types */
import React from 'react';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ResponsiveContainer, Treemap } from "recharts";


const data = [
  {
    name: "axis",
    children: [
      { name: "Axes", size: 130, fill: '#8884d8', label: "130" },
      { name: "Axis", size: 243, fill: '#8884d8', label: "243" },
      { name: "AxisGridLine", size: 62, fill: '#8884d8', label: "62" },
      { name: "AxisLabel", size: 300, fill: '#8884d8', label: "300" },
      { name: "CartesianAxes", size: 180, fill: '#8884d8', label: "180" },
    ],
  },

];


const kpi = {

  status: 'Above Target',

}
export default function UnloadTimeHeat() {


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

        <div className="my-2 flex items-baseline gap-2 ">

          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-medium text-gray-900">Damage Rate <span className="text-sm text-gray-500">(per Truck)</span></h2>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-300 h-7 flex items-center">
                Quality
              </Badge>
            </div>

       

            <h1 className="text-4xl font-bold text-black">
              185
            </h1>
          </div>
          <div className="ml-auto flex items-center gap-x-2 overflow-x-hidden ">
            <Select>
              <SelectTrigger className="w-30 h-7">
                <SelectValue placeholder="By Carrier" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="carrier">By Carrier</SelectItem>
                <SelectItem value="door">By Door</SelectItem>

              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader >
      <CardContent className="px-4 py-2">
        <ResponsiveContainer width="100%" height={240}>
          <Treemap
            data={data}
            dataKey="size"
            aspectRatio={4 / 3}
            stroke="#fff"
            fill="#8884d8"
          />
        </ResponsiveContainer>



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
      </CardFooter>
    </Card >
  );
}
