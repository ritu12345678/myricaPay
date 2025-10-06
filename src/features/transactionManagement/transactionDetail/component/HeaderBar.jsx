import React from 'react';
import { Button } from 'primereact/button'; // Still using PrimeReact Button for functionality

const HeaderBar = ({ data }) => {
  return (
    // Bootstrap row to contain the title/status and the buttons
    <div className="row align-items-center mb-4">
      
      {/* Left Column: Transaction ID and Status */}
      <div className="col-md-8 d-flex align-items-center">
        <h1 className="h4 text-primary m-0">
          Transaction Management Detail: 
          <span className="fw-normal">{data.id}</span>
          
          {/* Badge for Status */}
          <span className={`badge ms-2 ${data.status === 'Completed' ? 'bg-success' : 'bg-warning'}`}>
            {data.status}
          </span>
        </h1>
      </div>

      {/* Right Column: Action Buttons */}
      <div className="col-md-4 d-flex justify-content-end">
        {/* PrimeReact Button with Bootstrap-like styling classes */}
        <Button label="Print" icon="pi pi-print" className="p-button-text me-2 p-button-sm" />
        <Button label="Export" icon="pi pi-file-export" className="p-button-text me-2 p-button-sm" />
        <Button label="Edit" icon="pi pi-pencil" className="p-button-primary p-button-sm" />
      </div>
    </div>
  );
};

export default HeaderBar;