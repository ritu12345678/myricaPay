import React from 'react';

const QuickActionCard = ({ title, icon: Icon, iconColor = '#043E72', iconSize = 28 }) => {
  return (
    <div className='card quick-action-card p-2 mb-3 bg-grey'>
      <div className='d-flex flex-column align-items-center justify-content-center text-center'>
        {/* Render Icon as JSX element */}
        {Icon && <Icon sx={{ color: iconColor, fontSize: iconSize }} />}
        <p className='mt-2 mb-0 fs-14 fw-500'>{title}</p>
      </div>
    </div>
  );
};

export default QuickActionCard;
