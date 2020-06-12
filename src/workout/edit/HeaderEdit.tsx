import { Box, BoxProps, TextField, useTheme } from '@material-ui/core';
import React from 'react';
import CardDescription from '../../shared/card/CardDescription';
import CardText from '../../shared/card/CardText';
import CardTitle from '../../shared/card/CardTitle';
import { EditResult } from '../../shared/EditText';
import EditToggle from '../../shared/EditToggle';
import { WorkoutData } from '../store';
import AvatarEdit from './AvatarEdit';
import HeaderAction from './HeaderAction';


export interface HeaderProps extends BoxProps {
  workout: WorkoutData;
  onClose?: () => void;  // TODO: page responsibility
  onUpdate: ({ value, error }: EditResult) => void; // TODO: type
}

const HeaderEdit: React.FC<HeaderProps> = ({ workout, onClose, onUpdate, ...rootProps }) => {  
  const { description, short, title  } = workout;
  const handleClose = () => onClose && onClose();
  const handleUpdate = (key: string) => (update: EditResult) => { // TODO: type
    if (!onUpdate) {
      return;
    }
    const { value: updatedValue, error } = update;
    const result = { value: {[key]: updatedValue }, error } 
    onUpdate(result);
  }

  const theme = useTheme();
  return (
    <Box
      display='grid'
      gridTemplateAreas='"avatar text"'
      gridTemplateColumns={`${theme.variables.avatar.height}px auto`}
      mb={.3}
      {...rootProps}
    >
      <AvatarEdit
        text={short}
        onUpdate={handleUpdate('short')}
      />
      <CardText
        action={
          <HeaderAction
            onClose={handleClose}
          />
        }
        title={
          <EditToggle
            gridArea='title'
            onOk={handleUpdate('title')}
            inputEl={
              <TextField
                defaultValue={title}
              />
            }
            displayEl={
              <CardTitle>
                {title}
              </CardTitle>
            }
          />
        }
        description={
          <EditToggle
            gridArea='desc'
            onOk={handleUpdate('description')}
            inputEl={
              <TextField
                defaultValue={description}
                multiline
                rows={3}
              />
            }
            displayEl={
              <CardDescription>
                {description}
              </CardDescription>
            }
          />
        }
        gridArea='text'
      />
    </Box>
  );
};

export default HeaderEdit;