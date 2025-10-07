import React, { useMemo, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { ProgressBar } from "primereact/progressbar";
import { Slider } from "primereact/slider";

const FilterBar = () => {
  const corridors = useMemo(() => [
    { label: "All Corridors", value: "all" },
    { label: "USA > Mexico", value: "us-mx" },
    { label: "UK > Nigeria", value: "uk-ng" },
    { label: "UAE > Pakistan", value: "ae-pk" },
  ], []);

  const businessLines = useMemo(() => [
    { label: "Retail", value: "retail" },
    { label: "Digital", value: "digital" },
    { label: "Corporate", value: "corporate" },
  ], []);

  const txTypes = useMemo(() => [
    { label: "All Types", value: "all" },
    { label: "Transfers", value: "transfers" },
    { label: "Deposits", value: "deposits" },
    { label: "Withdrawals", value: "withdrawals" },
  ], []);

  const timePeriods = useMemo(() => [
    { label: "Last 24 Hours", value: "24h" },
    { label: "Last 7 Days", value: "7d" },
    { label: "Last 30 Days", value: "30d" },
    { label: "Year to Date", value: "ytd" },
  ], []);

  const [corridor, setCorridor] = useState(corridors[0].value);
  const [businessLine, setBusinessLine] = useState(businessLines[0].value);
  const [txType, setTxType] = useState(txTypes[0].value);
  const [timePeriod, setTimePeriod] = useState(timePeriods[0].value);
  const [riskScore, setRiskScore] = useState(50);

  return (
    <div className="card shadow-sm border-0">
      <div className="card-body p-3">
        <div className="d-flex align-items-center gap-3 flex-nowrap overflow-auto filter-row">
          {/* Corridor */}
          <div className="filter-item">
            <div className="small text-muted mb-1">By Corridor</div>
            <Dropdown
              value={corridor}
              onChange={(e) => setCorridor(e.value)}
              options={corridors}
              className="w-100 p-inputtext-sm"
              style={{ minWidth: 190 }}
            />
          </div>
          {/* Business Line */}
          <div className="filter-item">
            <div className="small text-muted mb-1">By Business Line</div>
            <Dropdown
              value={businessLine}
              onChange={(e) => setBusinessLine(e.value)}
              options={businessLines}
              className="w-100 p-inputtext-sm"
              style={{ minWidth: 170 }}
            />
          </div>
          {/* Transaction Type */}
          <div className="filter-item">
            <div className="small text-muted mb-1">By Transaction Type</div>
            <Dropdown
              value={txType}
              onChange={(e) => setTxType(e.value)}
              options={txTypes}
              className="w-100 p-inputtext-sm"
              style={{ minWidth: 170 }}
            />
          </div>
          {/* Time Period */}
          <div className="filter-item">
            <div className="small text-muted mb-1">By Time Period</div>
            <Dropdown
              value={timePeriod}
              onChange={(e) => setTimePeriod(e.value)}
              options={timePeriods}
              className="w-100 p-inputtext-sm"
              style={{ minWidth: 170 }}
            />
          </div>

          {/* Risk Score */}
          <div className="ms-auto d-flex align-items-center gap-2 risk-block">
            <div style={{ minWidth: 110 }} className="small text-muted">By Risk Score</div>
            <div className="flex-grow-1 px-2" style={{ minWidth: 220 }}>
              <Slider value={riskScore} onChange={(e) => setRiskScore(e.value)} className="w-100" />
              <div className="mt-2">
                <ProgressBar value={riskScore} showValue template={(options) => (<span>{options.value}%</span>)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
