import React from 'react';

import CloseIcon from "@mui/icons-material/Close";
import UserActivityLogEntry from './UserActivityLogEntry';
// Sample data
const data = [
  { role: 'Admin', users: 12 },
  { role: 'Editor', users: 18 },
  { role: 'Viewer', users: 25 },
  { role: 'Moderator', users: 8 },
];

const LoginActivityAndAlertSection = () => {
  const renderCard = () => {
    return (<>
      <div className='d-flex align-items-center gap-2 rounded bg-danger-subtle p-3 mb-2'>
        <CloseIcon className='text-danger' />
        <div>
          <p class="small  mb-2 text-danger">Test mode: Failed login spikes. Help↗</p>
        </div>
      </div>
    </>)
  }
  return (

    <div className='row mt-3'>
      <div className='col-md-8'>
        <div className='card'>
          <div className='card-body'>
            <p>Last 10 login Activities</p>
            <UserActivityLogEntry/>
 <UserActivityLogEntry/>
  <UserActivityLogEntry/>
   <UserActivityLogEntry/>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div className='col-md-4'>
        <div className='card'>
          <div className='card-body'>
            <h6>Suspicious Activity Alerts</h6>
            {renderCard()}
            {renderCard()}
            {renderCard()}
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginActivityAndAlertSection;
