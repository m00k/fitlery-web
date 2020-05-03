export interface WorkoutData {
  short: string;
  title: string;
  description: string;
}

export const workouts: WorkoutData[] = [
  { 
    short: '18',
    title: '18min',
    description: '12 exercises that will make the 12 labors of hercules look like a walk in the park'
  },
  { 
    short: 'TB',
    title: 'TABATA',
    description: 'Hakuna Tabata?'
  },
  { 
    short: 'MP',
    title: 'Master Planker',
    description: 'Toughest planker on the block'
  },
  { 
    short: 'AB',
    title: 'ABS-olutely fantastic',
    description: 'A six pack is just the beginning'
  },
  {
    short: 'OO',
    title: 'Obliques obligatory',
    description: `Should I google that for you?`
  },
  {
    short: 'JJ',
    title: 'Jump Jack!',
    description: `I don't care what your real name is`
  },
];