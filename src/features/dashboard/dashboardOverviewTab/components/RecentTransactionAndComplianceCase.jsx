import React from 'react'
import RecentTransactionTable from './RecentTransactionTable'
import ComplianceCases from './CompliancesCases'
const RecentTransactionAndComplianceCase = () => {
  return (
 
  <div className="row d-flex align-items-stretch">
    <div className="col-6  d-flex flex-column ">
      <RecentTransactionTable />
    </div>

    <div className="col-6  d-flex flex-column">
      <ComplianceCases />
    </div>
  </div>

  )
}

export default RecentTransactionAndComplianceCase

