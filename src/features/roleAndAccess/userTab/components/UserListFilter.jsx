import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import 'react-datepicker/dist/react-datepicker.css';
import exporticon from "../../../../assets/exporticon.png";

const UserListFilter = () => {
  // ✅ Dropdown options
  const statusOptions = [
    { name: 'All Status', code: 'all' },
    { name: 'Active', code: 'active' },
    { name: 'Inactive', code: 'inactive' },
    { name: 'Pending', code: 'pending' },
  ];

  const roleOptions = [
    { name: 'All Roles', code: 'all' },
    { name: 'Admin', code: 'admin' },
    { name: 'Editor', code: 'editor' },
    { name: 'Viewer', code: 'viewer' },
    { name: 'Moderator', code: 'moderator' },
    { name: 'Contributor', code: 'contributor' },
  ];

  // ✅ State
  const [status, setStatus] = useState(statusOptions[0]);
  const [role, setRole] = useState(roleOptions[0]);

  // ✅ Handlers
  const handleExport = () => {
    console.log('Export clicked');
  };

  return (
    <div className="overview-filter mt-1 mb-3">
      <div className="row align-items-center">
        <div className="col-md-8 d-flex align-items-center flex-nowrap gap-2">
          {/* Status Filter */}
          <Dropdown
            value={status}
            options={statusOptions}
            optionLabel="name"
            onChange={(e) => setStatus(e.value)}
            style={{ minWidth: 150 }}
          />

          {/* Role Filter */}
          <Dropdown
            value={role}
            options={roleOptions}
            optionLabel="name"
            onChange={(e) => setRole(e.value)}
            style={{ minWidth: 150 }}
          />

          {/* Export Button */}
          <button
            type="button"
            className="btn btn-primary btn-outline-secondary transparent-btn"
            onClick={handleExport}
          >
            <img
              className="mb-1 pe-1"
              src={exporticon}
              alt="Export"
              style={{ width: 18, height: 18 }}
            />
            Export
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserListFilter;
