import Box, { BoxProps } from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import React from 'react';

export interface CardDescriptionProps extends BoxProps { }

const CardDescription: React.FC<CardDescriptionProps> = ({ children, ...rootProps }) => {
  return (
    <Box
      data-testid='card-description'
      gridArea={'desc'}
      height='2em'
      minWidth={0}
      overflow='hidden'
      textOverflow='ellipsis'
      {...rootProps}
    >
      <Typography
        variant='caption'
        component='p'
        style={{
          overflow: 'inherit',
          textOverflow: 'inherit',
        }}
      >
        {children}
      </Typography>
    </Box>
  );
};

export default CardDescription;