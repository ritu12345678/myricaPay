import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import TransactionDataTab from './TransactionDataTab';

const TabsSection = () => {
  return (
    <TabView>
      <TabPanel header="Transaction Data">
        <TransactionDataTab />
      </TabPanel>
      <TabPanel header="Audit Log">
        <p>Audit log content goes here.</p>
      </TabPanel>
      <TabPanel header="Documents">
        <p>Documents content goes here.</p>
      </TabPanel>
      <TabPanel header="Notes">
        <p>Notes content goes here.</p>
      </TabPanel>
    </TabView>
  );
};

export default TabsSection;
