// DashboardCard.jsx
import React from 'react';

const DashboardCard = ({ title, viewAllLink, children, className = '', showExport = true }) => {
  return (
    <div className={`card  ${className}`}>
      <div className="card-body p-3">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0 fs-5 ">{title}</h5>
          {showExport && ( // Conditionally render Export button
         <div className="d-flex align-items-center cursor-pointer">
    <i className="bi bi-box-arrow-up text-blue-custom me-1"></i>
    <span className="text-blue-custom fw-700 mt-1">Export</span>
  </div>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default DashboardCard;