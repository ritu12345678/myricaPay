import React from "react";
import { Box, IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import EditIcon from "@mui/icons-material/Edit";
import FileUploadIcon from "@mui/icons-material/FileUpload"; // import icon
import FileDownloadIcon from "@mui/icons-material/FileDownload"; // export icon
import CustomTable from "../../../components/CustomTable";
import CustomChip from "../../../components/ChipCustom";
import exporticon from "../../../assets/exporticon.png";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EventIcon from "@mui/icons-material/Event";
const rows = [
  {
    id: 1,
    reportName: "Monthly Compliance Report",
    type: "Summary",
    frequency: "Monthly",
    lastRun: "2023-09-01 10:30:00",
    owner: "Compliance Dept",
    creator: "Alice Johnson",
    region: "North America",
  },
  {
    id: 2,
    reportName: "Weekly Fraud Report",
    type: "Detailed",
    frequency: "Weekly",
    lastRun: "2023-09-04 08:15:00",
    owner: "Fraud Analytics",
    creator: "John Smith",
    region: "Europe",
  },
  {
    id: 3,
    reportName: "Daily Risk Report",
    type: "Summary",
    frequency: "Daily",
    lastRun: "2023-09-05 18:45:00",
    owner: "Risk Management",
    creator: "Maria Garcia",
    region: "Asia",
  },
];

const columns = [
  { field: "reportName", headerName: "Report Name", width: 200 },
  {
    field: "type",
    headerName: "Type",
    width: 130,
    renderCell: (params) => <CustomChip label={params.value} type={params.value} />,
  },
  {
    field: "frequency",
    headerName: "Frequency",
    width: 130,
    renderCell: (params) => <CustomChip label={params.value} type={params.value} />,
  },
  { field: "lastRun", headerName: "Last Run", width: 180 },
  { field: "owner", headerName: "Owner", width: 180 },
  { field: "creator", headerName: "Creator", width: 160 },
  { field: "region", headerName: "Region", width: 150 },
  {
    field: "actions",
    headerName: "Actions",
    width: 160,
    sortable: false,
    renderCell: () => (
      <Box display="flex" gap={1}>
        <IconButton size="small" sx={{ color: "grey.600" }}>
          <PlayArrowIcon fontSize="small" />
        </IconButton>
        <IconButton size="small" sx={{ color: "grey.600" }}>
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton size="small" sx={{ color: "grey.600" }}>
          <FileUploadIcon fontSize="small" />
        </IconButton>
        <IconButton size="small" sx={{ color: "grey.600" }}>
          <FileDownloadIcon fontSize="small" />
        </IconButton>
      </Box>
    ),
  },
];

export default function ReportTable() {
  return (
    <div className="card p-3 mb-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="m-0 heading-blue-20">Report List</h5>
        <div className="d-flex gap-2">
          <button className="btn btn-primary lightblue-btn">
            <img className="mb-1 pe-1" src={exporticon} alt="Export" style={{ width: 18, height: 18 }} />
            Bulk Export
          </button>

         <button type="button" className="btn btn-primary btn-outline-secondary transparent-btn bg-grey"> <EventIcon style={{ color: "grey", fontSize: 20 }} />Schedule Batch</button>
        </div>
      </div>

      {/* Table */}
      <CustomTable rows={rows} columns={columns} hidePagination />
    </div>
  );
}
