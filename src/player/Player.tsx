import useTheme from '@material-ui/core/styles/useTheme';
import React, { useState } from 'react';
import Grid from '../shared/Grid';
import { workouts } from '../workout/data';
import Controls from './Controls';
import WorkoutBanner from './WorkoutBanner';

export type PlayerState = 'playing' | 'paused' | 'stopped';

const Player = () => {
  const [state, setState] = useState<PlayerState>('stopped');
  const theme = useTheme();

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
      >
      </WorkoutBanner>
      <Controls
        state={state}
        onClick={(s: PlayerState) => setState(s)}
      />
    </Grid>
  );
}

export default Player;