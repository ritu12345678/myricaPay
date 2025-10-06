import React, { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import Divider from '@mui/material/Divider';
import PrioritySection from './PrioritySection';

// --- Sample Data ---
const users = [
  { label: 'john.smith@email.com', value: 'john.smith@email.com' },
  { label: 'maria.garcia@email.com', value: 'maria.garcia@email.com' },
  { label: 'robert.j@email.com', value: 'robert.j@email.com' }
];

const issueTypes = [
  { label: 'Login Issue', value: 'login' },
  { label: 'Payment Issue', value: 'payment' },
  { label: 'Technical Error', value: 'technical' }
];

const agents = [
  { label: 'Sarah Johnson', value: 'sarah' },
  { label: 'Michael Brown', value: 'michael' },
  { label: 'David Wilson', value: 'david' }
];

const initialFormData = {
  userEmail: null,
  issueType: null,
  description: '',
  assignedAgent: null,
  priority: 'medium'
};

const TicketForm = ({ show, onClose, onSubmit }) => {
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (show) {
      setFormData(initialFormData);
    }
  }, [show]);

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
      {/* 1. Information Section */}
      <div className="card mb-2">
        <div className="card-body">
          <h6 className="fw-bold fs-18 mb-3">Information</h6>
          <Divider />

          {/* User Email */}
          <div className="mb-3">
            <label htmlFor="userEmail" className="form-label">User Email</label>
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

          {/* Issue Type */}
          <div className="mb-3">
            <label htmlFor="issueType" className="form-label">Issue Type</label>
            <Dropdown
              id="issueType"
              value={formData.issueType}
              options={issueTypes}
              onChange={(e) => updateFormData('issueType', e.value)}
              placeholder="Select Issue Type"
              className="w-100"
            />
          </div>

          {/* Description */}
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <InputTextarea
              id="description"
              rows={4}
              value={formData.description}
              onChange={(e) => updateFormData('description', e.target.value)}
              className="w-100"
              autoResize
            />
          </div>
        </div>
      </div>

      {/* 2. Agent Selection */}
      <div className="card mb-2">
        <div className="card-body">
          <h6 className="fw-bold fs-18 mb-3">Agent Selection</h6>
          <Divider />
          <div className="mb-3">
            <label htmlFor="assignedAgent" className="form-label">Assign Agent</label>
            <Dropdown
              id="assignedAgent"
              value={formData.assignedAgent}
              options={agents}
              onChange={(e) => updateFormData('assignedAgent', e.value)}
              placeholder="Select Agent"
              className="w-100"
            />
          </div>
        </div>
      </div>

      {/* 3. Priority Section */}
      <PrioritySection formData={formData} updateFormData={updateFormData} />

      {/* Footer */}
      <footer>
        <div className="card mt-4 px-0">
          <div className="d-flex gap-2 px-3 py-3">
            {/* Cancel Button */}
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
            {/* Submit Button */}
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

export default TicketForm;
