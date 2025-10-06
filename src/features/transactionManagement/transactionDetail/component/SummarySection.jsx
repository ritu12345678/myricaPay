import React from 'react';


const DetailItem = ({ label, value }) => (
  <div className="mb-2">
    <div className="text-muted small">{label}</div>
    <div className="fw-bold">{value}</div> 
  </div>
);

const SummarySection = ({ data }) => {
  return (
   
    <div className="row my-4"> 
      
      {/* 1. TRANSACTION DETAILS */}
      <div className="col-md-4"> {/* Replaced <Col md={4}> with <div> and class="col-md-4" */}
        <h2 className="text-secondary small fw-bold mb-3">TRANSACTION DETAILS</h2>
        <DetailItem label="Amount" value="$2,450.00" />
        <DetailItem label="Date" value="Jul 28, 2023" />
        <DetailItem label="Type" value="International" />
        <DetailItem label="Time" value="14:32:45 UTC" />
      </div>

      {/* 2. PARTIES */}
      <div className="col-md-4">
        <h2 className="text-secondary small fw-bold mb-3">PARTIES</h2>
        <DetailItem label="Sender" value="John Smith" />
        <DetailItem label="Receiver" value="Maria Garcia" />
      </div>

      {/* 3. RISK & COMPLIANCE */}
      <div className="col-md-4">
        <div className="border border-warning bg-warning bg-opacity-10 p-3 rounded">
          <h2 className="text-secondary small fw-bold mb-3">RISK & COMPLIANCE</h2>
          <div className="d-flex align-items-baseline mb-3">
            <span className="h1 text-success me-2 fw-bold">12</span>
            <span className="h5 text-success">Low Risk</span>
          </div>
          <p className="text-muted small mb-2">Checks Performed:</p>
          <div className="d-flex flex-wrap">
            <span className="badge bg-success me-2 mb-1">AML</span>
            <span className="badge bg-success me-2 mb-1">KYC</span>
            <span className="badge bg-success me-2 mb-1">Sanctions</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummarySection;