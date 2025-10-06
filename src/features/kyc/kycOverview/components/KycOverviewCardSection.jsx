import React from 'react'
import { KycOverviewCard } from './KycOverviewCard'

const KycOverviewCardSection = () => {
    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3 mb-3">
            <div className="col">
                <KycOverviewCard
                    title="Pending KYCs"
                    value="1324"
                    subtitle="+70 from last week"

                />
            </div>
            <div className="col">
                <KycOverviewCard
                    title="Approved Today"
                    value="135"

                    subtitle="+70 from last week"
                />
            </div>
            <div className="col">
                <KycOverviewCard
                    title="Rejected Today"
                    value="10"
                    subtitle="+10 from last week"
                />
            </div>
            <div className="col">
                <KycOverviewCard
                    title="Auto-Approved %"
                    value="80%"
                    trend="up"
                    change="12.5"
                    subtitle="-10% from last week"
                />
            </div>
            
        </div>
    )
}

export default KycOverviewCardSection
