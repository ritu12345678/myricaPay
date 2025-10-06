import React from 'react';
import Avatar from '@mui/material/Avatar';
import { BsCalendar, BsPersonGear } from 'react-icons/bs';

const UserActivityLogEntry = ({
  userName,
  activityTime,
  role,
  avatarSrc,
  // Default to Bootstrap's primary color if no color is provided
  activityColor = 'var(--bs-primary)', 
}) => {
  
  // The custom style now uses the dynamic activityColor prop
  const customBorderStyle = {
    borderLeft: `4px solid ${activityColor}`, 
  };

  return (
    <div className="card border-0 rounded-2 shadow-sm" style={customBorderStyle}>
      <div className="card-body p-3">
        {/* Top Row: User Activity Text and MUI Avatar */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          
          <span className="mb-0 fw-bold">
            {userName} logged in
          </span>

          <Avatar 
            alt={userName} 
            src={avatarSrc} 
            sx={{ width: 32, height: 32 }}
          />
        </div>

        {/* Bottom Row: Details (Time and Role) */}
        <div className="d-flex align-items-center gap-3 text-secondary">
          
          {/* Time */}
          <div className="d-flex align-items-center gap-1">
            <BsCalendar size={14} />
            <span className="small">{activityTime}</span>
          </div>

          {/* Role Badge/Chip */}
          <span
            className="badge text-bg-light text-dark d-flex align-items-center fw-normal px-2 py-1 rounded-2"
            style={{ backgroundColor: '#e9ecef' }} 
          >
            <BsPersonGear size={14} className="me-1" />
            {role}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserActivityLogEntry;