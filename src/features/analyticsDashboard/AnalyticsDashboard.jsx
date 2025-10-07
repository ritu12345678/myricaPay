import React from 'react';
import FilterBar from './FilterBar';
import TransactionVolumeCard from './TransactionVolumeCard';
import HighValueTransactionsCard from './HighValueTransactionsCard';
import GeographicDistributionCard from './GeographicDistributionCard';
import ChannelBreakdownCard from './ChannelBreakdownCard';

const AnalyticsDashboard = () => {
  return (
    <div className="container-fluid">
      <FilterBar />

      <div className="row g-3">
        <div className="col-12 col-lg-8">
          <TransactionVolumeCard />
        </div>
        <div className="col-12 col-lg-4">
          <HighValueTransactionsCard />
        </div>
      </div>

      <div className="row g-3 mt-1">
        <div className="col-12 col-lg-8">
          <GeographicDistributionCard />
        </div>
        <div className="col-12 col-lg-4">
          <ChannelBreakdownCard />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
