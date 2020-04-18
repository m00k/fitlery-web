import useTheme from '@material-ui/core/styles/useTheme';
import React, { useState } from 'react';
import Grid from '../shared/Grid';
import { workouts } from '../workout/data';
import Controls from './Controls';
import WorkoutBanner from './WorkoutBanner';
import useCountdown from './useCountdown';

export type PlayerState = 'play' | 'pause' | 'stop' | 'prev' | 'next';

const Player = () => {
  const theme = useTheme();
  const [state, setState] = useState<PlayerState>('stop');
  const onZero = () => {
    console.log('####################', 'on zero');
    setState('pause');
  }
  const [msLeft, , start, pause, reset] = useCountdown({onZero, ms: 3000});

  return (
    <Grid
      alignItems="center"
      display="grid"
      justifyItems="center"
      width={1}
      bgcolor={theme.palette.background.paper} // TODO
      boxShadow={8}
    >
      <WorkoutBanner
        workout={workouts[0]} // TODO
        playerState={state}
        msLeft={msLeft}
      >
      </WorkoutBanner>
      <Controls
        state={state}
        onClick={(s: PlayerState) => {
          setState(s);
          if (s === 'play') start();
          if (s === 'pause' ) pause();
          if (s === 'prev' ) reset();
        }}
      />
    </Grid>
  );
}

export default Player;