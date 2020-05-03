const BREAK_MS = 30 * 1000;
const WORK_MS = 60 * 1000;
const exercises: PlaylistItemData[] = [
  {
    name: 'break 0',
    durationMs: BREAK_MS,
    tags: ['break'],
  },
  { 
    name: 'Wall Sit',
    durationMs: WORK_MS,
  },
  {
    name: 'break 1',
    durationMs: BREAK_MS,
    tags: ['break'],
  },
  { 
    name: 'Lunge',
    durationMs: WORK_MS,
  },
  {
    name: 'break 2',
    durationMs: BREAK_MS,
    tags: ['break'],
  },
  { 
    name: 'Plank',
    durationMs: WORK_MS,
  },
  {
    name: 'break 3',
    durationMs: BREAK_MS,
    tags: ['break'],
  },
  { 
    name: 'Reverse Crunch',
    durationMs: WORK_MS,
  },
  {
    name: 'break 4',
    durationMs: BREAK_MS,
    tags: ['break'],
  },
  { 
    name: 'Shadow Boxing',
    durationMs: WORK_MS,
  },
  {
    name: 'break 5',
    durationMs: BREAK_MS,
    tags: ['break'],
  },
  { 
    name: 'Side Plank',
    durationMs: WORK_MS,
  },
  {
    name: 'break 6',
    durationMs: BREAK_MS,
    tags: ['break'],
  },
  { 
    name: 'Side Plank (Left)',
    durationMs: WORK_MS,
  },
  {
    name: 'break 7',
    durationMs: BREAK_MS,
    tags: ['break'],
  },
  { 
    name: 'Side Plank (Right)',
    durationMs: WORK_MS,
  },
  {
    name: 'break 8',
    durationMs: BREAK_MS,
    tags: ['break'],
  },
  { 
    name: 'Knee Strikes',
    durationMs: WORK_MS,
  },
  {
    name: 'break 9',
    durationMs: BREAK_MS,
    tags: ['break'],
  },
  { 
    name: 'Knee High Running',
    durationMs: WORK_MS,
  },
];

const NOT_FOUND = -1;

export interface PlaylistState {
  name: string;
  items: PlaylistItemData[];
  currentItemIndex: number;
}

export const initialState: PlaylistState = {
  name: '18', // TODO: real data
  items: exercises, // TODO: real data
  currentItemIndex: NOT_FOUND,
}

export interface PlaylistItemData {
  name: string;
  durationMs: number;
  tags?: string[];
}
