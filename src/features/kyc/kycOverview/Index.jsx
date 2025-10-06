import React from 'react'
import KycOverviewCardSection from './components/KycOverviewCardSection'
import ApproveAndRejectionRate from './components/ApproveAndRejectionRate'
import KycOverviewChart from './components/KycChart'

const KycOverviewTab = () => {
  return (
    <div className="px-3">
      <KycOverviewCardSection/>
      <ApproveAndRejectionRate/>
      <KycOverviewChart/>
    </div>
  )
}

export default KycOverviewTab
