import useTheme from '@material-ui/core/styles/useTheme';
import React, { useEffect, useState } from 'react';
import Grid from '../shared/Grid';
import time from './time-utils';

export interface CountdownProps {
  ms: number;
}

const Countdown = (props: CountdownProps) => {
  const { ms } = props
  const INTERVAL = 100;
  const [remaining, setRemaining] = useState(ms || 0);
  const theme = useTheme();
  
  useEffect(() => {
    function progress() {
      if (remaining < INTERVAL) {
        clearInterval(timer);
      }
      setRemaining(remaining => Math.max(remaining - INTERVAL, 0));
    }
    const timer = setInterval(progress, 100);
    return () => clearInterval(timer);
  });

  return (
    <Grid
      alignItems="center"
      bgcolor={theme.palette.primary.dark}
      color={theme.palette.secondary.contrastText}
      display="grid"
      fontWeight={theme.typography.fontWeightBold}
      fontSize="3rem"
      justifyContent="center"
    >
      {time.toTimeString(remaining)}
    </Grid>
  );
};

export default Countdown;