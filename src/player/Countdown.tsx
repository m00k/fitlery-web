import React, { useState, useEffect } from 'react';
import Grid from '../shared/Grid';
import time from './time-utils';

export interface CountdownProps {
  ms: number;
}

const Countdown = (props: CountdownProps) => {
  const { ms } = props
  const [remaining, setRemaining] = useState(ms);
  const INTERVAL = 100;

  
  useEffect(() => {
    function progress() {
      setRemaining(remaining => remaining + INTERVAL);
    }
    const timer = setInterval(progress, 100);
    return () => clearInterval(timer);
  }, [])

  return (
    <Grid>
      {time.toTimeString(remaining)}
    </Grid>
  );
};

export default Countdown;