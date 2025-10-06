import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import KycOverviewTab from './kycOverview/Index';
import UserVerificationTab from './userVerification/Index';
import KycCustomFieldTab from './kycCustomField/Index';




const Kyc = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className='help-chat hide-tab-content mt-0'>
            {/* Tabs (just for headers) */}
            <TabView
                activeIndex={activeIndex}
                onTabChange={(e) => setActiveIndex(e.index)}


            >
                <TabPanel header="Overview" />
                <TabPanel header="User Verification" />
                <TabPanel header="KYC Custom Field" />
             
            </TabView>
            {/* Tab Content */}
            <div >
                {activeIndex === 0 && <KycOverviewTab/>}
                {activeIndex === 1 && (
                    <UserVerificationTab/>
                )}
                {activeIndex === 2 && (
                    <KycCustomFieldTab/>
                )}
            </div>
        </div>
    );
};

export default Kyc;
