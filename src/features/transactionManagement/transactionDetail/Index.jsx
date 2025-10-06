import React from 'react';
import HeaderBar from './component/HeaderBar';
import SummarySection from './component/SummarySection';
import TransactionDataTab from './component/TransactionDataTab';

// Ensure you've imported your Bootstrap CSS and PrimeReact theme in index.js/App.js

const TransactionDetail = () => {
  const transactionData = {
    id: 'TRX-2023-07-28-00134',
    status: 'Completed',
    // ... all other data
  };

  return (
    // Use standard Bootstrap container
    <div className="container py-4"> 
      <div className="card shadow-sm">
        <div className="card-body">
          
          <HeaderBar data={transactionData} />

          <SummarySection data={transactionData} />

          <hr className="my-4" />
          
          {/* <TransactionDataTabs data={transactionData} /> */}
          <TransactionDataTab data={transactionData}/>

        </div>
      </div>
    </div>
  );
};

export default TransactionDetail;