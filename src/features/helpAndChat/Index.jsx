import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import SupportTicketsTab from './supportTickets/Index';
import BroadcastTab from './broadcast/Index';



const HelpAndChat = () => {
const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className='help-chat hide-tab-content mt-0'>
      {/* Tabs (just for headers) */}
      <TabView
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}


      >
        <TabPanel header="SUPPORT TICKETS" />
        <TabPanel header="BROADCAST MANAGEMENT" />

      </TabView>
 {/* Tab Content */}
      <div >
        {activeIndex === 0 && <SupportTicketsTab />}
        {activeIndex === 1 && (
       <BroadcastTab />
        )}

      </div>
    </div>
  );
};

export default HelpAndChat;
