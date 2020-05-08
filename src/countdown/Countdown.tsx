import useTheme from '@material-ui/core/styles/useTheme';
import React, { FunctionComponent } from 'react';
import Grid from '../shared/Grid';
import time from './time-utils';


export interface CountdownProps {
  msLeft: number;
}

export interface CountdownPropsAndStyles {
  props: CountdownProps;
  style: React.CSSProperties;
}

const Countdown: FunctionComponent<CountdownPropsAndStyles> = ({ props, style }) => {
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
      style={style}
    >
      {time.toTimeString(msLeft)}
    </Grid>
  );
};

export default Countdown;