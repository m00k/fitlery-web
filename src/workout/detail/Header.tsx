import { Box, useTheme, IconButton } from '@material-ui/core';
import React from 'react';
import Avatar from '../../shared/Avatar';
import CardText, { CardTextProps } from '../../shared/CardText';
import CloseIcon from '@material-ui/icons/Close';
import { WorkoutData } from '../store';

const CardActionSecondary: React.FC<{onClick: () => void}> = ({ onClick }) => {
  return (
    <IconButton
      color="secondary"
      onClick={onClick}
    >
      <CloseIcon />
    </IconButton>
  );
}

const buildCardTextProps = (workout: WorkoutData): CardTextProps => {
  const { title, description } = workout;
  return {
    title,
    description,
    style: {
      gridArea: "text",
      whiteSpace: "normal",
    }
  };
}

export interface HeaderProps {
  workout: WorkoutData;
  onClose?: () => void;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { workout, onClose } = props;
  const { short } = workout;
  const theme = useTheme();
  const cardTextProps = buildCardTextProps(workout);
  const handleClose = () => onClose && onClose();
  return (
    <Box
      display="grid"
      gridTemplateAreas='"avatar text"'
      gridTemplateColumns={`${theme.variables.avatar.height}px auto`}
      mb={.3}
    >
      <Avatar
        text={short}
        style={{
          gridArea: "avatar",
        }}
      />
      <CardText
        {...cardTextProps}
      >
        <CardActionSecondary
          onClick={handleClose}
        />
      </CardText>
    </Box>
  );
};

export default Header;