import { Box, useTheme, IconButton } from '@material-ui/core';
import React, { PropsWithChildren } from 'react';
import Avatar from '../../shared/Avatar';
import CardText, { CardTextProps } from '../../shared/card/CardText';
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

const Layout: React.FC = ({ children }: PropsWithChildren<{}>) => {
  const theme = useTheme();
  return <Box
    display="grid"
    gridTemplateAreas='"avatar text"'
    gridTemplateColumns={`${theme.variables.avatar.height}px auto`}
    mb={.3}
  >
    {children}
  </Box>
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

const useStyles = () => ({
  avatar: {
    gridArea: "avatar",
  }
})

export interface HeaderProps {
  workout: WorkoutData;
  onClose?: () => void;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { workout, onClose } = props;
  const { short } = workout;
  const cardTextProps = buildCardTextProps(workout);
  const handleClose = () => onClose && onClose();
  const styles = useStyles();
  return (
    <Layout>
      <Avatar
        text={short}
        style={styles.avatar}
      />
      <CardText
        {...cardTextProps}
      >
        <CardActionSecondary
          onClick={handleClose}
        />
      </CardText>
    </Layout>
  );
};

export default Header;