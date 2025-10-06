import { Divider } from '@mui/material'
import React from 'react'

const RecentAuditCard = () => {
  return (
    <div className='mt-3 ps-2 mb-3'>
      <div className='d-flex align-items-center justify-content-between  ' >
                <p className='m-0 p-0 text-black-custom fw-500 fs-16'>Transaction Approved </p>
                         <p className='m-0 p-0 text-darkgrey fw-400 fs-14'>Today, 09:45 AM </p>
            </div>
            <p className='p-0 m-0 text-darkgrey fs-14 fw-400'>Sarah Johnson approved transaction #TRX-78944</p>
                <p className='p-0 m-0 text-darkgrey fs-12 fw-400'>IP: 192.168.1.45 | Device: Chrome/Windows</p>
             <Divider/>
    </div>
  )
}

export default RecentAuditCard
