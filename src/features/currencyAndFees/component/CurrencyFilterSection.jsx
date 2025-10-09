import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import 'react-datepicker/dist/react-datepicker.css';

import exporticon from "../../../assets/exporticon.png"
import ExportDataModal from '../../../components/ExportDataModal';
const CurrencyFilterSection = ({ openCanvas }) => {
  const createdOptions = [
    { name: 'Created', code: 'created' },
    { name: 'Updated', code: 'updated' },
  ];

  const amountOptions = [
    { name: 'All Amounts', code: 'all' },
    { name: '< 100', code: 'lt100' },
    { name: '100 - 1,000', code: '100-1000' },
  ];

  const dueDateOptions = [
    { name: 'Any', code: 'any' },
    { name: 'Overdue', code: 'overdue' },
    { name: 'Due this week', code: 'week' },
  ];

  const moreOptions = [
    { name: 'More Filters', code: 'more' },
    { name: 'Custom', code: 'custom' },
  ];

  const [created, setCreated] = useState(createdOptions[0]); // default -> Created
  const [amount, setAmount] = useState(null);
  const [dueDate, setDueDate] = useState(null);
  const [more, setMore] = useState(null);
  const [showDataModal, setShowDataModal] = useState(false)
  const handleOpenDataModal = () => {
    setShowDataModal(true)
  }
  const handlecloseDataModal = () => {
    setShowDataModal(false)
  }
  const handleSaveFilter = () => {
    console.log('Save filter', { created, amount, dueDate, more });
  };

  const handleExport = () => {
    console.log('Export clicked');
  };

  return (
    <div className="currency-filter mt-1 mb-3">
      <div className="row align-items-center">
        {/* Left section: dropdowns + export */}
        <div className="col-md-8 d-flex align-items-center flex-nowrap gap-2">
          <Dropdown
            value={created}
            options={createdOptions}
            optionLabel="name"
            onChange={(e) => setCreated(e.value)}
            style={{ minWidth: 130 }}
          />

          <Dropdown
            value={amount}
            options={amountOptions}
            optionLabel="name"
            placeholder="Amount"
            onChange={(e) => setAmount(e.value)}
            style={{ minWidth: 130 }}
          />

          <Dropdown
            value={dueDate}
            options={dueDateOptions}
            optionLabel="name"
            placeholder="Due Date"
            onChange={(e) => setDueDate(e.value)}
            style={{ minWidth: 150 }}
          />

          <Dropdown
            value={more}
            options={moreOptions}
            optionLabel="name"
            placeholder="More Filters"
            onChange={(e) => setMore(e.value)}
            style={{ minWidth: 140 }}
          />
          <button type="button" className="btn btn-primary btn-outline-secondary transparent-btn " onClick={handleOpenDataModal}> <img className="mb-1 pe-1" src={exporticon} alt="Add" style={{ width: 18, height: 18 }} />Export</button>
        </div>

        {/* Right section: save filter */}
        <div className="col-md-4 d-flex justify-content-end">
          <button
            onClick={openCanvas}
            className="btn btn-primary lightblue-btn"
            type="button"
          >

            <span className='fs-18 fw-bold me-2'>+</span>
            Add Corridor
          </button>
        </div>
      </div>
      <ExportDataModal open={showDataModal} handleClose={handlecloseDataModal} />
    </div>
  );
};

export default CurrencyFilterSection;
