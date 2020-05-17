import { WorkoutState } from './state';
import { WorkoutAction, isWorkoutActionAdd, isWorkoutActionDelete, isWorkoutActionLoadSuccess, isWorkoutActionSelect, isWorkoutActionUpdate } from './actions';


export const NOT_FOUND = -1;

export type WorkoutReducer = (state: WorkoutState, action: WorkoutAction) => WorkoutState

const add = (state: WorkoutState, action: WorkoutAction): WorkoutState => {
  const { workout } = action.payload;
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

const loadSuccess = (state: WorkoutState, action: WorkoutAction): WorkoutState => {
  const { workouts } = action.payload;
  return {
    ...state,
    items: workouts,
  }
}

const select = (state: WorkoutState, action: WorkoutAction): WorkoutState => {
  const { index } = action.payload;
  return {
    ...state,
    currentItemIndex: index,
  }
}

const update = (state: WorkoutState, action: WorkoutAction): WorkoutState => {
  if ( state.currentItemIndex === NOT_FOUND ) {
    return state;
  }
  const { workout } = action.payload;
  return {
    ...state,
    items: [
      ...state.items.slice(0, state.currentItemIndex),
      workout,
      ...state.items.slice(state.currentItemIndex + 1)
    ],
  }
}

export const workoutReducer: WorkoutReducer = (state: WorkoutState, action: WorkoutAction) => {
  if (isWorkoutActionAdd(action)) {
    return add(state, action);
  }
  if (isWorkoutActionSelect(action)) {
    return select(state, action);
  }
  if (isWorkoutActionDelete(action)) {
    return deleteItem(state);
  }
  if (isWorkoutActionLoadSuccess(action)) {
    return loadSuccess(state, action);
  }
  if (isWorkoutActionUpdate(action)) {
    return update(state, action);
  }
  return state;
}
