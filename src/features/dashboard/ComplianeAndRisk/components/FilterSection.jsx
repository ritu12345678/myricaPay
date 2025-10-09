import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { ProgressBar } from "primereact/progressbar";
import CustomChip from "../../../../components/ChipCustom";

const FilterSection = () => {
    // State
    const [selectedRisk, setSelectedRisk] = useState(null);
    const [selectedCompliance, setSelectedCompliance] = useState(null);
    const [selectedRegulation, setSelectedRegulation] = useState(null);
    const [selectedPeriod, setSelectedPeriod] = useState(null);
    const [progress, setProgress] = useState(75);

    // Options
    const riskLevels = [
        { label: "High", color: "danger" },
        { label: "Medium", color: "warning" },
        { label: "Low", color: "success" },
    ];

    const complianceStatuses = ["Compliant", "Non-Compliant", "Under Review"];
    const regulationTypes = [
        { name: "KYC" },
        { name: "AML" },
        { name: "Data Protection" },
    ];
    const periods = [
        { label: "Last 7 Days", value: "7d" },
        { label: "Last 30 Days", value: "30d" },
        { label: "Last Quarter", value: "3m" },
    ];

    const handleReset = () => {
        setSelectedRisk(null);
        setSelectedCompliance(null);
        setSelectedRegulation(null);
        setSelectedPeriod(null);
        setProgress(75);
    };

    return (
        <div className="card p-2 mb-4 mt-3 ">


            {/* Filter Controls */}
            <div className="d-flex flex-wrap gap-4">
                {/* 1️⃣ By Risk Level */}
                <div className="flex-fill w-16">
                    <label className="form-label fw-medium">By Risk Level</label>
                    <div className="d-flex gap-2 flex-wrap mt-2">
                        {riskLevels.map((risk) => (
                            <CustomChip
                                key={risk.label}
                                label={risk.label}
                                type={
                                    selectedRisk === risk.label
                                        ? "Selected"
                                        : risk.label // fallback style
                                }
                                clickable
                                onClick={() => setSelectedRisk(risk.label)}
                            // style={{
                            //   backgroundColor:
                            //     risk.label === "High"
                            //       ? "#f8d7da"
                            //       : risk.label === "Medium"
                            //       ? "#fff3cd"
                            //       : "#d4edda",
                            //   color:
                            //     risk.label === "High"
                            //       ? "#721c24"
                            //       : risk.label === "Medium"
                            //       ? "#856404"
                            //       : "#155724",
                            // }}
                            />
                        ))}
                    </div>
                </div>

                {/* 2️⃣ By Compliance Status */}
                <div className="flex-fill w-16">
                    <label className="form-label fw-medium">By Compliance Status</label>

                    <Dropdown
                        value={selectedRegulation}
                        options={regulationTypes}
                        optionLabel="name"
                        placeholder="Select Regulation"
                        className="w-100"
                        onChange={(e) => setSelectedRegulation(e.value)}
                    />

                </div>

                {/* 3️⃣ By Regulation Type */}
                <div className="flex-fill w-16">
                    <label className="form-label fw-medium">By Regulation Type</label>
                    <Dropdown
                        value={selectedRegulation}
                        options={regulationTypes}
                        optionLabel="name"
                        placeholder="Select Regulation"
                        className="w-100"
                        onChange={(e) => setSelectedRegulation(e.value)}
                    />
                </div>

                {/* 4️⃣ By Time Period */}
                <div className="flex-fill w-16">
                    <label className="form-label fw-medium">By Time Period</label>
                    <Dropdown
                        value={selectedPeriod}
                        options={periods}
                        optionLabel="label"
                        placeholder="Select Period"
                        className="w-100"
                        onChange={(e) => setSelectedPeriod(e.value)}
                    />
                </div>

                {/* 5️⃣ Progress Bar */}
                <div className="flex-fill w-20">
                    <label className="form-label fw-medium">Risk Score Range</label>
                    <div className="d-flex flex-column align-items-start mt-2">
                        <ProgressBar
                            value={progress}
                            style={{ height: "10px", width: "100%" }}
                        />
                        <small className="text-muted mt-1">{progress}% Completed</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterSection;
