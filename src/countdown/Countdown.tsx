import { Box, BoxProps } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import React, { FunctionComponent } from 'react';
import { useRecoilValue } from 'recoil';
import { countdownAtom } from './store';
import time from './time-utils';


export interface CountdownProps extends BoxProps {
}

const Countdown: FunctionComponent<CountdownProps> = ({ ...rootProps }) => {
  const theme = useTheme();
  const countdownState = useRecoilValue(countdownAtom);
  const { msLeft } = countdownState;

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
