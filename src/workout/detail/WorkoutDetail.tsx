import Box from '@material-ui/core/Box';
import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { ExerciseData } from '../../exercise/data';
import ExerciseList from '../../exercise/ExerciseList';
import { useWorkoutStore, WorkoutActionDispatchers, WorkoutData } from '../store';
import Duration from './Duration';
import Header from './Header';


const useWorkout = (notFound: () => void): [WorkoutData, WorkoutActionDispatchers] => {
  const [workoutState, workoutDispatch] = useWorkoutStore();
  const { items: workouts, currentItemIndex } = workoutState;
  const { title } = useParams();
  const workout = workouts[currentItemIndex];
  useEffect(() => {
    if (workout) {
      return;
    }
    const index = workouts.findIndex(w => w.title === title);
    if (index > -1) {
      workoutDispatch.select(index);
    } else {
      notFound();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return [workout, workoutDispatch];
}

const WorkoutDetail: React.FC<any> = () => {
  const history = useHistory();
  const notFound = () => history.push(`/workouts`);
  const [workout, workoutDispatch] = useWorkout(notFound);
  if (!workout) {
    return null;
  }
  
  const handleClose = () => history.push('/');
  const handleSetBreakMs = (breakSec: number) => workoutDispatch.update({ ...workout, breakMs: breakSec * 1000 });
  const handleSetWorkMs = (workSec: number) => workoutDispatch.update({ ...workout, workMs: workSec * 1000});
  const handleAddExercise = (exercise: ExerciseData) => workoutDispatch.update({ ...workout, exercises: [...workout.exercises, exercise] });
  const handleDeleteExercise = (exercises: ExerciseData[]) => workoutDispatch.update({ ...workout, exercises });
  
  const { exercises, breakMs, workMs } = workout;

  // TODO: edit exercises
  // TODO: edit exercises order drag/drop
  return (
    <Box>
      <Header
        workout={workout}
        onClose={handleClose}
      />
      <Duration
        label='Break [sec]'
        value={breakMs / 1000}
        min={0}
        max={6000}
        step={15}
        onChange={handleSetBreakMs}
      />
      <Duration
        label='Work [sec]'
        value={workMs / 1000}
        min={0}
        max={6000}
        step={15}
        onChange={handleSetWorkMs}
      />
      <ExerciseList
        exercises={exercises}
        onAdd={handleAddExercise}
        onDelete={handleDeleteExercise}
      />
    </Box>
  );
}

export default WorkoutDetail;
