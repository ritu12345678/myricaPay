import React from 'react'
import ComplianceCardHeading from './ComplianceCardHeading'
import { TabView, TabPanel } from "primereact/tabview";
import AMLTabContent from './AMLTabContent';
import AgentCorridorManagement from './AgentCorridorManagement';
const ComplianceRiskMonitoring = () => {
    return (
        <section className='compliance'>
            <div className=' row d-flex align-items-stretch '>
                <div className='col-md-6 mb-3 d-flex'>
                    <div className='card px-2 py-3 flex-fill'>
                        <ComplianceCardHeading heading="Compliance & Risk Monitoring" />

                        <TabView className="chip-tabs ps-0 mt-2">
                            <TabPanel header="AML" panelClassName="no-padding">
                                <div>
                                    <AMLTabContent />
                                </div>
                            </TabPanel>
                            <TabPanel header="Sanction">
                                <p>Pending tab content</p>
                            </TabPanel>
                            <TabPanel header="KYC">
                                <p>Closed tab content</p>
                            </TabPanel>
                            <TabPanel header="Fraud">
                                <p>Closed tab content</p>
                            </TabPanel>
                            <TabPanel header="PEP">
                                <p>Closed tab content</p>
                            </TabPanel>
                        </TabView>

                    </div>
                </div>

                <div className='col-md-6 mb-3 d-flex'>
                    <div className='card px-2 py-3 flex-fill'>
                        <ComplianceCardHeading heading="Agent & Corridor Management" />
                        <AgentCorridorManagement/>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ComplianceRiskMonitoring
