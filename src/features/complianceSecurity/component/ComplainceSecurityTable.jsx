import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SettingsIcon from "@mui/icons-material/Settings";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import CustomChip from "../../../components/ChipCustom";
import exporticon from "../../../assets/exporticon.png";

// Sample Data
const rows = [
  {
    id: 1,
    module: { heading: "KYC Module", sub: "Customer Verification" },
    status: "Active",
    lastReview: "2023-07-28 09:15:31",
    risk: "High",
    officer: { name: "Sarah Johnson", designation: "Compliance Officer" },
    retention: "📂",
  },
  {
    id: 2,
    module: { heading: "Anti-money laundering and customer Anti-money laundering and customer", sub: "Transaction Surveillance" },
    status: "Pending",
    lastReview: "2023-07-27 14:22:11",
    risk: "Medium",
    officer: { name: "John Smith", designation: "Risk Analyst" },
    retention: "📂",
  },
];

// Columns Definition
const columns = [
  {
    field: "module",
    headerName: "Module Name",
    width: 220,
    renderCell: (params) => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          whiteSpace: "normal",
          lineHeight: "1.2",
        }}
      >
        <span style={{ fontWeight: 600 }}>{params.value.heading}</span>
        <span style={{ fontSize: "12px", color: "#6c757d" }}>
          {params.value.sub}
        </span>
      </div>
    ),
  },
  {
    field: "status",
    headerName: "Status",
    width: 130,
    renderCell: (params) => <CustomChip label={params.value} type={params.value} />,
  },
  {
    field: "lastReview",
    headerName: "Last Review",
    width: 160,
    renderCell: (params) => {
      const [date, time] = params.value.split(" ");
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            whiteSpace: "normal",
            lineHeight: "1.2",
          }}
        >
          <span>{date}</span>
          <span style={{ fontSize: "12px", color: "#6c757d" }}>{time}</span>
        </div>
      );
    },
  },
  {
    field: "risk",
    headerName: "Risk Level",
    width: 130,
    renderCell: (params) => <CustomChip label={params.value} type={params.value} />,
  },
  {
    field: "officer",
    headerName: "Assigned Officer",
    width: 200,
    renderCell: (params) => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          whiteSpace: "normal",
          lineHeight: "1.2",
        }}
      >
        <span>{params.value.name}</span>
        <span style={{ fontSize: "12px", color: "#6c757d" }}>
          {params.value.designation}
        </span>
      </div>
    ),
  },
  {
    field: "retention",
    headerName: "Retention",
    width: 100,
    renderCell: (params) => <span>{params.value}</span>,
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    sortable: false,
    renderCell: () => (
      <Box display="flex" gap={1}>
        <IconButton size="small" color="primary">
          <VisibilityIcon fontSize="small" />
        </IconButton>
        <IconButton size="small" color="secondary">
          <ImportExportIcon fontSize="small" />
        </IconButton>
        <IconButton size="small" color="default">
          <SettingsIcon fontSize="small" />
        </IconButton>
      </Box>
    ),
  },
];

// Table Wrapper
const CustomTable = ({ rows, columns, pageSize = 5 }) => {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.id}
        pagination
        pageSizeOptions={[5, 10, 20]}
        initialState={{
          pagination: { paginationModel: { pageSize } },
        }}
        sx={{
          border: 0,
          "& .MuiDataGrid-columnHeader--sortable .MuiDataGrid-iconButtonContainer":
            {
              opacity: 1,
              visibility: "visible",
              color: "black",
            },
          "& .MuiDataGrid-columnSeparator": { display: "none" },
          "& .MuiDataGrid-columnHeaders": {
            borderBottom: "1px solid #e0e0e0",
          },
          "& .MuiDataGrid-cell": {
            alignItems: "flex-start", // align multiline at top
          },
        }}
        slots={{
          columnSortedAscendingIcon: ArrowDropUpIcon,
          columnSortedDescendingIcon: ArrowDropDownIcon,
          columnUnsortedIcon: ArrowDownwardIcon,
        }}
      />
    </Box>
  );
};

export default function ComplianceSecurityTable() {
  return (
    <div className="card p-3 mb-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="m-0 heading-blue-20">Compliance Security Modules</h5>
        <div className="d-flex gap-2">
          <button className="btn btn-primary lightblue-btn ">
            <img
              className="mb-1 pe-1"
              src={exporticon}
              alt="Add"
              style={{ width: 18, height: 18 }}
            />
            Export
          </button>
          <button
            type="button"
            className="btn btn-primary btn-outline-secondary blue-btn "
          >
            + New Module
          </button>
        </div>
      </div>

      <CustomTable rows={rows} columns={columns} pageSize={5} />
    </div>
  );
}
