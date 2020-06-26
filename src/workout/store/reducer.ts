import { WorkoutActionType } from './actions';
import { WorkoutState } from './state';


export const NOT_FOUND = -1;

export type WorkoutReducerFn = (state: WorkoutState, payload?: any) => WorkoutState
export type WorkoutReducer = {[A in WorkoutActionType]: WorkoutReducerFn};

const add: WorkoutReducerFn = (state, workout) => {
  return {
    ...state,
    items: [ workout, ...state.items ],
  }
}

const deleteItem = (state: WorkoutState): WorkoutState => {
  if ( state.currentItemIndex === NOT_FOUND ) {
    return state;
  }
  return {
    ...state,
    items: [
      ...state.items.slice(0, state.currentItemIndex),
      ...state.items.slice(state.currentItemIndex + 1)
    ],
  }
}

const loadSuccess: WorkoutReducerFn = (state, workouts) => {
  return {
    ...state,
    items: workouts,
  }
}

const select: WorkoutReducerFn = (state, index) => {
  return {
    ...state,
    currentItemIndex: index,
  }
}

const update: WorkoutReducerFn = (state, workout) => {
  if ( state.currentItemIndex === NOT_FOUND ) {
    return state;
  }
  return {
    ...state,
    items: [
      ...state.items.slice(0, state.currentItemIndex),
      workout,
      ...state.items.slice(state.currentItemIndex + 1)
    ],
  }
}

export const workoutReducer: WorkoutReducer =  {
  add,
  delete: deleteItem,
  loadSuccess,
  select,
  update,
}
