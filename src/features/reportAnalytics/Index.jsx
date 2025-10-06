import React from 'react'
import ReportAnalyticsFilterSection from './component/ReportAnalyticsFilterSection'
import ReportTable from './component/AvailableReport'

const ReportAnalytics = () => {
  return (
    <div>
      <ReportAnalyticsFilterSection/>
      <ReportTable/>
    </div>
  )
}

export default ReportAnalytics
