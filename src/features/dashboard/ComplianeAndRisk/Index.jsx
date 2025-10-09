import React from 'react'
import DashboardHeading from '../components/DasboardHeading'
import FilterSection from './components/FilterSection'
import ComplianceCardSection from './components/ComplianceRiskCardSection'
import HighRiskAlerts from './components/HighRiskAlerts'


const ComplianceAndRiskTab = () => {
  return (
    <div className='px-3'>
      <DashboardHeading title="Compliance & Risk Analytics" content="Monitor compliance metrics, risk assessments, and regulatory requirements across all transactions." />
      <FilterSection />
      <ComplianceCardSection />
      <HighRiskAlerts />
    </div>
  )
}

export default ComplianceAndRiskTab
