import { Box } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import { useHistory } from 'react-router-dom';
import usePlayerPageStore from '../../player/usePlayerPageStore';
import { useWorkoutStore } from '../store';
import { WorkoutData } from '../store/state';
import toPlaylistData from '../toPlaylistData';
import { ContextMenuOption } from './ContextMenu';
import Workout from './Workout';


export default function WorkoutList() {
  const theme = useTheme();
  const history = useHistory();
  const [, playerPageDispatch] = usePlayerPageStore();
  const [workoutState, workoutDispatch] = useWorkoutStore();
  const { items: workouts } = workoutState;
  
  const handleCardClick = (workout: WorkoutData, index: number) => {
    workoutDispatch.select(index);
    const playlist = toPlaylistData(workout);
    playerPageDispatch.set(playlist);
    history.push(`/player`); // TODO: magic strings
  }

  const handleContextMenuClick = (workout: WorkoutData, index: number, menuOption: ContextMenuOption) => {
    const { id, short } = workout;
    workoutDispatch.select(index);
    switch (menuOption) {
      case 'delete':
        workoutDispatch.delete();
        break;
      case 'edit':
        history.push(`/workouts/${short}/${id}`);
        break;
      default:
        throw Error(`unknowkn menu option ${menuOption}`);
    }
  }

  return (
    <Box
      display='grid'
      gridTemplateColumns='repeat(12, 1fr)'
      gridGap={theme.spacing(1)}
      m={1}
    >
      {workouts.map((workout: WorkoutData, index: number) => (
        <Workout
          key={workout.id}
          workout={workout}
          onCardClick={() => handleCardClick(workout, index)}
          onContextMenuClick={handleContextMenuClick.bind(globalThis, workout, index)}
        />
      ))}
    </Box>
  );
}
