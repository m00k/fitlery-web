import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import React, { PropsWithChildren } from 'react';

export interface CardDescriptionProps extends PropsWithChildren<any> {
  noWrap?: boolean;
}

const CardDescription: React.FC<CardDescriptionProps> = ({ children, noWrap }) => {
  return (
    <Box
      gridArea={'desc'}
      minWidth={0}
    >
      <Typography
        variant='caption'
        component='p'
        noWrap={noWrap}
      >
        {children}
      </Typography>
    </Box>
  );
};

export default CardDescription;