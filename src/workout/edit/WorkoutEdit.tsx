import Box from '@material-ui/core/Box';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { ExerciseData } from '../../exercise/data';
import ExerciseList from '../../exercise/ExerciseList';
import { EditResult } from '../../shared/EditText';
import { workoutAtom, workoutReducer } from '../store';
import Duration from './Duration';
import HeaderEdit from './HeaderEdit';
import useWorkout from './useWorkout';


const WorkoutEdit: React.FC<any> = () => {
  const [workoutState, setWorkoutState] = useRecoilState(workoutAtom);
  const history = useHistory();
  const workout = useWorkout(workoutState, setWorkoutState);
  if (!workout) {
    history.replace('/workout');
    return null;
  }
  
  const handleClose = () => history.goBack();
  const handleSetBreakMs = (breakSec: number) => setWorkoutState(state => workoutReducer.update(state, { ...workout, breakMs: breakSec * 1000 }));
  const handleSetWorkMs = (workSec: number) => setWorkoutState(state => workoutReducer.update(state, { ...workout, workMs: workSec * 1000 }));
  const handleAddExercise = (exercise: ExerciseData) => setWorkoutState(state => workoutReducer.update(state, { ...workout, exercises: [...workout.exercises, exercise] }));
  const handleDeleteExercise = (exercises: ExerciseData[]) => setWorkoutState(state => workoutReducer.update(state, { ...workout, exercises }));
  const handleSort = handleDeleteExercise;
  const handleEditExercise = (exercise: ExerciseData, index: number) => { // TODO: type
    // TODO: error case?
    const exercises = [
      ...workout.exercises.slice(0, index),
      exercise,
      ...workout.exercises.slice(index + 1),
    ];
    setWorkoutState(state => workoutReducer.update(state, { ...workout, exercises }));
  }
  const handleUpdateHeader = (update: EditResult) => { // TODO: type
    // TODO: error case?
    const { value } = update;
    setWorkoutState(state => workoutReducer.update(state, { ...workout, ...value }));
  }
  
  const { exercises, breakMs, workMs } = workout;

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
        onSort={handleSort}
      />
    </Box>
  );
}

export default WorkoutEdit;
