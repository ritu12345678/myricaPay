import  React,{useState} from 'react';
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
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Icon } from '@iconify/react'; // ✅ Iconify
import UserListFilter from './UserListFilter';
import AddUserForm from './AddUserForm';
import CustomOffcanvas from '../../../../components/CustomOffCanvas';


// ✅ Sample user data
const rows = [
  { id: 1, userId: 'USR001', name: 'John Doe', role: 'Admin', email: 'john.doe@example.com', status: 'Active' },
  { id: 2, userId: 'USR002', name: 'Jane Smith', role: 'Editor', email: 'jane.smith@example.com', status: 'Inactive' },
  { id: 3, userId: 'USR003', name: 'Mike Johnson', role: 'Viewer', email: 'mike.johnson@example.com', status: 'Active' },
  { id: 4, userId: 'USR004', name: 'Emily Davis', role: 'Moderator', email: 'emily.davis@example.com', status: 'Pending' },
  { id: 5, userId: 'USR005', name: 'Chris Lee', role: 'Contributor', email: 'chris.lee@example.com', status: 'Active' },
];

// ✅ Table headers
const headCells = [
  { id: 'userId', align: 'left', label: 'User ID' },
  { id: 'name', align: 'left', label: 'Name' },
  { id: 'role', align: 'left', label: 'Role' },
  { id: 'email', align: 'left', label: 'Email' },
  { id: 'status', align: 'left', label: 'Status' },
  { id: 'actions', align: 'center', label: 'Actions' },
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
export default function UserTable() {
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
const [showOffCanvas, setShowOffCanvas] = useState(false)
    const handleOpenCanvas = () => {
        setShowOffCanvas(true)
    }
    const handleCloseCanvas = () => {
        setShowOffCanvas(false)
    }
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
    event.stopPropagation();
  };

  const visibleRows = React.useMemo(
    () => rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [page, rowsPerPage]
  );

  // ✅ Status color mapping
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
        <UserListFilter />
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
                      <TableCell align="left">{row.userId}</TableCell>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">
                        <Chip label={row.role} color="info" size="small" />
                      </TableCell>
                      <TableCell align="left">{row.email}</TableCell>
                      <TableCell align="left">
                        <Chip
                          label={row.status}
                          color={statusColor(row.status)}
                          size="small"
                        />
                      </TableCell>
                      <TableCell align="center">
                        {/* ✅ User Edit Icon */}
                        <IconButton
                          size="small"
                          sx={{ color: 'grey.700' }}
                          onClick={handleActionClick}
                        >
                          <Icon icon="mdi:account-edit-outline" width="20" height="20" onClick={handleOpenCanvas}/>
                        </IconButton>

                        {/* ✅ Delete Icon */}
                        <IconButton
                          size="small"
                          sx={{ color: 'grey.700' }}
                          onClick={handleActionClick}
                        >
                          <DeleteOutlinedIcon fontSize="small" />
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
        <CustomOffcanvas title="User Management" children={<AddUserForm show={showOffCanvas} onClose={handleCloseCanvas}  />} show={showOffCanvas} onClose={handleCloseCanvas} height='90vh'/>
      </div>
    </div>
  );
}
