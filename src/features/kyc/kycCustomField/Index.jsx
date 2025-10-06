import React from 'react'
import KycCustomFieldTable from './components/KycCustomFieldTable'
import KycCustomHeading from './components/KycCustomHeading'

const KycCustomFieldTab = () => {
  return (
    <div className='px-3'>
        <KycCustomHeading title="KYC Fields"content="Manage KYC fields and verification rules for customer onboarding."/>
      <KycCustomFieldTable/>
    </div>
  )
}

export default KycCustomFieldTab
