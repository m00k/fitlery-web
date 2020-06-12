import { BoxProps, makeStyles, TextField, useTheme } from '@material-ui/core';
import React from 'react';
import Avatar, { AvatarProps } from '../../shared/Avatar';
import { EditResult } from '../../shared/EditText';
import EditToggle from '../../shared/EditToggle';

const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'center',
    display: 'grid',
    fontSize: theme.typography.h4.fontSize,
    height: theme.variables.avatar.height,
    gridArea: 'avatar',
  },
}));

export interface AvatarEditProps extends BoxProps, AvatarProps {
  onUpdate: ({ value, error }: EditResult) => void; // TODO: type
}

const AvatarEdit: React.FC<AvatarEditProps> = ({ text, onUpdate, ...rootProps }) => {
  const handleUpdate = (update: EditResult) => {
    if (!onUpdate) {
      return;
    }
    onUpdate(update);
  }

  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <EditToggle
      className={classes.root}
      onOk={handleUpdate}
      {...rootProps}
      inputEl={
        <TextField
          inputProps={{minLength: 2, maxLength: 2, required: true}}
          defaultValue={text}
        />
      }
      displayEl={
        <Avatar
          text={text}
        />
      }
    />
  );
};

export default AvatarEdit;