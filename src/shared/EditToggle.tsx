import Box from '@material-ui/core/Box';
import React, { PropsWithChildren, useState } from 'react';
import EditText, { EditResult, EditTextProps } from './EditText';


export interface EditToggleProps extends EditTextProps {
  displayEl: React.ReactElement<PropsWithChildren<any>>;
}

const EditToggle: React.FC<EditToggleProps> = ({ inputEl, displayEl, onOk, onCancel, ...rootProps }) => {
  const handleOk = (data: EditResult) => {
    onOk && onOk(data); 
    setIsEdit(false);
  };
  const handleCancel = () => {
    onCancel && onCancel();
    setIsEdit(false);
  }

  const [isEdit, setIsEdit] = useState(false);
  const edit =
    <EditText
      inputEl={inputEl}
      onCancel={handleCancel}
      onOk={handleOk}
    />;

  return (
    <Box
      onClick={() => !isEdit && setIsEdit(true)} // TODO: consider edit button
      {...rootProps}
    >
      {isEdit
        ? edit
        : displayEl
      }
    </Box>
  );
}

export default EditToggle;