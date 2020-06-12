import { BoxProps, ClickAwayListener, IconButton, makeStyles, TextField } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import React, { useEffect, useState } from 'react';


const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[12],
    borderRadius: 1,
    color: theme.palette.primary.main,
    display: 'grid',
    gridTemplateColumns: 'auto min-content min-content',
    height: theme.variables.playlist.item.height,
    marginBottom: theme.spacing(.3),
  },
  action: {
    height: '100%',
  }
}));

export interface EditResult<T> {
  value: T;
  error: boolean;
}

export interface EditTextProps extends BoxProps {
  defaultValue: string;
  onOk?: (data: EditResult<string>) => void;
  onCancel?: () => void;
}

const EditText: React.FC<EditTextProps> = ({ defaultValue, onOk, onCancel, ...rootProps }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [value, setValue] = useState(defaultValue);
  const error = !value;
  const handleOk = () => onOk && onOk({error, value});
  const handleCancel = () => onCancel && onCancel();
  const inputRef = React.createRef<HTMLInputElement>();
  useEffect(() => { inputRef.current && inputRef.current.focus(); }); // TODO: forward ref, give control to parent

  return (
    <ClickAwayListener
      onClickAway={handleCancel}
    >
      <Box
        className={classes.root}
        {...rootProps}
      >
        <TextField
          error={error}
          inputRef={inputRef}
          defaultValue={defaultValue}
          onChange={event => setValue(event.target.value)}
        >
          {value}
        </TextField>
        <IconButton
          className={classes.action}
          size='small'
          onClick={handleCancel}
        >
          <CloseIcon
            color='inherit'
          />
        </IconButton>
        <IconButton
          className={classes.action}
          disabled={error}
          onClick={handleOk}
        >
          <DoneIcon
            color='inherit'
          />
        </IconButton>
      </Box>
    </ClickAwayListener>
  );
}

export default EditText;