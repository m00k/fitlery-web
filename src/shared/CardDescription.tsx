import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import React, { PropsWithChildren } from 'react';

const CardDescription: React.FC<PropsWithChildren<any>> = ({ children }) => {
  return (
    <Box
      gridArea={'desc'}
      minWidth={0}
    >
      <Typography
        variant='caption'
        component='p'
        noWrap
      >
        {children}
      </Typography>
    </Box>
  );
};

export default CardDescription;