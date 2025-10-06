import React from 'react'
import OverviewCard from './OverviewCard'

const OverviewCardSection = () => {
    return (
        <div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3 px-1">
                <div className='col'>
                    <OverviewCard title="Active Role" value={456} />
                </div>
                <div className='col'>
                    <OverviewCard title="Active User" value={54} />
                </div>
                <div className='col'>
                    <OverviewCard title="Assigned" value={230} />
                </div>
                <div className='col'>
                    <OverviewCard title="Unauthorized Attempts" value={3} />
                </div>
            </div>

        </div>
    )
}

export default OverviewCardSection
