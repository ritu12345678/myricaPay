import Divider from '@mui/material/Divider';
import React from 'react';

const StatusSection = ({ formData, updateFormData }) => {
    const statusButtonBaseStyle = {
        border: '2px solid',
        borderRadius: '4px',
        padding: '10px',
        textAlign: 'center',
        cursor: 'pointer',
        borderColor: '#e9ecef', // light gray border
        transition: 'border-color 0.15s',
    };

    const activeSelectedStyle =
        formData.status === 'active' ? { borderColor: '#198754', borderWidth: '3px' } : {};
    const inactiveSelectedStyle =
        formData.status === 'inactive' ? { borderColor: '#dc3545', borderWidth: '3px' } : {};

    return (
        <div className='card mt-3 canvas-footer'>
            <div className='card-body'>
                <h6 className="fw-bold fs-18 mb-3">Corridor Status</h6>
                <Divider />
                <div className="mb-4">

                    <div className="d-flex gap-3">
                        {/* Active Button */}
                        <div
                            className="flex-grow-1"
                            style={{ ...statusButtonBaseStyle, ...activeSelectedStyle }}
                            onClick={() => updateFormData('status', 'active')}
                        >
                            <i
                                className="pi pi-check-circle text-success me-2"
                                style={{ fontSize: '1.2rem' }}
                            ></i>
                            <span className="fw-bold">Active</span>
                        </div>

                        {/* Inactive Button */}
                        <div
                            className="flex-grow-1"
                            style={{ ...statusButtonBaseStyle, ...inactiveSelectedStyle }}
                            onClick={() => updateFormData('status', 'inactive')}
                        >
                            <i
                                className="pi pi-times-circle text-danger me-2"
                                style={{ fontSize: '1.2rem' }}
                            ></i>
                            <span className="fw-bold">Inactive</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

// ✅ Export at the end
export default StatusSection;
