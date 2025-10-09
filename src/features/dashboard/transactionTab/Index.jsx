import React from 'react'
import DashboardHeading from '../components/DasboardHeading'
import FilterBar from './components/FilterBar'
import TransactionVolumeChart from './components/TransactionVolumeChart'
import HighValueTransactionsList from './components/HighValueTransactionCard'
import GeographicDistribution from './components/GeographicDistribution'
import ChannelBreakdownChart from './components/ChannelBreakDown'
import RiskWeightedAnalysisChart from './components/RiskWeightedAnalysis'

const TransactionTab = () => {
  return (
    <div className='px-3'>
      <DashboardHeading title={"Active Transactions"}
        content="Monitor and analyze real-time transaction data across all corridors and business lines." />
      <div className='row mb-3 mt-2 d-flex align-items-stretch '>
        <div className='col-md-8 d-flex'>
          <TransactionVolumeChart />
        </div>
        <div className='col-md-4 d-flex'>
          <HighValueTransactionsList />
        </div>
      </div>
      <div className='row mb-3 d-flex align-items-stretch'>
        <div className='col-md-6 d-flex'>

          <GeographicDistribution />

        </div>
        <div className='col-md-6 d-flex'>

          <ChannelBreakdownChart />

        </div>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <RiskWeightedAnalysisChart />

        </div>
      </div>
    </div>
  )
}

export default TransactionTab
