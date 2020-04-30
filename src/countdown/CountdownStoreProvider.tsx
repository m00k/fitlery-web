import React, { createContext, Dispatch, useReducer, useEffect, useContext } from "react";

export const MS_INTERVAL = 100; // TODO
export const MS_TOTAL = 3000; // TODO

export type CountdownActionType = 'set' | 'start' | 'stop' | 'pause' | 'reset' | 'tick';
export type CountdownActionDispatchers = { [A in CountdownActionType]: (payload?: any) => void };

export interface CountdownAction {
  type: CountdownActionType;
}

export interface CountdownActionStart extends CountdownAction {
  type: 'start';
}

export interface CountdownActionStop extends CountdownAction {
  type: 'stop';
}

export interface CountdownActionPause extends CountdownAction {
  type: 'pause';
}

export interface CountdownActionSet extends CountdownAction {
  type: 'set';
}

export interface CountdownActionReset extends CountdownAction {
  type: 'reset';
}

export interface CountdownActionTick extends CountdownAction {
  type: 'tick';
}

export type CountdownActions =
  | CountdownActionStart
  | CountdownActionStop
  | CountdownActionPause
  | CountdownActionSet
  | CountdownActionReset
  | CountdownActionTick
  ;

export function isCountdownActionStart(action: CountdownAction): action is CountdownActionStart {
  return action.type === 'start';
}

export function isCountdownActionStop(action: CountdownAction): action is CountdownActionStop {
  return action.type === 'stop';
}

export function isCountdownActionPause(action: CountdownAction): action is CountdownActionPause {
  return action.type === 'pause';
}

export function isCountdownActionSet(action: CountdownAction): action is CountdownActionSet {
  return action.type === 'set';
}

export function isCountdownActionReset(action: CountdownAction): action is CountdownActionReset {
  return action.type === 'reset';
}

export function isCountdownActionTick(action: CountdownAction): action is CountdownActionTick {
  return action.type === 'tick';
}

export interface CountdownState {
  msLeft: number;
  msTotal: number;
  isRunning: boolean;
}

export const initialState: CountdownState = {
  msLeft: MS_TOTAL,
  msTotal: MS_TOTAL,
  isRunning: false,
}

export type CountdownReducer = (state: CountdownState, action: CountdownAction) => CountdownState

export const start = (state: CountdownState): CountdownState => {
  return {
    ...state,
    isRunning: true,
  }
}

export const stop = (state: CountdownState): CountdownState => {
  return {
    ...reset(state),
    isRunning: false,
  }
}

export const pause = (state: CountdownState): CountdownState => {
  return {
    ...state,
    isRunning: false,
  }
}

export const tick = (state: CountdownState): CountdownState => {
  const { msLeft, isRunning } = state;
  return !isRunning
    ? state
    : { ...state, msLeft: Math.max(0, msLeft - MS_INTERVAL) };
}

export const reset = (state: CountdownState): CountdownState => {
  return { ...state, msLeft: state.msTotal };
}

export const countdownReducer: CountdownReducer = (state: CountdownState, action: CountdownAction) => {
  if (isCountdownActionStart(action)) {
    return start(state);
  }
  if (isCountdownActionStop(action)) {
    return stop(state);
  }
  if (isCountdownActionPause(action)) {
    return pause(state);
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

const createActionDispatchers = (dispatch: Dispatch<CountdownAction>): CountdownActionDispatchers => {
  return {
    start: () => dispatch({ type: 'start' }),
    stop: () => dispatch({ type: 'stop' }),
    pause: () => dispatch({ type: 'pause' }),
    tick: () => dispatch({ type: 'tick' }),
    set: () => dispatch({ type: 'set' }),
    reset: () => dispatch({ type: 'reset' }),
  };
}

type CountdownStoreContext = [CountdownState, CountdownActionDispatchers];
const CountdownStoreContext = createContext<CountdownStoreContext>([initialState, createActionDispatchers(() => { })]);

// TODO: type
export const CountdownStoreProvider = ({ children }: any) => {
  const [coundtownState, dispatch] = useReducer<CountdownReducer>(countdownReducer, initialState);
  const dispatchers: CountdownActionDispatchers = createActionDispatchers(dispatch);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { setInterval(dispatchers.tick, MS_INTERVAL) }, []); // first render only
  return (
    <CountdownStoreContext.Provider value={[coundtownState, dispatchers]}>
      {children}
    </CountdownStoreContext.Provider>
  );
}

export const useCountdownStore = () => useContext<CountdownStoreContext>(CountdownStoreContext);
