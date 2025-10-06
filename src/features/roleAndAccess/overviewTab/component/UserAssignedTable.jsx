import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  TablePagination,
} from '@mui/material';
import OverViewFilterSection from './OverviewTabFilterSection';

// ✅ Sample Data
const rows = [
  { id: 1, username: 'John Doe', role: 'Admin', assignedBy: 'Super Admin', date: '2025-10-02' },
  { id: 2, username: 'Jane Smith', role: 'Editor', assignedBy: 'Admin', date: '2025-10-03' },
  { id: 3, username: 'Mike Johnson', role: 'Viewer', assignedBy: 'Admin', date: '2025-10-01' },
  { id: 4, username: 'Emily Davis', role: 'Moderator', assignedBy: 'Super Admin', date: '2025-09-29' },
  { id: 5, username: 'Chris Lee', role: 'Editor', assignedBy: 'Admin', date: '2025-10-04' },
];

// ✅ Table Headers
const headCells = [
  { id: 'username', align: 'left', label: 'Username' },
  { id: 'role', align: 'left', label: 'Role' },
  { id: 'assignedBy', align: 'left', label: 'Assigned By' },
  { id: 'date', align: 'left', label: 'Date' },
];

// ✅ Table Head
function EnhancedTableHead({ onSelectAllClick, numSelected, rowCount }) {
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all users' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} align={headCell.align}>
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

// ✅ Main Table
export default function UserAssignedTable() {
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      setSelected(rows.map((n) => n.id));
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) newSelected = selected.concat(id);
    else if (selectedIndex === 0) newSelected = selected.slice(1);
    else if (selectedIndex === selected.length - 1)
      newSelected = selected.slice(0, -1);
    else if (selectedIndex > 0)
      newSelected = selected
        .slice(0, selectedIndex)
        .concat(selected.slice(selectedIndex + 1));

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const visibleRows = React.useMemo(
    () => rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [page, rowsPerPage]
  );

  return (
    <div className="card mt-3">
      <div className="card-body">
        <OverViewFilterSection/>

        <Box sx={{ width: '100%' }}>
          <TableContainer component={Paper} elevation={0}>
            <Table aria-labelledby="user-table" size="medium">
              <EnhancedTableHead
                numSelected={selected.length}
                onSelectAllClick={handleSelectAllClick}
                rowCount={rows.length}
              />
              <TableBody>
                {visibleRows.map((row, index) => {
                  const isItemSelected = selected.includes(row.id);
                  const labelId = `user-table-checkbox-${index}`;

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
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell align="left">{row.username}</TableCell>
                      <TableCell align="left">{row.role}</TableCell>
                      <TableCell align="left">{row.assignedBy}</TableCell>
                      <TableCell align="left">{row.date}</TableCell>
                    </TableRow>
                  );
                })}
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
      </div>
    </div>
  );
}
