

import React from 'react'

const UserVerificationHeading = ({ title, content }) => {
    return (
        <div className='d-flex align-items-center justify-content-between px-3'>
            <div className='ps-2'>
                <p className='p-0 m-0 heading-blue text-capitalize fs-18'> {title}</p>
                <p className='p-0 m-0 fs-15'>{content}</p>
            </div>
         
           
        </div>
    )
}

export default UserVerificationHeading
