import React, { useState } from 'react';
import CustomChip from '../../../components/CustomChip';
import { Dropdown } from "primereact/dropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import reset from "../../../assets/reset.png"
import filter from "../../../assets/filter.png"


const TransactionFilterSection = () => {
    // --- State Management for Filters ---
    const [selectedType, setSelectedType] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [selectedRisk, setSelectedRisk] = useState(null);
    const [selectedDateRange, setSelectedDateRange] = useState(null);
    const [minAmount, setMinAmount] = useState('');
    const [maxAmount, setMaxAmount] = useState('');

    // Active filters state to display chips
    const [activeFilters, setActiveFilters] = useState([
        { label: "High Risk", id: 'risk' },
        { label: "Wire Transfer", id: 'type' },
        { label: "Last 7 Days", id: 'date' },
    ]);

    // Dummy Options (Update with your actual data)
    const filterOptions = [
        { name: "All Types", code: "all" },
        // ... more options
    ];

    // --- Handlers ---
    const handleSaveFilter = () => {
        console.log("Saving filter...");
    };

    const handleReset = () => {
        // Logic to clear all filters
        setSelectedType(null);
        setSelectedStatus(null);
        setSelectedRisk(null);
        setSelectedDateRange(null);
        setMinAmount('');
        setMaxAmount('');
        setActiveFilters([]);
    };

    const handleDeleteChip = (id) => {
        setActiveFilters(prev => prev.filter(filter => filter.id !== id));

    };

    return (
        <div className='transaction-filter mt-3'>
            <div className="card p-3 mb-4">


                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="m-0 heading-blue-20">Transaction Filters</h5>
                    <div className="d-flex gap-2">
                        <button className=" btn btn-primary lightblue-btn ">
                            <img className="mb-1 pe-1" src={filter} alt="Add" style={{ width: 18, height: 18 }} />
                            Save Filter
                        </button>

                        <button type="button" className="btn btn-primary btn-outline-secondary transparent-btn bg-grey"> <img className="mb-1 pe-1" src={reset} alt="Add" style={{ width: 18, height: 18 }} />Reset</button>

                    </div>
                </div>

                {/* 2. Filter Dropdowns Row - Using flex-fill for equal width */}
                <div className="d-flex gap-3 align-items-end mb-3">

                    {/* Transaction Type */}
                    <div className="flex-fill">
                        <label htmlFor="transactionType" className="form-label text-muted">Transaction Type</label>
                        <Dropdown
                            id="transactionType"
                            value={selectedType}
                            options={filterOptions}
                            optionLabel="name"
                            placeholder="All Types"
                            style={{ width: '100%' }}
                            onChange={(e) => setSelectedType(e.value)}
                        />
                    </div>

                    {/* Status */}
                    <div className="flex-fill">
                        <label htmlFor="status" className="form-label text-muted">Status</label>
                        <Dropdown
                            id="status"
                            value={selectedStatus}
                            options={filterOptions} // Placeholder options
                            optionLabel="name"
                            placeholder="All Statuses"
                            style={{ width: '100%' }}
                            onChange={(e) => setSelectedStatus(e.value)}
                        />
                    </div>

                    {/* Risk Level */}
                    <div className="flex-fill">
                        <label htmlFor="riskLevel" className="form-label text-muted">Risk Level</label>
                        <Dropdown
                            id="riskLevel"
                            value={selectedRisk}
                            options={filterOptions} // Placeholder options
                            optionLabel="name"
                            placeholder="All Levels"
                            style={{ width: '100%' }}
                            onChange={(e) => setSelectedRisk(e.value)}
                        />
                    </div>

                    {/* Date Range (Date Picker) */}
                    <div className="flex-fill">
                        <label htmlFor="dateRange" className="form-label text-muted">Date Range</label>
                        <DatePicker
                            id="dateRange"
                            selected={selectedDateRange}
                            onChange={(date) => setSelectedDateRange(date)}
                            dateFormat="MM/dd/yyyy"
                            placeholderText="mm/dd/yyyy"
                            className="form-control"
                            style={{ width: '100%' }}
                            popperPlacement="bottom-start"
                        />
                    </div>

                    {/* Amount Range (Min/Max Input Fields) */}
                    <div className="flex-fill">
                        <label className="form-label text-muted">Amount Range</label>
                        <div className="d-flex gap-1">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Min"
                                value={minAmount}
                                onChange={(e) => setMinAmount(e.target.value)}
                            />
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Max"
                                value={maxAmount}
                                onChange={(e) => setMaxAmount(e.target.value)}
                            />
                        </div>
                    </div>

                </div>

                {/* 3. Active Filters Chips (using CustomChip with onDelete) */}
                <div className="d-flex align-items-center gap-2 flex-wrap">
                    {/* We no longer need the 'Active Filters:' label as the chips are immediately below */}
                    {activeFilters.map((filter, index) => (
                        <CustomChip
                            key={index}
                            label={filter.label}
                            // This is the key change: passing onDelete makes it closable/interactive
                            onClick={() => { }} // onClick is required for Material-UI to make the chip interactive
                            onDelete={() => handleDeleteChip(filter.id)}
                            // Use 'primary' color for a standard interactive look if desired, or 'default'
                            color="default"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TransactionFilterSection;