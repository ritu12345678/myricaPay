import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Avatar } from '@mui/material';
const UserActivityLogEntry = () => {
   const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return (
    <div className='card shadow-sm mb-2'>
      <div className='card-body'>
        <div className="left-border ps-2" style={{ borderLeftColor: randomColor }}>
          <p className='p-0 m-0 fs-16 fw-500'>Alex logged in</p>
          <div className='d-flex align-items-center gap-2'>
            <CalendarMonthIcon />
            <p className='m-0 p-0 fs-14 text-lightgrey'> 2 hours Ago</p>
          </div>
        </div>
        <div className='d-flex align-items-center justify-content-between ms-3'>
          <div className=' fit-content d-flex align-items-center gap-1 mt-2 p-1 rounded' style={{ backgroundColor: "#E5E7EB" }}>
            <ManageAccountsIcon fontSize='12' />
            <p className='p-0 m-0 fs-12 '>Admin</p>
          </div>
          <Avatar />
        </div>
      </div>

    </div>
  )
}

export default UserActivityLogEntry
