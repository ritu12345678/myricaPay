import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import 'react-datepicker/dist/react-datepicker.css';
import exporticon from "../../../../assets/exporticon.png"
const RoleListFilter = () => {
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

  const handleSaveFilter = () => {
    console.log('Save filter', { created, amount, dueDate, more });
  };

  const handleExport = () => {
    console.log('Export clicked');
  };

  return (
    <div className="overview-filter mt-1 mb-3">
      <div className="row align-items-center">
     
        <div className="col-md-8 d-flex align-items-center flex-nowrap gap-2 text-end">
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
          <button type="button" className="btn btn-primary btn-outline-secondary transparent-btn "> <img className="mb-1 pe-1" src={exporticon} alt="Add" style={{ width: 18, height: 18 }} />Export</button>
        </div>

        {/* Right section: save filter */}
     
      </div>
    </div>
  );
};

export default RoleListFilter;
