import Box from '@material-ui/core/Box';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { ExerciseData } from '../../exercise/data';
import ExerciseList from '../../exercise/ExerciseList';
import { EditResult } from '../../shared/EditText';
import Duration from './Duration';
import HeaderEdit from './HeaderEdit';
import useWorkout from './useWorkout';


const WorkoutEdit: React.FC<any> = () => {
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
  const handleEditExercise = (exercise: ExerciseData, index: number) => { // TODO: type
    // TODO: error case?
    const exercises = [
      ...workout.exercises.slice(0, index),
      exercise,
      ...workout.exercises.slice(index + 1),
    ];
    workoutDispatch.update({ ...workout, exercises });
  }
  const handleUpdateHeader = (update: EditResult) => { // TODO: type
    // TODO: error case?
    const { value } = update;
    workoutDispatch.update({ ...workout, ...value });
  }
  
  const { exercises, breakMs, workMs } = workout;

  // TODO: edit exercises order drag/drop
  return (
    <Box>
      <HeaderEdit
        workout={workout}
        onClose={handleClose}
        onUpdate={handleUpdateHeader}
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
        onEdit={handleEditExercise}
      />
    </Box>
  );
}

export default WorkoutEdit;
