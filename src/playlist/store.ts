import exercises from '../exercise/data'; // TODO: real data

const NOT_FOUND = -1;

export type PlaylistActionType = 'play' | 'prev' | 'next';

export interface PlaylistAction {
  type: PlaylistActionType;
}

export interface PlaylistActionPlay extends PlaylistAction {
  type: 'play';
}

export interface PlaylistActionPrev extends PlaylistAction {
  type: 'prev';
}

export interface PlaylistActionNext extends PlaylistAction {
  type: 'next';
}

export type PlaylistActions =
  | PlaylistActionPlay
  | PlaylistActionPrev
  | PlaylistActionNext
  ;

export function isPlaylistActionPlay(action: PlaylistAction): action is PlaylistActionPlay {
  return action.type === 'play';
}

export function isPlaylistActionPrev(action: PlaylistAction): action is PlaylistActionPrev {
  return action.type === 'prev';
}

export function isPlaylistActionNext(action: PlaylistAction): action is PlaylistActionNext {
  return action.type === 'next';
}

export interface PlaylistState {
  items: any[];
  currentItemIndex: number;
}

export const initialState: PlaylistState = {
  items: exercises, // TODO: real data
  currentItemIndex: NOT_FOUND,
}

export type PlaylistReducer = (state: PlaylistState, action: PlaylistAction) => PlaylistState

export const isFirstIndex = (state: PlaylistState): boolean => {
  return state.currentItemIndex === 0;
}

export const isLastIndex = (state: PlaylistState): boolean => {
  return state.currentItemIndex >= (state.items.length - 1);
}

export const isValidIndex = (state: PlaylistState): boolean => {
  const { currentItemIndex, items: exercises } = state;
  return currentItemIndex > NOT_FOUND && currentItemIndex < exercises.length;
}

export const prev = (state: PlaylistState): PlaylistState => {
  const currentItemIndex = isFirstIndex(state)
    ? 0
    : state.currentItemIndex - 1;
  return {
    ...state,
    currentItemIndex
  };
}

export const next = (state: PlaylistState): PlaylistState => {
  if (isLastIndex(state)) {
    return state;
  }
  const currentItemIndex = state.currentItemIndex + 1;
  return {
    ...state,
    currentItemIndex
  };
}

export const play = (state: PlaylistState): PlaylistState => {
  const currentItemIndex = isValidIndex(state)
    ? state.currentItemIndex
    : 0;
  return {
    ...state,
    currentItemIndex,
  }
}

export const playlistReducer: PlaylistReducer = (state: PlaylistState, action: PlaylistAction) => {
  if (isPlaylistActionPlay(action)) {
    return play(state);
  }
  if (isPlaylistActionPrev(action)) {
    return prev(state);
  }
  if (isPlaylistActionNext(action)) {
    return next(state);
  }
  return state;
}
