import React from 'react';

const data = {
  pending: { value: 245320, count: 42, color: '#0d6efd' }, // Primary blue
  processing: { value: 118750, count: 17, color: '#ffc107' }, // Warning yellow
  completed: { value: 892450, count: 156, color: '#198754' }, // Success green
};

const SettlementOverview = () => {
  return (
    <div className='card position-relative d-flex flex-column h-100'>
      <div className='card-body flex-grow-1'>
        <div className='d-flex align-items-center justify-content-between'>
          <h5>Settlement Overview</h5>
        </div>

        {/* Filter button */}
        <div className="position-absolute top-0 end-0 mt-3 me-3">
          <button className="btn btn-sm btn-outline-secondary">
            <i className="bi bi-funnel me-1"></i> Filter
          </button>
        </div>

        {/* Optional card content above */}
        <div className="mt-4">
          {/* You can put charts or other info here */}
        </div>
      </div>

      {/* Bottom row - stick to bottom */}
      <div className="d-flex justify-content-around text-center border-top p-3">
        <div className="px-2">
          <span className="d-block text-muted small fw-semibold">Pending</span>
          <span className="d-block fw-bold fs-5" style={{ color: data.pending.color }}>
            ${data.pending.value.toLocaleString()}
          </span>
          <span className="d-block text-muted small">{data.pending.count} settlements</span>
        </div>
        <div className="px-2 border-start border-end">
          <span className="d-block text-muted small fw-semibold">Processing</span>
          <span className="d-block fw-bold fs-5" style={{ color: data.processing.color }}>
            ${data.processing.value.toLocaleString()}
          </span>
          <span className="d-block text-muted small">{data.processing.count} settlements</span>
        </div>
        <div className="px-2">
          <span className="d-block text-muted small fw-semibold">Completed</span>
          <span className="d-block fw-bold fs-5" style={{ color: data.completed.color }}>
            ${data.completed.value.toLocaleString()}
          </span>
          <span className="d-block text-muted small">{data.completed.count} settlements</span>
        </div>
      </div>
    </div>
  );
};

export default SettlementOverview;
