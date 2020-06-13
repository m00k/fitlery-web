import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useWorkoutStore, WorkoutActionDispatchers, WorkoutData } from '../store';

const useWorkout = (notFound: () => void): [WorkoutData, WorkoutActionDispatchers] => {
  const [workoutState, workoutDispatch] = useWorkoutStore();
  const { items: workouts, currentItemIndex } = workoutState;
  const { id } = useParams();
  const workout = workouts[currentItemIndex];
  useEffect(() => {
    if (workout) {
      return;
    }
    const index = workouts.findIndex(w => w.id === id);
    if (index > -1) {
      workoutDispatch.select(index);
    } else {
      notFound();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return [workout, workoutDispatch];
}

export default useWorkout;
