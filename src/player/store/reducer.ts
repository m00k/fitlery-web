import { isPlaylistActionNext, isPlaylistActionPause, isPlaylistActionPlay, isPlaylistActionPrev, isPlaylistActionStop, PlaylistAction } from "./actions";
import { PlaylistState } from "./state";

const NOT_FOUND = -1;

export type PlaylistReducer = (state: PlaylistState, action: PlaylistAction) => PlaylistState

const isFirstIndex = (state: PlaylistState): boolean => {
  return state.currentItemIndex === 0;
}

const isLastIndex = (state: PlaylistState): boolean => {
  return state.currentItemIndex >= (state.items.length - 1);
}

const isValidIndex = (state: PlaylistState): boolean => {
  const { currentItemIndex, items: exercises } = state;
  return currentItemIndex > NOT_FOUND && currentItemIndex < exercises.length;
}

const play = (state: PlaylistState): PlaylistState => {
  const currentItemIndex = isValidIndex(state)
    ? state.currentItemIndex
    : 0;
  return {
    ...state,
    currentItemIndex,
    playState: 'playing',
  }
}

const pause = (state: PlaylistState): PlaylistState => {
  return {
    ...state,
    playState: 'paused',
  }
}

const stop = (state: PlaylistState): PlaylistState => {
  return {
    ...state,
    playState: 'stopped',
  }
}

const prev = (state: PlaylistState): PlaylistState => {
  const currentItemIndex = isFirstIndex(state)
    ? 0
    : state.currentItemIndex - 1;
  return {
    ...state,
    currentItemIndex
  };
}

const next = (state: PlaylistState): PlaylistState => {
  if (isLastIndex(state)) {
    return stop(state);
  }
  const currentItemIndex = state.currentItemIndex + 1;
  return {
    ...state,
    currentItemIndex
  };
}

export const playlistReducer: PlaylistReducer = (state: PlaylistState, action: PlaylistAction) => {
  if (isPlaylistActionPlay(action)) {
    return play(state);
  }
  if (isPlaylistActionPause(action)) {
    return pause(state);
  }
  if (isPlaylistActionStop(action)) {
    return stop(state);
  }
  if (isPlaylistActionPrev(action)) {
    return prev(state);
  }
  if (isPlaylistActionNext(action)) {
    return next(state);
  }
  return state;
}
