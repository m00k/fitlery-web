import { Box } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useWorkoutStore } from '../store';
import { WorkoutData } from '../store/state';
import Workout from './Workout';


export default function WorkoutList() {
  const theme = useTheme();
  const [workoutState, workoutDispatch] = useWorkoutStore();
  const { items: workouts } = workoutState;
  const history = useHistory();
  
  const handleClick = (workout: WorkoutData, index: number) => {
    workoutDispatch.select(index);
    history.push(`/workouts/${workout.title}`); // TODO: bad idea: encoding missing, uniqueness questionable, ...
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
