import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { ProgressBar } from 'primereact/progressbar';
import CustomChip from '../../../../components/ChipCustom';
// import reset from "../../../assets/reset.png";

const FilterSection = () => {
    const [selectedUserType, setSelectedUserType] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState('Active');
    const [selectedRegion, setSelectedRegion] = useState(null);
    const [registrationDate, setRegistrationDate] = useState(null);
    const [activityLevel, setActivityLevel] = useState(70); // default activity %

    const userTypes = [{ name: 'Admin' }, { name: 'Agent' }, { name: 'Customer' }];
    const regions = [{ name: 'North America' }, { name: 'Europe' }, { name: 'Asia' }];
    const statuses = ['Active', 'Inactive', 'Suspended'];

    const handleReset = () => {
        setSelectedUserType(null);
        setSelectedStatus('Active');
        setSelectedRegion(null);
        setRegistrationDate(null);
        setActivityLevel(70);
    };

    return (
        <div className="card p-3 mb-4 mt-3 shadow-sm">


            {/* Filter Section */}
            <div className="d-flex flex-wrap gap-3">
                {/* 1️⃣ User Type */}
                <div className="flex-fill w-15">
                    <label htmlFor="userType" className="form-label fw-medium">User Type</label>
                    <Dropdown
                        id="userType"
                        value={selectedUserType}
                        options={userTypes}
                        optionLabel="name"
                        placeholder="Select User Type"
                        className="w-100"
                        onChange={(e) => setSelectedUserType(e.value)}
                    />
                </div>

                <div className="flex-fill w-16">
                    <label className="form-label fw-medium">Status</label>
                    <div className="d-flex gap-2 flex-wrap mt-3">
                        {statuses.map((status) => (
                            <CustomChip
                                key={status}
                                label={status}
                                type={
                                    selectedStatus === status
                                        ? "Success" // highlight selected
                                        : status // fallback color logic from your getChipStyles
                                }
                                clickable
                                onClick={() => setSelectedStatus(status)}
                            />
                        ))}
                    </div>
                </div>

                {/* 3️⃣ Region */}
                <div className="flex-fill w-15">
                    <label htmlFor="region" className="form-label fw-medium">Region</label>
                    <Dropdown
                        id="region"
                        value={selectedRegion}
                        options={regions}
                        optionLabel="name"
                        placeholder="Select Region"
                        className="w-100"
                        onChange={(e) => setSelectedRegion(e.value)}
                    />
                </div>

                {/* 4️⃣ Registration Date */}
                <div className="flex-fill w-15">
                    <label htmlFor="registrationDate" className="form-label fw-medium">Registration Date</label>
                    <Dropdown
                        id="region"
                        value={selectedRegion}
                        options={regions}
                        optionLabel="name"
                        placeholder="Select Region"
                        className="w-100"
                        onChange={(e) => setSelectedRegion(e.value)}
                    />
                </div>

                {/* 5️⃣ Activity Level */}
                <div className="flex-fill w-20">
                    <label className="form-label fw-medium">Activity Level</label>
                    <div className="d-flex flex-column align-items-start">
                        <ProgressBar value={activityLevel} style={{ height: '10px', width: '100%' }} />
                        <small className="text-muted mt-1">{activityLevel}% Active</small>
                    </div>
                </div>
            </div>

            {/* Active Filters Chips */}

        </div>
    );
};

export default FilterSection;
