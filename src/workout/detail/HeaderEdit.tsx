import { Box, BoxProps, useTheme } from '@material-ui/core';
import React from 'react';
import Avatar from '../../shared/Avatar';
import CardDescription from '../../shared/card/CardDescription';
import CardText from '../../shared/card/CardText';
import CardTitle from '../../shared/card/CardTitle';
import EditText, { EditResult } from '../../shared/EditText';
import EditTextToggle from '../../shared/EditTextToggle';
import { WorkoutData } from '../store';
import HeaderAction from './HeaderAction';


export interface HeaderProps extends BoxProps {
  workout: WorkoutData;
  onClose?: () => void;  // TODO: not really a header's responsibility
  onUpdate: ({ value, error }: EditResult<Partial<WorkoutData>>) => void;
}

const HeaderEdit: React.FC<HeaderProps> = ({ workout, onClose, onUpdate, ...rootProps }) => {  
  const { description, short, title  } = workout;
  const handleClose = () => onClose && onClose();
  const handleUpdate = (key: string) => (update: EditResult<string>) => {
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
        description={
          <EditTextToggle
            gridArea='desc'
            input={
              <EditText
                defaultValue={description}
                pl={1}
                onOk={handleUpdate('description')}
              />
            }
            display={
              <CardDescription>
                {description}
              </CardDescription>
            }
          />
        }
        title={
          <EditTextToggle
            gridArea='title'
            input={
              <EditText
                defaultValue={title}
                pl={1}
                onOk={handleUpdate('title')}
              />
            }
            display={
              <CardTitle>
                {title}
              </CardTitle>
            }
          />
        }
        gridArea='text'
      />
    </Box>
  );
};

export default HeaderEdit;