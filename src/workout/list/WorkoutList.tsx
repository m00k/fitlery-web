import { Box } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import { useHistory } from 'react-router-dom';
import usePlayerPageStore from '../../player/usePlayerPageStore';
import { useWorkoutStore } from '../store';
import { WorkoutData } from '../store/state';
import toPlaylistData from '../toPlaylistData';
import Workout from './Workout';


export default function WorkoutList() {
  const theme = useTheme();
  const history = useHistory();
  const [, playerPageDispatch] = usePlayerPageStore();
  const [workoutState, workoutDispatch] = useWorkoutStore();
  const { items: workouts } = workoutState;
  
  const handleClick = (workout: WorkoutData, index: number) => {
    workoutDispatch.select(index);
    const playlist = toPlaylistData(workout);
    playerPageDispatch.set(playlist);
    history.push(`/player`); // TODO: magic strings
  }

  return (
    <Box
      display='grid'
      gridTemplateColumns='repeat(12, 1fr)'
      gridGap={theme.spacing(1)}
    >
      {workouts.map((workout: WorkoutData, index: number) => (
        <Workout
          key={workout.title}
          workout={workout}
          onClick={() => handleClick(workout, index)}
        />
      ))}
    </Box>
  );
}
