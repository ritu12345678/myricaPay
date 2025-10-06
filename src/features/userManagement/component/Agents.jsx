import React, { useState } from "react";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import UserCard from "./UserCard";
import { Icon } from '@iconify/react';
import totalAgent from "../../../assets/totalAgent.png"
import active from "../../../assets/active.png"
import onboarding from "../../../assets/onboarding.png"
import suspended from "../../../assets/suspended.png"
import AgentTable from "./AgentTable";
import Checkbox from '@mui/material/Checkbox';

import mail from "../../../assets/mail.png"
import bulksuspended from "../../../assets/bulksuspended.png"
import Chip from '@mui/material/Chip';
import CustomChip from "../../../components/CustomChip";
const businessLines = [
    { name: "All Business Lines", code: "all" },
    { name: "Finance", code: "fin" },

];
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const locations = [
    { name: "All Locations", code: "all" },
    { name: "United States", code: "us" },
];

export default function Agents() {
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };
    return (
        <div >
            {/* Page Title */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <h4 className="heading-black ">Agent Management</h4>
                    <small className="text-muted subheading-grey">
                        Manage and monitor all agents across your network
                    </small>
                </div>
                <div className="d-flex gap-2">
                    <button type="button" className="btn btn-outline-secondary transparent-btn">Import</button>
                    <button type="button" className="btn btn-primary btn-outline-secondary transparent-btn">Export</button>
                    <button className=" btn btn-primary blue-btn ">
                        + Add Agent
                    </button>
                </div>
            </div>


            <div className="row mb-3">
                <div className="col-md-3">

                    <UserCard
                        icon={totalAgent}
                        heading="Total Agents"
                        value="1204"
                    />
                </div>
                <div className="col-md-3">
                    <UserCard
                        icon={active}
                        heading="Active"
                        value="1204"
                    />
                </div>
                <div className="col-md-3">
                    <UserCard
                        icon={onboarding}
                        heading="Onboarding"
                        value="98"
                    />
                </div>
                <div className="col-md-3">
                    <UserCard
                        icon={suspended}
                        heading="Suspended"
                        value="345"
                    />
                </div>
            </div>


            <div className="card p-3 mb-4">
                <div className="d-flex justify-content-between ">
                    <h6>Filters</h6>
                    <p className="m-0 text-lightblue fs-10">Clear All </p>
                </div>

                <div className="row">
                    <div className="col-md-3 mb-2">
                        <label htmlFor="businessLine" className="form-label">Business Line</label>
                        <Dropdown
                            id="businessLine"
                            value={businessLines[0]}
                            options={businessLines}
                            optionLabel="name"
                            placeholder="Select Business Line"
                            style={{ width: '100%' }}
                        />
                    </div>
                    <div className="col-md-3 mb-2">
                        <label htmlFor="location" className="form-label">Location</label>
                        <Dropdown
                            id="location"
                            value={locations[0]}
                            options={locations}
                            optionLabel="name"
                            placeholder="Select Location"
                            style={{ width: '100%' }}
                        />
                    </div>
                    <div className="col-md-3 mb-2">
                        <label htmlFor="status" className="form-label">Status</label>
                        <Dropdown
                            id="status"
                            placeholder="Select Status"
                            style={{ width: '100%' }}
                        />
                    </div>
                    <div className="col-md-3 mb-2">
                        <label htmlFor="riskRating" className="form-label">Risk Rating</label>
                        <Dropdown
                            id="riskRating"
                            placeholder="Select Risk Rating"
                            style={{ width: '100%' }}
                        />
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="d-flex align-items-center gap-1">
                        <p className="text-darkgrey fs-14 m-0">Active Filters:</p>
                       
                        <CustomChip label="Active Status" />
                        <CustomChip label="United state" />
                    </div>
                </div>
            </div>


            {/* Agents Table */}
            <div className="card p-3">
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <h6>Agents (1,254)</h6>

                    <div className="d-flex gap-2 align-items-center">

                        <div className="d-flex align-items-center">
                            <Checkbox
                                checked={checked}
                                onChange={handleChange}
                                color="primary"
                            />
                            <p className="m-0  text-darkgrey fs-14">Select All</p>
                        </div>

                  
                        <div className="d-flex align-items-center border-lightgrey rounded px-2 py-1">
                            <img src={mail} alt="mail" />
                            <p className="m-0 ps-2 text-darkgrey fs-14">Bulk Mail</p>
                        </div>

                   
                        <div className="d-flex align-items-center border-lightgrey rounded px-2 py-1">
                            <img src={bulksuspended} alt="mail" />
                            <p className="m-0 ps-2 text-darkgrey fs-14">Bulk Suspended</p>
                        </div>
                    </div>

                </div>

                <AgentTable />
            </div>
        </div>
    );
}
