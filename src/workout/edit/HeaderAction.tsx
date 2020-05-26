import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';

export interface HeaderActionProps {
  onClose: () => void;
}

// TODO: makeStyles
const HeaderAction: React.FC<HeaderActionProps> = (props) => {
  const { onClose } = props;
  return (
    <IconButton
      color='secondary'
      onClick={onClose}
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
      }}
    >
      <CloseIcon />
    </IconButton>
  );
};


export default HeaderAction;
