import React from "react";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomTable from "../../../components/CustomTable";
import exporticon from "../../../assets/exporticon.png"
import CustomChip from "../../../components/ChipCustom";

const rows = [
  {
    id: "TRX-78945",
    customer: "John Smith",
    type: "Wire Transfer",
    amount: "$5,500.00",
    date: "2023-07-28 09:15:31",
    status: "Pending",
    risk: "High",
    agent: "Sarah Johnson",
  },
  {
    id: "TRX-78944",
    customer: "Maria Garcia",
    type: "ACH Transfer",
    amount: "$2,340.00",
    date: "2023-07-28 09:15:31",
    status: "Approved",
    risk: "Low",
    agent: "Michael Brown",
  },
  {
    id: "TRX-78943",
    customer: "Robert Johnson",
    type: "Card Payment",
    amount: "$750.00",
    date: "2023-07-27 18:40:12",
    status: "On Hold",
    risk: "Medium",
    agent: "David Wilson",
  },
  {
    id: "TRX-78942",
    customer: "Jennifer Lee",
    type: "Crypto Exchange",
    amount: "$2,000.00",
    date: "2023-07-27 22:55:53",
    status: "Rejected",
    risk: "Critical",
    agent: "James Martinez",
  },
  {
    id: "TRX-78941",
    customer: "William Davis",
    type: "Wire Transfer",
    amount: "$12,750.00",
    date: "2023-07-27 21:43:19",
    status: "Rejected",
    risk: "High",
    agent: "Elizabeth Taylor",
  },
];

const columns = [
  { field: "id", headerName: "Transaction ID", width: 150 },
  { field: "customer", headerName: "Customer", width: 160 },
  { field: "type", headerName: "Type", width: 150 },
  { field: "amount", headerName: "Amount", width: 130 },
  { field: "date", headerName: "Date & Time", width: 180 },
  {
    field: "status",
    headerName: "Status",
    width: 130,
    renderCell: (params) => <CustomChip label={params.value} type={params.value} />,
  },
  {
    field: "risk",
    headerName: "Risk Level",
    width: 130,
    renderCell: (params) => <CustomChip label={params.value} type={params.value} />,
  },
  { field: "agent", headerName: "Agent", width: 160 },
  {
    field: "actions",
    headerName: "Actions",
    width: 120,
    sortable: false,
    renderCell: () => (
      <Box display="flex" gap={1}>
        <IconButton size="small" color="primary">
          <VisibilityIcon fontSize="small" />
        </IconButton>
        <IconButton size="small" color="success">
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton size="small" color="error">
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Box>
    ),
  },
];

export default function TransactionTable() {
  return (
 
  
   <div className="card p-3 mb-4">

            
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="m-0 heading-blue-20">Transaction List</h5>
                    <div className="d-flex gap-2">
                        <button className=" btn btn-primary lightblue-btn ">
                            <img className="mb-1 pe-1" src={exporticon} alt="Add" style={{ width: 18, height: 18 }} />
                       Export
                        </button>

                        <button type="button" className="btn btn-primary btn-outline-secondary blue-btn "> + New Transaction</button>

                    </div>
                </div>

               <CustomTable rows={rows} columns={columns} pageSize={5} />
            </div>)
}
