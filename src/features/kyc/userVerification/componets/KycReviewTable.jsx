import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import TablePagination from '@mui/material/TablePagination';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/EditOutlined';
import Avatar from '@mui/material/Avatar';
import { format } from 'date-fns'; // Import date formatter
import UserVerificationFilterSection from './UserVerificationFilter';
import CustomOffcanvas from '../../../../components/CustomOffCanvas';

import CustomChip from '../../../../components/ChipCustom';
import { useState } from 'react';
import AddUserDetail from './UserDetail';


// --- UPDATED ROWS DATA ---
const rows = [
    {
        id: 1,
        customerName: 'Alice Johnson',
        avatarUrl: '/static/images/avatar/1.jpg',
        userId: 'CUST-1001',
        submittedDocuments: 2,
        submissionDate: new Date('2025-09-28'),
        country: 'India',
        lastActionedBy: 'AdminUser1',
        status: 'Pending'
    },
    {
        id: 2,
        customerName: 'Bob Smith',
        avatarUrl: '/static/images/avatar/2.jpg',
        userId: 'CUST-1002',
        submittedDocuments: 5,
        submissionDate: new Date('2025-09-25'),
        country: 'United States',
        lastActionedBy: 'AdminUser2',
        status: 'Approved'
    },
    {
        id: 3,
        customerName: 'Charlie Brown',
        avatarUrl: '/static/images/avatar/3.jpg',
        userId: 'CUST-1003',
        submittedDocuments: 1,
        submissionDate: new Date('2025-09-20'),
        country: 'Mexico',
        lastActionedBy: 'System',
        status: 'Rejected'
    },
    {
        id: 4,
        customerName: 'David Lee',
        avatarUrl: '/static/images/avatar/4.jpg',
        userId: 'CUST-1004',
        submittedDocuments: 3,
        submissionDate: new Date('2025-09-15'),
        country: 'Japan',
        lastActionedBy: 'AdminUser1',
        status: 'Critical'
    },
    {
        id: 5,
        customerName: 'Eva Green',
        avatarUrl: '/static/images/avatar/5.jpg',
        userId: 'CUST-1005',
        submittedDocuments: 4,
        submissionDate: new Date('2025-09-10'),
        country: 'France',
        lastActionedBy: 'AdminUser3',
        status: 'Medium'
    },
];

// --- UPDATED HEAD CELLS ---
const headCells = [
    { id: 'customerName', align: 'left', disablePadding: true, label: 'Customer Name' },
    { id: 'userId', align: 'left', disablePadding: false, label: 'User ID' },
    { id: 'submittedDocuments', align: 'right', disablePadding: false, label: 'Documents' },
    { id: 'submissionDate', align: 'left', disablePadding: false, label: 'Submission Date' },
    { id: 'country', align: 'left', disablePadding: false, label: 'Country' },
    { id: 'lastActionedBy', align: 'left', disablePadding: false, label: 'Last Actioned By' },
    { id: 'status', align: 'center', disablePadding: false, label: 'Status' },
    { id: 'actions', align: 'center', disablePadding: false, label: 'Actions' },
];



function EnhancedTableHead(props) {
    const { onSelectAllClick, numSelected, rowCount } = props;

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all customers',
                        }}
                    />
                </TableCell>

                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.align}
                        // Only remove padding for the first data column (Customer Name)
                        padding={headCell.id === 'customerName' ? 'none' : 'normal'}
                        sx={{ fontWeight: 'bold' }} // Make header bold
                    >
                        {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    rowCount: PropTypes.number.isRequired,
};


