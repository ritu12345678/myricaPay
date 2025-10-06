import React from 'react'
import InfoCard from './component/InfoCard'
import ReportDetailFilter from './component/ReportDetailFilter'
import TransactionVolumeAndKeymatrics from './component/TransactionVolumeAndKeymatrics'
import TransactionTable from './component/TransactionTable.jsx'
import ReportHistoryAuditlog from './component/ReportHistoryAuditlog.jsx'

const ReportDetail = () => {
  return (
    <div>
      <InfoCard/>
      <ReportDetailFilter/>
      <TransactionVolumeAndKeymatrics/>
      <TransactionTable/>
      <ReportHistoryAuditlog/>
    </div>
  )
}

export default ReportDetail
