import React, { useMemo, useState } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const TransactionVolumeCard = () => {
  const datasets = useMemo(() => ({
    daily: [
      { day: "Mon", count: 45, value: 50 },
      { day: "Tue", count: 58, value: 70 },
      { day: "Wed", count: 40, value: 55 },
      { day: "Thu", count: 35, value: 50 },
      { day: "Fri", count: 48, value: 65 },
      { day: "Sat", count: 52, value: 60 },
      { day: "Sun", count: 38, value: 45 },
    ],
    weekly: [
      { day: "W1", count: 300, value: 450 },
      { day: "W2", count: 360, value: 520 },
      { day: "W3", count: 320, value: 480 },
      { day: "W4", count: 410, value: 560 },
    ],
    monthly: [
      { day: "Jan", count: 1200, value: 1500 },
      { day: "Feb", count: 980, value: 1200 },
      { day: "Mar", count: 1300, value: 1650 },
      { day: "Apr", count: 1100, value: 1400 },
      { day: "May", count: 1500, value: 1750 },
      { day: "Jun", count: 1420, value: 1680 },
    ],
  }), []);

  const [range, setRange] = useState("weekly");
  const data = datasets[range];

  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <div className="fs-6 fw-semibold">Transaction Volume</div>
          <div className="d-flex align-items-center gap-2">
            <div className="btn-group btn-group-sm" role="group">
              {(["daily", "weekly", "monthly"]).map((key) => (
                <button
                  key={key}
                  type="button"
                  className={`btn btn-outline-secondary ${range === key ? "active" : ""}`}
                  onClick={() => setRange(key)}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </button>
              ))}
            </div>
            <button className="btn btn-link btn-sm text-decoration-none">Export</button>
          </div>
        </div>

        <div style={{ width: "100%", height: 260 }}>
          <ResponsiveContainer>
            <ComposedChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="tvArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#5B8DEF" stopOpacity={0.25}/>
                  <stop offset="95%" stopColor="#5B8DEF" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="day" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip cursor={{ stroke: "#5B8DEF", strokeWidth: 1 }} />
              <Legend verticalAlign="bottom" height={24} />
              <Area type="monotone" dataKey="value" stroke="#5B8DEF" fill="url(#tvArea)" name="Transaction Value ($k)" />
              <Line type="monotone" dataKey="count" stroke="#0B5ED7" dot={false} name="Transaction Count" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <div className="small text-muted mt-2">Legend: Transaction Count, Transaction Value ($)</div>
      </div>
    </div>
  );
};

export default TransactionVolumeCard;
