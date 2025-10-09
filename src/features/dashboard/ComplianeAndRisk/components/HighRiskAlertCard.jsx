import React from 'react';

const HighRiskCard = ({
  Icon,             // Icon component
  iconColor = 'black',  // optional: default black
  iconSize = 24,        // optional: default 24px
  title,
   // class for title
  description,
  actionText,

}) => {
  return (
    <div>
      <div className="d-flex align-items-center gap-2">
        {Icon && <Icon sx={{ color: iconColor, fontSize: iconSize }} />}
        <p className="m-0 p-0 fs-16 fw-500">{title}</p>
      </div>
      <p className="m-0 fs-14  ps-4">{description}</p>
      <p className="ps-4 fw-500">{actionText}</p>
    </div>
  );
};

export default HighRiskCard;
