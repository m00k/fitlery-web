// https://dev.to/pubudu/build-a-redux-like-store-with-react-context-hooks-8a6
// https://dev.to/stephencweiss/usereducer-with-typescript-2kf
import React, { createContext, Dispatch, useContext, useReducer, useEffect } from 'react';
import { CountdownActionType, CountdownState, CountdownActionTick } from '../countdown/state';
import * as countdown from '../countdown/state';
import { PlayState } from './state';
import { PlaylistState } from '../playlist/state';
import * as playlist from '../playlist/state';


export type PlayerActionType = 'play' | 'pause' | 'stop' | 'prev' | 'next' | 'tick';
export type PlayerActionDispatchers = { [A in PlayerActionType]: (payload?: any) => void };

export interface PlayerAction {
  type: PlayerActionType | CountdownActionType;
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
  | CountdownActionTick
  ;

// https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
// https://dev.to/krumpet/generic-type-guard-in-typescript-258l
// https://dev.to/aexol/typescript-tutorial-infer-keyword-2cn
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

function isCountdownActionTick(action: PlayerAction): action is CountdownActionTick {
  return action.type === 'tick';
}

interface PlayerState {
  playlistState: PlaylistState;
  playState: PlayState;
  countdownState: CountdownState;
}

const initialState: PlayerState = {
  playlistState: playlist.initialState,
  playState: 'stopped',
  countdownState: countdown.initialState,
}

type PlayerReducer = (state: PlayerState, action: PlayerAction) => PlayerState

const prev = (state: PlayerState): PlayerState => {
  const playlistState = playlist.prev(state.playlistState);
  const countdownState = countdown.reset(state.countdownState);
  return { ...state, countdownState, playlistState };
}

const next = (state: PlayerState): PlayerState => {
  const playlistState = playlist.next(state.playlistState);
  const countdownState = countdown.reset(state.countdownState);
  return { ...state, countdownState, playlistState };
}

const onZeroTick = (state: PlayerState): PlayerState => {
  const { playlistState } = state;
  return playlist.isValidIndex(playlistState) && !playlist.isLastIndex(playlistState)
    ? next(state)
    : stop(state);
}

const play = (state: PlayerState): PlayerState => {
  const playlistState = playlist.play(state.playlistState);
  const countdownState = countdown.start(state.countdownState);
  const playState = 'playing';
  return { ...state, countdownState, playlistState, playState };
}

const stop = (state: PlayerState): PlayerState => {
  const countdownState = countdown.stop(state.countdownState);
  const playState = 'stopped';
  return { ...state, countdownState, playState };
}

const pause = (state: PlayerState): PlayerState => {
  const countdownState = countdown.pause(state.countdownState);
  const playState = 'paused';
  return { ...state, countdownState, playState };
}

const tick = (state: PlayerState): PlayerState => {
  const countdownState = countdown.tick(state.countdownState);
  const { isRunning, msLeft } = countdownState;
  if (!isRunning) {
    return state;
  }
  const newState = { ...state, countdownState };
  return msLeft === 0
    ? onZeroTick(newState)
    : newState;
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
    return prev(state);
  }
  if (isPlayerActionNext(action)) {
    return next(state);
  }
  if (isCountdownActionTick(action)) {
    return tick(state);
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
    tick: () => dispatch({ type: 'tick' }),
  };
}

type PlayerStoreContext = [PlayerState, PlayerActionDispatchers];
const PlayerStoreContext = createContext<PlayerStoreContext>([initialState, createActionDispatchers(() => { })]);

// TODO: type
export const PlayerStoreProvider = ({ children }: any) => {
  const [playlist, dispatch] = useReducer<PlayerReducer>(playerReducer, initialState);
  const dispatchers: PlayerActionDispatchers = createActionDispatchers(dispatch);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { setInterval(dispatchers.tick, countdown.MS_INTERVAL) }, []); // first render only
  return (
    <PlayerStoreContext.Provider value={[playlist, dispatchers]}>
      {children}
    </PlayerStoreContext.Provider>
  );
}

export const usePlayerStore = () => useContext<PlayerStoreContext>(PlayerStoreContext);
