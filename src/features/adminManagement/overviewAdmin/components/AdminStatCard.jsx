import React from 'react'

const AdminStatCard = ({title,value}) => {
  return (
    <div>
      <div className='card'>
        <div className='card-body'>
            <p className='p-0 m-0 mb-3 fs-16  fs-500'>{title}</p>
            <p className='p-0 m-0 fs-24 fw-600'>{value}</p>
        </div>
      </div>
    </div>
  )
}

export default AdminStatCard
