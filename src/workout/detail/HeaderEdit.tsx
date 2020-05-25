import { Box, BoxProps, TextField, useTheme } from '@material-ui/core';
import React from 'react';
import Avatar from '../../shared/Avatar';
import CardDescription from '../../shared/card/CardDescription';
import CardText from '../../shared/card/CardText';
import EditText from '../../shared/EditText';
import EditTextToggle from '../../shared/EditTextToggle';
import { WorkoutData } from '../store';
import HeaderAction from './HeaderAction';


// TODO: click away listener
export interface HeaderProps extends BoxProps {
  workout: WorkoutData;
  onClose?: () => void;
  onUpdate: ({ value, error }: any) => void; // TODO: type
}

const HeaderEdit: React.FC<HeaderProps> = ({ workout, onClose, onUpdate, ...rootProps }) => {  
  const { description, short, title  } = workout;
  const handleClose = () => onClose && onClose();
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
                pl={5}
                onOk={onUpdate}
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
          <TextField
            defaultValue={title}
            style={{
              color: theme.palette.background.paper,
              gridArea: 'title',
            }}
          />
        }
        gridArea='text'
      />
    </Box>
  );
};

export default HeaderEdit;