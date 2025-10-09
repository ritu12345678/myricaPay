import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import CustomChip from "../../../../components/ChipCustom";

const FilterSection = () => {
  // State
  const [analyticsType, setAnalyticsType] = useState(null);
  const [timeRange, setTimeRange] = useState(null);
  const [region, setRegion] = useState(null);
  const [selectedBusinessLine, setSelectedBusinessLine] = useState(null);
  const [currency, setCurrency] = useState(null);

  // Options
  const analyticsOptions = [
    { label: "Risk Analysis", value: "risk" },
    { label: "Compliance Overview", value: "compliance" },
    { label: "Transaction Trends", value: "transaction" },
  ];

  const timeRanges = [
    { label: "Last 7 Days", value: "7d" },
    { label: "Last 30 Days", value: "30d" },
    { label: "Last Quarter", value: "3m" },
  ];

  const regions = [
    { label: "North America", value: "NA" },
    { label: "Europe", value: "EU" },
    { label: "Asia", value: "AS" },
  ];

  const businessLines = ["Retail", "Digital", "Corp"];

  const currencies = [
    { label: "USD", value: "USD" },
    { label: "EUR", value: "EUR" },
    { label: "INR", value: "INR" },
  ];

  const handleReset = () => {
    setAnalyticsType(null);
    setTimeRange(null);
    setRegion(null);
    setSelectedBusinessLine(null);
    setCurrency(null);
  };

  return (
    
    <div className="card p-3 mb-4 mt-3">
      <div className="d-flex flex-wrap gap-4 align-items-end">
        {/* 1️⃣ Analytics Type */}
        <div className="flex-fill w-14">
          <label className="form-label fw-medium">Analytics Type</label>
          <Dropdown
            value={analyticsType}
            options={analyticsOptions}
            optionLabel="label"
            placeholder="Select Type"
            className="w-100"
            onChange={(e) => setAnalyticsType(e.value)}
          />
        </div>

        {/* 2️⃣ Time Range */}
        <div className="flex-fill w-14">
          <label className="form-label fw-medium">Time Range</label>
          <Dropdown
            value={timeRange}
            options={timeRanges}
            optionLabel="label"
            placeholder="Select Range"
            className="w-100"
            onChange={(e) => setTimeRange(e.value)}
          />
        </div>

        {/* 3️⃣ Geographic Region */}
        <div className="flex-fill w-14">
          <label className="form-label fw-medium">Geographic Region</label>
          <Dropdown
            value={region}
            options={regions}
            optionLabel="label"
            placeholder="Select Region"
            className="w-100"
            onChange={(e) => setRegion(e.value)}
          />
        </div>

        {/* 4️⃣ Business Line Chips */}
        <div className="flex-fill w-16">
          <label className="form-label fw-medium">Business Line</label>
          <div className="d-flex gap-2 flex-wrap mt-2">
            {businessLines.map((line) => (
              <CustomChip
                key={line}
                label={line}
                type={selectedBusinessLine === line ? "Selected" : line}
                clickable
                onClick={() => setSelectedBusinessLine(line)}
              />
            ))}
          </div>
        </div>

        {/* 5️⃣ Currency */}
        <div className="flex-fill w-14">
          <label className="form-label fw-medium">Currency</label>
          <Dropdown
            value={currency}
            options={currencies}
            optionLabel="label"
            placeholder="Select Currency"
            className="w-100"
            onChange={(e) => setCurrency(e.value)}
          />
        </div>

        {/* 6️⃣ Export Button */}
        <div className="flex-fill w-auto">
          <button className="btn btn-primary lightblue-btn d-flex align-items-center gap-2">
            <DownloadRoundedIcon style={{ fontSize: 28 }} />
            Export
          </button>
        </div>
      </div>
    </div>
  
  );
};

export default FilterSection;
