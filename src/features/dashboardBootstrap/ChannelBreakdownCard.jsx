import React from "react";
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from "recharts";

const COLORS = ["#0b5ed7", "#6ea8fe", "#a9c5ff"]; // Bootstrap blues

const data = [
  { name: "In-Person", value: 45 },
  { name: "Digital", value: 38 },
  { name: "API", value: 17 },
];

const ChannelBreakdownCard = () => {
  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <div className="fs-6 fw-semibold">Channel Breakdown</div>
          <button className="btn btn-link btn-sm text-decoration-none">Export</button>
        </div>
        <div style={{ width: "100%", height: 260 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie data={data} dataKey="value" nameKey="name" outerRadius={90} label>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-3">
          {data.map((d, i) => (
            <div key={d.name} className="d-flex align-items-center justify-content-between small mb-1">
              <div className="d-flex align-items-center gap-2">
                <span className="legend-dot" style={{ backgroundColor: COLORS[i] }} />
                <span>{d.name}</span>
              </div>
              <strong>{d.value}%</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChannelBreakdownCard;
