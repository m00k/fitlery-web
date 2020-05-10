import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import React, { FunctionComponent } from 'react';


const UnderConstruction: FunctionComponent = () => {
  const theme = useTheme();
  return (
    <Box
      textAlign="center"
      fontSize="2rem"
      color={theme.palette.secondary.contrastText}>under construction
    </Box>
  )
};

export default UnderConstruction;