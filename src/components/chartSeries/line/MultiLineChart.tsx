"use client"
import { ChartTooltip } from "@/components/ui/chart";
import { ChartTooltipContent } from "@/components/ui/chart";


import { ChartContainer } from "@/components/ui/chart";


import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartLegend } from "@/components/ui/chart"
import { ChartLegendContent } from "@/components/ui/chart"

interface DataPoint {
    [key: string]: string | number
}

interface LineConfig {
    dataKey: string
    color: string
    name: string
}

interface ChartProps {
    title: string
    description: string
    value: string
    data: DataPoint[]
    xAxisKey: string
    lines: LineConfig[]
    showDots: boolean
    nameKey: string
}

export function MultiLineChart({ title, description, data, xAxisKey, lines = [], showDots = true, nameKey, value }: ChartProps) {


   

    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
                <h1 className="text-2xl text-muted-foreground">{value}</h1>
            </CardHeader>
            <CardContent>
                <ChartContainer config={{}}>
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid vertical={false} />
                        <XAxis dataKey={xAxisKey} tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)} />
                            <ChartTooltip
                                content={
                                    <ChartTooltipContent
                                        className="w-[150px]"
                                        nameKey={nameKey}
                                        labelFormatter={(value) => {
                                            return (
                                                <div>
                                                    <h1>{value}</h1>
                                                </div>
                                            )
                                        }}
                                    />
                                }
                            />
                        {/* <Tooltip /> */}
                        <ChartLegend
                            content={<ChartLegendContent nameKey={nameKey} />}
                            className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
                        />
                            <Legend className="pt-4" iconSize={10} layout="horizontal" align="center" verticalAlign="bottom" />
                        {lines.map((line, index) => (
                            <Line
                                key={index}
                                type="monotone"
                                dataKey={line.dataKey}
                                stroke={line.color}
                                name={line.name}
                                dot={showDots}
                                strokeWidth={2}
                            />
                        ))}
                    </LineChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

