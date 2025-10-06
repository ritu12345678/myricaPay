// src/theme/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#043E72" },
    secondary: { main: "#FF4081" },
    background: { default: "#f9f9f9" },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h6: { fontWeight: 700 },
  },
  components: {
    // ✅ MUI DataGrid (from @mui/x-data-grid)
    MuiDataGrid: {
      styleOverrides: {
        columnHeaders: {
          backgroundColor: "#E6F0FA", // light blue header
        },
        columnHeaderTitle: {
          color: "#043E72",
          fontWeight: "bold",
          fontSize: "14px",
        },
      },
    },

    // ✅ MUI Table (from @mui/material/Table)
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#E6F0FA", // light blue
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: "#043E72",
          fontWeight: "bold",
          fontSize: "16px",
        },
      },
    },

    // ✅ Buttons
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: "8px", textTransform: "none" },
        containedPrimary: {
          backgroundColor: "#043E72",
          "&:hover": { backgroundColor: "#032a4d" },
        },
      },
    },

    // ✅ Chips
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: "#0A6EC71A",
          color: "#0A6EC7",
          fontWeight: 500,
          border: "1px solid #E5E7EB",
          padding: "0 6px",
        },
        deleteIcon: { color: "#0A6EC7" },
      },
    },
  },
});

export default theme;
