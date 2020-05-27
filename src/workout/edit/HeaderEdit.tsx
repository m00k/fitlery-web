import { Box, BoxProps, TextField, useTheme } from '@material-ui/core';
import React from 'react';
import Avatar from '../../shared/Avatar';
import CardDescription from '../../shared/card/CardDescription';
import CardText from '../../shared/card/CardText';
import CardTitle from '../../shared/card/CardTitle';
import EditToggle, { EditResult } from '../../shared/EditToggle';
import { WorkoutData } from '../store';
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
      display="grid"
      gridTemplateAreas='"avatar text"'
      gridTemplateColumns={`${theme.variables.avatar.height}px auto`}
      mb={.3}
      {...rootProps}
    >
      <Avatar
        text={short}
        gridArea='avatar'
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
            input={
              <TextField
                defaultValue={title}
              />
            }
            display={
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
            input={
              <TextField
                defaultValue={description}
                multiline
                rows={3}
              />
            }
            display={
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