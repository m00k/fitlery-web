import React, { createContext, Dispatch, useContext, useReducer } from 'react';
import { WorkoutAction, WorkoutActionType } from './actions';
import { WorkoutReducer, workoutReducer } from './reducer';
import { initialState, WorkoutData, WorkoutState } from './state';


export type WorkoutActionDispatchers = { [A in WorkoutActionType]: (payload?: any) => void };

const createActionDispatchers = (dispatch: Dispatch<WorkoutAction>): WorkoutActionDispatchers => {
  return {
    add: (workout: WorkoutData) => dispatch({ type: 'add', payload: { workout } }),
    delete: (index: number) => dispatch({ type: 'delete', payload: { index }}),
    loadSuccess: (workouts: WorkoutData[]) => dispatch({ type: 'loadSuccess', payload: { workouts } }),
    select: (index: number) => dispatch({ type: 'select', payload: { index } }),
    update: (workout: WorkoutData) => dispatch({ type: 'update', payload: { workout } }),
  };
}

const WorkoutStoreContext = createContext<[WorkoutState, WorkoutActionDispatchers]>([initialState, createActionDispatchers(() => { })]);

// TODO: type
export const WorkoutStoreProvider = ({ children }: any) => {
  const [workout, dispatch] = useReducer<WorkoutReducer>(workoutReducer, initialState);
  const workoutDispatchers: WorkoutActionDispatchers = createActionDispatchers(dispatch);
  return (
    <WorkoutStoreContext.Provider value={[workout, workoutDispatchers]}>
      {children}
    </WorkoutStoreContext.Provider>
  );
}

export const useWorkoutStore = () => useContext<[WorkoutState, WorkoutActionDispatchers]>(WorkoutStoreContext);