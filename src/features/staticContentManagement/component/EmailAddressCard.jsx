import React, { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography, IconButton } from '@mui/material';

// PrimeReact Imports
import { Dropdown } from 'primereact/dropdown';

const emailTypes = [
    { label: 'General', value: 'General' },
    { label: 'Support', value: 'Support' },
    { label: 'Billing', value: 'Billing' },
    { label: 'Other', value: 'Other' }
];

const EmailAddressesCard = () => {
  const [emails, setEmails] = useState([
    { id: 1, type: 'General', address: 'contact@fintechpro.com' },
    { id: 2, type: 'Support', address: 'support@fintechpro.com' },
  ]);
  const [nextId, setNextId] = useState(3);

  const handleAddEmail = () => {
    setEmails(prev => [...prev, { id: nextId, type: 'Other', address: '' }]);
    setNextId(prev => prev + 1);
  };

  const handleRemoveEmail = (id) => {
    setEmails(prev => prev.filter(email => email.id !== id));
  };

  const handleChange = (id, field, value) => {
    setEmails(prev =>
      prev.map(email => (email.id === id ? { ...email, [field]: value } : email))
    );
  };

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div className="d-flex align-items-center">
            <EmailIcon color="primary" sx={{ mr: 1 }} />
            <Typography variant="h6" component="h2" className="mb-0 fw-bold">
              Email Addresses
            </Typography>
          </div>
          <button type="button" className="btn btn-primary btn-sm d-flex align-items-center" onClick={handleAddEmail}>
            <AddIcon sx={{ fontSize: '1rem', mr: 0.5 }} /> Add Email
          </button>
        </div>
        <form>
          {emails.map(email => (
            <div key={email.id} className="input-group mb-3">
              {/* PrimeReact Dropdown Integration */}
              <Dropdown 
                value={email.type} 
                options={emailTypes} 
                onChange={(e) => handleChange(email.id, 'type', e.value)} 
                optionLabel="label" 
                placeholder="Select Type"
                className="p-inputtext-sm"
                style={{ width: '10rem', borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
              />

              <input
                type="email"
                className="form-control"
                value={email.address}
                onChange={(e) => handleChange(email.id, 'address', e.target.value)}
              />
              <span className="input-group-text p-0">
                <IconButton size="small" color="error" onClick={() => handleRemoveEmail(email.id)} title="Delete">
                  <DeleteIcon />
                </IconButton>
              </span>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default EmailAddressesCard;