import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { workoutAtom, WorkoutData, workoutReducer } from '../store';


// TODO: rtfm on how to init route w/ data
const useWorkout = (notFound: () => void): WorkoutData | undefined => {
  const [workoutState, setWorkoutState] = useRecoilState(workoutAtom);
  const { items: workouts, currentItemIndex } = workoutState;
  const { id } = useParams();
  const workout = workouts[currentItemIndex];

  useEffect(() => {
    if (workout) {
      return;
    }
    const index = workouts.findIndex(w => w.id === id);
    if (index > -1) {
      setWorkoutState(state => workoutReducer.select(state, { index }));
    } else {
      notFound();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return workout;
}

export default useWorkout;
