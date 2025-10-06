import React from 'react'
import ComplianceCardHeading from './ComplianceCardHeading'
import Audit from './Audit'
import FraudDispute from './FraudDispute'
const AuditReporting = () => {
  return (
    <>
    <section className='audit-fraud'>
            <div className=' row d-flex align-items-stretch '>
                <div className='col-md-6 mb-3 d-flex'>
                  <Audit/>
                </div>

                <div className='col-md-6 mb-3 d-flex'>
                    <div className='card px-2 py-3 flex-fill'>
                        <ComplianceCardHeading heading="Fraud & Dispute Management" />
                     <FraudDispute/>
                    </div>
                </div>
            </div>
        </section>
      
    </>
  )
}

export default AuditReporting
