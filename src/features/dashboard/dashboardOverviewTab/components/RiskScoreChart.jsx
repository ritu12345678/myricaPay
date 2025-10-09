import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from 'recharts';

const defaultRiskData = [
  { name: 'Very Low (0-20)', count: 14000, color: '#4CAF50' },
  { name: 'Low (21-40)', count: 8000, color: '#00BCD4' },
  { name: 'Medium (41-60)', count: 2500, color: '#FF9800' },
  { name: 'High (61-80)', count: 1200, color: '#F44336' },
  { name: 'Very High (81-100)', count: 500, color: '#E91E63' }
];

const RiskScoreChart = ({ data = defaultRiskData }) => {
  const [activeTab, setActiveTab] = useState('Transactions');

  // Example: if you had different datasets for users vs transactions
  const chartData = data.slice().reverse(); // reverse to match top-to-bottom order

  return (
    <div className="card  h-100">
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="card-title mb-0 fs-5">Risk Score Distribution</h5>
          <div className="btn-group btn-group-sm" role="group">
            {['Transactions', 'Users'].map((tab) => (
              <button
                key={tab}
                type="button"
                className={`btn btn-sm ${activeTab === tab ? 'btn-primary active' : 'btn-outline-primary'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <ResponsiveContainer width="100%" height={280}>
          <BarChart
            layout="vertical"
            data={chartData}
            margin={{ top: 5, right: 30, left: 10, bottom: 35 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis
              type="number"
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
              label={{ value: 'Number of Transactions', position: 'bottom', offset: 20, }}
            />
            <YAxis
              type="category"
              dataKey="name"
              axisLine={false}
              tickLine={false}
              width={120}
            />
            <Tooltip
              formatter={(value) => new Intl.NumberFormat().format(value)}
              cursor={{ fill: 'rgba(0,0,0,0.05)' }}
            />
            <Bar dataKey="count" barSize={20}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RiskScoreChart;
