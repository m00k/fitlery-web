import { ClickAwayListener, IconButton, makeStyles, TextField } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
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
    gridTemplateColumns: 'auto min-content',
    height: theme.variables.playlist.item.height,
    marginBottom: theme.spacing(.3),
  },
  inner: {
    fontSize: theme.typography.h4.fontSize,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  action: {
    height: '100%',
  }
}));

export interface EditTextProps {
  defaultValue: string;
  onClose?: (value: string) => void;
}

export default function EditText(props: EditTextProps) {
  const { defaultValue, onClose } = props;
  const theme = useTheme();
  const classes = useStyles(theme);
  const [value, setValue] = useState(defaultValue);
  const error = !value;
  const handleClose = () => onClose && onClose(value);
  const inputRef = React.createRef<HTMLInputElement>();
  useEffect(() => { inputRef.current && inputRef.current.focus(); }); // TODO: forward ref, give control to parent

  return (
    <ClickAwayListener
      onClickAway={handleClose}
    >
      <Box
        className={classes.root}
      >
        <TextField
          error={error}
          inputRef={inputRef}
          className={classes.inner}
          defaultValue={defaultValue}
          onChange={event => setValue(event.target.value)}
        >
          {value}
        </TextField>
        <IconButton
          className={classes.action}
          disabled={error}
          onClick={handleClose}
        >
          <DoneIcon
            color='primary'
          />
        </IconButton>
      </Box>
    </ClickAwayListener>
  );
}