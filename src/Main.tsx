import { makeStyles } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import ScrollToTop from './util/ScrollToTop';

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
  const rootEl = React.useRef<any>(null);
  const theme = useTheme();
  const { root, inner } = useStyles(theme);
  return (
    <div
      ref={rootEl}
      data-testid='main'
      className={root}
    >
      <ScrollToTop el={rootEl} />
      <div
        className={inner}
      >
        {children}
      </div>
    </div>
  );
}

export default Main;
