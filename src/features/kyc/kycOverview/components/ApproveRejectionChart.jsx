import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// --- Sample Data ---
const data = [
  { name: 'Jan', Approved: 7500, Rejected: 4800 },
  { name: 'Feb', Approved: 8200, Rejected: 5300 },
  { name: 'Mar', Approved: 7900, Rejected: 5500 },
  { name: 'Apr', Approved: 9500, Rejected: 5400 },
  { name: 'May', Approved: 10200, Rejected: 6600 },
  { name: 'Jun', Approved: 9600, Rejected: 6000 },
  { name: 'Jul', Approved: 10500, Rejected: 6200 }, 
  { name: 'Aug', Approved: 11000, Rejected: 5800 }, 
  { name: 'Sept', Approved: 11500, Rejected: 5500 },
  { name: 'Oct', Approved: 11800, Rejected: 5400 },
  { name: 'Nov', Approved: 12200, Rejected: 5200 },
  { name: 'Dec', Approved: 12500, Rejected: 5000 },
];

// Custom Tooltip component (rem units)
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const approved = payload.find(p => p.dataKey === 'Approved');
    const rejected = payload.find(p => p.dataKey === 'Rejected');

    return (
      <div style={{ 
        backgroundColor: 'white', 
        padding: '0.625rem', 
        border: '0.0625rem solid #ccc', 
        borderRadius: '0.25rem', 
        boxShadow: '0 0.125rem 0.625rem rgba(0,0,0,0.1)'
      }}>
        <p className="label" style={{ fontWeight: 'bold' }}>{label}</p>
        <p style={{ color: approved.stroke }}>
          <span style={{ 
            display: 'inline-block', 
            width: '0.625rem', 
            height: '0.625rem', 
            backgroundColor: approved.stroke, 
            marginRight: '0.3125rem' 
          }}></span>
          {`${approved.name}: `}
          <span style={{ fontWeight: 'bold' }}>{approved.value.toLocaleString()}</span>
        </p>
        <p style={{ color: rejected.stroke }}>
          <span style={{ 
            display: 'inline-block', 
            width: '0.625rem', 
            height: '0.625rem', 
            backgroundColor: rejected.stroke, 
            marginRight: '0.3125rem' 
          }}></span>
          {`${rejected.name}: `}
          <span style={{ fontWeight: 'bold' }}>{rejected.value.toLocaleString()}</span>
        </p>
      </div>
    );
  }
  return null;
};


const ApprovalRejectionChart = ({ chartData = data }) => {
  const APPROVED_COLOR = '#3b82f6'; // Blue
  const REJECTED_COLOR = '#ef4444'; // Red

  // Function to format Y-axis ticks for thousands
  const formatYAxis = (tick) => {
    if (tick === 0) return 0;
    return `${(tick / 1000).toFixed(0)}k`;
  };
  
  // Recharts margins must be NUMERIC (pixels)
  const CHART_MARGINS = { top: 20, right: 30, left: 0, bottom: 5 };

  return (
 
    <div style={{ height: '25rem', width: '100%' }}> 
      
  
      <div className='d-flex align-items-center justify-content-between p-2 mb-2'>
        
        {/* Custom Heading */}
        <h5 className='m-0 fw-bold'>Approval/Rejection Trends</h5>
        
        {/* MANUAL LEGEND - styled with rem units */}
        <div className='d-flex align-items-center' style={{ fontSize: '0.875rem', gap: '0.9375rem' }}> 
          
          {/* Approved Legend Item */}
          <div className='d-flex align-items-center'>
            <span style={{ 
              display: 'inline-block', 
              width: '0.625rem', 
              height: '0.625rem', 
              backgroundColor: APPROVED_COLOR, 
              marginRight: '0.3125rem',
              borderRadius: '0.125rem' 
            }}></span>
            Approved
          </div>
          
          {/* Rejected Legend Item */}
          <div className='d-flex align-items-center'>
            <span style={{ 
              display: 'inline-block', 
              width: '0.625rem', 
              height: '0.625rem', 
              backgroundColor: REJECTED_COLOR, 
              marginRight: '0.3125rem',
              borderRadius: '0.125rem'
            }}></span>
            Rejected
          </div>
          
        </div>
      </div>
      
      {/* CHART CONTAINER */}
      {/* FIX: Set height to a percentage (e.g., 85%) of the parent to accommodate the header. */}
      <ResponsiveContainer width="100%" height="85%"> 
        <AreaChart
          data={chartData}
          margin={CHART_MARGINS} 
        >
          <CartesianGrid stroke="#e0e0e0" strokeDasharray="3 3" vertical={false} />
          
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          
          <YAxis 
            tickFormatter={formatYAxis} 
            axisLine={false} 
            tickLine={false} 
            domain={[0, 14000]}
          />
          
          <Tooltip content={<CustomTooltip />} />
  
          {/* Approved Rate Area */}
          <Area
            type="monotone"
            dataKey="Approved"
            stroke={APPROVED_COLOR}
            strokeWidth={3}
            fill={APPROVED_COLOR}
            fillOpacity={0.1}
          />
          
          {/* Rejected Rate Area */}
          <Area
            type="monotone"
            dataKey="Rejected"
            stroke={REJECTED_COLOR}
            strokeWidth={3}
            fill={REJECTED_COLOR}
            fillOpacity={0.1}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ApprovalRejectionChart;