import React from "react";
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
import DashboardCard from "../../components/DashboardCard";

const chartData = [
  { name: "Low Risk", Retail: 500, Digital: 200, Corporate: 100 },
  { name: "Medium Risk", Retail: 250, Digital: 100, Corporate: 50 },
  { name: "High Risk", Retail: 120, Digital: 60, Corporate: 20 },
  { name: "Critical Risk", Retail: 60, Digital: 30, Corporate: 10 },
];

const RiskWeightedAnalysisChart = () => {
  return (
    <DashboardCard title="Risk-Weighted Analysis">
    

      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip cursor={{ fill: "rgba(0,0,0,0.05)" }} />
          <Legend verticalAlign="bottom" height={36} />
          {/* Stack the bars */}
          <Bar dataKey="Retail" stackId="a" fill="#0d47a1" />
          <Bar dataKey="Digital" stackId="a" fill="#1976d2" />
          <Bar dataKey="Corporate" stackId="a" fill="#64b5f6" />
        </BarChart>
      </ResponsiveContainer>
    </DashboardCard>
  );
};

export default RiskWeightedAnalysisChart;
