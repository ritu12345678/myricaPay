import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Slider } from 'primereact/slider';

const FilterBar = ({ onChange }) => {
  const corridorOptions = [
    { label: 'All Corridors', value: 'all' },
    { label: 'USA > Mexico', value: 'us-mx' },
    { label: 'UK > Nigeria', value: 'uk-ng' },
    { label: 'USA > India', value: 'us-in' },
    { label: 'UAE > Pakistan', value: 'ae-pk' },
  ];
  const businessLineOptions = [
    { label: 'Retail', value: 'retail' },
    { label: 'Digital', value: 'digital' },
    { label: 'Corporate', value: 'corporate' },
  ];
  const transactionTypeOptions = [
    { label: 'All Types', value: 'all' },
    { label: 'P2P', value: 'p2p' },
    { label: 'Remittance', value: 'remittance' },
    { label: 'Bill Pay', value: 'billpay' },
  ];
  const timePeriodOptions = [
    { label: 'Last 24 Hours', value: '24h' },
    { label: 'Last 7 Days', value: '7d' },
    { label: 'Last 30 Days', value: '30d' },
    { label: 'This Quarter', value: 'quarter' },
  ];

  const [filters, setFilters] = useState({
    corridor: corridorOptions[0].value,
    businessLine: businessLineOptions[0].value,
    transactionType: transactionTypeOptions[0].value,
    timePeriod: timePeriodOptions[0].value,
    riskScore: 50,
  });

  const update = (partial) => {
    const next = { ...filters, ...partial };
    setFilters(next);
    onChange?.(next);
  };

  return (
    <div className="bg-white border rounded-3 p-3 mb-3">
      <div className="row g-3 align-items-center">
        <div className="col-12 col-sm-6 col-md-3">
          <label className="form-label text-secondary small mb-1">By Corridor</label>
          <Dropdown value={filters.corridor} onChange={(e) => update({ corridor: e.value })} options={corridorOptions} placeholder="All Corridors" className="w-100" showClear />
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <label className="form-label text-secondary small mb-1">By Business Line</label>
          <Dropdown value={filters.businessLine} onChange={(e) => update({ businessLine: e.value })} options={businessLineOptions} className="w-100" />
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <label className="form-label text-secondary small mb-1">By Transaction Type</label>
          <Dropdown value={filters.transactionType} onChange={(e) => update({ transactionType: e.value })} options={transactionTypeOptions} className="w-100" />
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <label className="form-label text-secondary small mb-1">By Time Period</label>
          <Dropdown value={filters.timePeriod} onChange={(e) => update({ timePeriod: e.value })} options={timePeriodOptions} className="w-100" />
        </div>
      </div>

      <div className="row g-3 align-items-center mt-3">
        <div className="col-12 col-lg-6 ms-auto">
          <div className="d-flex align-items-center gap-3">
            <div className="text-secondary small" style={{ minWidth: 90 }}>By Risk Score</div>
            <div className="flex-grow-1">
              <Slider value={filters.riskScore} onChange={(e) => update({ riskScore: e.value })} className="w-100" />
            </div>
            <div className="fw-semibold" style={{ minWidth: 50 }}>{filters.riskScore}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
