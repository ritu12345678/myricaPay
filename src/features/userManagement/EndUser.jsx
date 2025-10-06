import React, { useState } from "react";

import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import UserCard from "./component/UserCard";
import { Icon } from '@iconify/react';
import totalAgent from "../../assets/totalAgent.png"
import active from "../../assets/active.png"
import AgentTable from "./component/AgentTable";
import Checkbox from '@mui/material/Checkbox';
import addOfficer from "../../assets/addOfficer.png"
import mail from "../../assets/mail.png"
import exportreport from "../../assets/exportreport.png"
import CustomChip from "../../components/CustomChip";
import pendingkyc from "../../assets/pendingkyc.png"
import pep from "../../assets/pep.png"
import business from "../../assets/business.png"
import bulkimport from "../../assets/bulkimport.png"
import kyc from "../../assets/kyc.png"
import bulkassign from "../../assets/bulkassign.png"
import suspended2 from "../../assets/suspended2.png"

const customer = [
    { name: "All Customer", code: "all" },
    { name: "United States", code: "us" },
];

export default function EndUser() {
    const [checked, setChecked] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(customer[0]);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div >
            {/* Page Title */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <h4 className="heading-black ">End User Management</h4>
                    <small className="text-muted subheading-grey">
                        Manage customer accounts, KYC verification, and compliance status
                    </small>
                </div>
                <div className="d-flex gap-2">

                    <button type="button" className="btn btn-primary btn-outline-secondary transparent-btn"> <img className="mb-1 pe-1" src={exportreport} alt="Add" style={{ width: 18, height: 18 }} />Export Users</button>
                    <button type="button" className="btn btn-primary btn-outline-secondary transparent-btn"> <img className="mb-1 pe-1" src={bulkimport} alt="Add" style={{ width: 18, height: 18 }} />Bulk Import</button>
                    <button className=" btn btn-primary blue-btn ">
                        <img className="mb-1 pe-1" src={addOfficer} alt="Add" style={{ width: 18, height: 18 }} />
                        Create User
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
                        heading="Verified"
                        value="1204"
                    />
                </div>
                <div className="flex-fill w-20" >
                    <UserCard
                        icon={pendingkyc}
                        heading="Pending KYC"
                        value="98"
                    />
                </div>
                <div className="flex-fill w-20" >
                    <UserCard
                        icon={suspended2}
                        heading="Suspended"
                        value="1204"
                    />
                </div>
                <div className="flex-fill w-20" >
                    <UserCard
                        icon={pep}
                        heading="PEP Users"
                        value="345"
                    />

                </div>
                <div className="flex-fill w-20" >
                    <UserCard
                        icon={business}
                        heading="Business"
                        value="345"
                    />

                </div>
            </div>


            <div className="card p-3 mb-4">
                <div className="d-flex justify-content-between ">
                    <h6>Filters</h6>
                    <p className="m-0 text-lightblue fs-10">Clear All </p>
                </div>

                <div className="d-flex justify-content-between gap-2">
                    {/* Customer Name */}
                    <div className="flex-fill w-20 mb-2">
                        <label htmlFor="customerName" className="form-label">Customer Name</label>
                        <Dropdown
                            id="customerName"
                            value={selectedCustomer}
                            options={customer}
                            optionLabel="name"
                            placeholder="Select Customer"
                            style={{ width: '100%' }}
                            onChange={(e) => setSelectedCustomer(e.value)}
                        />
                    </div>

                    {/* Verification Tier */}
                    <div className="flex-fill w-20 mb-2">
                        <label htmlFor="verificationTier" className="form-label">Verification Tier</label>
                        <Dropdown
                            id="verificationTier"
                            //   value={selectedTier}
                            //   options={tiers}
                            optionLabel="name"
                            placeholder="Select Tier"
                            style={{ width: '100%' }}
                        //   onChange={(e) => setSelectedTier(e.value)}
                        />
                    </div>

                    {/* Region */}
                    <div className="flex-fill w-20 mb-2">
                        <label htmlFor="region" className="form-label">Region</label>
                        <Dropdown
                            id="region"
                            //   value={selectedRegion}
                            //   options={locations}
                            optionLabel="name"
                            placeholder="Select Region"
                            style={{ width: '100%' }}
                        //   onChange={(e) => setSelectedRegion(e.value)}
                        />
                    </div>

                    {/* Account Status */}
                    <div className="flex-fill w-20 mb-2">
                        <label htmlFor="accountStatus" className="form-label">Account Status</label>
                        <Dropdown
                            id="accountStatus"
                            //   value={selectedStatus}
                            //   options={statuses}
                            optionLabel="name"
                            placeholder="Select Status"
                            style={{ width: '100%' }}
                        //   onChange={(e) => setSelectedStatus(e.value)}
                        />
                    </div>

                    {/* Risk Level */}
                    <div className="flex-fill w-20 mb-2">
                        <label htmlFor="riskLevel" className="form-label">Risk Level</label>
                        <Dropdown
                            id="riskLevel"
                            //   value={selectedRisk}
                            //   options={risks}
                            optionLabel="name"
                            placeholder="Select Risk"
                            style={{ width: '100%' }}
                        //   onChange={(e) => setSelectedRisk(e.value)}
                        />
                    </div>
                </div>

                <div className="row mt-1">
                    <div className="d-flex align-items-center gap-1">
                        <p className="text-darkgrey fs-14 m-0">Active Filters:</p>

                        <CustomChip label="KYC Verified" />
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
                            <img src={kyc} alt="mail" />
                            <p className="m-0 ps-2 text-darkgrey fs-14">Bulk KYC</p>
                        </div>

                        <div className="d-flex align-items-center border-lightgrey rounded px-2 py-1">
                            <img src={bulkassign} alt="mail" />
                            <p className="m-0 ps-2 text-darkgrey fs-14">Bulk Suspended</p>
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
