import React from 'react'
import CustomCard from '../../components/CustomCard'
import mail from "../../assets/mail.png"
import TransactionCard from './component/TransactionCardSection'
import TransactionFilterSection from './component/TransactionFilterSection'
import TransactionTable from './component/TransactionTable'
import ComplianceRiskMonitoring from './component/ComplianceRiskMonitoring'
import AuditReporting from './component/AuditReportingandFraud'
const TransactionManagement = () => {
  return (
<>
<section>
    <TransactionCard/>
    <TransactionFilterSection/>
    <TransactionTable/>
    <ComplianceRiskMonitoring/>
    <AuditReporting/>
</section>
</>
  )
}

export default TransactionManagement
