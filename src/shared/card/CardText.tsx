import { BoxProps } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';

const useRootProps = (rootProps: BoxProps): BoxProps => {
  const theme = useTheme();
  return {
    alignContent: 'center',
    bgcolor: theme.palette.primary.dark,
    color: theme.palette.secondary.contrastText,
    display: 'grid',
    gridTemplateAreas: `
      "title title title title ."
      "desc desc desc desc desc"
    `,
    gridTemplateColumns: 'repeat(5, 1fr)',
    p: 2,
    position: 'relative', // accomodate for absolute positioning of
    ...rootProps,
  };
}

export interface CardTextProps extends BoxProps {
  action?: any; // TODO: type
  title: any;
  description: any;
}

const CardText: React.FC<CardTextProps> = ({ action, description, title, ...rootProps }) => {
  return (
    <Box
      data-testid='card-text'
      onClick={(ev) => ev.stopPropagation()}
      {...useRootProps(rootProps)}
    >
      {title}
      {description}
      {action}
    </Box>
  );
};

export default CardText;