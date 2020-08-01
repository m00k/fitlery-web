import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { persistState } from '../../util';
import { workoutAtom, WorkoutState } from './state';

export const WORKOUT_STATE_KEY = 'workout';

const WorkoutStatePersist: React.FC = () => {
  const workoutState = useRecoilValue(workoutAtom);

  useEffect(() => {
    persistState<WorkoutState>(WORKOUT_STATE_KEY, workoutState);
  }, [workoutState]);

  return null;
}

export default WorkoutStatePersist;