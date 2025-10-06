import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  CircularProgress,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const CustomDeleteModal = ({ open, handleClose, onConfirm, title = "this item" }) => {
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    setLoading(true);
    
    try {
     
      await onConfirm();
      
      // 2. Mock a short delay for demonstration (Remove in production if onConfirm is async)
      await new Promise(resolve => setTimeout(resolve, 500)); 

      // 3. Reset loading state and close modal
      setLoading(false);
      handleClose();

    } catch (error) {
      console.error("Error during delete confirmation:", error);
      setLoading(false);
      // Optional: Add error handling/toast notification here
    }
  };

  // Prevent closing while the action is processing
  const handleDialogClose = (reason) => {
    if (reason !== 'backdropClick' || !loading) {
      handleClose();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleDialogClose}
      aria-labelledby="delete-dialog-title"
      PaperProps={{
        sx: {
          width: '100%',
          maxWidth: 400,
          borderRadius: 2,
        },
      }}
    >
      <DialogTitle id="delete-dialog-title" sx={{ display: 'flex', alignItems: 'center', color: 'error.main' }}>
        <DeleteIcon sx={{ mr: 1 }} />
        Confirm Deletion
      </DialogTitle>

      <DialogContent dividers>
        <Typography id="delete-dialog-description" gutterBottom>
          Are you sure you want to delete <span style={{ fontWeight: 'bold' }}>{title}</span>? This action cannot be undone.
        </Typography>
      </DialogContent>

      <DialogActions sx={{ p: 2, justifyContent: 'space-between' }}>
        
        {/* Cancel Button */}
        <Button 
          onClick={handleClose} 
          color="inherit" 
          disabled={loading}
          variant="outlined"
        >
          Cancel
        </Button>

        {/* Confirm Button with Loader */}
        <Button
          onClick={handleConfirm}
          color="error"
          variant="contained"
          disabled={loading}
          sx={{ 
              minWidth: 100,
              position: 'relative',
          }}
        >
          {loading ? (
            <CircularProgress
              size={24}
              sx={{
                color: 'white',
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: '-12px',
                marginLeft: '-12px',
              }}
            />
          ) : (
            "Confirm"
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDeleteModal;