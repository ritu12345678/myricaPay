import React, { useState } from 'react';
import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart
} from 'recharts';
import ToggleButtonTime from '../../../../components/ToggleButtonTime';

const transactionData = [
  { name: 'Mon', count: 3500, value: 190000 },
  { name: 'Tue', count: 4000, value: 210000 },
  { name: 'Wed', count: 3300, value: 165000 },
  { name: 'Thu', count: 4500, value: 220000 },
  { name: 'Fri', count: 5000, value: 230000 },
  { name: 'Sat', count: 4200, value: 185000 },
  { name: 'Sun', count: 3800, value: 195000 },
];

const VolumeValueChart = () => {
  const [selectedRange, setSelectedRange] = useState('Day');

  // You can replace this with different datasets for Weekly/Monthly
  const chartData = transactionData;

  return (
    <div className="card ">
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="card-title mb-0 fs-5">Transaction Volume & Value</h5>
          <div className="d-flex align-items-center gap-1">
         
            <ToggleButtonTime
        options={['Day', 'Week', 'Month']}
        defaultValue="Day"
        onChange={(value) => setSelectedRange(value)} // updates parent state
      />
            <button type="button" className="btn btn-outline-secondary transparent-btn">
              <i className="bi bi-download me-1"></i> Export
            </button>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart
            data={chartData}
            margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            
            <XAxis dataKey="name" />
            
            {/* Left Y-Axis: Transaction Count */}
            <YAxis
              yAxisId="left"
              orientation="left"
              stroke="#0d47a1"
              domain={[0, 6000]}
              label={{ value: 'Transaction Count', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' } }}
            />
            
            {/* Right Y-Axis: Transaction Value */}
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#007bff"
              domain={[150000, 250000]}
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
              label={{ value: 'Transaction Value ($)', angle: 90, position: 'insideRight', style: { textAnchor: 'middle' } }}
            />
            
            <Tooltip formatter={(value, name) => {
              return name === 'value' ? [`$${value.toLocaleString()}`, 'Transaction Value'] : [value.toLocaleString(), 'Transaction Count'];
            }} />
            
            <Legend wrapperStyle={{ paddingTop: '15px' }} />
            
            <Bar yAxisId="left" dataKey="count" fill="#0d47a1" name="Transaction Count" />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="value"
              stroke="#007bff"
              name="Transaction Value"
              strokeWidth={3}
              dot={{ strokeWidth: 2, r: 4 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default VolumeValueChart;
