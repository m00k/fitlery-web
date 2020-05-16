import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import React from 'react';


export interface DurationEditProps {
  open: boolean;
  onClose?: (duration: number) => void;
}

const DurationEdit: React.FC<DurationEditProps> = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogTitle>
        Duration in Seconds
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="duration"
          label="Duration"
          type="number"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          onClick={() => onClose && onClose(30)} // TODO: from form
        >
          OK
          </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DurationEdit;