import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import React from 'react';


export interface DurationEditProps {
  open: boolean;
  value: number;
  onClose?: (duration: number) => void;
}

const DurationEdit: React.FC<DurationEditProps> = ({ open, value, onClose }) => {
  const [duration, setDuration] = React.useState(value);

  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="duration"
          label="Duration [seconds]"
          type="number"
          fullWidth
          inputProps={{step: 15}}
          value={duration}
          onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setDuration(Number(ev.target.value))}
        />
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          onClick={() => onClose && onClose(duration)} // TODO: from form
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DurationEdit;