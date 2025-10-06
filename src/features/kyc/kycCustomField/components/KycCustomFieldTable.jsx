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
import { useState } from 'react';



import KycCustomFilterSection from './KycCustomFilterSection';
import CustomOffcanvas from '../../../../components/CustomOffCanvas';
import KYCCustomForm from './KYCCustomForm';



// --- Updated Mock Data ---
const rows = [
    { id: 1, fieldName: 'Passport Number', type: 'text', mandatory: 'yes', applicableFor: 'global', status: 'active' },
    { id: 2, fieldName: 'License', type: 'number', mandatory: 'no', applicableFor: 'india', status: 'inactive' },
    { id: 3, fieldName: 'Driving Permit', type: 'text', mandatory: 'yes', applicableFor: 'global', status: 'active' },
    { id: 4, fieldName: 'National ID', type: 'number', mandatory: 'yes', applicableFor: 'india', status: 'active' },
    { id: 5, fieldName: 'Health Card', type: 'text', mandatory: 'no', applicableFor: 'global', status: 'inactive' },
    { id: 6, fieldName: 'Voter ID', type: 'text', mandatory: 'yes', applicableFor: 'india', status: 'active' },
];

// --- Updated Table Headers ---
const headCells = [
    { id: 'fieldName', align: 'left', disablePadding: true, label: 'Field Name' },
    { id: 'type', align: 'left', disablePadding: false, label: 'Type' },
    { id: 'mandatory', align: 'left', disablePadding: false, label: 'Mandatory' },
    { id: 'applicableFor', align: 'left', disablePadding: false, label: 'Applicable for' },
    { id: 'status', align: 'left', disablePadding: false, label: 'Status' },
    { id: 'actions', align: 'center', disablePadding: false, label: 'Actions' },
];

/**
 * Custom Status Chip Component (using MUI Box for styling)
 */
const StatusChip = ({ status }) => {
    const is_active = status.toLowerCase() === 'active';
    const color = is_active ? '#1b5e20' : '#b71c1c'; // Darker text for visibility
    const backgroundColor = is_active ? '#e8f5e9' : '#ffebee'; // Light background colors

    return (
        <Box 
            component="span" 
            sx={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '4px 10px',
                borderRadius: '16px',
                backgroundColor: backgroundColor,
                color: color,
                fontWeight: '600',
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                minWidth: '70px',
                justifyContent: 'center',
            }}
        >
            {status}
        </Box>
    );
};

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
                            'aria-label': 'select all fields',
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.align}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sx={{ fontWeight: 'bold' }}
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


export default function KycCustomFieldTable() {
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    

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
    };
    
    // Example handler for the Edit button
    const handleEdit = (id) => {
        console.log(`Editing item with ID: ${id}`);
        // Logic to fetch item data and open form goes here
        handleOpenCanvas();
    };

    // Example handler for the Delete button
    const handleDelete = (id) => {
        console.log(`Deleting item with ID: ${id}`);
        // Logic for confirmation and deletion goes here
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
        // Added styling for the root card using MUI styling
        <Box sx={{ p: 3, m: 2, backgroundColor: '#f4f6f8', minHeight: '100vh' }}>
         
                <Box className='card-body' sx={{ p: 3 }}>
                    
                    <KycCustomFilterSection  /> 
                    <Box sx={{ width: '100%', mt: 2 }}>

                        <TableContainer>
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
                                        const isItemSelected = selected.includes(row.id);
                                        const labelId = `enhanced-table-checkbox-${index}`;

                                        return (
                                            <TableRow
                                                hover
                                                onClick={(event) => handleClick(event, row.id)}
                                                role="checkbox"
                                                aria-checked={isItemSelected}
                                                tabIndex={-1}
                                                key={row.id}
                                                selected={isItemSelected}
                                                sx={{ cursor: 'pointer' }}
                                            >
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        color="primary"
                                                        checked={isItemSelected}
                                                        inputProps={{
                                                            'aria-labelledby': labelId,
                                                        }}
                                                    />
                                                </TableCell>
                                                
                                                {/* --- Data Cells --- */}
                                                <TableCell
                                                    component="th"
                                                    id={labelId}
                                                    scope="row"
                                                    padding="none"
                                                    align="left"
                                                >
                                                    {row.fieldName}
                                                </TableCell>
                                                <TableCell align="left">{row.type}</TableCell>
                                                <TableCell align="left">{row.mandatory}</TableCell>
                                                <TableCell align="left">{row.applicableFor}</TableCell>
                                                
                                                {/* Status with Custom Chip */}
                                                <TableCell align="left">
                                                    <StatusChip status={row.status} />
                                                </TableCell>

                                                {/* Actions (Edit and Delete) */}
                                                <TableCell align="center">
                                                    <IconButton 
                                                        size="small" 
                                                        sx={{ color: 'grey' }} 
                                                        onClick={(e) => { handleActionClick(e); handleEdit(row.id); }}
                                                    >
                                                        <EditIcon fontSize="small" />
                                                    </IconButton>
                                                    <IconButton 
                                                        size="small" 
                                                        sx={{ color: 'grey' }} 
                                                        onClick={(e) => { handleActionClick(e); handleDelete(row.id); }}
                                                    >
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
                    

                </Box>
           
        </Box>
    );
}
