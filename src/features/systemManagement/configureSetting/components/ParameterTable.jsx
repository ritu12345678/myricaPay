import * as React from "react";
import GetAppIcon from "@mui/icons-material/GetApp"; // Export
import PrintIcon from "@mui/icons-material/Print";   // Printer
import MoreVertIcon from "@mui/icons-material/MoreVert"; // Three dots
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Avatar,
  Button,
  Box,
  Typography,
  TablePagination,
} from "@mui/material";
import {IconButton} from "@mui/material";
const rows = [
  {
    name: "Transaction Limit - Single",
    subName: "TXN-Limit-Daily",
    value: "$5,000",
    scope: ["Money Transfer", "India"],
    updatedAt: "2025-10-07 14:35",
    updatedBy: { name: "John Doe" },
  },
  {
    name: "Transaction Limit - Monthly",
    subName: "TXN-Limit-Monthly",
    value: "Inactive",
    scope: ["Money Transfer", "USA"],
    updatedAt: "2025-10-05 09:22",
    updatedBy: { name: "Alice Brown" },
  },
  {
    name: "AML Compliance Check",
    subName: "KYC-Verification",
    value: "Active",
    scope: ["Remittance", "Singapore"],
    updatedAt: "2025-10-06 11:15",
    updatedBy: { name: "Robert Fox" },
  },
  {
    name: "Daily Transaction Cap",
    subName: "TXN-Cap-Daily",
    value: "$10,000",
    scope: ["Payments", "UK"],
    updatedAt: "2025-10-03 18:45",
    updatedBy: { name: "Emma White" },
  },
  {
    name: "Geographic Restriction",
    subName: "GEO-Restrict",
    value: "Active",
    scope: ["Remittance", "Canada"],
    updatedAt: "2025-10-01 10:10",
    updatedBy: { name: "Liam Smith" },
  },
  {
    name: "Weekly Fraud Check",
    subName: "FRAUD-WK",
    value: "Inactive",
    scope: ["Money Transfer", "UAE"],
    updatedAt: "2025-10-04 09:50",
    updatedBy: { name: "Sophia Lee" },
  },
];

export default function ParameterTable() {
  // Pagination State
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Handlers
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="card">
        <div className="card-body">
<div className="d-flex align-items-center justify-content-between ">
      <h5 className="mb-0 fs-5 text-blue-custom fw-600 ps-2">Configuration Parameters</h5>
      <div className="d-flex align-item-center gap-2">
         <IconButton size="small">
            <GetAppIcon sx={{ color: "grey.600" }} />
          </IconButton>
            <IconButton size="small">
            <PrintIcon sx={{ color: "grey.600" }} />
          </IconButton>
              <IconButton size="small">
            <MoreVertIcon sx={{ color: "grey.600" }} />
          </IconButton>
      </div>
</div>
     
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 420 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Parameter Name</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Value / Status</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Applicable Scope</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Last Updated</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Updated By</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow
                  key={index}
                  hover
                  sx={{ "&:last-child td": { border: 0 } }}
                >
                  {/* Parameter Name */}
                  <TableCell sx={{ whiteSpace: "normal", wordBreak: "break-word" }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      {row.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {row.subName}
                    </Typography>
                  </TableCell>

                  {/* Value / Status */}
                  <TableCell>
                    {row.value === "Active" || row.value === "Inactive" ? (
                      <Chip
                        label={row.value}
                        color={row.value === "Active" ? "success" : "error"}
                        size="small"
                        variant="outlined"
                      />
                    ) : (
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {row.value}
                      </Typography>
                    )}
                  </TableCell>

                  {/* Applicable Scope */}
                  <TableCell>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {row.scope.map((item, i) => (
                        <Chip
                          key={i}
                          label={item}
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </TableCell>

                  {/* Last Updated */}
                  <TableCell>
                    <Typography variant="body2" color="text.secondary">
                      {row.updatedAt}
                    </Typography>
                  </TableCell>

                  {/* Updated By */}
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Avatar
                        sx={{
                          width: 28,
                          height: 28,
                          bgcolor: "#1976d2",
                          fontSize: 13,
                        }}
                      >
                        {row.updatedBy.name[0]}
                      </Avatar>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {row.updatedBy.name}
                      </Typography>
                    </Box>
                  </TableCell>

                  {/* Action */}
                  <TableCell>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <Button variant="text" size="small">
                        Edit
                      </Button>
                      <Button variant="text" size="small" color="secondary">
                        History
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
       </div>
    </div>
  );
}
