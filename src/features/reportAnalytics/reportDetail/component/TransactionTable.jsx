import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip
} from "@mui/material";
import CustomChip from '../../../../components/ChipCustom';
import exporticon from "../../../../assets/exporticon.png"
import filter from "../../../../assets/filter.png"
const TransactionTable = () => {
  const transactions = [
    {
      date: "2025-10-01",
      transactionId: "TXN123456",
      type: "Credit",
      amount: "$1,200",
      status: "Success",
      agent: "John Doe",
      region: "USA"
    },
    {
      date: "2025-10-02",
      transactionId: "TXN789012",
      type: "Debit",
      amount: "$450",
      status: "Pending",
      agent: "Jane Smith",
      region: "India"
    },
    {
      date: "2025-10-02",
      transactionId: "TXN456789",
      type: "Credit",
      amount: "$900",
      status: "Failed",
      agent: "David Lee",
      region: "UK"
    }
  ];
  return (
    <>
      <div className='transaction-table mt-3'>
        <div className='card'>
          <div className='card-body'>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="m-0 heading-blue-20">Transaction Filters</h5>
              <div className="d-flex gap-2">
                <button className=" btn btn-primary lightblue-btn ">
                  <img className="mb-1 pe-1" src={filter} alt="Add" style={{ width: 18, height: 18 }} />
                  Filter Column
                </button>

                <button type="button" className="btn btn-primary lightblue-btn "> <img className="mb-1 pe-1" src={exporticon} alt="Add" style={{ width: 18, height: 18 }} />Export Table</button>

              </div>
            </div>
            <TableContainer component={Paper} elevation={0}>
              <Table>
                {/* Table Header */}
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Transaction ID</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Agent</TableCell>
                    <TableCell>Region</TableCell>
                  </TableRow>
                </TableHead>

                {/* Table Body */}
                <TableBody>
                  {transactions.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.transactionId}</TableCell>
                      <TableCell>{row.type}</TableCell>
                      <TableCell>{row.amount}</TableCell>
                      <TableCell>
                        <CustomChip label={row.status} type={row.status} />

                      </TableCell>
                      <TableCell>{row.agent}</TableCell>
                      <TableCell>{row.region}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>

        </div>
      </div>
    </>
  )
}

export default TransactionTable
