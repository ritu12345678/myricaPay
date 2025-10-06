import React from 'react';

const RowItem = ({ label, value }) => (
  // Use a row for each item
  <div className="row mb-2">
    <div className="col-5 text-muted"> {/* col-5 for label */}
      {label}
    </div>
    <div className="col-7 fw-normal"> 
      {value}
    </div>
  </div>
);

const SectionTitle = ({ title }) => (
  <h3 className="h5 text-secondary mt-5 mb-3">{title}</h3>
);

const TransactionDataTab = ({ data }) => {
  return (
    <div className="p-3">


      <SectionTitle title="Transaction Details" />
      <div className="row">
        <div className="col-md-6">
          <RowItem label="Transaction ID" value="TRX-2023-07-28-00134" />

        </div>
        <div className="col-md-6">
          <RowItem label="Date Initiated" value="Jul 28, 2023 14:32:45 UTC" />

        </div>
      </div>

      <hr className="my-4" />

      <SectionTitle title="Sender Information" />
      <div className="row">
        <div className="col-md-6">
          <RowItem label="Full Name" value="John Smith" />
       
        </div>
        <div className="col-md-6">
          <RowItem label="Email" value="john.smith@example.com" />
        
        </div>
      </div>

    </div>
  );
};

export default TransactionDataTab;