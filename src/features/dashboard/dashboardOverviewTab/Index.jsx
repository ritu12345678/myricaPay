import React from 'react'
import OverviewCardSection from './components/OverviewCardSection'
import AlertAndQuickAction from './components/AlertAndQuickAction'

import VolumeAndRiskSection from './components/VolumeAndRiskSection'
import RiskTransactionAndComplianceCases from './components/RecentTransactionAndComplianceCase'
import TopPerformingAgentsAndSettlement from './components/SettlementAndTopPerformingAgents'

const DashboardOverviewTab = () => {
  return (
    <div className='px-3'>
      <OverviewCardSection/>
      <AlertAndQuickAction/>
   <VolumeAndRiskSection/>
   <RiskTransactionAndComplianceCases/>
   <TopPerformingAgentsAndSettlement/>
    </div>
  )
}

export default DashboardOverviewTab
