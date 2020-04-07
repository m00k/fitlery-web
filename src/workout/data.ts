export interface Workout {
  short: string;
  title: string;
  description: string;
}

export const workouts: Workout[] = [
  { 
    short: '18',
    title: '18min',
    description: '12 excercises 60s/30s go/break'
  },
  { 
    short: 'TB',
    title: 'TABATA',
    description: '12 excercises 30s/10s go/break'
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