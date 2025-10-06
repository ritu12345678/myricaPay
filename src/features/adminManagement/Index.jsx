import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import AdminOverViewTab from './overviewAdmin/Index';
import AdminTab from './admin/Index';




const AdminOverView = () => {
const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className='help-chat hide-tab-content mt-0'>
      {/* Tabs (just for headers) */}
      <TabView
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}


      >
        <TabPanel header="Overview" />
        <TabPanel header="Admin" />

      </TabView>
 {/* Tab Content */}
      <div >
        {activeIndex === 0 && <AdminOverViewTab />}
        {activeIndex === 1 && (
       <AdminTab />
        )}
 
      </div>
    </div>
  );
};

export default AdminOverView;
