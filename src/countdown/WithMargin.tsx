import { useTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React, { PropsWithChildren } from 'react';

const WithMargin = ({ children }: PropsWithChildren<any>) => {
  const theme = useTheme();
  return (
    <Box
      position="absolute"
      top={theme.spacing(1)}
      left={theme.spacing(1)}
      right={theme.spacing(1)}
      bottom={theme.spacing(1)}
    >
      {children}
    </Box>
  );
}

export default WithMargin;