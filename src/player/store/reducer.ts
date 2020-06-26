import { PlayerState } from "./state";
import { PlayerActionType } from "./actions";

export type PlayerReducerFn = (state: PlayerState, payload?: any) => PlayerState;

const play: PlayerReducerFn = state => {
  return {
    ...state,
    playState: 'playing',
  }
}

const pause: PlayerReducerFn = state => {
  return {
    ...state,
    playState: 'paused',
  }
}

const stop: PlayerReducerFn = state => {
  return {
    ...state,
    playState: 'stopped',
  }
}

const prev: PlayerReducerFn = state => state;

const next: PlayerReducerFn = state => state;

export const playerReducer: {[A in PlayerActionType]: PlayerReducerFn} = {
  play,
  pause,
  stop,
  prev,
  next,
}
