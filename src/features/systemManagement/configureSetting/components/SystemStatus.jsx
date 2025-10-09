import React from 'react'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import PowerSettingsNewRoundedIcon from '@mui/icons-material/PowerSettingsNewRounded';

import HighlightBorderWrapper from '../../../../components/HighLightBorderWrapper';
const SystemStatus = () => {
  return (
    <HighlightBorderWrapper borderColor='#22C55E' backgroundColor='#F0FDF4'>
    <div className='d-flex align-items-center justify-content-between'>
      <div className='d-flex align-items-center gap-2'>
       <CheckCircleRoundedIcon sx={{ color: '#166534', fontSize: 28 }} />
        <div>
            <h6 className='text-success fw-500 mb-0'>All Systems Operational</h6>
            <p className='text-success fs-14 m-0 p-0'>Last checked: Today at 10:45 AM</p>
        </div>
      
      </div>
        <div>
            <button className="btn btn-primary btn-outline-secondary transparent-btn " > <PowerSettingsNewRoundedIcon style={{ fontSize: 20, marginRight: 4, }} /> Maintenance</button>
        </div>
    </div>
    </HighlightBorderWrapper>
  )
}

export default SystemStatus
