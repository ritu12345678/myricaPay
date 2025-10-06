import React, { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import Divider from '@mui/material/Divider';
// import PrioritySection from './PrioritySection';

// --- Sample Data ---
const users = [
  { label: 'john.smith@email.com', value: 'john.smith@email.com' },
  { label: 'maria.garcia@email.com', value: 'maria.garcia@email.com' },
  { label: 'robert.j@email.com', value: 'robert.j@email.com' },
];

const roles = [
  { label: 'Admin', value: 'admin' },
  { label: 'Editor', value: 'editor' },
  { label: 'Viewer', value: 'viewer' },
  { label: 'Moderator', value: 'moderator' },
  { label: 'Contributor', value: 'contributor' },
];

const agents = [
  { label: 'Sarah Johnson', value: 'sarah' },
  { label: 'Michael Brown', value: 'michael' },
  { label: 'David Wilson', value: 'david' },
];

const initialFormData = {
  userEmail: null,
  role: null,
  description: '',
  assignedAgent: null,
  priority: 'medium',
};

const AddUserForm = ({ show, onClose, onSubmit }) => {
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (show) {
      setFormData(initialFormData);
    }
  }, [show]);

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCancel = () => {
    setFormData(initialFormData);
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <form id="ticket-form" onSubmit={handleSubmit}>
      {/* 1. Assign Role Section */}
      <div className="card mb-2">
        <div className="card-body">
          <h6 className="fw-bold fs-18 mb-3">Assign Role to User</h6>
          <Divider />

          {/* Select User */}
          <div className="mb-3">
            <label htmlFor="userEmail" className="form-label">Select User</label>
            <Dropdown
              id="userEmail"
              value={formData.userEmail}
              options={users}
              onChange={(e) => updateFormData('userEmail', e.value)}
              placeholder="Select User"
              className="w-100"
              filter
              showClear
            />
          </div>

          {/* Select Role */}
          <div className="mb-3">
            <label htmlFor="role" className="form-label">Select Role</label>
            <Dropdown
              id="role"
              value={formData.role}
              options={roles}
              onChange={(e) => updateFormData('role', e.value)}
              placeholder="Select Role"
              className="w-100"
            />
          </div>
        </div>
      </div>

     
      <footer>
        <div className="card mt-4 px-0">
          <div className="d-flex gap-2 px-3 py-3">
            <div className="flex-grow-1">
              <Button
                label="Cancel"
                type="button"
                severity="secondary"
                outlined
                onClick={handleCancel}
                className="w-100"
              />
            </div>
            <div className="flex-grow-1">
              <Button
                label="Submit"
                type="submit"
                icon="pi pi-check"
                iconPos="right"
                form="ticket-form"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </footer>
    </form>
  );
};

export default AddUserForm;
