import React from 'react';
import HeaderBar from './component/HeaderBar';
import SummarySection from './component/SummarySection';
import TransactionDataTab from './component/TransactionDetailCard';
import QuickActions from './component/QuickAction';
import RelatedTransactionTable from './component/RelatedTransactionTable';
import TransactionDetailsCard from './component/TransactionDetailCard';

// Ensure you've imported your Bootstrap CSS and PrimeReact theme in index.js/App.js

const TransactionDetail = () => {


  return (
    // Use standard Bootstrap container
    <div className="container py-4">


      <HeaderBar />

      <SummarySection />
      <TransactionDetailsCard/>
      <QuickActions/>
      <RelatedTransactionTable/>






    </div>
  );
};

export default TransactionDetail;