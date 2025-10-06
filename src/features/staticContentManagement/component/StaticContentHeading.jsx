import React from 'react'
import VisibilityIcon from "@mui/icons-material/Visibility";
import HistoryIcon from '@mui/icons-material/History';
const StaticContentHeading = ({ title, content }) => {
    return (
        <div className='d-flex align-items-center justify-content-between px-3'>
            <div className='ps-2'>
                <p className='p-0 m-0 heading-blue text-capitalize fs-18'> {title}</p>
                <p className='p-0 m-0 fs-15'>{content}</p>
            </div>
            <div className='d-flex align-items-center gap-2'>
                <button type="button" className="btn btn-primary btn-outline-secondary transparent-btn bg-grey">  <VisibilityIcon fontSize="small" />Preview</button>

                <button type="button" className="btn btn-primary btn-outline-secondary transparent-btn bg-grey">
                    <HistoryIcon fontSize="small" />History</button>

  {title=="Frequently Asked Questions"&& <button type="button" className="btn btn-primary lightblue-btn">
                  <span className='fs-16'>+</span> Add New FAQ</button>}
            </div>
        </div>
    )
}

export default StaticContentHeading
