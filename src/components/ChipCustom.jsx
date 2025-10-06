import React from "react";
import { Chip } from "@mui/material";

const getChipStyles = (type) => {
  switch (type) {
    case "Pending":
      return { color: "#856404", backgroundColor: "#fff3cd" }; // Yellow
    case "Approved":
      return { color: "#155724", backgroundColor: "#d4edda" }; // Green
    case "Rejected":
      return { color: "#721c24", backgroundColor: "#f8d7da" }; // Red
    case "Critical":
      return { color: "#721c24", backgroundColor: "#f5c6cb" }; // Dark red
    case "Medium":
      return { color: "#0c5460", backgroundColor: "#d1ecf1" }; // Blue
      case "Success":
      return { color: "#10B981", backgroundColor: "#d1ecf1" }; 
    default:
      return { color: "#383d41", backgroundColor: "#e2e3e5" }; // Grey
  }
};

const CustomChip = ({ label, type, clickable = false, onClick }) => {
  const styles = getChipStyles(type || label);

  return (
    <Chip
      label={label}
      size="small"
      clickable={clickable}
      onClick={clickable ? onClick : undefined}
      sx={{
        fontSize: "12px",
        fontWeight: 500,
        height: 24,
        borderRadius: "6px",
        ...styles,
      }}
    />
  );
};

export default CustomChip;
