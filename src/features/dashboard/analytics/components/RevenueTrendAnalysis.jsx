// TransactionVolumeChart.jsx
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
 const data = [
  { name: 'Mon', 'Transaction Count': 120, 'Transaction Value ($k)': 80 },
  { name: 'Tue', 'Transaction Count': 180, 'Transaction Value ($k)': 120 },
  { name: 'Wed', 'Transaction Count': 90, 'Transaction Value ($k)': 60 },
  { name: 'Thu', 'Transaction Count': 150, 'Transaction Value ($k)': 100 },
  { name: 'Fri', 'Transaction Count': 160, 'Transaction Value ($k)': 110 },
  { name: 'Sat', 'Transaction Count': 100, 'Transaction Value ($k)': 70 },
  { name: 'Sun', 'Transaction Count': 130, 'Transaction Value ($k)': 90 },
];

const RevenueTrendAnalysis = () => {
    return (
        <div className='card flex-fill'><div className='card-body'>

            <div className="d-flex justify-content-between align-items-center mb-2">
                <h5>User Registration Trend</h5>
                <div className="btn-group btn-group-sm me-2" role="group">
                    <button type="button" className="btn btn-outline-primary">Daily</button>
                    <button type="button" className="btn btn-primary active">Weekly</button>
                    <button type="button" className="btn btn-outline-primary">Monthly</button>
                     <button type="button" className="btn btn-sm btn-outline-secondary ms-2">
                    <i className="bi bi-box-arrow-up me-1"></i> Export
                </button>
                </div>
               
            </div>
            <ResponsiveContainer width="100%" height={200}>
                <AreaChart
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend wrapperStyle={{ paddingTop: '10px' }} />
                    <Area type="monotone" dataKey="Transaction Count" stroke="#007bff" fill="#8884d8" fillOpacity={0.8} />
                    <Area type="monotone" dataKey="Transaction Value ($k)" stroke="#42b983" fill="#82ca9d" fillOpacity={0.4} />
                </AreaChart>
            </ResponsiveContainer>
        </div></div>
    );
};

export default RevenueTrendAnalysis;