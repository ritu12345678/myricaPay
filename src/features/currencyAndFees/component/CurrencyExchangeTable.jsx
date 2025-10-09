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
import CurrencyFilterSection from './CurrencyFilterSection';
import CustomOffcanvas from '../../../components/CustomOffCanvas';
import CorridorForm from './AddCorridorForm';
import { useState } from 'react';


const rows = [
    { id: 1, corridor: 'IND -> US', liveFixRate: '1 USD = 83.50 INR', marginPercent: 0.50, feeType: 'Fixed', limit: '$10 - 20k' },
    { id: 2, corridor: 'US -> MEX', liveFixRate: '1 USD = 17.50 MXN', marginPercent: 1.20, feeType: 'Percentage', limit: '$5 - 15k' },
    { id: 3, corridor: 'CAD -> GBR', liveFixRate: '1 CAD = 0.58 GBP', marginPercent: 0.75, feeType: 'Fixed', limit: '$500 - 5k' },
    { id: 4, corridor: 'JPN -> AUS', liveFixRate: '1 JPY = 0.010 AUD', marginPercent: 0.90, feeType: 'Percentage', limit: '$1k - 50k' },
    { id: 5, corridor: 'GER -> FRA', liveFixRate: '1 EUR = 1.00 EUR', marginPercent: 0.00, feeType: 'Fixed', limit: '$100 - 10k' },
];

const headCells = [
    { id: 'corridor', align: 'left', disablePadding: true, label: 'Corridor' },
    { id: 'liveFixRate', align: 'left', disablePadding: false, label: 'Live Fix Rate' },
    { id: 'marginPercent', align: 'right', disablePadding: false, label: 'Margin (%)' },
    { id: 'feeType', align: 'left', disablePadding: false, label: 'Fee Type' },
    { id: 'limit', align: 'left', disablePadding: false, label: 'Limit' },
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
                            'aria-label': 'select all corridors',
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.align}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
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


export default function CurrencyExchangeTable() {
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [showOffCanvas, setShowOffCanvas] = useState(false)
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
                <CurrencyFilterSection openCanvas={handleOpenCanvas} />
                <Box sx={{ width: '100%' }}>

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
                                            <TableCell
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                                padding="none"
                                                align="left"
                                            >
                                                {row.corridor}
                                            </TableCell>
                                            <TableCell align="left">{row.liveFixRate}</TableCell>
                                            <TableCell align="right">{row.marginPercent}</TableCell>
                                            <TableCell align="left">{row.feeType}</TableCell>
                                            <TableCell align="left">{row.limit}</TableCell>

                                            {/* Actions */}
                                            <TableCell align="center">
                                                <IconButton size="small" sx={{ color: 'grey' }} onClick={handleOpenCanvas}>
                                                    <EditIcon fontSize="small" />
                                                </IconButton>
                                                <IconButton size="small" sx={{ color: 'grey' }} onClick={handleActionClick}>
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
                <CustomOffcanvas title="Create Corridor" children={<CorridorForm show={showOffCanvas} onClose={handlecloseCanvas} />} show={showOffCanvas} onClose={handlecloseCanvas} />

            </div>
        </div>
    );
}