import { BoxProps, ClickAwayListener, IconButton, makeStyles, TextFieldProps } from '@material-ui/core';
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

export interface EditResult {
  value?: any;
  error: boolean;
}

export interface EditTextProps extends BoxProps {
  inputEl: React.ReactElement<TextFieldProps>; // TODO: generalize
  onOk?: (data: EditResult) => void;
  onCancel?: () => void;
}

const EditText: React.FC<EditTextProps> = ({ inputEl, onOk, onCancel, ...rootProps }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const defaultValue = inputEl.props.defaultValue;
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState(false);
  const handleOk = () => onOk && onOk({error, value});
  const handleCancel = () => onCancel && onCancel();
  const handleChange = (ev: any) => { // TODO: type
    setValue(ev.target.value);
    setError(!ev.target.validity.valid)
  } 
  const inputRef = React.useRef<HTMLInputElement>(null);
  useEffect(() => { inputRef.current && inputRef.current.focus(); }); // TODO: revisit

  return (
    <ClickAwayListener
      onClickAway={handleCancel}
    >
      <Box
        className={classes.root}
        {...rootProps}
      >
        <inputEl.type
          error={error}
          inputRef={inputRef}
          defaultValue={defaultValue}
          onChange={handleChange}
          {...inputEl.props}
        >
          {value}
        </inputEl.type>
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
          size='small'
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