export default function KycReviewTable() { // Component Renamed
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [showOffCanvas, setShowOffCanvas] = useState(false)

    // Helper function to check if a row is selected
    const isItemSelected = (id) => selected.indexOf(id) !== -1;

    const handlecloseCanvas = () => {
        setShowOffCanvas(false)
    }
    const handleOpenCanvas = () => {
        setShowOffCanvas(true)
    }

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };

    const handleActionClick = (event) => {
        // Prevents the click on action icons from triggering row selection
        event.stopPropagation();
        // You would typically handle edit or delete logic here
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            [...rows].slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
        [page, rowsPerPage],
    );

    return (
        <div className='card'>
            <div className='card-body'>
                {/* Assuming CurrencyFilterSection has been updated to handle the new context */}
                <UserVerificationFilterSection openCanvas={handleOpenCanvas} />
                <Box sx={{ width: '100%', mt: 2 }}> {/* Added margin-top for separation */}

                    <TableContainer component={Paper} elevation={0}> {/* Used Paper for standard Material-UI background */}
                        <Table
                            sx={{ minWidth: 750 }}
                            aria-labelledby="tableTitle"
                            size='medium'
                        >
                            <EnhancedTableHead
                                numSelected={selected.length}
                                onSelectAllClick={handleSelectAllClick}
                                rowCount={rows.length}
                            />
                            <TableBody>
                                {visibleRows.map((row, index) => {
                                    const isRowSelected = isItemSelected(row.id);
                                    const labelId = `enhanced-table-checkbox-${row.id}`; // Use row.id for unique ID

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.id)}
                                            role="checkbox"
                                            aria-checked={isRowSelected}
                                            tabIndex={-1}
                                            key={row.id}
                                            selected={isRowSelected}
                                            sx={{ cursor: 'pointer' }}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    checked={isRowSelected}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                            </TableCell>

                                            {/* 1. Customer Name (Avatar + Name) */}
                                            <TableCell
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                                padding="none" // No padding here to align with header
                                            >
                                                <Box sx={{ display: 'flex', alignItems: 'center', p: 1, ml: 1 }}> {/* Custom padding/margin */}
                                                    {/* Avatar */}
                                                    <Avatar sx={{ width: 32, height: 32, mr: 1.5 }} alt={row.customerName} src={row.avatarUrl || '/static/images/avatar/default.jpg'} />
                                                    {/* Name */}
                                                    <span>{row.customerName}</span>
                                                </Box>
                                            </TableCell>

                                            {/* 2. User ID */}
                                            <TableCell align="left">{row.userId}</TableCell>

                                            {/* 3. Submitted Documents (Count) */}
                                            <TableCell align="right">
                                                <span style={{ fontWeight: 500 }}>{row.submittedDocuments}</span> documents
                                            </TableCell>

                                            {/* 4. Submission Date */}
                                            <TableCell align="left">
                                                {format(row.submissionDate, 'MMM dd, yyyy')}
                                            </TableCell>

                                            {/* 5. Country */}
                                            <TableCell align="left">{row.country}</TableCell>

                                            {/* 6. Last Actioned By */}
                                            <TableCell align="left">{row.lastActionedBy}</TableCell>

                                            {/* 7. Status (Chip) */}
                                            <TableCell align="center">
                                                <CustomChip label={row.status} type={row.status} />
                                            </TableCell>

                                            {/* 8. Actions (Edit & Delete) */}
                                            <TableCell align="center" onClick={handleActionClick}>
                                                <IconButton size="small" sx={{ color: 'grey' }} onClick={() => handleOpenCanvas()}>
                                                    <EditIcon fontSize="small" />
                                                </IconButton>
                                                <IconButton size="small" sx={{ color: 'grey' }} onClick={() => console.log('Delete:', row.id)}>
                                                    <DeleteIcon fontSize="small" />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                                {emptyRows > 0 && (
                                    <TableRow
                                        style={{
                                            height: 53 * emptyRows,
                                        }}
                                    >
                                        <TableCell colSpan={headCells.length + 1} />
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />

                </Box>
                {/* The Offcanvas component is kept, but its children might need renaming/updating in a real app */}
                <CustomOffcanvas title="User Detail" children={<AddUserDetail show={showOffCanvas} onClose={handlecloseCanvas} />} show={showOffCanvas} onClose={handlecloseCanvas} />

            </div>
        </div>
    );
}