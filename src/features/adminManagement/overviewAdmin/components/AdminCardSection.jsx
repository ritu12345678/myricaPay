import React from 'react'
import AdminStatCard from './AdminStatCard'

const AdminCardSection = () => {
    return (
        <div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3 px-1">
                <div className='col'>
                    <AdminStatCard title="Active Admin" value={456} />
                </div>
                <div className='col'>
                    <AdminStatCard title="InActive Admin" value={54} />
                </div>
                <div className='col'>
                    <AdminStatCard title="Suspended Admin" value={230} />
                </div>
             
            </div>

        </div>
    )
}

export default AdminCardSection
