import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import React, { PropsWithChildren } from 'react';

const CardTitle: React.FC<PropsWithChildren<any>> = ({ children }) => {
  return (
    <Box
      id='card-title'
      gridArea={'title'}
      minWidth={0}
    >
      <Typography
        variant='subtitle1'
        noWrap
      >
        {children}
      </Typography>
    </Box>
  );
};

export default CardTitle;