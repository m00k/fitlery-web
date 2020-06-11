import { BoxProps, TextField, useTheme } from '@material-ui/core';
import React, { useState } from 'react';
import Avatar, { AvatarProps } from '../../shared/Avatar';
import EditToggle, { EditResult } from '../../shared/EditToggle';


export interface AvatarEditProps extends BoxProps, AvatarProps {
  onUpdate: ({ value, error }: EditResult) => void; // TODO: type
}

const AvatarEdit: React.FC<AvatarEditProps> = ({ text: initialText, onUpdate, ...rootProps }) => {
  const [text, setText] = useState<string>(initialText);
  const [error, setError] = useState<boolean>(false);
  const handleUpdate = (update: EditResult) => { // TODO: type, wrong responsibility 'short' needs to be provided by parent
    console.log('##################', text, error, update);    if (!onUpdate) {
      return;
    }
    onUpdate(update);
  }
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setError(!ev.target.validity.valid);
    setText(ev.target.value);
  };

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
        error={error}
        inputProps={{minLength: 2, maxLength: 2}}
        defaultValue={text}
        onChange={handleChange}
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