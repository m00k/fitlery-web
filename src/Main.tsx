import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';

const useStyles = makeStyles((theme) => {
  const navHeight = (theme.overrides?.MuiBottomNavigation?.root as any).height;
  return {
    root: {
      bottom: navHeight,
      display: 'grid',
      left: 0,
      justifyItems: 'center',
      justifyContent: 'stretch',
      overflow: 'auto',
      position: 'fixed',
      right: 0,
      top: navHeight,
    },
    inner: {
      maxWidth: theme.breakpoints.values.lg,
      position: 'relative',
      width: '100%',
    }
  }
});

const Main = ({ children }: any) => {
  const theme = useTheme();
  const { root, inner } = useStyles(theme);

  return (
    <Box
      data-testid='main'
      className={root}
    >
      <Box
        className={inner}
      >
        {children}
      </Box>
    </Box>
  );
}

export default Main;
