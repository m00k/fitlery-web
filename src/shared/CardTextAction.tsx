import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import React, { PropsWithChildren } from 'react';

const CardTextAction: React.FC<PropsWithChildren<any>> = ({ children }) => {
  const theme = useTheme();
  return (
    <Box
      position='absolute'
      top={0}
      right={-theme.spacing(1)}
    >
      {children}
    </Box>
  );
};

export default CardTextAction;