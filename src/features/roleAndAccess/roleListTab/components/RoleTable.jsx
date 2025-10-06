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
  IconButton,
  Chip,
} from '@mui/material';
import EditIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

import RoleListFilter from './RoleListFilter';

// Sample data
const rows = [
  { id: 1, roleName: 'Admin', description: 'Full access to system', assignedUser: 'John Doe', status: 'Active' },
  { id: 2, roleName: 'Editor', description: 'Can edit content', assignedUser: 'Jane Smith', status: 'Inactive' },
  { id: 3, roleName: 'Viewer', description: 'View only access', assignedUser: 'Mike Johnson', status: 'Active' },
  { id: 4, roleName: 'Moderator', description: 'Moderate content', assignedUser: 'Emily Davis', status: 'Pending' },
  { id: 5, roleName: 'Contributor', description: 'Add content', assignedUser: 'Chris Lee', status: 'Active' },
];

// Table headers
const headCells = [
  { id: 'roleName', align: 'left', label: 'Role Name' },
  { id: 'description', align: 'left', label: 'Description' },
  { id: 'assignedUser', align: 'left', label: 'Assigned User' },
  { id: 'status', align: 'left', label: 'Status' },
  { id: 'actions', align: 'center', label: 'Actions' },
];

// Table Head
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
            inputProps={{ 'aria-label': 'select all roles' }}
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

// Main Table
export default function RoleTable() {
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

  const handleActionClick = (event) => {
    event.stopPropagation(); // Prevent row selection when clicking icons
  };

  const visibleRows = React.useMemo(
    () => rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [page, rowsPerPage]
  );

  // Status color mapping
  const statusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'success';
      case 'inactive':
        return 'default';
      case 'pending':
        return 'warning';
      default:
        return 'primary';
    }
  };

  return (
    <div className="card mt-3">
      <div className="card-body">
      <RoleListFilter/>

        <Box sx={{ width: '100%' }}>
          <TableContainer component={Paper} elevation={0}>
            <Table aria-labelledby="role-table" size="medium">
              <EnhancedTableHead
                numSelected={selected.length}
                onSelectAllClick={handleSelectAllClick}
                rowCount={rows.length}
              />
              <TableBody>
                {visibleRows.map((row, index) => {
                  const isItemSelected = selected.includes(row.id);
                  const labelId = `role-table-checkbox-${index}`;

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
                      <TableCell align="left">{row.roleName}</TableCell>
                      <TableCell align="left">{row.description}</TableCell>
                      <TableCell align="left">{row.assignedUser}</TableCell>
                      <TableCell align="left">
                        <Chip
                          label={row.status}
                          color={statusColor(row.status)}
                          size="small"
                        />
                      </TableCell>
                      <TableCell align="center">
                        <IconButton
                          size="small"
                          sx={{ color: 'grey' }}
                          onClick={handleActionClick}
                        >
                          <EditIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                          size="small"
                          sx={{ color: 'grey' }}
                          onClick={handleActionClick}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
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
