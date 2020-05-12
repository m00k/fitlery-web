import useTheme from '@material-ui/core/styles/useTheme';
import React, { FunctionComponent } from 'react';
import Grid from '../shared/Grid';
import time from './time-utils';


interface Props {
  msLeft: number;
  style: React.CSSProperties;
}

const Countdown: FunctionComponent<Props> = ({ style, ...props }) => {
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