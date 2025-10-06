import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const CustomTable = ({ rows, columns, pageSize = 5 }) => {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.id}
        checkboxSelection
        pagination
         autoHeight 
        pageSizeOptions={[5, 10, 20]}
        initialState={{
          pagination: { paginationModel: { pageSize } },
        }}
        sx={{
          border: 0,
          '& .MuiDataGrid-columnHeader--sortable .MuiDataGrid-iconButtonContainer': {
            opacity: 1,
            visibility: 'visible',
            color: 'black',
            transition: 'none', // removes hover fade
          },
          '& .MuiDataGrid-columnHeader--sortable:hover .MuiDataGrid-iconButtonContainer': {
            opacity: 1, // prevent hover effect
          },
          '& .MuiDataGrid-columnSeparator': {
            display: 'none',
          },
          '& .MuiDataGrid-columnHeaders': {
            borderBottom: '1px solid #e0e0e0',
          },
          
        }}
        slots={{
          columnSortedAscendingIcon: ArrowDropUpIcon,
          columnSortedDescendingIcon: ArrowDropDownIcon,
          columnUnsortedIcon: ArrowDownwardIcon,
        }}
      />
    </Box>
  );
};

export default CustomTable;
