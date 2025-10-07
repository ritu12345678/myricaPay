import React from "react";
import { StatCard } from "../../helpAndChat/components/StatCard";

const KPICardSection = () => {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
      <div className="col">
        <StatCard
          title="Total Transactions"
          value="24,583"
          trend="up"
          change={2.5}
          subtitle="vs last week"
          icon="bi bi-wallet2"
          iconBg="rgba(13,110,253,.1)"
          iconColor="#0d6efd"
        />
      </div>
      <div className="col">
        <StatCard
          title="Transaction Value"
          value="$1.2M"
          trend="up"
          change={8.5}
          subtitle="vs last week"
          icon="bi bi-currency-dollar"
          iconBg="rgba(25,135,84,.12)"
          iconColor="#198754"
        />
      </div>
      <div className="col">
        <StatCard
          title="Active Users"
          value="8,942"
          trend="up"
          change={5.2}
          subtitle="vs last week"
          icon="bi bi-people"
          iconBg="rgba(111,66,193,.12)"
          iconColor="#6f42c1"
        />
      </div>
      <div className="col">
        <StatCard
          title="Active Agents"
          value="1,254"
          trend="down"
          change={2.3}
          subtitle="vs last week"
          icon="bi bi-person-badge"
          iconBg="rgba(255,193,7,.15)"
          iconColor="#d39e00"
        />
      </div>
    </div>
  );
};

export default KPICardSection;
