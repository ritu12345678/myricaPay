import React from 'react';
import Divider from '@mui/material/Divider';

const AddBroadcastStatus = ({ formData, updateFormData }) => {
  const baseStyle = {
    border: '2px solid',
    borderRadius: '6px',
    padding: '10px',
    textAlign: 'center',
    cursor: 'pointer',
    borderColor: '#e9ecef',
    transition: 'border-color 0.2s',
  };

  const getStyle = (status, color) =>
    formData.status === status
      ? { borderColor: color, borderWidth: '3px' }
      : {};

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h6 className="fw-bold fs-18 mb-3">Status</h6>
        <Divider />
        <div className="d-flex gap-3 mt-3">
          {/* Active */}
          <div
            className="flex-grow-1"
            style={{ ...baseStyle, ...getStyle('active', '#198754') }}
            onClick={() => updateFormData('status', 'active')}
          >
            <i
              className="pi pi-check text-success me-2"
              style={{ fontSize: '1.2rem' }}
            ></i>
            <span className="fw-bold">Active</span>
          </div>
          {/* Done */}
          <div
            className="flex-grow-1"
            style={{ ...baseStyle, ...getStyle('done', '#6c757d') }}
            onClick={() => updateFormData('status', 'done')}
          >
            <i
              className="pi pi-times text-secondary me-2"
              style={{ fontSize: '1.2rem' }}
            ></i>
            <span className="fw-bold">Done</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBroadcastStatus;
