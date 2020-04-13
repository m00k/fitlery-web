import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import Grid from '../shared/GridItem';
import { WorkoutData, workouts } from './data';
import Workout from './Workout';


export default function WorkoutList() {
  const theme = useTheme();
  return (
    <Grid
      display='grid'
      gridTemplateColumns='repeat(12, 1fr)'
      gridGap={theme.spacing(1)}
    >
      {workouts.map((workout: WorkoutData) => (
        <Workout key={workout.title} workout={workout}></Workout>
      ))}
    </Grid>
  );
}
