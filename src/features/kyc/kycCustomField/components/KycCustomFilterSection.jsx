import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import 'react-datepicker/dist/react-datepicker.css';

import exporticon from "../../../../assets/exporticon.png"
const KycCustomFilterSection = ({ openCanvas }) => {
  const createdOptions = [
    { name: 'Created', code: 'created' },
    { name: 'Updated', code: 'updated' },
  ];

  const statusOptions = [
    { name: 'All Amounts', code: 'all' },
    { name: 'Active', code: 'active' },
    { name: 'InActive', code: 'Inactive' },
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
    <div className="currency-filter mt-1 mb-3">
      <div className="row align-items-center">
        {/* Left section: dropdowns + export */}
        <div className="col-md-8 d-flex align-items-center flex-nowrap gap-2">
              <Dropdown
            value={amount}
            options={statusOptions}
            optionLabel="name"
            placeholder="Status"
            onChange={(e) => setAmount(e.value)}
            style={{ minWidth: 130 }}
          />
          <Dropdown
            value={created}
            options={createdOptions}
            optionLabel="name"
            onChange={(e) => setCreated(e.value)}
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
          
        </div>

      
      </div>
    </div>
  );
};

export default KycCustomFilterSection;
