import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
  Select,
  MenuItem,
  Box,
  Divider,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// Mock data remains the same
const dateRangeOptions = [
  { value: 'today', label: 'Today', description: 'Jan 02' },
  { value: 'currentMonth', label: 'Current Month', description: 'Jan 01 - Jul 02' },
  { value: 'last7Days', label: 'Last 7 days', description: 'May 26 - Jun 01' },
  { value: 'lastMonth', label: 'Last Month', description: 'May 01 - May 31' },
  { value: 'all', label: 'All', description: '-' },
  { value: 'custom', label: 'Custom', description: '-' },
];

const allColumns = [
  'ID', 'Amount Due', 'Billing', 'Closed', 'Currency', 'Customer',
  'Date (UTC)', 'Due Date (UTC)', 'Number', 'Paid', 'Subscription',
  'Subtotal', 'Total Discount Amount', 'Applied Coupons', 'Tax',
  'Tax Percent', 'Total', 'Amount Paid', 'Status',
];

const ExportDataModal = ({ open, handleClose }) => {
  const [timeZone, setTimeZone] = useState('gmt');
  const [dateRange, setDateRange] = useState('today');
  const [selectedColumns, setSelectedColumns] = useState('default');

  const columnLabel = selectedColumns === 'default' ? 'Default (18)' : `${allColumns.length} selected`;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="export-data-dialog-title"
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle sx={{ m: 0, p: 2 }} className="d-flex justify-content-between align-items-center">
        <Typography variant="h6" component="div">
          Export Data
        </Typography>
        <IconButton aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <Divider />

      <DialogContent dividers>

        {/* === Time Zone Selection (Using Bootstrap classes for margins/spacing) === */}
        <div className="mb-4">
          <Typography variant="subtitle1" component="div" className="fw-bold mb-2">
            Time zone
          </Typography>
          <RadioGroup
            row
            name="time-zone"
            value={timeZone}
            onChange={(event) => setTimeZone(event.target.value)}
          >
            <FormControlLabel
              value="gmt"
              control={<Radio size="small" />}
              label="GMT+5 (UTC+06:00)"
              className="me-4" // Bootstrap spacing: margin-end (right) 4
            />
            <FormControlLabel
              value="utc"
              control={<Radio size="small" />}
              label="UTC"
            />
          </RadioGroup>
        </div>

        <Divider className="my-3" /> {/* Bootstrap spacing: margin-top/bottom 3 */}

        {/* === Date Range Selection (Using Bootstrap Grid) === */}
        {/* === Date Range Selection === */}
        <div className="mb-4">
          <Typography variant="subtitle1" component="div" className="fw-bold mb-2">
            Date Range
          </Typography>

          <RadioGroup
            name="date-range"
            value={dateRange}
            onChange={(event) => setDateRange(event.target.value)}
          >
            <div className="row g-2">
  {dateRangeOptions.map(option => (
    <div key={option.value} className="col-12">
      <div className="row align-items-center">
        <div className="col-7 d-flex align-items-center">
          <FormControlLabel
            value={option.value}
            control={<Radio size="small" />}
            label={<Typography variant="body2">{option.label}</Typography>}
            className="m-0"
          />
        </div>
        <div className="col-5 d-flex align-items-center">
          <Typography variant="body2" color="text.secondary" className="mb-0">
            {option.description}
          </Typography>
        </div>
      </div>
    </div>
  ))}
</div>

          </RadioGroup>
        </div>


        <Divider className="my-3" />

        {/* === Columns Selection (Using Bootstrap classes for margins and full width) === */}
        <div className="mb-4">
          <Typography variant="subtitle1" component="div" className="fw-bold mb-2">
            Columns
          </Typography>
          {/* MUI Select component takes fullWidth prop, which handles display: block; width: 100% */}
          <Select
            value={selectedColumns}
            onChange={(event) => setSelectedColumns(event.target.value)}
            displayEmpty
            size="small"
            fullWidth
            renderValue={(selected) => {
              if (selected === 'default') {
                return `Default (18)`;
              }
              return columnLabel;
            }}
          >
            <MenuItem value="default">Default (All Columns)</MenuItem>
            <MenuItem value="custom">Custom Selection</MenuItem>
          </Select>

          {/* Text box for columns list - Using Bootstrap margin and custom style for overflow */}
          <Box className="mt-1" style={{ maxHeight: '80px', overflowY: 'auto' }}>
            <Typography variant="caption" color="text.secondary" style={{ wordBreak: 'break-all' }}>
              {allColumns.join(', ')}
            </Typography>
          </Box>
        </div>
      </DialogContent>

      {/* Action Buttons (Using Bootstrap utility classes for positioning) */}
      {/* === Action Buttons (Full-width side by side) === */}
      <DialogActions className="p-3">
        <div className="d-flex w-100 gap-2">
          <Button
            onClick={handleClose}
            variant="outlined"
            color="primary"
            className="flex-fill"
            size="medium"
          >
            Cancel
          </Button>
          <Button
            onClick={handleClose}
            variant="contained"
            color="primary"
            disableElevation
            className="flex-fill"
            size="medium"
          >
            Export
          </Button>
        </div>
      </DialogActions>

    </Dialog>
  );
};

export default ExportDataModal;