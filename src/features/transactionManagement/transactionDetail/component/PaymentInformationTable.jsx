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

const rows = [
  {
    method: "Credit Card",
    account: "VISA ****4167",
    amount: "$1,200.00",
    status: "Completed",
  },
]
 
  

export default function PaymentInformationTable() {
  return (<>
  
        {/* Header Section */}
   
   

        {/* Table Section */}
    
          <TableContainer>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Payment Method</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Account</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Amount</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Action</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index} hover>
                    {/* Payment Method */}
                    <TableCell>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {row.method}
                      </Typography>
                    </TableCell>

                    {/* Account */}
                    <TableCell>
                      <Typography variant="body2" color="text.secondary">
                        {row.account}
                      </Typography>
                    </TableCell>

                    {/* Amount */}
                    <TableCell>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {row.amount}
                      </Typography>
                    </TableCell>

                    {/* Status */}
                    <TableCell>
                      <Chip
                        label={row.status}
                        size="small"
                        sx={{
                          backgroundColor: "#d4edda",
                          color: "#155724",
                          fontWeight: 500,
                        }}
                      />
                    </TableCell>

                    {/* Action */}
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
      
 
  </>);
}
