// https://dev.to/pubudu/build-a-redux-like-store-with-react-context-hooks-8a6
// https://dev.to/stephencweiss/usereducer-with-typescript-2kf
import React, { createContext, Dispatch, useContext, useReducer, useEffect } from 'react';

export type PlayerPlayState = 'playing' | 'paused' | 'stopped';
export type PlayerActionType = 'play' | 'pause' | 'stop' | 'prev' | 'next';
export type PlayerActionDispatchers = { [A in PlayerActionType]: (payload?: any) => void };

export interface PlayerAction {
  type: PlayerActionType;
}

export interface PlayerActionPlay extends PlayerAction {
  type: 'play';
}

export interface PlayerActionPause extends PlayerAction {
  type: 'pause';
}

export interface PlayerActionStop extends PlayerAction {
  type: 'stop';
}

export interface PlayerActionPrev extends PlayerAction {
  type: 'prev';
}

export interface PlayerActionNext extends PlayerAction {
  type: 'next';
}

export type PlayerActions =
  | PlayerActionPlay
  | PlayerActionPause
  | PlayerActionStop
  | PlayerActionPrev
  | PlayerActionNext
  ;

function isPlayerActionPlay(action: PlayerAction): action is PlayerActionPlay {
  return action.type === 'play';
}

function isPlayerActionPause(action: PlayerAction): action is PlayerActionPause {
  return action.type === 'pause';
}

function isPlayerActionStop(action: PlayerAction): action is PlayerActionStop {
  return action.type === 'stop';
}

function isPlayerActionPrev(action: PlayerAction): action is PlayerActionPrev {
  return action.type === 'prev';
}

function isPlayerActionNext(action: PlayerAction): action is PlayerActionNext {
  return action.type === 'next';
}

interface PlayerState {
  playState: PlayerPlayState;
}

const initialState: PlayerState = {
  playState: 'stopped',
}

type PlayerReducer = (state: PlayerState, action: PlayerAction) => PlayerState

const play = (state: PlayerState): PlayerState => {
  return {
    ...state,
    playState: 'playing',
  }
}

const stop = (state: PlayerState): PlayerState => {
  return {
    ...state,
    playState: 'stopped',
  }
}

const pause = (state: PlayerState): PlayerState => {
  return {
    ...state,
    playState: 'paused',
  }
}

const playerReducer: PlayerReducer = (state: PlayerState, action: PlayerAction) => {
  if (isPlayerActionPlay(action)) {
    return play(state);
  }
  if (isPlayerActionPause(action)) {
    return pause(state);
  }
  if (isPlayerActionStop(action)) {
    return stop(state);
  }
  if (isPlayerActionPrev(action)) {
    return state;
  }
  if (isPlayerActionNext(action)) {
    return state;
  }
  return state;
}

const createActionDispatchers = (dispatch: Dispatch<PlayerAction>): PlayerActionDispatchers => {
  return {
    play: () => dispatch({ type: 'play' }),
    pause: () => dispatch({ type: 'pause' }),
    stop: () => dispatch({ type: 'stop' }),
    prev: () => dispatch({ type: 'prev' }),
    next: () => dispatch({ type: 'next' }),
  };
}

const PlayerContext = createContext<[PlayerState, PlayerActionDispatchers]>([initialState, createActionDispatchers(() => { })]);

// TODO: type
export const PlayerProvider = ({ children }: any) => {
  const [player, dispatch] = useReducer<PlayerReducer>(playerReducer, initialState);
  const dispatchers: PlayerActionDispatchers = createActionDispatchers(dispatch);
  return (
    <PlayerContext.Provider value={[player, dispatchers]}>
      {children}
    </PlayerContext.Provider>
  );
}

export const usePlayerStore = () => useContext<[PlayerState, PlayerActionDispatchers]>(PlayerContext);
