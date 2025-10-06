import React from 'react'
import alert from "../../../assets/alert.png"

const AlertCard = () => {
  return (
    <div className='d-flex align-items-center '>
        <div className='me-2'>
            <img src={alert}/>
        </div>
        <div className='me-auto'>
            <p className='p-0 m-0 text-danger fs-16 fw-500'>
               Critical Alert: 3 overdue compliance filings require immediate attention 
            </p>
             <p className='p-0 m-0 text-danger fs-14 fw-500'>
               Last updated: 2 hours ago 
            </p>
        </div>
        <div>
            <span className='text-danger fs-24'>✖</span>

        </div>
     
    </div>
  )
}

export default AlertCard
