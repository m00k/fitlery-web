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
];

const NOT_FOUND = -1;

export type PlayState = 'playing' | 'paused' | 'stopped';

export interface PlaylistState {
  name: string;
  items: PlaylistItemData[];
  currentItemIndex: number;
  playState: PlayState;
}

export const initialState: PlaylistState = {
  name: '18', // TODO: real data
  items: exercises, // TODO: real data
  currentItemIndex: NOT_FOUND,
  playState: 'stopped',
}

export interface PlaylistItemData {
  name: string;
  durationMs: number;
  tags?: string[];
}
