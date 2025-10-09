import React from "react";
import Box from "@mui/material/Box";

const IconWrapper = ({
  children,
  bgColor = "#E6F4EA",
  size = 36,
  shape = "square", // "circle" | "square" | "rounded"
}) => {
  const borderRadius =
    shape === "circle" ? "50%" : shape === "rounded" ? "8px" : "0";
    console.log(borderRadius)

  return (
    <Box
      sx={{
        backgroundColor: bgColor,
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: borderRadius,
        padding: 0,             // remove inner padding
        margin: 0,              // remove outer margin
        minWidth: size,
        minHeight: size,
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default IconWrapper;
