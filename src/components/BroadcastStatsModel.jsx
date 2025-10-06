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


const BroadcastStatModel = ({ open, handleClose }) => {

 const renderRow = (label, value, chipType = null) => (
    <div className="d-flex align-items-center py-1">
      <p
        className="mb-0 fs-6 fw-medium text-muted text-capitalize"
        style={{ width: "150px"}}
      >
        {label}
      </p>
      
        <p className="mb-0 fs-6">{value}</p>
    
    </div>
  );
 

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
       Broadcast Stat
        </Typography>
        <IconButton aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <Divider />

     <DialogContent>
      {renderRow('Name', 'Tashan Khan')}

     </DialogContent>

  

    </Dialog>
  );
};

export default BroadcastStatModel;