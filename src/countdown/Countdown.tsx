import { Box, BoxProps } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import React, { FunctionComponent, useEffect } from 'react';
import time from './time-utils';
import { useCountdownStore } from './store';
import usePlayerPageStore from '../player/usePlayerPageStore';


export interface CountdownProps extends BoxProps {
}

const Countdown: FunctionComponent<CountdownProps> = ({ ...rootProps }) => {
  const theme = useTheme();
  const [ countdownState, ] = useCountdownStore();
  const { msLeft } = countdownState;
  const isZero = msLeft === 0;
  const [ , playerPageDispatch ] = usePlayerPageStore();
  useEffect(() => {
    if (isZero) {
      playerPageDispatch.next();
    }
  }, [isZero, playerPageDispatch]);
  
  return (
    <Box
      alignItems='center'
      bgcolor={theme.palette.primary.dark}
      color={theme.palette.secondary.contrastText}
      display='grid'
      fontWeight={theme.typography.fontWeightBold}
      fontSize='3rem'
      justifyContent='center'
      {...rootProps}
    >
      {time.toTimeString(msLeft)}
    </Box>
  );
};

export default Countdown;