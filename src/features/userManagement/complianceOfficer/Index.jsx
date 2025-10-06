import React, { useState } from "react";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import UserCard from "../component/UserCard";
import { Icon } from '@iconify/react';
import totalAgent from "../../../assets/totalAgent.png"
import active from "../../../assets/active.png"
import onboarding from "../../../assets/onboarding.png"
import suspended from "../../../assets/suspended.png"
import AgentTable from "../component/AgentTable";
import Checkbox from '@mui/material/Checkbox';
import addOfficer from "../../../assets/addOfficer.png"
import mail from "../../../assets/mail.png"
import bulkassign from "../../../assets/bulkassign.png"
import exportreport from "../../../assets/exportreport.png"
import CustomChip from "../../../components/CustomChip";
import opencase from "../../../assets/opencase.png"
import trainingdue from "../../../assets/trainingdue.png"
import overduecase from "../../../assets/overduecase.png"
const department = [
    { name: "All Department", code: "all" },
    { name: "Finance", code: "fin" },

];
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const locations = [
    { name: "All Region", code: "all" },
    { name: "United States", code: "us" },
];

export default function ComplianceOfficer() {
    const [checked, setChecked] = useState(false);
const [selectedDepartment, setSelectedDepartment] = useState(department[0]);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
  
    return (
        <div>
            {/* Page Title */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <h4 className="heading-black ">Compliance Officer Management</h4>
                    <small className="text-muted subheading-grey">
                        Manage compliance officers, permissions, and case assignments
                    </small>
                </div>
                <div className="d-flex gap-2">

                    <button type="button" className="btn btn-primary btn-outline-secondary transparent-btn"> <img className="mb-1 pe-1" src={exportreport} alt="Add" style={{ width: 18, height: 18 }} />Export Report</button>
                    <button className=" btn btn-primary blue-btn ">
                        <img className="mb-1 pe-1" src={addOfficer} alt="Add" style={{ width: 18, height: 18 }} />
                        Add Officer
                    </button>
                </div>
            </div>


            <div className="d-flex justify-content-between gap-2 mb-3">
                <div className="flex-fill w-20" >

                    <UserCard
                        icon={totalAgent}
                        heading="Total"
                        value="1204"
                    />
                </div>
                <div className="flex-fill w-20" >
                    <UserCard
                        icon={active}
                        heading="Active"
                        value="1204"
                    />
                </div>
                <div className="flex-fill w-20" >
                    <UserCard
                        icon={opencase}
                        heading="Open Cases"
                        value="98"
                    />
                </div>
                <div className="flex-fill w-20" >
                    <UserCard
                        icon={overduecase}
                        heading="Overdue Cases"
                        value="1204"
                    />
                </div>
                <div className="flex-fill w-20" >
                    <UserCard
                        icon={trainingdue}
                        heading="Training Due"
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
                        <label htmlFor="department" className="form-label">Department</label>
                        <Dropdown
                            id="department"
                            value={selectedDepartment}
                            options={department}
                            optionLabel="name"
                            placeholder="Select Business Line"
                            style={{ width: '100%' }}
                            onChange={(e) => setSelectedDepartment(e.value)} // update state
                        />
                    </div>
                    <div className="col-md-3 mb-2">
                        <label htmlFor="region" className="form-label">Region</label>
                        <Dropdown
                            id="region"
                            value={locations[0]}
                            options={locations}
                            optionLabel="name"
                            placeholder="Select Region"
                            style={{ width: '100%' }}
                        />
                    </div>
                    <div className="col-md-3 mb-2">
                        <label htmlFor="seniority" className="form-label">Seniority</label>
                        <Dropdown
                            id="status"
                            placeholder="Select Level"
                            style={{ width: '100%' }}
                        />
                    </div>
                    <div className="col-md-3 mb-2">
                        <label htmlFor="caseType" className="form-label">Case Type</label>
                        <Dropdown
                            id="caseType"
                            placeholder="Select Type"
                            style={{ width: '100%' }}
                        />
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="d-flex align-items-center gap-1">
                        <p className="text-darkgrey fs-14 m-0">Active Filters:</p>

                        <CustomChip label="AML Department" />
                        <CustomChip label="North America" />
                    </div>
                </div>
            </div>


            {/* Agents Table */}
            <div className="card p-3">
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <h6>Compliance Officer (1,254)</h6>

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
                            <img src={bulkassign} alt="mail" />
                            <p className="m-0 ps-2 text-darkgrey fs-14">Bulk Assign</p>
                        </div>


                        <div className="d-flex align-items-center border-lightgrey rounded px-2 py-1">
                            <img src={mail} alt="mail" />
                            <p className="m-0 ps-2 text-darkgrey fs-14">Notify</p>
                        </div>
                    </div>

                </div>

                <AgentTable />
            </div>
        </div>
    );
}
