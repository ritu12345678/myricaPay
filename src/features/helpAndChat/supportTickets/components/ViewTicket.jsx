import React from 'react';
import { Divider } from '@mui/material';

const priorityColors = {
  High: '#FF4C4C',
  Medium: '#FFA500',
  Low: '#4CAF50',
};

const ViewTicket = () => {
  const LABEL_WIDTH = 150; // fixed width for all labels

  const renderRow = (label, value, chipType = null) => (
    <div className="d-flex align-items-center py-1">
      <p
        className="mb-0 fs-6 fw-medium text-muted text-capitalize"
        style={{ width: `${LABEL_WIDTH}px` }}
      >
        {label}
      </p>
      {chipType ? (
        <span
          className="px-2 py-1 rounded text-white d-inline-flex align-items-center"
          style={{
            backgroundColor: priorityColors[chipType],
            fontSize: '12px',
            fontWeight: 500,
            gap: '5px',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#fff',
              display: 'inline-block',
            }}
          />
          {chipType}
        </span>
      ) : (
        <p className="mb-0 fs-6">{value}</p>
      )}
    </div>
  );

  return (
    <div className="card p-2">
      <div className="card-body p-2">

        {/* User Info Section */}
        <h6 className="fw-bold fs-5 mb-2">User Info</h6>
        <Divider />
        {renderRow('Name', 'Tashan Khan')}
        {renderRow('Email', 'tashan.khan@email.com')}
        {renderRow('ID', 'TCK-9012')}

        {/* Ticket Detail Section */}
        <h6 className="fw-bold fs-5 mb-2 mt-3">Ticket Detail</h6>
        <Divider />
        {renderRow('Issue', 'Payment issue')}
        {renderRow('Priority', '', 'High')}
        {renderRow('Status', 'Open')}
        {renderRow('Agent', 'Agent Priya')}

        {/* Timeline Section */}
        <h6 className="fw-bold fs-5 mb-2 mt-3">Timeline</h6>
        <Divider />
        {renderRow('Created', '24 Aug, 10:30 AM (Agent Priya)')}
        {renderRow('Update', '24 Aug, 12:00 PM → "Payment under review"')}
        {renderRow('Resolution', '', 'Medium')}
        {renderRow('Internal Notes:', '')}
        <p
          className="mb-0 fs-14 fw-500 text-muted text-capitalize"

        >
          Priya → Checked UPI logs, txn ID missing in system.
        </p>
       <p
          className="mb-0 fs-14 fw-500 text-muted text-capitalize"

        >
          Raj → Suggested escalating to payments team.
        </p>
     
      </div>

    </div>
  );
};

export default ViewTicket;
