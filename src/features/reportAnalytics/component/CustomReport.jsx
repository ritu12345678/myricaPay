import React, { useState } from 'react';
// PrimeReact Dropdown
import { Dropdown } from 'primereact/dropdown';
// PrimeReact/Bootstrap icons (using Bootstrap icons for simpler integration)
import { Trash, Plus, XLg } from 'react-bootstrap-icons'; 

// Note: Ensure you have PrimeReact and Bootstrap installed:
// npm install primereact primeicons bootstrap react-bootstrap-icons

const ReportBuilderForm = () => {
    // --- State Initialization ---
    const [reportName, setReportName] = useState('');
    const [reportType, setReportType] = useState(null);
    const [timeRange, setTimeRange] = useState('Last 7 days');
    const [frequency, setFrequency] = useState('On-Demand');
    const [riskScore, setRiskScore] = useState(50); // Example state for the range/progress bar

    // --- Dropdown/Select Options ---
    const reportTypeOptions = [
        { label: 'Select report type', value: null },
        { label: 'Transaction Report', value: 'TXN' },
        { label: 'User Activity Report', value: 'USR' }
    ];

    const timeRangeOptions = [
        { label: 'Last 7 days', value: '7D' },
        { label: 'Last 30 days', value: '30D' },
        { label: 'Custom Range', value: 'CUSTOM' }
    ];

    // --- Data for Multiselect Lists ---
    const regions = ['North America', 'Europe', 'Asia Pacific', 'Latin America'];
    const businessLines = ['Retail Banking', 'Commercial Banking', 'Investment Banking', 'Digital Payments'];
    
    // --- Data for Column Selection (Drag & Drop replacement using simple list) ---
    const availableFields = [
        { group: 'User Information', fields: ['User ID', 'User Name', 'Email'] },
        { group: 'Transaction Details', fields: ['Transaction ID', 'Transaction Hash'] }
    ];
    
    const [selectedColumns, setSelectedColumns] = useState(['Transaction ID', 'Amount', 'Status']);

    const handleAddField = (field) => {
        if (!selectedColumns.includes(field)) {
            setSelectedColumns([...selectedColumns, field]);
        }
    };

    const handleRemoveField = (field) => {
        setSelectedColumns(selectedColumns.filter(c => c !== field));
    };

    // --- Component for the Column List Item ---
    const ColumnListItem = ({ name, actionIcon, onActionClick, isSelected }) => (
        <li className={`list-group-item d-flex justify-content-between align-items-center ${isSelected ? 'list-group-item-info' : ''}`}>
            {name}
            <button 
                type="button" 
                className={`btn btn-sm p-0 ${isSelected ? 'text-danger' : 'text-primary'}`} 
                onClick={onActionClick}
            >
                {actionIcon}
            </button>
        </li>
    );

    // --- Component for the Bootstrap Risk Score Progress Bar (Slider Replacement) ---
    const RiskScoreProgress = () => (
        <div className="mb-3">
            <label htmlFor="riskScoreRange" className="form-label d-block">
                Risk Score Range
            </label>
            <div className="d-flex justify-content-between small text-muted">
                <span>Low</span>
                <span>High</span>
            </div>
            {/* Using a standard Bootstrap Progress Bar to visually represent the range */}
            <div className="progress" style={{ height: '10px' }}>
                {/* Example: setting the progress to the middle 50% */}
                <div 
                    className="progress-bar bg-info" 
                    role="progressbar" 
                    style={{ width: '50%', marginLeft: '25%' }} 
                    aria-valuenow="50" 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                ></div>
            </div>
            {/* Simple static text to show the range visualization is omitted in plain Bootstrap */}
        </div>
    );

    return (
        <div className="container p-4">
            <div className="card border-0 shadow-sm p-4">
                
                {/* ======================================= 1. Report Basic Details ======================================= */}
                <h5 className="mb-4 text-primary fw-bold">Report Basic Details</h5>
                <div className="row g-4 mb-5">
                    
                    {/* Report Name */}
                    <div className="col-md-6">
                        <label htmlFor="reportName" className="form-label">Report Name <span className="text-danger">*</span></label>
                        <input
                            type="text"
                            className="form-control"
                            id="reportName"
                            placeholder="Enter report name"
                            value={reportName}
                            onChange={(e) => setReportName(e.target.value)}
                        />
                    </div>

                    {/* Report Type (PrimeReact Dropdown) */}
                    <div className="col-md-6">
                        <label htmlFor="reportType" className="form-label">Report Type <span className="text-danger">*</span></label>
                        <Dropdown
                            value={reportType}
                            options={reportTypeOptions}
                            onChange={(e) => setReportType(e.value)}
                            placeholder="Select report type"
                            className="w-100 p-dropdown-sm" // PrimeReact class for full width
                            optionLabel="label"
                        />
                    </div>
                    
                    {/* Report Description */}
                    <div className="col-12">
                        <label htmlFor="reportDescription" className="form-label">Report Description</label>
                        <textarea
                            className="form-control"
                            id="reportDescription"
                            rows="2"
                            placeholder="Enter report description (optional)"
                        ></textarea>
                    </div>

                    {/* Frequency Radio Buttons */}
                    <div className="col-12">
                        <label className="form-label d-block">Frequency</label>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="frequency"
                                id="onDemand"
                                value="On-Demand"
                                checked={frequency === 'On-Demand'}
                                onChange={(e) => setFrequency(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="onDemand">On-Demand</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="frequency"
                                id="scheduled"
                                value="Scheduled"
                                checked={frequency === 'Scheduled'}
                                onChange={(e) => setFrequency(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="scheduled">Scheduled</label>
                        </div>
                    </div>
                </div>

                {/* ======================================= 2. Data Source & Filters ======================================= */}
                <h5 className="mb-4 text-primary fw-bold">Data Source & Filters</h5>
                <div className="row g-4 mb-5">
                    
                    {/* Time Range (PrimeReact Dropdown) */}
                    <div className="col-md-4">
                        <label htmlFor="timeRange" className="form-label">Time Range</label>
                        <Dropdown
                            value={timeRange}
                            options={timeRangeOptions}
                            onChange={(e) => setTimeRange(e.value)}
                            className="w-100 p-dropdown-sm"
                            optionLabel="label"
                        />
                    </div>

                    {/* Regions List (Multiselect-style representation using list-group) */}
                    <div className="col-md-4">
                        <label className="form-label">Regions</label>
                        <div className="list-group border-0 small p-1" style={{ maxHeight: '120px', overflowY: 'auto' }}>
                            {regions.map(region => (
                                <span key={region} className="list-group-item list-group-item-action py-1 px-2 border-0">
                                    {region}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Business Lines List (Multiselect-style representation using list-group) */}
                    <div className="col-md-4">
                        <label className="form-label">Business Lines</label>
                        <div className="list-group border-0 small p-1" style={{ maxHeight: '120px', overflowY: 'auto' }}>
                            {businessLines.map(line => (
                                <span key={line} className="list-group-item list-group-item-action py-1 px-2 border-0">
                                    {line}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Risk & Compliance Flags Checkboxes */}
                    <div className="col-12 mt-4">
                        <label className="form-label d-block">Risk & Compliance Flags</label>
                        {['AML', 'KYC', 'Sanctions', 'Fraud', 'PEP'].map(flag => (
                            <div key={flag} className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id={flag} value={flag} />
                                <label className="form-check-label" htmlFor={flag}>{flag}</label>
                            </div>
                        ))}
                    </div>

                    {/* Transaction Amount Range */}
                    <div className="col-md-6 row g-2">
                        <label className="form-label d-block col-12 mb-0">Transaction Amount Range</label>
                        <div className="col-6">
                            <input type="number" className="form-control" placeholder="Min" />
                        </div>
                        <div className="col-6">
                            <input type="number" className="form-control" placeholder="Max" />
                        </div>
                    </div>

                    {/* Risk Score Range (Using custom component with Bootstrap Progress) */}
                    <div className="col-md-6">
                        <RiskScoreProgress />
                    </div>
                </div>

                {/* ======================================= 3. Columns & Fields Selection ======================================= */}
                <h5 className="mb-4 text-primary fw-bold">Columns & Fields Selection</h5>
                <div className="row g-4">
                    
                    {/* Available Fields (Source List) */}
                    <div className="col-md-6">
                        <label className="form-label">Available Fields</label>
                        <div className="card p-3">
                            <ul className="list-group list-group-flush">
                                {availableFields.map(group => (
                                    <React.Fragment key={group.group}>
                                        <li className="list-group-item bg-light fw-bold">{group.group}</li>
                                        {group.fields.map(field => (
                                            <ColumnListItem
                                                key={field}
                                                name={field}
                                                actionIcon={<Plus />}
                                                onActionClick={() => handleAddField(field)}
                                                isSelected={selectedColumns.includes(field)}
                                            />
                                        ))}
                                    </React.Fragment>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Selected Columns (Destination List) */}
                    <div className="col-md-6">
                        <label className="form-label">Selected Columns <span className="badge bg-secondary">{selectedColumns.length} selected</span></label>
                        <div className="card p-3">
                            <ul className="list-group list-group-flush">
                                {selectedColumns.map(field => (
                                    <ColumnListItem
                                        key={field}
                                        name={field}
                                        actionIcon={<XLg />}
                                        onActionClick={() => handleRemoveField(field)}
                                        isSelected={true}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                
                {/* Form Footer / Submit Button (Optional) */}
                <div className="d-flex justify-content-end mt-5 pt-3 border-top">
                     <button type="submit" className="btn btn-primary">Generate Report</button>
                </div>

            </div>
        </div>
    );
}

export default ReportBuilderForm;