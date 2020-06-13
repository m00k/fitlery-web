import { WorkoutData } from "./store/state";

const SEC = 1000;

// TODO: storage
export const workouts: WorkoutData[] = [
  { 
    id: '0007-8238-0868-fe98',
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
    id: 'ba98-94f8-2c1a-9408',
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
    id: '9998-1f96-0a08-c0f8',
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
    id: '66c7-f1e9-3972-c014',
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
    id: '96e4-f079-4386-4358',
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
    id: 'ba61-0bc7-fea8-b098',
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