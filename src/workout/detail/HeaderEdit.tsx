import { Box, BoxProps, useTheme } from '@material-ui/core';
import React from 'react';
import Avatar from '../../shared/Avatar';
import { WorkoutData } from '../store';
import HeaderAction from './HeaderAction';


export interface HeaderProps extends BoxProps {
  workout: WorkoutData;
  onClose?: () => void;
}

const Header: React.FC<HeaderProps> = ({ workout, onClose, ...rootProps }) => {  
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
      <Box
        gridArea='text'
      >
        <HeaderAction
          onClose={handleClose}
        />
      </Box>
    </Box>
  );
};

export default Header;