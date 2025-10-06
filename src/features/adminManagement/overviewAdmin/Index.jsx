import React from 'react'
import UserActivityLogEntry from './components/UserActivityLogEntry'
import AdminCardSection from './components/AdminCardSection'
import LoginActivityAndAlertSection from './components/LoginActivityAndAlertSection'

const AdminOverViewTab = () => {
  return (
    <div className='px-3'>
        <AdminCardSection/>
   
    <LoginActivityAndAlertSection/>
    </div>
  )
}

export default AdminOverViewTab
