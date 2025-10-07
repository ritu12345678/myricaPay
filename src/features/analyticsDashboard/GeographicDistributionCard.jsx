import React from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ZAxis } from 'recharts';

// Fake lat/long density points to mimic a world distribution
const geoData = [
  { name: 'USA', lng: -100, lat: 40, value: 120 },
  { name: 'Mexico', lng: -102, lat: 23, value: 80 },
  { name: 'UK', lng: -2, lat: 54, value: 70 },
  { name: 'Nigeria', lng: 8, lat: 9, value: 60 },
  { name: 'India', lng: 78, lat: 22, value: 90 },
  { name: 'Pakistan', lng: 70, lat: 30, value: 65 },
  { name: 'UAE', lng: 54, lat: 24, value: 50 },
  { name: 'China', lng: 104, lat: 35, value: 85 },
  { name: 'Brazil', lng: -51, lat: -10, value: 55 },
];

const GeographicDistributionCard = () => {
  return (
    <div className="bg-white border rounded-3 p-3 h-100">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <div className="fw-semibold text-dark">Geographic Distribution</div>
        <button className="btn btn-link text-decoration-none text-secondary p-0" title="Export"><i className="bi bi-box-arrow-up-right"/></button>
      </div>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <ScatterChart margin={{ top: 10, right: 10, bottom: 10, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" dataKey="lng" name="Longitude" domain={[-180, 180]} hide />
            <YAxis type="number" dataKey="lat" name="Latitude" domain={[-90, 90]} hide />
            <ZAxis type="number" dataKey="value" range={[40, 200]} name="Volume" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} formatter={(value, name, props) => [props.payload.name, '']} />
            <Scatter data={geoData} fill="#0d6efd" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
      <div className="text-secondary small mt-2">Note: Simplified geographic scatter using Recharts.</div>
    </div>
  );
};

export default GeographicDistributionCard;
