import React from 'react';
import { Button } from 'primereact/button'; // Still using PrimeReact Button for functionality
import DownloadIcon from '@mui/icons-material/Download';
import ShareIcon from '@mui/icons-material/Share';
import PrintRoundedIcon from '@mui/icons-material/PrintRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
const HeaderBar = ({ data }) => {
  return (
    // Bootstrap row to contain the title/status and the buttons
    <div className="d-flex justify-content-between align-items-center  pb-2">
      <div><h4 className="text-blue-custom mb-0">Transaction Management Detail</h4>
        <h5 className='fs-20 text-lightblue'>Transaction ID: TRX-2023-07-28-00134 <span className='badge bg-lightgreen text-success'> completed</span></h5>
      </div>


      <div className='d-flex align-items-center '>
        <button className="btn btn-outline-secondary btn-sm">
          <PrintRoundedIcon fontSize="small" /> Print
        </button>
        <button className="btn btn-outline-primary btn-sm me-2">
          <DownloadIcon fontSize="small" /> Export
        </button>
        <button className='btn btn-primary lightblue-btn'>    <BorderColorRoundedIcon fontSize="small" />Edit</button>

      </div>
    </div>
  );
};

export default HeaderBar;