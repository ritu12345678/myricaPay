import React from 'react'
import OverviewCardSection from './component/OverviewCardSection'
import RoleBarChart from './component/RoleBarChartAndAlert'
import AdminActivityOverTime from './component/AdminActivityOverTime'
import RoleTable from './component/UserAssignedTable'
import UserAssignedTable from './component/UserAssignedTable'

const OverviewTab = () => {
  return (
    <div className='px-3'>
      <OverviewCardSection/>
      <RoleBarChart/>
      <AdminActivityOverTime/>
    <UserAssignedTable/>
    </div>
  )
}

export default OverviewTab
