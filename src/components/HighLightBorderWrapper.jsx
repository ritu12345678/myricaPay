// HighlightBorderWrapper.jsx
import React from "react";
import classNames from "classnames";

const HighlightBorderWrapper = ({
  children,
  borderColor = "#043E72",
  backgroundColor = "#fff",
  className = "",
}) => {
  return (
    <div
      className={classNames("highlight-border-wrapper p-3 mb-3", className)}
      style={{
        borderLeft: `6px solid ${borderColor}`,
        backgroundColor: backgroundColor,
        borderRadius: "4px",
      }}
    >
      {children}
    </div>
  );
};

export default HighlightBorderWrapper;
