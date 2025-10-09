import React from 'react';
import DashboardHeading from '../components/DasboardHeading';
import FilterSection from './components/FilterSection';
import AnalyticsCardSection from './components/AnalyticsCardSection';
import RevenueTrendAnalysis from './components/RevenueTrendAnalysis';
import DashboardCard from "../components/DashboardCard";
import GeographicPerformance from './components/GeographicPerformance';

const AnalyticsTab = () => {
  return (
    <div className='px-3'>
      <DashboardHeading
        title="Advanced Analytics & Insights"
        content="Comprehensive analytics dashboard with predictive insights, trend analysis, and performance metrics."
      />
      <FilterSection />
      <AnalyticsCardSection />

      <div className="row mt-3 d-flex align-items-stretch ">
        <div className="col-md-8 d-flex ">
          <RevenueTrendAnalysis  />
        </div>
        <div className="col-md-4 d-flex">
          <DashboardCard title="Geographic Performance" className="flex-fill">
            <GeographicPerformance />
          </DashboardCard>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsTab;
