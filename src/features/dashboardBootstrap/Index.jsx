import React from "react";
import "./dashboard.scss";
import FilterBar from "./FilterBar";
import TransactionVolumeCard from "./TransactionVolumeCard";
import HighValueTransactionsCard from "./HighValueTransactionsCard";
import GeographicDistributionCard from "./GeographicDistributionCard";
import ChannelBreakdownCard from "./ChannelBreakdownCard";

const DashboardBootstrap = () => {
  return (
    <div className="container-fluid dashboard-bootstrap py-3">
      {/* Filters Row */}
      <div className="row g-3 mb-3">
        <div className="col-12">
          <FilterBar />
        </div>
      </div>

      {/* Main Content Row */}
      <div className="row g-3">
        <div className="col-lg-8">
          <TransactionVolumeCard />
        </div>
        <div className="col-lg-4">
          <HighValueTransactionsCard />
        </div>
      </div>

      {/* Secondary Row */}
      <div className="row g-3 mt-1">
        <div className="col-lg-8">
          <GeographicDistributionCard />
        </div>
        <div className="col-lg-4">
          <ChannelBreakdownCard />
        </div>
      </div>
    </div>
  );
};

export default DashboardBootstrap;
