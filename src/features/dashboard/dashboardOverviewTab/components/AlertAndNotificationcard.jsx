import React from 'react';

const AlertAndNotificationcard = ({
  Icon,             // Icon component
  iconColor = 'black',  // optional: default black
  iconSize = 24,        // optional: default 24px
  title,
  titleClassName = '',   // class for title
  description,
  actionText,
  actionClassName = '',  // class for action text
}) => {
  return (
    <div>
      <div className="d-flex align-items-center gap-2">
        {Icon && <Icon sx={{ color: iconColor, fontSize: iconSize }} />}
        <p className={`m-0 p-0 fs-16 fw-500 ${titleClassName}`}>{title}</p>
      </div>
      <p className="m-0 fs-14 mb-3 ps-4">{description}</p>
      <h6 className={`ps-4 fw-500 ${actionClassName}`}>{actionText}</h6>
    </div>
  );
};

export default AlertAndNotificationcard;
