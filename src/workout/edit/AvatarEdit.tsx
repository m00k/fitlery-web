import { BoxProps, TextField, useTheme } from '@material-ui/core';
import React from 'react';
import Avatar, { AvatarProps } from '../../shared/Avatar';
import EditToggle, { EditResult } from '../../shared/EditToggle';


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
  return (
    <EditToggle
      alignItems='center'
      display='grid'
      fontSize={theme.typography.h4.fontSize}
      height={theme.variables.avatar.height}
      gridArea='avatar'
      onOk={handleUpdate}
      {...rootProps}
      inputEl={
      <TextField
          inputProps={{minLength: 2, maxLength: 2}}
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