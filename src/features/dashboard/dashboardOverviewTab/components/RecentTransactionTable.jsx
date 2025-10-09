
// RecentTransactionsMUI.jsx
import React from 'react';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const recentTransactions = [
  { id: 'TX-78291', from: 'USA', to: 'Nigeria', amount: 1250.00, currency: 'USD', status: 'Completed', date: 'Today, 10:45 AM' },
  { id: 'TX-78290', from: 'UK', to: 'Nigeria', amount: 3500.00, currency: 'GBP', status: 'Completed', date: 'Today, 09:30 AM' },
  { id: 'TX-78289', from: 'UAE', to: 'India', amount: 2800.00, currency: 'AED', status: 'Flagged', date: 'Today, 08:15 AM' },
  { id: 'TX-78288', from: 'Canada', to: 'Philippines', amount: 950.00, currency: 'CAD', status: 'Completed', date: 'Yesterday, 1:00 PM' },
];

const RecentTransactionTable = () => {
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Completed': return 'bg-success';
      case 'Flagged': return 'bg-warning text-dark';
      default: return 'bg-secondary';
    }
  };

  return (
  <div className='card flex-grow-1'>
    <div className='card-body'>
        <div className='d-flex align-items-center justify-content-between'>
                <h5>
              Recent Transaction
                </h5>
                <h6 className='text-blue-custom'>View All</h6>
              </div>
      <TableContainer>
        {/* The Table component */}
        <Table sx={{ minWidth: 650 }} size="small" aria-label="recent transactions table">
          
          {/* Table Head */}
          <TableHead>
            {/* MUI TableRow replaces tr */}
            <TableRow>
              {/* MUI TableCell replaces th. Use style to match Bootstrap text-muted/fw-normal */}
              <TableCell sx={{ fontWeight: 400, color: 'text.secondary', paddingLeft: 0 }}>Transaction</TableCell>
              <TableCell sx={{ fontWeight: 400, color: 'text.secondary' }}>Amount</TableCell>
              <TableCell sx={{ fontWeight: 400, color: 'text.secondary' }}>Status</TableCell>
              <TableCell sx={{ fontWeight: 400, color: 'text.secondary' }}>Date</TableCell>
            </TableRow>
          </TableHead>
          
          {/* Table Body */}
          <TableBody>
            {recentTransactions.map((tx) => (
              <TableRow
                key={tx.id}
                // Optional: remove bottom border to simulate Bootstrap's table-borderless
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {/* Transaction Info Cell */}
                <TableCell component="th" scope="row" sx={{ paddingLeft: 0 }}>
                  <div className="d-flex align-items-center">
                    {/* Reusing Bootstrap Icons */}
                    <i className="bi bi-arrow-right-circle-fill text-primary me-2"></i>
                    <div>
                      <div className="fw-semibold">{tx.id}</div>
                      <small className="text-muted">{tx.from} <i className="bi bi-arrow-right mx-1"></i> {tx.to}</small>
                    </div>
                  </div>
                </TableCell>

                {/* Amount Cell */}
                <TableCell className="fw-semibold">
                  {tx.amount.toFixed(2)} <span className="text-muted">{tx.currency}</span>
                </TableCell>

                {/* Status Badge Cell (still using Bootstrap badge classes) */}
                <TableCell>
                  <span className={`badge ${getStatusBadgeClass(tx.status)} py-2 px-3 fw-normal`}>
                    {tx.status}
                  </span>
                </TableCell>

                {/* Date Cell */}
                <TableCell className="text-muted">
                  {tx.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
 </div>
 </div>
  );
};

export default RecentTransactionTable;