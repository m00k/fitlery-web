import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { workoutAtom } from './state';
import { persistState } from '../../util';

export const WORKOUT_STATE_KEY = 'workout';

const WorkoutStatePersist: React.FC = () => {
  const [workoutState, ] = useRecoilState(workoutAtom);
  useEffect(() => {
    persistState(WORKOUT_STATE_KEY, workoutState);
  }, [workoutState]);
  return null;
}

export default WorkoutStatePersist;