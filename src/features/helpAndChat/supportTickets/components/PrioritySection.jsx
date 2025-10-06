import Divider from '@mui/material/Divider';
import React from 'react';

const PrioritySection = ({ formData, updateFormData }) => {
  const baseStyle = {
    border: '2px solid',
    borderRadius: '6px',
    padding: '10px',
    textAlign: 'center',
    cursor: 'pointer',
    borderColor: '#e9ecef',
    transition: 'border-color 0.2s'
  };

  const getStyle = (priority, color) =>
    formData.priority === priority
      ? { borderColor: color, borderWidth: '3px' }
      : {};

  return (
    <div className='card mt-3'>
      <div className='card-body'>
        <h6 className="fw-bold fs-18 mb-3">Priority</h6>
        <Divider />
        <div className="d-flex gap-3 mt-3">
          {/* High */}
          <div
            className="flex-grow-1"
            style={{ ...baseStyle, ...getStyle('high', '#dc3545') }}
            onClick={() => updateFormData('priority', 'high')}
          >
            <i className="pi pi-exclamation-triangle text-danger me-2" style={{ fontSize: '1.2rem' }}></i>
            <span className="fw-bold">High</span>
          </div>
          {/* Medium */}
          <div
            className="flex-grow-1"
            style={{ ...baseStyle, ...getStyle('medium', '#fd7e14') }}
            onClick={() => updateFormData('priority', 'medium')}
          >
            <i className="pi pi-exclamation-circle text-warning me-2" style={{ fontSize: '1.2rem' }}></i>
            <span className="fw-bold">Medium</span>
          </div>
          {/* Low */}
          <div
            className="flex-grow-1"
            style={{ ...baseStyle, ...getStyle('low', '#198754') }}
            onClick={() => updateFormData('priority', 'low')}
          >
            <i className="pi pi-arrow-down text-success me-2" style={{ fontSize: '1.2rem' }}></i>
            <span className="fw-bold">Low</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrioritySection;
