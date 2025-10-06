import React, { useState } from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const initialHours = {
  Monday: { start: '09:00', end: '17:00', closed: false },
  Tuesday: { start: '09:00', end: '17:00', closed: false },
  Wednesday: { start: '09:00', end: '17:00', closed: false },
  Thursday: { start: '09:00', end: '17:00', closed: false },
  Friday: { start: '09:00', end: '17:00', closed: false },
  Saturday: { start: '', end: '', closed: true },
  Sunday: { start: '', end: '', closed: true },
};

const OfficeHoursCard = () => {
  const [hours, setHours] = useState(initialHours);

  const handleTimeChange = (day, field, value) => {
    setHours(prev => ({
      ...prev,
      [day]: { ...prev[day], [field]: value },
    }));
  };

  const handleToggleClosed = (day) => {
    setHours(prev => ({
      ...prev,
      [day]: { ...prev[day], closed: !prev[day].closed },
    }));
  };

  return (
    <div className="card mb-4 shadow-sm ">
      <div className="card-body">
        <div className="d-flex align-items-center mb-3">
          <AccessTimeIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h6" component="h2" className="mb-0 fw-bold">
            Office Hours
          </Typography>
        </div>
        <form>
          {Object.entries(hours).map(([day, time]) => (
            <div key={day} className="row mb-2 align-items-center">
              <div className="col-3">
                <label className="mb-0">{day}</label>
              </div>
              <div className="col-9">
                {time.closed ? (
                  <div className="d-flex align-items-center justify-content-between border rounded p-2 bg-light text-muted">
                    <span>Closed</span>
                    <IconButton size="small" onClick={() => handleToggleClosed(day)} title="Reopen">
                      <AccessTimeIcon sx={{ color: 'grey.500' }} fontSize="small" />
                    </IconButton>
                  </div>
                ) : (
                  <div className="d-flex align-items-center">
                    <input
                      type="time"
                      value={time.start}
                      onChange={(e) => handleTimeChange(day, 'start', e.target.value)}
                      className="form-control me-2"
                    />
                    <span>to</span>
                    <input
                      type="time"
                      value={time.end}
                      onChange={(e) => handleTimeChange(day, 'end', e.target.value)}
                      className="form-control mx-2"
                    />
                   
                  </div>
                )}
              </div>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default OfficeHoursCard;