import Box from '@material-ui/core/Box';
import React, { PropsWithChildren } from 'react';

const WithMargin = ({ children }: PropsWithChildren<any>) => {
  return (
    <Box
      m={1}
      position="absolute">
      {children}
    </Box>
  );
}

export default WithMargin;