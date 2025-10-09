import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Button,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";
import PrintIcon from "@mui/icons-material/Print";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// ✅ Sample Transaction Data
const rows = [
  { id: "TXN-001", date: "2025-10-07", amount: "$1,200", status: "Active" },
  { id: "TXN-002", date: "2025-10-06", amount: "$850", status: "Inactive" },
  { id: "TXN-003", date: "2025-10-05", amount: "$2,340", status: "Active" },
  { id: "TXN-004", date: "2025-10-04", amount: "$670", status: "Inactive" },
  { id: "TXN-005", date: "2025-10-03", amount: "$3,100", status: "Active" },
];

export default function RelatedTransactionTable() {
  return (
    <div className="card mt-3">
      <div className="card-body">
        {/* Header */}
       
          <h5 className="mb-2 fs-5 text-blue-custom fw-600 ps-2">
           Related Transaction
          </h5>
         
       

        {/* Table */}
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Transaction ID</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Date</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Amount</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Action</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index} hover>
                    <TableCell>
                      <Typography variant="body2" sx={{ fontWeight: 500 }} className="text-blue-custom">
                        {row.id}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Typography variant="body2" color="text.secondary">
                        {row.date}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {row.amount}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Chip
                        label={row.status}
                        size="small"
                        color={row.status === "Active" ? "success" : "error"}
                        variant="outlined"
                      />
                    </TableCell>

                    <TableCell>
                      <Button
                        variant="text"
                        size="small"
                        sx={{
                          textTransform: "none",
                          color: "primary.main",
                          fontWeight: 500,
                        }}
                      >
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </div>
  );
}
