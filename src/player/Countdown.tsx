import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import Grid from '../shared/Grid';
import time from './time-utils';

export interface CountdownProps {
  msLeft: number;
}

const Countdown = (props: CountdownProps) => {
  const { msLeft } = props
  const theme = useTheme();
  
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
      {time.toTimeString(msLeft)}
    </Grid>
  );
};

export default Countdown;