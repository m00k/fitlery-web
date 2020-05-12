import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import { useHistory } from 'react-router-dom';
import usePlayerPageStore from '../player/usePlayerPageStore';
import Grid from '../shared/Grid';
import { WorkoutData, workouts } from './data';
import toPlaylistData from './toPlaylistData';
import Workout from './Workout';

export default function WorkoutList() {
  const theme = useTheme();
  const history = useHistory();
  const [, playerPageDispatch] = usePlayerPageStore();
  
  const handleClick = (workout: WorkoutData) => {
    const playlist = toPlaylistData(workout);
    playerPageDispatch.set(playlist);
    history.push('/player'); // TODO: magic strings
  }

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
