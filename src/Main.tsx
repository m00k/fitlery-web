import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';

const Main = ({ children }: any) => {
  const theme = useTheme();
  const navHeight = (theme.overrides?.MuiBottomNavigation?.root as any).height;

  return (
    <Box
      data-testid='main'
      bottom={navHeight}
      display='grid'
      left={0}
      justifyItems='center'
      justifyContent='stretch'
      overflow='auto'
      position='fixed'
      right={0}
      top={navHeight}
    >
      <Box
        maxWidth={theme.breakpoints.values.lg}
        position='relative'
        width={1}
      >
        {children}
      </Box>
    </Box>
  );
}

export default Main;
