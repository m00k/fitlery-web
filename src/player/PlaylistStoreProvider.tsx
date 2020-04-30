import React, { createContext, Dispatch, useContext, useReducer } from 'react';

import exercises from '../exercise/data'; // TODO: real data

const NOT_FOUND = -1;

export type PlaylistActionType = 'play' | 'pause' | 'stop' | 'prev' | 'next';
export type PlayState = 'playing' | 'paused' | 'stopped';
export type PlaylistActionDispatchers = { [A in PlaylistActionType]: (payload?: any) => void };

export interface PlaylistAction {
  type: PlaylistActionType;
}

export interface PlaylistActionPlay extends PlaylistAction {
  type: 'play';
}

export interface PlaylistActionPause extends PlaylistAction {
  type: 'pause';
}

export interface PlaylistActionStop extends PlaylistAction {
  type: 'stop';
}

export interface PlaylistActionPrev extends PlaylistAction {
  type: 'prev';
}

export interface PlaylistActionNext extends PlaylistAction {
  type: 'next';
}

export type PlaylistActions =
  | PlaylistActionPlay
  | PlaylistActionPause
  | PlaylistActionStop
  | PlaylistActionPrev
  | PlaylistActionNext
  ;

export function isPlaylistActionPlay(action: PlaylistAction): action is PlaylistActionPlay {
  return action.type === 'play';
}

export function isPlaylistActionPause(action: PlaylistAction): action is PlaylistActionPause {
  return action.type === 'pause';
}

export function isPlaylistActionStop(action: PlaylistAction): action is PlaylistActionStop {
  return action.type === 'pause';
}

export function isPlaylistActionPrev(action: PlaylistAction): action is PlaylistActionPrev {
  return action.type === 'prev';
}

export function isPlaylistActionNext(action: PlaylistAction): action is PlaylistActionNext {
  return action.type === 'next';
}

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

export const play = (state: PlaylistState): PlaylistState => {
  const currentItemIndex = isValidIndex(state)
    ? state.currentItemIndex
    : 0;
  return {
    ...state,
    currentItemIndex,
    playState: 'playing',
  }
}

export const pause = (state: PlaylistState): PlaylistState => {
  return {
    ...state,
    playState: 'paused',
  }
}

export const stop = (state: PlaylistState): PlaylistState => {
  return {
    ...state,
    playState: 'stopped',
  }
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

const createActionDispatchers = (dispatch: Dispatch<PlaylistAction>): PlaylistActionDispatchers => {
  return {
    play: () => dispatch({ type: 'play' }),
    pause: () => dispatch({ type: 'pause' }),
    stop: () => dispatch({ type: 'stop' }),
    prev: () => dispatch({ type: 'prev' }),
    next: () => dispatch({ type: 'next' }),
  };
}

const PlaylistStoreContext = createContext<[PlaylistState, PlaylistActionDispatchers]>([initialState, createActionDispatchers(() => { })]);

// TODO: type
export const PlaylistStoreProvider = ({ children }: any) => {
  const [playlist, dispatch] = useReducer<PlaylistReducer>(playlistReducer, initialState);
  const playlistDispatchers: PlaylistActionDispatchers = createActionDispatchers(dispatch);
  return (
    <PlaylistStoreContext.Provider value={[playlist, playlistDispatchers]}>
      {children}
    </PlaylistStoreContext.Provider>
  );
}

export const usePlaylistStore = () => useContext<[PlaylistState, PlaylistActionDispatchers]>(PlaylistStoreContext);