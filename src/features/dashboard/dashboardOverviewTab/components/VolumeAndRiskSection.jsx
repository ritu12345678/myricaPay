import React from 'react';
import VolumeValueChart from './VolumeValueChart';
import RiskScoreChart from './RiskScoreChart';

const VolumeAndRiskSection = () => {
  return (
    <div className="mt-3  ">
      
      {/* --- Top Row: Transaction Volume & Value --- */}
      <div className="row">
        <div className="col-md-12">
          <VolumeValueChart  />
        </div>
      </div>

      {/* --- Bottom Row: Transaction Corridors & Risk Score --- */}
      <div className="row mt-3">
        
        {/* Transaction Corridors (Placeholder) */}
        <div className="col-md-6 mb-3">
          <div className="card  h-100">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="card-title mb-0 fs-5">Transaction Corridors</h5>
                <button type="button" className="btn btn-sm btn-outline-secondary">
                  <i className="bi bi-funnel"></i> Filter
                </button>
              </div>
              {/* Placeholder Content to fill space */}
              <div className="text-muted text-center py-5">
                <p>Content for Transaction Corridors chart goes here.</p>
                <p>(A complex table or another chart, not specified in detail.)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Score Distribution */}
        <div className="col-lg-6 mb-3">
          <RiskScoreChart  />
        </div>
      </div>
    </div>
  );
};

export default VolumeAndRiskSection;