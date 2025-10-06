import React from 'react'
import HighlightBorderWrapper from '../../components/HighLightBorderWrapper'
import AlertCard from './component/AlertCard'
import QuickAction from './component/QuickAction'
import ComplianceFilterSection from './component/ComplianceFilterSection'
import ComplianceModuleTable from './component/ComplainceSecurityTable'

const ComplianceSecurity = () => {
    return (
        <section className='compliance-security'>
             <HighlightBorderWrapper children={<AlertCard />} borderColor={"#EF4444"} backgroundColor='#ffe4e1' />

            <QuickAction />
            <ComplianceFilterSection />
            <ComplianceModuleTable/>
        </section>
    )
}

export default ComplianceSecurity
