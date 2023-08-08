import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import React from "react";
import "./dashboard.css"
const data = [
  { name: "Training Groups", value: 120 },
  { name: "Participants", value: 200 },
  { name: "Buisness Advisor", value: 350 },
  { name: "Farmer Trainer", value: 280 },
];

const Barchart = () => {
  return (
    <div
     className="chart__content-container"
    >
      <p style={{ fontWeight: "600", color: "rgba(0, 165, 163, 1)" }}>
        Total Metrics Values
      </p>
      <div>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart
            data={data}
            margin={{ top: 30, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid
              vertical={false}
              stroke="rgba(28, 28, 28, 0.1)"
              strokeWidth={1}
            />
            <XAxis
              dataKey="name"
              axisLine={{ stroke: "rgba(28, 28, 28, 0.2)" }}
              tick={{ fontSize: 12, fill: "#1c1c1c66" }}
              tickLine={false}
              tickMargin={12}
            />
            <YAxis
              axisLine={false}
              tick={{ fontSize: 12, fill: "#1c1c1c66" }}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                fontSize: 12,
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                border: "none",
                fontWeight: 500
              }}


            />
            <Bar
              dataKey="value"
              fill="rgba(37, 36, 93, 1)"
              radius={[5, 5, 0, 0]}
              barSize={30}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Barchart;
