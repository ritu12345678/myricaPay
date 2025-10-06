import React from 'react'
import KycReviewTable from './componets/KycReviewTable'
import UserVerificationHeading from './componets/UserVerificationHeading'

const UserVerificationTab = () => {
  return (
    <div>
      <UserVerificationHeading title="User Verifications" content="Manage user verification requests and statuses." />
      <KycReviewTable />
    </div>
  )
}

export default UserVerificationTab
