import exercises from '../../exercise/data'; // TODO: real data

const NOT_FOUND = -1;

export type PlayState = 'playing' | 'paused' | 'stopped';

export interface PlaylistState {
  name: string;
  items: any[];
  currentItemIndex: number;
  playState: PlayState;
}

export const initialState: PlaylistState = {
  name: '18', // TODO: real data
  items: exercises, // TODO: real data
  currentItemIndex: NOT_FOUND,
  playState: 'stopped',
}