import { Box } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import usePlayerPageDispatcher from '../../player/usePlayerPageDispatcher';
import { workoutReducer } from '../store';
import { workoutAtom, WorkoutData } from '../store/state';
import toPlaylistData from '../toPlaylistData';
import AddWorkout from './AddWorkout';
import { ContextMenuOption } from './ContextMenu';
import Workout from './Workout';


export default function WorkoutList() {
  const theme = useTheme();
  const history = useHistory();
  const dispatch = usePlayerPageDispatcher();
  const [workoutState, setWorkoutState] = useRecoilState(workoutAtom);
  const { items: workouts } = workoutState;
  
  const handleAddWorkout = (workout: WorkoutData) => {
    const { short, id } = workout;
    setWorkoutState(state => workoutReducer.add(state, workout));
    history.push(`/workouts/${short}/${id}`);
  };

  const handleCardClick = (workout: WorkoutData, index: number) => {
    setWorkoutState(state => workoutReducer.select(state, index));
    const playlist = toPlaylistData(workout);
    dispatch.set(playlist); // TODO: rather do that via navigation
    history.push(`/player`); // TODO: magic strings
  }

  const handleContextMenuClick = (workout: WorkoutData, index: number, menuOption: ContextMenuOption) => {
    const { id, short } = workout;
    setWorkoutState(state => workoutReducer.select(state, index));
    switch (menuOption) {
      case 'delete':
        setWorkoutState(workoutReducer.delete);
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
      <AddWorkout 
        onClick={handleAddWorkout}
      />
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
