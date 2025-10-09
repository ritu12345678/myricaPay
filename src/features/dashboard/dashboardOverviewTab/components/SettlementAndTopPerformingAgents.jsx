import React from 'react'

import TopPerformingAgents from './TopPerformingAgents'
import SettlementOverview from './SettlementOverview'
const TopPerformingAgentsAndSettlement = () => {
  return (

  <div className="row d-flex align-items-stretch mt-2">
    <div className="col-6  d-flex flex-column ">
     <TopPerformingAgents/>
    </div>

    <div className="col-6  d-flex flex-column">
      <SettlementOverview/>
    </div>
  </div>

  )
}

export default TopPerformingAgentsAndSettlement

