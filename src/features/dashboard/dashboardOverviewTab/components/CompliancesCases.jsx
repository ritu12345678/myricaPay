// ComplianceCases.jsx
import React from 'react';
const cases = [
    {
        type: 'High-Risk Transaction',
        status: 'Critical',
        caseId: 'PC-4521',
        opened: '2 hours ago',
        description: 'Multiple large transactions from the same sender to different recipients within 24 hours.',
        actions: ['Review', 'Assign'],
        severityColor: 'danger', // Bootstrap color class
        iconClass: 'bi bi-exclamation-triangle-fill',
    },
    {
        type: 'KYC Verification',
        status: 'Medium',
        caseId: 'PC-4520',
        opened: '5 hours ago',
        description: 'Agent submitted documents for verification. Requires manual review of business registration.',
        actions: ['Verify', 'Request Info'],
        severityColor: 'warning', // Bootstrap color class
        iconClass: 'bi bi-person-check-fill',
    },
    {
        type: 'Address Change',
        status: 'Low',
        caseId: 'PC-4519',
        opened: '1 day ago',
        description: 'User updated their address information. Requires validation against provided proof of address.',
        actions: ['Approve', 'Reject'],
        severityColor: 'info', // Bootstrap color class
        iconClass: 'bi bi-house-fill',
    },
];

const ComplianceCases = () => {
    const getSeverityClass = (status) => {
        switch (status) {
            case 'Critical': return 'text-danger';
            case 'Medium': return 'text-warning';
            case 'Low': return 'text-info';
            default: return 'text-secondary';
        }
    };

    const getBadgeClass = (status) => {
        switch (status) {
            case 'Critical': return 'bg-danger-subtle text-danger';
            case 'Medium': return 'bg-warning-subtle text-warning';
            case 'Low': return 'bg-info-subtle text-info';
            default: return 'bg-light text-secondary';
        }
    };

    return (
        <div className='card flex-grow-1'>
            <div className='card-body'>
                <div className='d-flex align-items-center justify-content-between'>
                    <h5>
                        Compliance Cases
                    </h5>
                    <h6 className='text-blue-custom'>View All</h6>
                </div>
                {cases.map((caseItem, index) => (
                    <div key={index} className={`border rounded p-3 mb-3 ${index < cases.length - 1 ? 'mb-3' : ''}`}>
                        <div className="d-flex align-items-start mb-2">
                            <i className={`${caseItem.iconClass} ${getSeverityClass(caseItem.status)} fs-4 me-3`}></i>
                            <div>
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <h6 className="mb-0 fw-bold">{caseItem.type}</h6>
                                    <span className={`badge ${getBadgeClass(caseItem.status)} fw-semibold rounded-pill px-3 py-2`}>
                                        {caseItem.status}
                                    </span>
                                </div>
                                <small className="text-muted">Case {caseItem.caseId} &bull; Opened {caseItem.opened}</small>
                            </div>
                        </div>
                        <p className="text-muted small mb-3">{caseItem.description}</p>
                        <div className="d-flex gap-2">
                            {caseItem.actions.map((action, actionIndex) => (
                                <button key={actionIndex} className={`btn btn-sm ${action === 'Review' || action === 'Verify' || action === 'Approve' ? 'btn-primary' : 'btn-outline-secondary'}`}>
                                    {action}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ComplianceCases;