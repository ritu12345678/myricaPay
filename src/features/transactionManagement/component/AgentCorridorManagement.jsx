import React, { useState } from 'react';
import { Dropdown } from "primereact/dropdown";
import AgentCorridorCard from './AgentCorridorCard';
import { VirtualScroller } from 'primereact/virtualscroller';
import setting from "../../../assets/setting.png";
import addOfficer from "../../../assets/addOfficer.png";

const AgentCorridorManagement = () => {
    const filterOptions = [
        { name: 'All', value: 'all' },
        { name: 'Active', value: 'active' },
        { name: 'Inactive', value: 'inactive' },
    ];

    const [selectedAgent, setSelectedAgent] = useState(null);
    const [selectedCorridor, setSelectedCorridor] = useState(null);

    const corridorData = [
        { heading: 'USA → Mexico', content: 'Volume: $450K / Limited' },
        { heading: 'USA → Mexico', content: 'Volume: $450K / Limited' },
        { heading: 'USA → Mexico', content: 'Volume: $450K / Limited' },
        { heading: 'USA → Mexico', content: 'Volume: $450K / Limited' },
    ];

    const itemTemplate = (transaction) => (
        <div style={{ marginBottom: '1rem' }}>
            <AgentCorridorCard
                heading={transaction.heading}
                content={transaction.content}
            />
        </div>
    );

    return (
        <div className='agent-corridor p-component'>
            {/* Filters Row */}
            <div className='row mb-4'>
                <div className='col-md-6'>
                    <label htmlFor="agentFilter" className="form-label text-muted text-black-custom fs-14">
                        Agent Filter
                    </label>
                    <Dropdown
                        id="agentFilter"
                        value={selectedAgent}
                        options={filterOptions}
                        optionLabel="name"
                        optionValue="value"
                        placeholder="Select Agent"
                        style={{ width: '100%' }}
                        onChange={(e) => setSelectedAgent(e.value)}
                    />
                </div>

                <div className='col-md-6'>
                    <label htmlFor="corridorFilter" className="form-label text-muted text-black-custom fs-14">
                        Corridor Filter
                    </label>
                    <Dropdown
                        id="corridorFilter"
                        value={selectedCorridor}
                        options={filterOptions}
                        optionLabel="name"
                        optionValue="value"
                        placeholder="Select Corridor"
                        style={{ width: '100%' }}
                        onChange={(e) => setSelectedCorridor(e.value)}
                    />
                </div>
            </div>

            {/* Section Heading */}
        <div className='mb-30'>    <p className='p-0 m-0 fw-500 '>Top Performing Agents</p></div>

            {/* Corridor Status */}
            <div>
                <p className='p-0 m-0 text-black-custom fs-16 fw-500 text-start mb-2'>
                    Corridor Status
                </p>
                <div style={{ height: '12.5rem', overflowY: 'auto' }}>
                    <VirtualScroller
                        className="hide-scrollbar"
                        items={corridorData}
                        itemSize={120}
                        orientation="vertical"
                        style={{ height: '12.5rem', width: '100%' }}
                        itemTemplate={itemTemplate}
                    />
                </div>
            </div>

            {/* Action Buttons */}
            <div className="d-flex gap-2 mt-3">
                <button className="btn btn-primary lightblue-btn">
                    <img className="mb-1 pe-1" src={setting} alt="settings" style={{ width: 18, height: 18 }} />
                    Corridor Settings
                </button>

                <button type="button" className="btn btn-primary btn-outline-secondary blue-btn">
                    <img className="mb-1 pe-1" src={addOfficer} alt="add" style={{ width: 18, height: 18 }} />
                    Add New Agent
                </button>
            </div>
        </div>
    );
};

export default AgentCorridorManagement;
