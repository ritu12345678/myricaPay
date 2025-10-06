import React from 'react'
import UserTable from './components/UserTable'
import UserHeading from './components/UserHeading'
const UserTab = () => {
  return (
    <div className='px-3'>
      <UserHeading/>
      <UserTable/>
    </div>
  )
}

export default UserTab
