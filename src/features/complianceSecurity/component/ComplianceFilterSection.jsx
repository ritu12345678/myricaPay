import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import CustomChip from '../../../components/ChipCustom';
import reset from "../../../assets/reset.png";

const ComplianceFilterSection = () => {
    const [selectedRiskLevel, setSelectedRiskLevel] = useState(null);
    const [selectedCustomerType, setSelectedCustomerType] = useState(null);
    const [selectedRegion, setSelectedRegion] = useState(null);
    const [selectedSystemComponent, setSelectedSystemComponent] = useState(null);
    const [selectedComplianceStatus, setSelectedComplianceStatus] = useState(null);

    // Example options for dropdowns (replace with your data)
    const riskLevels = [{ name: 'High' }, { name: 'Medium' }, { name: 'Low' }];
    const customerTypes = [{ name: 'Agent' }, { name: 'End User' }];
    const regions = [{ name: 'North America' }, { name: 'Europe' }];
    const systemComponents = [{ name: 'Component A' }, { name: 'Component B' }];
    const complianceStatuses = [{ name: 'Verified' }, { name: 'Pending' }, { name: 'Rejected' }];

    return (
       
        <div className="card p-3 mb-4 mt-3">
            <div className="d-flex justify-content-between ">
                <h6>Filter Modules</h6>
                <button type="button" className="btn btn-primary btn-outline-secondary transparent-btn bg-grey">
                    <img className="mb-1 pe-1" src={reset} alt="Reset" style={{ width: 18, height: 18 }} />
                    Reset
                </button>
            </div>

            <div className="d-flex justify-content-between gap-2">
                {/* Risk Level */}
                <div className="flex-fill w-20 mb-2">
                    <label htmlFor="riskLevel" className="form-label">Risk Level</label>
                    <Dropdown
                        id="riskLevel"
                        value={selectedRiskLevel}
                        options={riskLevels}
                        optionLabel="name"
                        placeholder="Select Risk Level"
                        style={{ width: '100%' }}
                        onChange={(e) => setSelectedRiskLevel(e.value)}
                    />
                </div>

                {/* Customer Type */}
                <div className="flex-fill w-20 mb-2">
                    <label htmlFor="customerType" className="form-label">Customer Type</label>
                    <Dropdown
                        id="customerType"
                        value={selectedCustomerType}
                        options={customerTypes}
                        optionLabel="name"
                        placeholder="Select Customer Type"
                        style={{ width: '100%' }}
                        onChange={(e) => setSelectedCustomerType(e.value)}
                    />
                </div>

                {/* Region */}
                <div className="flex-fill w-20 mb-2">
                    <label htmlFor="region" className="form-label">Region</label>
                    <Dropdown
                        id="region"
                        value={selectedRegion}
                        options={regions}
                        optionLabel="name"
                        placeholder="Select Region"
                        style={{ width: '100%' }}
                        onChange={(e) => setSelectedRegion(e.value)}
                    />
                </div>

                {/* System Component */}
                <div className="flex-fill w-20 mb-2">
                    <label htmlFor="systemComponent" className="form-label">System Component</label>
                    <Dropdown
                        id="systemComponent"
                        value={selectedSystemComponent}
                        options={systemComponents}
                        optionLabel="name"
                        placeholder="Select System Component"
                        style={{ width: '100%' }}
                        onChange={(e) => setSelectedSystemComponent(e.value)}
                    />
                </div>

                {/* Compliance Status */}
                <div className="flex-fill w-20 mb-2">
                    <label htmlFor="complianceStatus" className="form-label">Compliance Status</label>
                    <Dropdown
                        id="complianceStatus"
                        value={selectedComplianceStatus}
                        options={complianceStatuses}
                        optionLabel="name"
                        placeholder="Select Compliance Status"
                        style={{ width: '100%' }}
                        onChange={(e) => setSelectedComplianceStatus(e.value)}
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
       
    );
};

export default ComplianceFilterSection;
