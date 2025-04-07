import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip} from "recharts";

export default function LineChartContainer({ primaryData, additionalData = [], additionalVisible = false }) {
    return (
        <div className="w-full h-48 py-3">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={primaryData}
                    margin={{ top: 10, right: 10, bottom: 0, left: -20 }}
                >
                    <YAxis
                        stroke="#888"
                        width={55}
                        axisLine={false}
                        tickLine={false}
                        interval={0}
                        padding={{bottom:10}}
                        tick={{ fill: "#888", fontSize: 10, color: '#555555', fontWeight: 600 }}
                        domain={[0, 2000]}
                        tickFormatter={(v) => (v >= 1000 ? `${v / 1000}K` : v)}
                    />
                    <XAxis
                        dataKey="date"
                        stroke="#888"
                        interval={2}
                        axisLine={{ stroke: "#333" }}
                        tickLine={false}
                        padding={{ left: 10 }}
                        tick={{ fill: "#888", fontSize: 10, color: '#555555', fontWeight: 600 }}
                    />
                    <Tooltip
                        contentStyle={{ backgroundColor: '#1D1D1D', border: '1px solid #333', borderRadius: '4px' }}
                        itemStyle={{ color: '#FFFFFF' }}
                        labelStyle={{ color: '#888' }}
                        formatter={(value) => `${value}`}
                        labelFormatter={(label) => `Date: ${label}`}
                    />
                    <Line
                        type="linear"
                        dataKey="value"
                        stroke="#FFFFFF"
                        strokeWidth={1.5}
                        dot={false}
                        isAnimationActive={false}
                    />
                    {additionalVisible && additionalData.length > 0 && (
                        <Line
                            type="linear"
                            data={additionalData}
                            dataKey="value"
                            stroke="#C36DEE"
                            strokeWidth={1.5}
                            dot={false}
                            isAnimationActive={false}
                        />
                    )}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}