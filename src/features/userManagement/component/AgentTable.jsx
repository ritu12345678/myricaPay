
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import Checkbox from '@mui/material/Checkbox';

const rows = [
    {
        id: 1,
        name: 'Global Pay Solution',
        avatar: 'https://i.pravatar.cc/40?img=1',
        businessLine: 'Finance',
        location: 'New York',
        status: 'Active',
        performance: 'Good',
        riskRating: 'Low',
        action: 'View',
    },
    {
        id: 2,
        name: 'NextGen Corp',
        avatar: 'https://i.pravatar.cc/40?img=2',
        businessLine: 'Tech',
        location: 'London',
        status: 'Inactive',
        performance: 'Average',
        riskRating: 'Medium',
        action: 'Edit',
    },
];

// Column Definitions (Key Change: Added disableColumnMenu: true)
const columns = [
    {
        field: 'agentDetails',
        headerName: 'Agent Details',
        width: 250,
        sortable: true,
        disableColumnMenu: true, // Hides the column menu (three dots)
        renderCell: (params) => (
            <Box display="flex" >
                <Avatar src={params.row.avatar} alt={params.row.name} sx={{ width: 34, height: 34,mt:1 }} />
                <Box ml={1} minWidth={0}>
                    <Typography variant="body2" fontWeight="bold" noWrap sx={{ }}>
                        {params.row.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" noWrap sx={{ pt:0}} >
                        ID: {params.row.id}
                    </Typography>
                </Box>
            </Box>
        ),
    },
    { field: 'businessLine', headerName: 'Business Line', width: 150, sortable: true, disableColumnMenu: true },
    { field: 'location', headerName: 'Location', width: 150, sortable: true, disableColumnMenu: true },
    { field: 'status', headerName: 'Status', width: 120, sortable: true, disableColumnMenu: true },
    { field: 'performance', headerName: 'Performance', width: 150, sortable: true, disableColumnMenu: true },
    { field: 'riskRating', headerName: 'Risk Rating', width: 150, sortable: true, disableColumnMenu: true },
    { field: 'action', headerName: 'Action', width: 100, sortable: false, disableColumnMenu: true }, // Not sortable, but menu hidden
];

export default function AgentTable() {
    return (
        <Box sx={{ height: 300, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                checkboxSelection
                getRowId={(row) => row.id}
                hideFooter
                sx={{
                    border: 0,
                    
                  
                    '& .MuiDataGrid-columnHeader--sortable .MuiDataGrid-iconButtonContainer': {
                        opacity: 1, // Set to 1 to be permanently visible
                        visibility: 'visible', // Ensure visibility is not hidden by other styles
                        color: 'black',
                        transition: 'none', // Remove the hover fade effect
                    },
                    
                 
                    '& .MuiDataGrid-columnHeader--sortable:not(.MuiDataGrid-columnHeader--sorted) .MuiDataGrid-iconButtonContainer': {
                        opacity: 1,
                    },
                    
                  
                    
                    '& .MuiDataGrid-columnSeparator': {
                        display: 'none',
                    },
                    '& .MuiDataGrid-columnHeaders': {
                        borderBottom: '1px solid #e0e0e0', 
                    },
                }}
                slots={{
                    // Use your custom icons for all states
                    columnSortedAscendingIcon: ArrowDropUpIcon,
                    columnSortedDescendingIcon: ArrowDropDownIcon,
                    columnUnsortedIcon: ArrowDownwardIcon, 
                }}
            />
        </Box>
    );
}