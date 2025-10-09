import React from 'react'
import DashboardHeading from '../components/DasboardHeading'
import FilterSection from './components/FilterSection'
import UserCardSection from './components/UserCardSection'
import UserRegistrationTrend from './components/UserRegistrationTrends'
import TopActiveUser from './components/TopActiveUser'

const UserTab = () => {
    return (
        <div className='px-3'>
            <DashboardHeading title="User Analytics" content="Monitor user activity
            , registration trends, and demographic
       insights across all channels."/>
            <FilterSection />
            <UserCardSection />
            <div className='row mt-4 d-flex align-items-stretch'>
                <div className='col-md-8 d-flex'>
                    <UserRegistrationTrend />
                </div>
                <div className='col-md-4 d-flex'>
                    <TopActiveUser />
                </div>
            </div>
        </div>
    )
}

export default UserTab
