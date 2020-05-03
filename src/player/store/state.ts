export type PlayState = 'playing' | 'paused' | 'stopped';

export interface PlayerState {
  playState: PlayState;
}

export const initialState: PlayerState = {
  playState: 'stopped',
}