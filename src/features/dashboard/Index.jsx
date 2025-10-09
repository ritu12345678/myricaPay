import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import DashboardOverviewTab from './dashboardOverviewTab/Index';
import TransactionTab from './transactionTab/Index';
import UserTab from './users/Index';
import ComplianceAndRiskTab from './ComplianeAndRisk/Index';
import AnalyticsTab from './analytics/Index';


const Dashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className='dashboard hide-tab-content mt-0'>
      {/* Tabs (just for headers) */}
      <TabView
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
      >
        <TabPanel header="Overview" />
        <TabPanel header="Transaction" />
        <TabPanel header="User" />
        <TabPanel header="Compliance" />
        <TabPanel header="Analytics" />
      </TabView>
      {/* Tab Content */}
      <div >
        {activeIndex === 0 && <DashboardOverviewTab />}
        {activeIndex === 1 && (
          <TransactionTab />
        )}
        {activeIndex === 2 && (
          <UserTab />
        )}
        {activeIndex === 3 && (
          <ComplianceAndRiskTab />
        )}
        {activeIndex === 4 && (
          <AnalyticsTab />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
