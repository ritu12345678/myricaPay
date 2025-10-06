import React, { useState } from 'react';
import CallIcon from '@mui/icons-material/Call';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography, IconButton } from '@mui/material';

// PrimeReact Imports
import { Dropdown } from 'primereact/dropdown';

const phoneTypes = [
    { label: 'Main', value: 'Main' },
    { label: 'Customer Service', value: 'Customer Service' },
    { label: 'Support', value: 'Support' },
    { label: 'Other', value: 'Other' }
];

const PhoneNumbersCard = () => {
  const [phones, setPhones] = useState([
    { id: 1, type: 'Main', number: '+1 (555) 123-4567' },
    { id: 2, type: 'Customer Service', number: '+1 (555) 987-6543' },
  ]);
  const [nextId, setNextId] = useState(3);

  const handleAddPhone = () => {
    setPhones(prev => [...prev, { id: nextId, type: 'Other', number: '' }]);
    setNextId(prev => prev + 1);
  };

  const handleRemovePhone = (id) => {
    setPhones(prev => prev.filter(phone => phone.id !== id));
  };

  const handleChange = (id, field, value) => {
    setPhones(prev =>
      prev.map(phone => (phone.id === id ? { ...phone, [field]: value } : phone))
    );
  };

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div className="d-flex align-items-center">
            <CallIcon color="primary" sx={{ mr: 1 }} />
            <Typography variant="h6" component="h2" className="mb-0 fw-bold">
              Phone Numbers
            </Typography>
          </div>
          <button type="button" className="btn btn-primary btn-sm d-flex align-items-center" onClick={handleAddPhone}>
            <AddIcon sx={{ fontSize: '1rem', mr: 0.5 }} /> Add Phone
          </button>
        </div>
        <form>
          {phones.map(phone => (
            // Using Bootstrap's input-group for alignment
            <div key={phone.id} className="input-group mb-3"> 
              {/* PrimeReact Dropdown Integration */}
              <Dropdown 
                value={phone.type} 
                options={phoneTypes} 
                onChange={(e) => handleChange(phone.id, 'type', e.value)} 
                optionLabel="label" 
                placeholder="Select Type"
                className="p-inputtext-sm" // Use PrimeReact class for smaller size if desired
                style={{ width: '10rem', borderTopRightRadius: 0, borderBottomRightRadius: 0 }} // Bootstrap-like styling adjustments
              />

              <input
                type="text"
                className="form-control"
                value={phone.number}
                onChange={(e) => handleChange(phone.id, 'number', e.target.value)}
              />
              <span className="input-group-text p-0">
                <IconButton size="small" color="error" onClick={() => handleRemovePhone(phone.id)} title="Delete">
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

export default PhoneNumbersCard;