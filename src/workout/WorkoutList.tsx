import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import Grid from '../shared/Grid';
import { WorkoutData, workouts } from './data';
import Workout from './Workout';
import toPlaylistData from './toPlaylistData';


export default function WorkoutList() {
  const theme = useTheme();
  const handleClick = (workout: WorkoutData) => console.log(toPlaylistData(workout)); // TODO: set playlist and navigateto player

  return (
    <Grid
      display='grid'
      gridTemplateColumns='repeat(12, 1fr)'
      gridGap={theme.spacing(1)}
    >
      {workouts.map((workout: WorkoutData) => (
        <Workout
          key={workout.title}
          workout={workout}
          onClick={() => handleClick(workout)}
        />
      ))}
    </Grid>
  );
}
