import React from "react";
import MetricCard from "./MetricCard";

const StatsRow = () => {
  return (
    <div className="row g-3 mb-3">
      <div className="col-12 col-sm-6 col-lg-3">
        <MetricCard
          title="Total Transactions"
          value="24,583"
          iconClass="bi-receipt"
          iconBg="rgba(13,110,253,.08)"
          iconColor="#0d6efd"
          trendPercent={2.5}
          trendDirection="up"
          trendLabel="vs last week"
        />
      </div>
      <div className="col-12 col-sm-6 col-lg-3">
        <MetricCard
          title="Transaction Value"
          value="$1.2M"
          iconClass="bi-currency-dollar"
          iconBg="rgba(25,135,84,.1)"
          iconColor="#198754"
          trendPercent={8.3}
          trendDirection="up"
          trendLabel="vs last week"
        />
      </div>
      <div className="col-12 col-sm-6 col-lg-3">
        <MetricCard
          title="Active Users"
          value="8,842"
          iconClass="bi-people"
          iconBg="rgba(111,66,193,.1)"
          iconColor="#6f42c1"
          trendPercent={5.2}
          trendDirection="up"
          trendLabel="vs last week"
        />
      </div>
      <div className="col-12 col-sm-6 col-lg-3">
        <MetricCard
          title="Active Agents"
          value="1,254"
          iconClass="bi-person-badge"
          iconBg="rgba(255,193,7,.12)"
          iconColor="#fd7e14"
          trendPercent={2.3}
          trendDirection="down"
          trendLabel="vs last week"
        />
      </div>
    </div>
  );
};

export default StatsRow;
