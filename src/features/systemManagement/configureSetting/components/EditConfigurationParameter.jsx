import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';

const EditConfigurationParameter = () => {
    const [product, setProduct] = useState('Money Transfer');
    const [corridor] = useState('USA to Mexico');
    const [currency, setCurrency] = useState('USD - US Dollar');
    const [residenceLimit, setResidenceLimit] = useState('Consumer');
    const [userRoles, setUserRoles] = useState([]);
    const [regions, setRegions] = useState([]);
    const [effectiveFrom, setEffectiveFrom] = useState('');
    const [effectiveTo, setEffectiveTo] = useState('');
    const [timeZone, setTimeZone] = useState('UTC');

    const currencyOptions = ['USD - US Dollar', 'EUR - Euro', 'MXN - Peso'];
    const timeZoneOptions = ['UTC', 'EST', 'PST'];
    const userRolesOptions = ['Auditor', 'Jurors', 'Compliance Officers'];
    const regionOptions = ['LATM', 'US', 'CA', 'Europe', 'All Applicable Regions'];

    const handleRegionChange = (e) => {
        const value = e.target.value;
        setRegions((prev) =>
            e.target.checked ? [...prev, value] : prev.filter((r) => r !== value)
        );
    };

    return (
        <div className="container mt-4">
            <div className="card p-3">
                <div className=" d-flex justify-content-between align-items-center">
                    <div>
                        <strong className="text-blue-custom h5 mb-0">Transaction Limit - Single</strong>
                        <h5 className='text-grey'>Parameter ID: TXN_LIMIT_SINGLE</h5></div>
                    <span className="badge bg-lightgreen text-success">Active</span>
                </div>

                <div className="card-body">
                    <div className="row">
                        {/* === Left Side: Basic Configuration === */}
                        <div className="col-md-6  pe-4">
                            <h6 className="text-blue-custom mb-3 fw-600">Basic Configuration</h6>

                            <div className="mb-3">
                                <label className="form-label text-darkgrey fs-14 fw-600">Parameter Name</label>
                                <input className="form-control" value="Transaction Limit - Single" readOnly />
                            </div>

                            <div className="mb-3">
                                <label className="form-label text-darkgrey fs-14 fw-600">Parameter Value</label>
                                <input className="form-control" value="10000" readOnly />
                            </div>

                            <div className="mb-3">
                                <label className="form-label text-darkgrey fs-14 fw-600">Currency</label>
                                <Dropdown
                                    className="w-100"
                                    value={currency}
                                    options={currencyOptions}
                                    onChange={(e) => setCurrency(e.value)}
                                    placeholder="Select Currency"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label text-darkgrey fs-14 fw-600">Description</label>
                                <textarea
                                    className="form-control"
                                    rows="2"
                                    readOnly
                                    value="Maximum amount allowed for a single transaction in the money transfer service."
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label text-darkgrey fs-14 fw-600">Status</label>
                                <div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="status" id="active" defaultChecked />
                                        <label className="form-check-label" htmlFor="active">Active</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="status" id="inactive" />
                                        <label className="form-check-label" htmlFor="inactive">Inactive</label>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2">
                                <h6 className="text-blue-custom mb-3 fw-600">Validation Rules</h6>
                              
                                <div>
                                    <label className="form-label text-darkgrey fs-14 fw-600">Minimum Value</label>
                                    <input type="number" className="form-control" defaultValue="1" />
                                </div>
                                <div className="mt-2">
                                    <label className="form-label text-darkgrey fs-14 fw-600">Maximum Value</label>
                                    <input type="number" className="form-control" defaultValue="50000" />
                                </div>
                                {/* </div>
              
            </div> */}

                                <div className="form-check mt-2">
                                    <input type="checkbox" className="form-check-input" id="requiresApproval" />
                                    <label className="form-check-label" htmlFor="requiresApproval">Requires compliance approval for changes</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="autoNotification" />
                                    <label className="form-check-label" htmlFor="autoNotification">Enable automatic notifications on change</label>
                                </div>
                            </div>
                        </div>

                        {/* === Right Side: Scope & Application === */}
                        <div className="col-md-6 ps-4 second-div">
                            <h6 className="text-blue-custom mb-3 fw-600">Scope & Application</h6>

                            <div className="mb-3">
                                <label className="form-label text-darkgrey fw-600 fs-14">Product</label>
                                <input className="form-control" value={product} onChange={(e) => setProduct(e.target.value)} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label text-darkgrey fs-14 fw-600">Corridor</label>
                                <input className="form-control" value={corridor} readOnly />
                            </div>

                            <div className="mb-3">
                                <label className="form-label text-darkgrey fs-14 fw-600">Region</label>
                                {regionOptions.map((region) => (
                                    <div className="form-check" key={region}>
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            value={region}
                                            id={region}
                                            onChange={handleRegionChange}
                                            checked={regions.includes(region)}
                                        />
                                        <label className="form-check-label" htmlFor={region}>{region}</label>
                                    </div>
                                ))}
                            </div>

                            <div className="mb-3">
                                <label className="form-label text-darkgrey fs-14 fw-600">Residence Limit</label>
                                <Dropdown
                                    className="w-100"
                                    value={residenceLimit}
                                    options={['Consumer', 'Business']}
                                    onChange={(e) => setResidenceLimit(e.value)}
                                    placeholder="Select"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label text-darkgrey fs-14 fw-600">User Roles</label>
                                {userRolesOptions.map(role => (
                                    <div className="form-check" key={role}>
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value={role}
                                            id={role}
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    setUserRoles([...userRoles, role]);
                                                } else {
                                                    setUserRoles(userRoles.filter(r => r !== role));
                                                }
                                            }}
                                            checked={userRoles.includes(role)}
                                        />
                                        <label className="form-check-label" htmlFor={role}>{role}</label>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4">
                                <h6 className="text-blue-custom mb-3 fw-600">Effective Date & Schedule</h6>
                                {/* <div className="row"> */}
                                <div className="">
                                    <label className="form-label text-darkgrey fs-14 fw-600">Effective From</label>
                                    <input type="date" className="form-control" value={effectiveFrom} onChange={(e) => setEffectiveFrom(e.target.value)} />
                                </div>
                                <div className="">
                                    <label className="form-label text-darkgrey fs-14 fw-600">Effective To</label>
                                    <input type="date" className="form-control" value={effectiveTo} onChange={(e) => setEffectiveTo(e.target.value)} />
                                </div>
                                <div className="">
                                    <label className="form-label text-darkgrey fs-14 fw-600">Time Zone</label>
                                    <Dropdown className="w-100" value={timeZone} options={timeZoneOptions} onChange={(e) => setTimeZone(e.value)} />
                                </div>
                                {/* </div> */}
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className='card mt-2'><div className='card-body'> <div className="mt-4">
                <h6 className="text-blue-custom fw-600">Change Reason & Approval</h6>

            </div></div></div>
        </div>
    );
};

export default EditConfigurationParameter;
