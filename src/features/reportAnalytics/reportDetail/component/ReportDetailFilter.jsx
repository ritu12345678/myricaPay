import React, { useState } from 'react';
import CustomChip from '../../../../components/ChipCustom';
import { Dropdown } from "primereact/dropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import reset from "../../../assets/reset.png";
// import filter from "../../../assets/filter.png";

const ReportDetailFilter = () => {
    const [selectedType, setSelectedType] = useState(null);
    const [selectedRegion, setSelectedRegion] = useState(null);
    const [dateFrom, setDateFrom] = useState(null);
    const [dateTo, setDateTo] = useState(null);

    const [activeFilters, setActiveFilters] = useState([
        { label: "Transaction Report", id: 'type' },
        { label: "North America", id: 'region' },
        { label: "Last 7 Days", id: 'date' },
    ]);

    // Dummy Options (replace with actual data)
    const filterOptions = [
        { name: "All Types", code: "all" },
        { name: "Wire Transfer", code: "wire" },
        { name: "ACH Transfer", code: "ach" },
    ];

    const handleReset = () => {
        setSelectedType(null);
        setSelectedRegion(null);
        setDateFrom(null);
        setDateTo(null);
        setActiveFilters([]);
    };

    const handleDeleteChip = (id) => {
        setActiveFilters(prev => prev.filter(filter => filter.id !== id));
    };

    return (
        <div className='report-filter mt-3'>
            <div className="card p-3 mb-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="m-0 heading-blue-20">Report Parameters & Filters</h5>

                </div>

                {/* Filters Row */}
                <div className="d-flex gap-3 align-items-end mb-3">
                    {/* Transaction Type */}
                    <div className="flex-fill">
                        <label className="form-label text-muted">Transaction Type</label>
                        <Dropdown
                            value={selectedType}
                            options={filterOptions}
                            optionLabel="name"
                            placeholder="All Types"
                            style={{ width: '100%' }}
                            onChange={(e) => setSelectedType(e.value)}
                        />
                    </div>

                    {/* Region */}
                    <div className="flex-fill">
                        <label className="form-label text-muted">Region</label>
                        <Dropdown
                            value={selectedRegion}
                            options={filterOptions} // Replace with region options
                            optionLabel="name"
                            placeholder="All Regions"
                            style={{ width: '100%' }}
                            onChange={(e) => setSelectedRegion(e.value)}
                        />
                    </div>

                    {/* Date Range */}
                    <div className="flex-fill">
                        <label className="form-label text-muted">Date Range</label>
                        <div className="d-flex gap-2">
                            <DatePicker
                                selected={dateFrom}
                                onChange={(date) => setDateFrom(date)}
                                dateFormat="MM/dd/yyyy"
                                placeholderText="From"
                                className="form-control"
                            />
                            <DatePicker
                                selected={dateTo}
                                onChange={(date) => setDateTo(date)}
                                dateFormat="MM/dd/yyyy"
                                placeholderText="To"
                                className="form-control"
                            />
                        </div>
                    </div>
                </div>
                <div className="d-flex gap-2 mt-3">
                    <button className="btn btn-primary lightblue-btn">
                        Save As Template
                    </button>

                    <button type="button" className="btn btn-primary btn-outline-secondary blue-btn">

                        Update Report
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReportDetailFilter;
