import React from 'react'
import { TabView, TabPanel } from "primereact/tabview";
import FraudAllCaseTab from './FraudAllCaseTab';
const FraudDispute = () => {
  return (
    <div>
            <TabView className="chip-tabs ps-0 mt-2">
                            <TabPanel header="All Cases" panelClassName="no-padding">
                                <div>
                                    <FraudAllCaseTab/>
                                </div>
                            </TabPanel>
                            <TabPanel header="Fraud">
                                <p>Pending tab content</p>
                            </TabPanel>
                            <TabPanel header="Service Related">
                                <p>Closed tab content</p>
                            </TabPanel>
                            <TabPanel header="Agent Misconduct">
                                <p>Closed tab content</p>
                            </TabPanel>
                           
                        </TabView>

    </div>
  )
}

export default FraudDispute
