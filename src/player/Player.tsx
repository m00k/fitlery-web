import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import Grid from '../shared/Grid';
import { workouts } from '../workout/data';
import Controls from './Controls';
import WorkoutBanner from './WorkoutBanner';


const Player = () => {
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
      <Controls />
    </Grid>
  );
}

export default Player;