import React from 'react';
import BusinessIcon from '@mui/icons-material/Business';
import { Typography } from '@mui/material';

const AddressCard = () => {
  return (
    <div className="card mb-4 shadow-sm ">
      <div className="card-body">
        <div className="d-flex align-items-center mb-3">
          <BusinessIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h6" component="h2" className="mb-0 fw-bold">
            Company Address
          </Typography>
        </div>
        <form>
          <div className="mb-3">
            <label className="form-label text-muted small">Street Address</label>
            <input type="text" className="form-control" placeholder="123 Financial District Boulevard" defaultValue="123 Financial District Boulevard" />
          </div>
          <div className="row mb-3">
            <div className="col">
              <div className="form-group">
                <label className="form-label text-muted small">City</label>
                <input type="text" className="form-control" placeholder="New York" defaultValue="New York" />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label className="form-label text-muted small">State</label>
                <input type="text" className="form-control" placeholder="NY" defaultValue="NY" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label className="form-label text-muted small">ZIP Code</label>
                <input type="text" className="form-control" placeholder="10004" defaultValue="10004" />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label className="form-label text-muted small">Country</label>
                <input type="text" className="form-control" placeholder="United States" defaultValue="United States" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressCard;