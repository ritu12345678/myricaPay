import React from 'react';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import FlagRoundedIcon from '@mui/icons-material/FlagRounded';
import BlockRoundedIcon from '@mui/icons-material/BlockRounded';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
const QuickActions = () => {
    return (
        <div className='card mt-3'><div className='card-body'> <h5 className='text-blue-custom fw-600 mb-2'> Quick Action</h5>
        <div className="d-flex gap-2">

            <button className="btn btn-primary btn-sm lightblue-btn"><RefreshRoundedIcon fontSize='small'/>ReSubmit</button>
            <button className="btn btn-primary btn-outline-secondary transparent-btn"><FlagRoundedIcon fontSize='small'/>Flag For Review</button>
            <button className="btn btn-primary btn-outline-secondary transparent-btn"><MailOutlineRoundedIcon fontSize='small'/>Send Notification</button>
            <button className="btn btn-primary btn-outline-secondary transparent-btn"><BlockRoundedIcon fontSize='small'/>Block Transaction</button>
               <button className="btn btn-primary btn-outline-secondary transparent-btn"><HistoryRoundedIcon fontSize='small'/>View History</button>
        </div></div></div>

    );
};

export default QuickActions;
