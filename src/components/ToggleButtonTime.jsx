import React, { useState } from 'react';

const ToggleButtonTime = ({ options = [], defaultValue = '', onChange }) => {
  const [active, setActive] = useState(defaultValue || options[0]);

  const handleClick = (option) => {
    setActive(option);
    if (onChange) onChange(option); // send selected value to parent
  };

  return (
    <div className="btn-group btn-group-sm" role="group">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className={`btn btn-sm ${active === option ? 'btn-primary active' : 'btn-outline-primary'}`}
          onClick={() => handleClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ToggleButtonTime;
