import React, { useState } from 'react'
import CustomOffcanvas from '../../../../components/CustomOffCanvas'
import AddRole from "./AddRole"
const Heading = () => {
    const [showOffCanvas, setShowOffCanvas] = useState(false)
    const handleOpenCanvas = () => {
        setShowOffCanvas(true)
    }
    const handleCloseCanvas = () => {
        setShowOffCanvas(false)
    }
    return (
        <div>
            <div className='d-flex align-items-center justify-content-between px-3'>
                <div className='ps-2'>
                    <p className='p-0 m-0 heading-blue text-capitalize fs-18'> Roles</p>
                    <p className='p-0 m-0 fs-15'>Manage Roles and verification rules for customer onboarding.</p>
                </div>
                <div className=''>
                    <button type="button" className="btn btn-primary blue-btn" onClick={() => handleOpenCanvas()}><span className='fs-18'>+</span>  Create New Role</button>
                </div>
            </div>

            <CustomOffcanvas title="Add Role" children={<AddRole show={showOffCanvas} onClose={handleCloseCanvas} />} show={showOffCanvas} onClose={handleCloseCanvas} />
        </div>
    )
}

export default Heading
