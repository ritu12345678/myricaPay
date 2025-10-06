import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine 
} from 'recharts';

// Import your SCSS file
import './../../../../style/kyc-chart.scss' // Your specified path

// --- Sample Data ---
const chartData = [
  { name: 'Mar, 2024', KYC: 1000 },
  { name: 'Apr, 2024', KYC: 7800 },
  { name: 'May, 2024', KYC: 2500 },
  { name: 'Jun, 2024', KYC: 12300 },
  { name: 'Jul, 2024', KYC: 12300 },
  { name: 'Aug, 2024', KYC: 10000 }, 
  { name: 'Sep, 2024', KYC: 8000 },
  { name: 'Oct, 2024', KYC: 5300 },
  { name: 'Nov, 2024', KYC: 10000 },
  { name: 'Dec, 2024', KYC: 10000 },
  { name: 'Jan, 2025', KYC: 12300 },
  { name: 'Feb, 2025', KYC: 12300 },
];

// --- Custom Tooltip Component ---
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const kycValue = payload[0]; 

    return (
      <div className="kyc-custom-tooltip">
        <p className="tooltip-month">{label}</p>
        <p className="tooltip-value d-flex align-items-center">
          <span className="color-dot" style={{ backgroundColor: kycValue.stroke }}></span>
          {`${kycValue.dataKey}: `}
          <span className="value-label ms-1">{kycValue.value.toLocaleString()}</span>
        </p>
      </div>
    );
  }
  return null;
};


const KycOverviewChart = () => {
  const [selectedPeriod, setSelectedPeriod] = useState({ name: 'Monthly', code: 'monthly' });
  const periods = [
    { name: 'Daily', code: 'daily' },
    { name: 'Weekly', code: 'weekly' },
    { name: 'Monthly', code: 'monthly' },
    { name: 'Yearly', code: 'yearly' },
  ];

  const KYC_COLOR = '#22c55e'; // Green
  const HIGHLIGHT_MONTH_NAME = 'Aug, 2024'; 

  const formatYAxis = (tick) => {
    if (tick === 0) return 0;
    return `${(tick / 1000).toFixed(0)}k`;
  };

  return (
    // We keep the card class and d-flex/flex-column for vertical stacking
    <div className="kyc-chart-card d-flex flex-column mt-3">
      
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="kyc-chart-title">Pending KYCs Over Time</h3>
        <Dropdown 
          value={selectedPeriod} 
          onChange={(e) => setSelectedPeriod(e.value)} 
          options={periods} 
          optionLabel="name" 
          placeholder="Select a Period" 
          className="p-dropdown-sm" 
        />
      </div>

      {/* Metrics Section */}
      <div className="mb-4">
        <p className="kyc-total-value fw-bold mb-1">1,234</p>
        
        <div className="kyc-percentage-change d-flex align-items-center">
          <i className="pi pi-arrow-up"></i> 
          <span className="fw-semibold">9.5%</span> 
          <span className="kyc-muted-text text-muted">from last month</span>
        </div>
      </div>

      {/* Chart Section - NOW USES FIXED HEIGHT CLASS */}
      <div className="kyc-chart-area"> 
        {/* ResponsiveContainer height is set to 100% of its parent's fixed height */}
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            // Recharts margins must be numeric (pixels)
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }} 
          >
            <CartesianGrid stroke="#e0e0e0" strokeDasharray="3 3" vertical={false} />
            
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            
            <YAxis 
              tickFormatter={formatYAxis} 
              axisLine={false} 
              tickLine={false} 
              domain={[0, 15000]} 
            />
            
            <Tooltip content={<CustomTooltip />} />
            
            <Area
              type="monotone"
              dataKey="KYC"
              stroke={KYC_COLOR}
              strokeWidth={2} 
              fill={KYC_COLOR}
              fillOpacity={0.15} 
            />

            <ReferenceLine x={HIGHLIGHT_MONTH_NAME} stroke="#adb5bd" strokeDasharray="4 4" />
          
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default KycOverviewChart;