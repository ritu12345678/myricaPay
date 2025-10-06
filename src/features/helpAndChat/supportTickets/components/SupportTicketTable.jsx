import React, { useState } from "react";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import CustomTable from "../../../../components/CustomTable";
import exporticon from "../../../../assets/exporticon.png";
import CustomChip from "../../../../components/ChipCustom";
import SupportFilterSection from "./SupportFilterSection";
import TicketForm from "./AddTicketForm";
import CustomOffcanvas from "../../../../components/CustomOffCanvas";
import ExportDataModal from "../../../../components/ExportDataModal";
import ViewTicket from "./ViewTicket";

const rows = [
  {
    id: 1,
    userName: { name: "John Smith", avatar: "https://i.pravatar.cc/40?img=1" },
    email: "john.smith@email.com",
    ticketId: "TCK-9012",
    lastUpdated: "2023-09-28 14:20:10",
    assignedTo: "Sarah Johnson",
    status: "Open",
    priority: "High",
  },
  {
    id: 2,
    userName: { name: "Maria Garcia", avatar: "https://i.pravatar.cc/40?img=2" },
    email: "maria.garcia@email.com",
    ticketId: "TCK-9013",
    lastUpdated: "2023-09-28 11:45:50",
    assignedTo: "Michael Brown",
    status: "In Progress",
    priority: "Medium",
  },
  {
    id: 3,
    userName: { name: "Robert Johnson", avatar: "https://i.pravatar.cc/40?img=3" },
    email: "robert.j@email.com",
    ticketId: "TCK-9014",
    lastUpdated: "2023-09-27 18:05:33",
    assignedTo: "David Wilson",
    status: "Closed",
    priority: "Low",
  },
];



export default function TicketTable() {
  const [showOffCanvas, setShowOffCanvas] = useState(false)
  const [showTicketOffCanvas, setShowTicketOffCanvas] = useState(false)

  const handlecloseCanvas = () => {
    setShowOffCanvas(false)
  }
  const handleOpenCanvas = () => {
    setShowOffCanvas(true)
  }
  const handlecloseTicketCanvas = () => {
    setShowTicketOffCanvas(false)
  }
  const handleOpenTicketCanvas = () => {
    setShowTicketOffCanvas(true)
  }
  console.log("canvasssss", showTicketOffCanvas)
  const columns = [
    {
      field: "userName",
      headerName: "User",
      width: 220,
      renderCell: (params) => (
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar src={params.value.avatar} alt={params.value.name} sx={{ width: 32, height: 32 }} />
          <Typography variant="body2">{params.value.name}</Typography>
        </Box>
      ),
    },
    { field: "email", headerName: "Email", width: 220 },
    { field: "ticketId", headerName: "Ticket ID", width: 150 },
    { field: "lastUpdated", headerName: "Last Updated", width: 180 },
    { field: "assignedTo", headerName: "Assigned To", width: 160 },
    {
      field: "status",
      headerName: "Status",
      width: 140,
      renderCell: (params) => {
        let color = "black";
        if (params.value === "Open") color = "green";
        else if (params.value === "In Progress") color = "red";
        else if (params.value === "Closed") color = "blue";

        return (
          <Typography variant="body2" sx={{ color, fontWeight: 500 }}>
            {params.value}
          </Typography>
        );
      },
    },
    {
      field: "priority",
      headerName: "Priority",
      width: 130,
      renderCell: (params) => <CustomChip label={params.value} type={params.value} />,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 130,
      sortable: false,
      renderCell: (params) => (
        <Box display="flex" gap={1}>
          <IconButton size="small" color="primary" onClick={() => handleOpenTicketCanvas()}>
            <VisibilityOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" color="success" onClick={() => handleOpenCanvas()}>
            <EditOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" color="error">
            <DeleteOutlinedIcon fontSize="small" />
          </IconButton>
        </Box>
      ),
    },
  ];
  return (
    <div className="card p-3 mb-4">

      <SupportFilterSection openCanvas={handleOpenCanvas} />
      <CustomTable rows={rows} columns={columns} pageSize={5} />
      <CustomOffcanvas title="Ticket Creation" children={<TicketForm show={showOffCanvas} onClose={handlecloseCanvas} />} show={showOffCanvas} onClose={handlecloseCanvas} />
      <CustomOffcanvas title="Ticket Detail" children={<ViewTicket show={showTicketOffCanvas} onClose={handlecloseTicketCanvas} />} show={showTicketOffCanvas} onClose={handlecloseTicketCanvas} centered />

    </div>
  );
}
