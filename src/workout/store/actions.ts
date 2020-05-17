import { WorkoutData } from "./state";

export type WorkoutActionType = 'loadSuccess' | 'add' | 'delete' | 'select' | 'update';
export interface WorkoutAction {
  type: WorkoutActionType;
  payload?: any;
}

export interface WorkoutActionAdd extends WorkoutAction {
  type: 'add';
  payload: { workout: WorkoutData };
}

export interface WorkoutActionDelete extends WorkoutAction {
  type: 'delete';
}

export interface WorkoutActionLoadSuccess extends WorkoutAction {
  type: 'loadSuccess';
  payload: { workouts: WorkoutData[] };
}

export interface WorkoutActionSelect extends WorkoutAction {
  type: 'select';
  payload: { index: number };
}

export interface WorkoutActionUpdate extends WorkoutAction {
  type: 'update';
  payload: { workout: WorkoutData };
}

export type WorkoutActions =
  | WorkoutActionAdd
  | WorkoutActionDelete
  | WorkoutActionLoadSuccess
  | WorkoutActionSelect
  | WorkoutActionUpdate
  ;

export function isWorkoutActionAdd(action: WorkoutAction): action is WorkoutAction {
  return action.type === 'add';
}

export function isWorkoutActionDelete(action: WorkoutAction): action is WorkoutActionDelete {
  return action.type === 'delete';
}

export function isWorkoutActionLoadSuccess(action: WorkoutAction): action is WorkoutActionLoadSuccess {
  return action.type === 'loadSuccess';
}

export function isWorkoutActionSelect(action: WorkoutAction): action is WorkoutActionSelect {
  return action.type === 'select';
}

export function isWorkoutActionUpdate(action: WorkoutAction): action is WorkoutActionUpdate {
  return action.type === 'update';
}