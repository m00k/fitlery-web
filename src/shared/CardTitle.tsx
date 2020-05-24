import Box, { BoxProps } from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import React from 'react';

export interface CardTitleProps extends BoxProps { }

const CardTitle: React.FC<CardTitleProps> = ({ children, ...rootProps }) => {
  return (
    <Box
      data-testid='card-title'
      gridArea={'title'}
      height='2em'
      minWidth={0}
      overflow='hidden'
      textOverflow='ellipsis'
      {...rootProps}
    >
      <Typography
        variant='subtitle1'
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

export default CardTitle;