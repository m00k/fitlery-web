import { ExerciseData } from "../exercise/data";

const SEC = 1000;

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
    workMs: 60 * SEC,
    breakMs: 30 * SEC,
    exercises: [
      { name: 'Wall Sit' },
      { name: 'Lunge' },
      { name: 'Plank' },
      { name: 'Plank +' },
      { name: 'Reverse Crunch' },
      { name: 'Shadow Boxing' },
      { name: 'Side Plank' },
      { name: 'Side Plank (Left)' },
      { name: 'Side Plank (Right)' },
      { name: 'Knee Strikes' },
      { name: 'Lunge (Fwd)' },
      { name: 'Lunge (Bwd)' },
      { name: 'Knee High Running' },
      { name: 'Jumping Jacks' },
      { name: 'Push ups' },
      { name: 'Squats' },
    ]
  },
  { 
    short: 'TB',
    title: 'TABATA',
    description: 'Hakuna Tabata?',
    workMs: 40 * SEC,
    breakMs: 20 * SEC,
    exercises: [
      { name: 'Squat Jumps' },
      { name: 'Push Ups' },
      { name: 'Burpees' },
      { name: 'Jumping Jacks' },
      { name: 'High Knees' },
    ]
  },
  { 
    short: 'MP',
    title: 'Master Planker',
    description: 'Toughest planker on the block',
    workMs: 60 * SEC,
    breakMs: 30 * SEC,
    exercises: [
      { name: 'Ellbow Plank' },
      { name: 'Full Plank' },
      { name: 'Side Plank' },
      { name: 'Side Plank Knee Tucks (1)' },
      { name: 'Side Plank Knee Tucks (2)' },
      { name: 'Plank Arm Raise' },
      { name: 'Plank Leg Raise' },
      { name: 'Reverse Plank' },
    ]
  },
  { 
    short: 'AB',
    title: 'ABS-olutely fantastic',
    description: 'A six pack is just the beginning',
    workMs: 60 * SEC,
    breakMs: 30 * SEC,
    exercises: [
      { name: 'Hollow Body' },
      { name: 'Superman Hold' },
      { name: 'Leg Raises'},
      { name: 'V Ups'},
      { name: 'Flutter Kicks'},
      { name: 'Star Toe Touch'},
    ]
  },
  {
    short: 'OO',
    title: 'Obliques obligatory',
    description: `Should I google that for you?`,
    workMs: 60 * SEC,
    breakMs: 30 * SEC,
    exercises: [
      { name: 'Wood Choppers' },
      { name: 'Side Plank' },
      { name: 'Ankle Touches'},
      { name: 'Plank Rotation'},
      { name: 'Russian Twist'},
    ]
  },
  {
    short: 'JJ',
    title: 'Jump Jack!',
    description: `I don't care what your real name is`,
    workMs: 300 * SEC,
    breakMs: 10 * SEC,
    exercises: [
      { name: 'Jumping Jacks' },
      { name: 'Oblique Jacks' },
      { name: 'Cross Jacks' },
    ]
  },
];