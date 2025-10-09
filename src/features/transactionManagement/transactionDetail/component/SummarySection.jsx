import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const SummarySection = () => {
  return (
    <div className="row g-3 align-items-stretch">
      {/* Transaction Details */}
      <div className="col-md-4 d-flex">
        <div className="card flex-fill h-100">
          <div className="card-body">
            <p className="fs-14 text-lightgrey mb-1 text-uppercase">Transaction Details</p>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <p className="mb-0 fs-14 text-lightgrey">Amount</p>
                <h4 className="mb-2 text-blue-custom">$2,450.00</h4>
                <p className="mb-0 fs-14 text-lightgrey">Date</p>
                <h6 className="fs-18 text-lightgrey">Jul 28, 2023</h6>
              </div>
              <div className="pe-2">
                <p className="mb-0 fs-14 text-lightgrey">Type</p>
                <h5 className="mb-2 fw-bold fs-16">International</h5>
                <p className="mb-0 fs-14 text-lightgrey">Time</p>
                <h6 className="fs-18 text-lightgrey">14:32:45</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Parties */}
      <div className="col-md-4 d-flex">
        <div className="card flex-fill h-100">
          <div className="card-body">
            <h5 className="fs-14 text-lightgrey mb-1 text-uppercase">Parties</h5>
            <div className="mb-3">
              <p className="mb-0 fs-14 text-lightgrey">Sender</p>
              <h5 className="text-capitalize fs-16 fw-bold">John Smith</h5>
              <p className="mb-0 fs-14 text-lightgrey">ID: CUS-78945</p>
              <p className="mb-0 mt-2 fs-14 text-lightgrey">Receiver</p>
              <h5 className="text-capitalize fs-16 fw-bold">Maria Smith</h5>
              <p className="mb-0 fs-14 text-lightgrey">ID: CUS-78945</p>
            </div>
          </div>
        </div>
      </div>

      {/* Risk & Compliance */}
      <div className="col-md-4 d-flex">
        <div className="card flex-fill h-100">
          <div className="card-body">
            <h5 className="fs-14 text-lightgrey mb-1 text-uppercase">Risk & Compliances</h5>

            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="rounded-circle text-success bg-lightgreen d-flex align-items-center justify-content-center" style={{ width: 35, height: 35 }}>
                12
              </span>
              <div>
                <p className="mb-0 fs-14 text-lightgrey">Risk Score</p>
                <h5 className="fs-16 fw-bold text-success">Low Risk</h5>
              </div>
            </div>

            <div>
              <p className="mb-1 fs-14 text-lightgrey">Check Performed</p>
              <div className="d-flex flex-wrap gap-1">
                <span className="badge text-success bg-lightgreen">AML</span>
                <span className="badge text-success bg-lightgreen">KYC</span>
                <span className="badge text-success bg-lightgreen">Sanctions</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SummarySection;
