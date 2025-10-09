import React from 'react';
import PaymentInformationTable from './PaymentInformationTable';

const TransactionDetailsCard = () => {
  // Mock data for the component
  const transactionData = {
    id: "TRX-2023-07-28-00134",
    type: "International Wire Transfer",
    status: "Completed",
    amount: "2,450.00 USD",
    exchangeRate: "1 USD = 0.92 EUR",
    dateInitiated: "Jul 28, 2023 14:32:45 UTC",
    dateCompleted: "Jul 28, 2023 14:45:12 UTC",
    processingAgent: "Global Transfer Services",
    corridor: "USA -> Spain",
    transactionFee: "25.00 USD",
  };

  const senderData = {
    fullName: "John Smith",
    customerID: "CUS-78945",
    phone: "+1 (555) 123-4567",
    email: "john.smith@example.com",
    address: "123 Main St, New York, NY 10001, USA",
    accountType: "Personal",
  };
// const DetailRow = ({ label, value }) => (
//   <div className="row mb-2">
//     <div className="col-5">
//       <small className="text-muted text-lightgrey fw-400">{label}</small>
//     </div>
//     <div className="col-7">
//       <p className="fw-600 fs-16 mb-0">{value}</p>
//     </div>
//   </div>
// );
  const DetailRow = ({ label, value }) => (
  // Use a single div for the content, removing the 'row' and 'col-*'
  // for the internal label/value structure.
  <div className="mb-3"> 
    {/* Heading (Label) - Now takes full width and stacks */}
    <div className="">
       <small className="text-muted text-lightgrey fw-400">{label}</small>
    </div>
    
    {/* Value - Now takes full width and stacks directly below the label */}
    <div className="fw-normal">
      <p className="fw-600 fs-16 mb-0">{value}</p>
    </div>
  </div>
);
return (
    <div className="card p-4 mt-3">
      <div className='card-body'>
  
      <h4 className="mb-4 text-blue-custom fs-18 fw-700">Transaction Details</h4>
      <div className="row mb-5">
     
        <div className="col-md-6">
          <DetailRow label="Transaction ID" value={transactionData.id} />
          <DetailRow label="Transaction Type" value={transactionData.type} />
          <DetailRow label="Status" value={<span className="text-success fw-bold">{transactionData.status}</span>} />
          <DetailRow label="Amount" value={transactionData.amount} />
          <DetailRow label="Exchange Rate" value={transactionData.exchangeRate} />
        </div>


        <div className="col-md-6">
          <DetailRow label="Date Initiated" value={transactionData.dateInitiated} />
          <DetailRow label="Date Completed" value={transactionData.dateCompleted} />
          <DetailRow label="Processing Agent" value={transactionData.processingAgent} />
          <DetailRow label="Corridor" value={transactionData.corridor} />
          <DetailRow label="Transaction Fee" value={transactionData.transactionFee} />
        </div>
      </div>


      <h4 className="mb-4 text-blue-custom fs-18 fw-700">Sender Information</h4>
      <div className="row mb-5">
        {/* Left Column */}
        <div className="col-md-6">
          <DetailRow label="Full Name" value={senderData.fullName} />
          <DetailRow label="Customer ID" value={senderData.customerID} />
          <DetailRow label="Phone" value={senderData.phone} />
        </div>

        {/* Right Column */}
        <div className="col-md-6">
          <DetailRow label="Email" value={senderData.email} />
          <DetailRow label="Address" value={senderData.address} />
          <DetailRow label="Account Type" value={senderData.accountType} />
        </div>
      </div>

      {/* ----------------- Receiver Information Section ----------------- */}
      <h4 className="mb-4 text-blue-custom fs-18 fw-700">Receiver Information</h4>
       <div className="row mb-5">
        {/* Left Column */}
        <div className="col-md-6">
          <DetailRow label="Full Name" value={senderData.fullName} />
          <DetailRow label="Customer ID" value={senderData.customerID} />
          <DetailRow label="Phone" value={senderData.phone} />
        </div>

        {/* Right Column */}
        <div className="col-md-6">
          <DetailRow label="Email" value={senderData.email} />
          <DetailRow label="Address" value={senderData.address} />
          <DetailRow label="Account Type" value={senderData.accountType} />
        </div>
      </div>
      <h4 className="mb-4 text-blue-custom fs-18 fw-700">Payment Information</h4>
      <PaymentInformationTable/>
</div>
    </div>
  );
};




export default TransactionDetailsCard;