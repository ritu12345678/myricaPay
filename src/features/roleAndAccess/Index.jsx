import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import OverviewTab from './overviewTab/Index';
import RoleTab from './roleListTab/Index';
import UserTab from './userTab/Index';



const RoleAndAccess = () => {
const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className='help-chat hide-tab-content mt-0'>
      {/* Tabs (just for headers) */}
      <TabView
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}


      >
        <TabPanel header="Overview" />
        <TabPanel header="Role List" />
<TabPanel header="User" />
      </TabView>
 {/* Tab Content */}
      <div >
        {activeIndex === 0 && <OverviewTab />}
        {activeIndex === 1 && (
       <RoleTab />
        )}
  {activeIndex === 2 && (
       <UserTab />
        )}
      </div>
    </div>
  );
};

export default RoleAndAccess;
