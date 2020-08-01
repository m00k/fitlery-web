import { atom } from "recoil";
import { ExerciseData } from "../../exercise/data";
import { loadState } from "../../util";
import { WORKOUT_STATE_KEY } from "./workout-state-persist";

const NOT_FOUND = -1;

export interface WorkoutData {
  id: string;
  short: string;
  title: string;
  description: string;
  workMs: number;
  breakMs: number;
  exercises: ExerciseData[];
}

export interface WorkoutState {
  items: WorkoutData[];
  currentItemIndex: number;
}

export const initialState: WorkoutState = {
  items: [],
  currentItemIndex: NOT_FOUND,
}

export const workoutAtom = atom({
  key: 'workoutState',
  default: loadState<WorkoutState>(WORKOUT_STATE_KEY) || initialState,
});