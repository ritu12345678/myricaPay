import React from "react";

const GeographicDistributionCard = () => {
  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <div className="fs-6 fw-semibold">Geographic Distribution</div>
          <button className="btn btn-link btn-sm text-decoration-none">Export</button>
        </div>
        <div className="ratio ratio-16x9 bg-body-secondary rounded">
          <div className="d-flex align-items-center justify-content-center text-muted">
            Add your map component here
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeographicDistributionCard;
