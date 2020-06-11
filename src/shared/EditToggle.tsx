import { BoxProps, ClickAwayListener, IconButton, makeStyles, TextFieldProps } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import React, { PropsWithChildren, useEffect, useState } from 'react';


const useStyles = makeStyles((theme) => ({
  root: {

  },
  inputBox: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[12],
    borderRadius: 1,
    color: theme.palette.primary.main,
    display: 'grid',
    gridTemplateColumns: 'auto min-content min-content',
    height: theme.variables.playlist.item.height,
    marginBottom: theme.spacing(.3),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  action: {
    height: '100%',
  }
}));

export interface EditResult {
  value?: any; // TODO: type
  error: boolean;
}

export interface EditToggleProps extends BoxProps {
  inputEl: React.ReactElement<TextFieldProps>; // TODO: generalize
  displayEl: React.ReactElement<PropsWithChildren<any>>;
  onOk?: (data: EditResult) => void;
  onCancel?: () => void;
}

const EditToggle: React.FC<EditToggleProps> = ({ inputEl, displayEl, onOk, onCancel, ...rootProps }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const defaultValue = inputEl.props.defaultValue;
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleOk = () => onOk && onOk({error, value});
  const handleCancel = (ev: React.MouseEvent<any>) => {
    setValue(defaultValue);
    setError(false);
    setIsEdit(false);
  };
  const inputRef = React.createRef<HTMLInputElement>();
  useEffect(() => { inputRef.current && inputRef.current.focus(); }); // TODO: revisit
  const handleChange = (ev: any) => { // TODO: type
    setValue(ev.target.value);
    setError(!ev.target.validity.valid)
  } 

  const edit =
    <Box
      className={classes.inputBox}
    >
      <inputEl.type
        error={error}
        inputRef={inputRef}
        defaultValue={defaultValue}
        onChange={handleChange}
        onClick={(event: any) => event.stopPropagation()} // prevent closing: TODO: type
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
    </Box>;

  return (
    <ClickAwayListener
      onClickAway={ev => isEdit && handleCancel(ev)}
    >
      <Box
        onClick={() => setIsEdit(!isEdit)} // TODO: create edit button instead?
        className={classes.root}
        {...rootProps}
      >
        {isEdit
          ? edit
          : displayEl
        }
      </Box>
    </ClickAwayListener>
  );
}

export default EditToggle;