import { ExerciseData } from "../../exercise/data";
import { workouts } from "../data";

const NOT_FOUND = -1;

// TODO: naming conventions: interfaces vs models
export interface WorkoutData {
  short: string;
  title: string;
  description: string;
  workMs: number,
  breakMs: number,
  exercises: ExerciseData[];
}

export interface WorkoutState {
  items: WorkoutData[];
  currentItemIndex: number;
}

export const initialState: WorkoutState = {
  items: workouts,  // TODO: real data
  currentItemIndex: NOT_FOUND,
}
