// GeographicDistribution.jsx
import React from 'react';
import DashboardCard from '../../components/DashboardCard';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
  { country: 'USA', value: 750, color: '#0d47a1' }, // Darkest blue
  { country: 'Mexico', value: 600, color: '#1a73e8' },
  { country: 'Canada', value: 450, color: '#4285f4' },
  { country: 'UK', value: 300, color: '#8ab4f8' },
  { country: 'Nigeria', value: 150, color: '#c5dafb' }, // Lightest blue
];
const GeographicDistribution = () => {
  // To simulate the legend, we can create a simple bar chart or custom legend items
  const legendItems = data.map((item, index) => (
    <div key={index} className="d-flex align-items-center mb-1">
      <span className="d-inline-block rounded-pill me-2" style={{ width: '0.9375rem', height: '0.5rem', backgroundColor: item.color }}></span>
      <small className="text-muted me-1">{item.value}+</small> {/* Assuming value indicates density/volume */}
      <small className="text-muted">{item.country}</small>
    </div>
  ));

  return (
    <DashboardCard title="Geographic Distribution" className='flex-fill'>
      <div className="d-flex justify-content-center align-items-center bg-light p-4 mb-3 rounded" style={{ height: '200px', border: '1px solid #e9ecef' }}>
        {/* Placeholder for a map visualization */}
        <i className="bi bi-geo-alt-fill text-muted fs-1 me-2"></i>
        <span className="text-muted">Map Visualization Placeholder</span>
      </div>
      <div className="d-flex justify-content-around flex-wrap mt-3">
        {legendItems}
      </div>
    </DashboardCard>
  );
};

export default GeographicDistribution;