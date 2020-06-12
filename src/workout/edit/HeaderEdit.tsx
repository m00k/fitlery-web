import { Box, BoxProps, useTheme } from '@material-ui/core';
import React from 'react';
import CardText from '../../shared/card/CardText';
import { EditResult } from '../../shared/EditText';
import { WorkoutData } from '../store';
import AvatarEdit from './AvatarEdit';
import CardDescriptionEdit from './CardDescriptionEdit';
import CardTitleEdit from './CardTitleEdit';
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
          <CardTitleEdit
            gridArea='title'
            title={title}
            onUpdate={handleUpdate('title')}
          />
        }
        description={
          <CardDescriptionEdit
            gridArea='desc'
            description={description}
            onUpdate={handleUpdate('description')}
          />
        }
        gridArea='text'
      />
    </Box>
  );
};

export default HeaderEdit;