import { isPlayerActionPause, isPlayerActionPlay, isPlayerActionStop, PlayerAction } from "./actions";
import { PlayerState } from "./state";

export type PlayerReducer = (state: PlayerState, action: PlayerAction) => PlayerState

const play = (state: PlayerState): PlayerState => {
  return {
    ...state,
    playState: 'playing',
  }
}

const pause = (state: PlayerState): PlayerState => {
  return {
    ...state,
    playState: 'paused',
  }
}

const stop = (state: PlayerState): PlayerState => {
  return {
    ...state,
    playState: 'stopped',
  }
}

export const playerReducer: PlayerReducer = (state: PlayerState, action: PlayerAction) => {
  if (isPlayerActionPlay(action)) {
    return play(state);
  }
  if (isPlayerActionPause(action)) {
    return pause(state);
  }
  if (isPlayerActionStop(action)) {
    return stop(state);
  }
  return state;
}
