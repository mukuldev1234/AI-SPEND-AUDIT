"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function AuditChart({
  data,
}: any) {
  return (
    <div className="h-[350px] w-full">
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="tool" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="savings" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}