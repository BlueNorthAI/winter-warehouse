import { LineChart, Line, CartesianGrid, XAxis, Tooltip, Legend } from "recharts";
import { multiLineCategories_m, multiLineSeries_m } from "./path-to-your-data-file";

export function MultiLineChartContainer() {
    // Use the imported categories and series
    const categories = multiLineCategories_m;
    const series = multiLineSeries_m;

    // Transform series data to match Recharts' required format
    const formattedChartData = categories.map((category, index) => {
        const dataPoint = { category };
        series.forEach((s) => {
            dataPoint[s.name] = s.data[index];
        });
        return dataPoint;
    });

    return (
        <LineChart
            width={500}
            height={250}
            data={formattedChartData}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <Tooltip />
            <Legend />
            {series.map((s) => (
                <Line
                    key={s.name}
                    type="monotone"
                    dataKey={s.name}
                    stroke={s.color}
                    activeDot={{ r: 8 }}
                />
            ))}
        </LineChart>
    );
}
