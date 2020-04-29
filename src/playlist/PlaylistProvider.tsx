// https://dev.to/pubudu/build-a-redux-like-store-with-react-context-hooks-8a6
// https://dev.to/stephencweiss/usereducer-with-typescript-2kf
import React, { createContext, Dispatch, useContext, useReducer, useEffect } from 'react';
import exercises from '../exercise/data'; // TODO: real data

const NOT_FOUND = -1;
const MS_INTERVAL = 100; // TODO
const MS_TOTAL = 3000; // TODO

export type PlayerState = 'playing' | 'paused' | 'stopped';
export type PlaylistActionType = 'play' | 'pause' | 'stop' | 'prev' | 'next';
export type PlaylistActionDispatchers = { [A in PlaylistActionType]: (payload?: any) => void };
export type CountdownActionType = 'set' | 'start' | 'reset' | 'tick';
export type CountdownActionDispatchers = { [A in CountdownActionType]: (payload?: any) => void };

export interface PlaylistAction {
  type: PlaylistActionType | CountdownActionType;
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

export interface CountdownActionSet extends PlaylistAction { // set msTotal, msInterval, msLeft = msTotal
  type: 'set';
  msTotal: number;
}

export interface CountdownActionReset extends PlaylistAction { // msLeft = msTotal
  type: 'reset';
}

export interface CountdownActionTick extends PlaylistAction { // msLeft = msLeft - msInterval
  type: 'tick';
}

export type PlaylistActions =
  | PlaylistActionPlay
  | PlaylistActionPause
  | PlaylistActionStop
  | PlaylistActionPrev
  | PlaylistActionNext
  | CountdownActionSet
  | CountdownActionReset
  | CountdownActionTick
  ;

// https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
// https://dev.to/krumpet/generic-type-guard-in-typescript-258l
// https://dev.to/aexol/typescript-tutorial-infer-keyword-2cn
function isPlaylistActionPlay(action: PlaylistAction): action is PlaylistActionPlay {
  return action.type === 'play';
}

function isPlaylistActionPause(action: PlaylistAction): action is PlaylistActionPause {
  return action.type === 'pause';
}

function isPlaylistActionStop(action: PlaylistAction): action is PlaylistActionStop {
  return action.type === 'stop';
}

function isPlaylistActionPrev(action: PlaylistAction): action is PlaylistActionPrev {
  return action.type === 'prev';
}

function isPlaylistActionNext(action: PlaylistAction): action is PlaylistActionNext {
  return action.type === 'next';
}

function isCountdownActionSet(action: PlaylistAction): action is CountdownActionSet {
  return action.type === 'set';
}

function isCountdownActionReset(action: PlaylistAction): action is CountdownActionReset {
  return action.type === 'reset';
}

function isCountdownActionTick(action: PlaylistAction): action is CountdownActionTick {
  return action.type === 'tick';
}

interface CountdownState {
  msLeft: number;
  msTotal: number;
  isRunning: boolean;
}

const initialCountDownState: CountdownState = {
  msLeft: MS_TOTAL,
  msTotal: MS_TOTAL,
  isRunning: false,
}

interface PlaylistState {
  name: any;
  items: any[];
  currentItemIndex: number;
  playerState: PlayerState;
  countdown: CountdownState;
}

const initialState: PlaylistState = {
  name: '18', // TODO: real data
  items: exercises, // TODO: real data
  currentItemIndex: NOT_FOUND,
  playerState: 'stopped',
  countdown: initialCountDownState,
}

type PlaylistReducer = (state: PlaylistState, action: PlaylistAction) => PlaylistState

const isFirstIndex = (state: PlaylistState): boolean => {
  return state.currentItemIndex === 0;
}

const isLastIndex = (state: PlaylistState): boolean => {
  return state.currentItemIndex >= (state.items.length - 1);
}

const isValidIndex = (state: PlaylistState): boolean => {
  const { currentItemIndex: currentExerciseIndex, items: exercises } = state;
  return currentExerciseIndex > NOT_FOUND && currentExerciseIndex < exercises.length;
}

const prev = (state: PlaylistState): PlaylistState => {
  const currentExerciseIndex = isFirstIndex(state)
    ? 0
    : state.currentItemIndex - 1;
  return reset({ ...state, currentItemIndex: currentExerciseIndex });
}

const next = (state: PlaylistState): PlaylistState => {
  if (isLastIndex(state)) {
    return state; // TODO (stop) ?
  }
  const currentExerciseIndex = state.currentItemIndex + 1;
  return reset({ ...state, currentItemIndex: currentExerciseIndex });
}

const onZeroTick = (state: PlaylistState): PlaylistState => {
  return isValidIndex(state) && !isLastIndex(state)
    ? next(state)
    : stop(state);
}

const play = (state: PlaylistState): PlaylistState => {
  const currentExerciseIndex = isValidIndex(state)
    ? state.currentItemIndex
    : 0;
  return {
    ...state,
    currentItemIndex: currentExerciseIndex,
    playerState: 'playing',
    countdown: { ...state.countdown, isRunning: true }
  }
}

const stop = (state: PlaylistState): PlaylistState => {
  const { countdown } = reset(state);
  countdown.isRunning = false;
  return {
    ...state,
    playerState: 'stopped',
    countdown,
  }
}

const pause = (state: PlaylistState): PlaylistState => {
  return {
    ...state,
    playerState: 'paused',
    countdown: { ...state.countdown, isRunning: false },
  }
}

const tick = (state: PlaylistState): PlaylistState => {
  const { countdown } = state;
  const { msLeft, isRunning } = countdown;
  if (!isRunning) {
    return state;
  }
  const newMsLeft = Math.max(0, msLeft - MS_INTERVAL);
  const newState = { ...state, countdown: { ...countdown, msLeft: newMsLeft } };
  return newMsLeft === 0
    ? onZeroTick(newState)
    : newState;
}

const reset = (state: PlaylistState): PlaylistState => {
  const { countdown } = state;
  const { msTotal } = countdown;
  return { ...state, countdown: { ...countdown, msLeft: msTotal } };
}

const playlistReducer: PlaylistReducer = (state: PlaylistState, action: PlaylistAction) => {
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
  if (isCountdownActionTick(action)) {
    return tick(state);
  }
  if (isCountdownActionReset(action)) {
    return reset(state);
  }
  if (isCountdownActionSet(action)) {
    // TODO: set total, interval(?)
    return state;
  }
  return state;
}

const createActionDispatchers = (dispatch: Dispatch<PlaylistAction>): PlaylistActionDispatchers & CountdownActionDispatchers => {
  return {
    play: () => dispatch({ type: 'play' }),
    pause: () => dispatch({ type: 'pause' }),
    stop: () => dispatch({ type: 'stop' }),
    prev: () => dispatch({ type: 'prev' }),
    next: () => dispatch({ type: 'next' }),
    tick: () => dispatch({ type: 'tick' }),
    set: () => dispatch({ type: 'set' }),
    start: () => dispatch({ type: 'start' }),
    reset: () => dispatch({ type: 'reset' }),
  };
}

const PlaylistContext = createContext<[PlaylistState, PlaylistActionDispatchers & CountdownActionDispatchers]>([initialState, createActionDispatchers(() => { })]);

// TODO: type
export const PlaylistProvider = ({ children }: any) => {
  const [playlist, dispatch] = useReducer<PlaylistReducer>(playlistReducer, initialState);
  const dispatchers: PlaylistActionDispatchers & CountdownActionDispatchers = createActionDispatchers(dispatch);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { setInterval(dispatchers.tick, MS_INTERVAL) }, []); // first render only
  return (
    <PlaylistContext.Provider value={[playlist, dispatchers]}>
      {children}
    </PlaylistContext.Provider>
  );
}

export const usePlaylistStore = () => useContext<[PlaylistState, PlaylistActionDispatchers & CountdownActionDispatchers]>(PlaylistContext);
