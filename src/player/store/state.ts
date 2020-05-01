const exercises: PlaylistItemData[] = [
  {
    name: 'break 0',
    durationMs: 3 * 1000,
    tags: ['break'],
  },
  { 
    name: 'Wall Sit',
    durationMs: 6 * 1000,
  },
  {
    name: 'break 1',
    durationMs: 3 * 1000,
    tags: ['break'],
  },
  { 
    name: 'Lunge',
    durationMs: 6 * 1000,
  },
  {
    name: 'break 2',
    durationMs: 3 * 1000,
    tags: ['break'],
  },
  { 
    name: 'Plank',
    durationMs: 6 * 1000,
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
