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
  const [isEdit, setIsEdit] = useState(false);
  const error = !value;

  const handleOk = () => onOk && onOk({error, value}); // TODO: confirm dialog or cancel away, how to edit mode in toggle?
  const handleCancel = (event: React.MouseEvent<any>) => {
    setValue(defaultValue);
    setIsEdit(false);
  };
  const inputRef = React.createRef<HTMLInputElement>();
  useEffect(() => { inputRef.current && inputRef.current.focus(); }); // TODO: forward ref, give control to parent

  const edit =
    <Box
      className={classes.inputBox}
    >
      <inputEl.type
        error={error}
        inputRef={inputRef}
        defaultValue={defaultValue}
        onChange={(event: any) => setValue(event.target.value)} // TODO: type
        onClick={(event: any) => event.stopPropagation()} // prevent closing: TODO: type
        {...inputEl.props}
      >
        {value}
      </inputEl.type>
      <IconButton
        className={classes.action}
        disabled={error}
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
      onClickAway={handleCancel}
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