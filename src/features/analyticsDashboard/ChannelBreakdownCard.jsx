import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { ProgressBar } from 'primereact/progressbar';

const COLORS = ['#0d6efd', '#20c997', '#6c757d'];
const pieData = [
  { name: 'In-Person', value: 45 },
  { name: 'Digital', value: 38 },
  { name: 'API', value: 17 },
];

const ChannelBreakdownCard = () => {
  return (
    <div className="bg-white border rounded-3 p-3 h-100">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <div className="fw-semibold text-dark">Channel Breakdown</div>
        <button className="btn btn-link text-decoration-none text-secondary p-0" title="Export"><i className="bi bi-box-arrow-up-right"/></button>
      </div>

      <div className="row g-3">
        <div className="col-12 col-md-6">
          <div style={{ width: '100%', height: 220 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie data={pieData} dataKey="value" innerRadius={50} outerRadius={80} paddingAngle={2}>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center gap-3">
          {pieData.map((d, i) => (
            <div key={d.name}>
              <div className="d-flex justify-content-between align-items-center mb-1">
                <span className="small">
                  <span className="me-2 rounded-circle d-inline-block" style={{ width: 8, height: 8, background: COLORS[i] }} />
                  {d.name}
                </span>
                <span className="small fw-semibold">{d.value}%</span>
              </div>
              <ProgressBar value={d.value} showValue={false} style={{ height: 8 }} color={COLORS[i]}></ProgressBar>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChannelBreakdownCard;
