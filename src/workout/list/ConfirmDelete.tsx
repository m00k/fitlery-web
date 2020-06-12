// TODO: use or lose

import { DialogContent, DialogContentText, makeStyles, useTheme } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import React from 'react';

const useStyles = makeStyles(theme => ({
  button: {
    color: theme.palette.primary.main,
  },
}));

export interface ConfirmDeleteProps extends DialogProps {
  open: boolean;
  onOk: () => void;
  onCancel: () => void;
}

const ConfirmDelete: React.FC<ConfirmDeleteProps> = ({ open, onOk, onCancel, ...rootProps }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Dialog
      open={open}
      onClose={onCancel}
      {...rootProps}
    >
      <DialogTitle
        color={theme.palette.primary.light}
      >
        Confirm Delete
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Delete the selected workout?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onOk}
          className={classes.button}
        >
          Ok
        </Button>
        <Button
          onClick={onCancel}
          className={classes.button}
          autoFocus
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmDelete;