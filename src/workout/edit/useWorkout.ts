import { useParams } from 'react-router-dom';
import { SetterOrUpdater } from 'recoil';
import { WorkoutData, workoutReducer, WorkoutState } from '../store';


// find workout by id param and sync state
const useWorkout = (workoutState: WorkoutState, setWorkoutState: SetterOrUpdater<WorkoutState>): WorkoutData | undefined => {
  const { id } = useParams<{id: string}>();
  const { items: workouts } = workoutState;
  const foundAt = workouts.findIndex(w => w.id === id);
  if (foundAt > -1 && workoutState.currentItemIndex !== foundAt) {
    setWorkoutState(state => workoutReducer.select(state, foundAt));
  }
  return workouts[foundAt];
}

export default useWorkout;
