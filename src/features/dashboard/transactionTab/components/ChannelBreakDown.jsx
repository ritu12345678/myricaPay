// ChannelBreakdownChart.jsx
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { ProgressBar } from 'primereact/progressbar';
import DashboardCard from '../../components/DashboardCard';

const data = [
  { name: 'In-Person', value: 45, color: '#0d47a1' }, // Dark blue
  { name: 'Digital', value: 38, color: '#4285f4' },   // Medium blue
  { name: 'API', value: 17, color: '#8ab4f8' },       // Light blue
];

const ChannelBreakdownChart = () => {
  return (
    <DashboardCard title="Channel Breakdown" className='flex-fill'>
      <div className="d-flex align-items-center justify-content-center">
        {/* Pie Chart (Simple, no donut) */}
        <ResponsiveContainer width="40%" height={180}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={70}
              fill="#8884d8"
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        {/* Progress Bars on the right */}
        <div className="ms-4 flex-grow-1">
          {data.map((entry, index) => (
            <div key={index} className="mb-2">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <span className="fw-semibold text-dark">{entry.name}</span>
                <span className="text-muted">{entry.value}%</span>
              </div>
              <div className="progress" style={{ height: '6px', backgroundColor: '#e9ecef' }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: `${entry.value}%`,
                    backgroundColor: entry.color,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardCard>
  );
};

export default ChannelBreakdownChart;
