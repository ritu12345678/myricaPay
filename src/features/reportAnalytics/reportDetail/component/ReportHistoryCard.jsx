import React from 'react';
import importgrey from "../../../../assets/importgrey.png";

const ReportHistoryCard = ({ generatedBy, dateTime }) => {
  return (
    <div className="audit-log d-flex align-items-center justify-content-between border-lightgrey rounded p-2 mb-2 w-100">
      <div>
        <p className='p-0 m-0 text-black-custom fw-500 fs-16'>{generatedBy}</p>
        <p className='p-0 m-0 text-darkgrey fw-400 fs-14'>{dateTime}</p>
      </div>
      <div>
        <img src={importgrey} alt="icon" style={{ width: 20, height: 20 }} />
      </div>
    </div>
  );
};

export default ReportHistoryCard;
