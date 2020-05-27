import { BoxProps } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React, { useState } from 'react';


export interface EditTextToggleProps extends BoxProps {
  edit: React.ReactElement;
  display: React.ReactElement;
}

const EditTextToggle: React.FC<EditTextToggleProps> = ({ edit, display, ...rootProps }) => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <Box
      {...rootProps}
      onClick={() => setIsEdit(!isEdit)}
    >
      {isEdit
        ? edit
        : display
      }
    </Box>
  );
}

export default EditTextToggle;