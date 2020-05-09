import exercises, { ExerciseData } from "../exercise/data";

export interface WorkoutData {
  short: string;
  title: string;
  description: string;
  workMs: number,
  breakMs: number,
  exercises: ExerciseData[];
}

// TODO: storage
export const workouts: WorkoutData[] = [
  { 
    short: '18',
    title: '18min',
    description: '12 exercises that will make the 12 labors of hercules look like a walk in the park',
    workMs: 60000,
    breakMs: 30000,
    exercises: exercises, // TODO: real data
  },
  { 
    short: 'TB',
    title: 'TABATA',
    description: 'Hakuna Tabata?',
    workMs: 60000,
    breakMs: 30000,
    exercises: exercises, // TODO: real data
  },
  { 
    short: 'MP',
    title: 'Master Planker',
    description: 'Toughest planker on the block',
    workMs: 60000,
    breakMs: 30000,
    exercises: exercises, // TODO: real data
  },
  { 
    short: 'AB',
    title: 'ABS-olutely fantastic',
    description: 'A six pack is just the beginning',
    workMs: 60000,
    breakMs: 30000,
    exercises: exercises, // TODO: real data
  },
  {
    short: 'OO',
    title: 'Obliques obligatory',
    description: `Should I google that for you?`,
    workMs: 60000,
    breakMs: 30000,
    exercises: exercises, // TODO: real data
  },
  {
    short: 'JJ',
    title: 'Jump Jack!',
    description: `I don't care what your real name is`,
    workMs: 60000,
    breakMs: 30000,
    exercises: exercises, // TODO: real data
  },
];