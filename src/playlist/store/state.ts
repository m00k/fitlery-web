const BREAK_MS = 3 * 1000;
const WORK_MS = 6 * 1000;
const exercises: PlaylistItemData[] = [
  {
    ...createBreak(BREAK_MS)
  },
  { 
    name: 'Wall Sit',
    durationMs: WORK_MS,
  },
  {
    ...createBreak(BREAK_MS)
  },
  { 
    name: 'Lunge',
    durationMs: WORK_MS,
  },
  {
    ...createBreak(BREAK_MS)
  },
  { 
    name: 'Plank',
    durationMs: WORK_MS,
  },
  {
    ...createBreak(BREAK_MS)
  },
  { 
    name: 'Reverse Crunch',
    durationMs: WORK_MS,
  },
  {
    ...createBreak(BREAK_MS)
  },
  { 
    name: 'Shadow Boxing',
    durationMs: WORK_MS,
  },
  {
    ...createBreak(BREAK_MS)
  },
  { 
    name: 'Side Plank',
    durationMs: WORK_MS,
  },
  {
    ...createBreak(BREAK_MS)
  },
  { 
    name: 'Side Plank (Left)',
    durationMs: WORK_MS,
  },
  {
    ...createBreak(BREAK_MS)
  },
  { 
    name: 'Side Plank (Right)',
    durationMs: WORK_MS,
  },
  {
    ...createBreak(BREAK_MS)
  },
  { 
    name: 'Knee Strikes',
    durationMs: WORK_MS,
  },
  {
    ...createBreak(BREAK_MS)
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
  name?: string;
  durationMs: number;
  tags?: string[];
}

function createBreak(durationMs: number): PlaylistItemData {
  return {
    durationMs,
    tags: ['break'],
  };
}
