import React, { createContext, Dispatch, useContext, useEffect, useReducer } from 'react';

const MS_INTERVAL = 100; // TODO
const MS_TOTAL = 3000; // TODO

export type CountdownActionType = 'set' | 'start' | 'stop' | 'pause' | 'reset' | 'tick';
export type CountdownActionDispatchers = { [A in CountdownActionType]: (payload?: any) => void };

export interface CountdownAction {
  type: CountdownActionType;
}

export interface CountdownActionSet extends CountdownAction { // set msTotal, msInterval, msLeft = msTotal
  type: 'set';
  msTotal: number;
}

export interface CountdownActionReset extends CountdownAction { // msLeft = msTotal
  type: 'reset';
}

export interface CountdownActionTick extends CountdownAction { // msLeft = msLeft - msInterval
  type: 'tick';
}

export type CountdownActions =
  | CountdownActionSet
  | CountdownActionReset
  | CountdownActionTick
  ;

function isCountdownActionSet(action: CountdownAction): action is CountdownActionSet {
  return action.type === 'set';
}

function isCountdownActionReset(action: CountdownAction): action is CountdownActionReset {
  return action.type === 'reset';
}

function isCountdownActionTick(action: CountdownAction): action is CountdownActionTick {
  return action.type === 'tick';
}

interface CountdownState {
  msLeft: number;
  msTotal: number;
  isRunning: boolean;
}

const initialState: CountdownState = {
  msLeft: MS_TOTAL,
  msTotal: MS_TOTAL,
  isRunning: false,
}

type CountdownReducer = (state: CountdownState, action: CountdownAction) => CountdownState

const start = (state: CountdownState): CountdownState => {
  return {
    ...state,
    isRunning: true,
  }
}

const stop = (state: CountdownState): CountdownState => {
  return {
    ...reset(state),
    isRunning: false,
  }
}

const pause = (state: CountdownState): CountdownState => {
  return {
    ...state,
    isRunning: false,
  }
}

const tick = (state: CountdownState): CountdownState => {
  const { msLeft, isRunning } = state;
  return !isRunning
    ? state
    : { ...state, msLeft: Math.max(0, msLeft - MS_INTERVAL) };
}

const reset = (state: CountdownState): CountdownState => {
  return { ...state, msLeft: state.msTotal };
}

const countdownReducer: CountdownReducer = (state: CountdownState, action: CountdownAction) => {
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
    tick: () => dispatch({ type: 'tick' }),
    set: () => dispatch({ type: 'set' }),
    start: () => dispatch({ type: 'start' }),
    stop: () => dispatch({ type: 'stop' }),
    pause: () => dispatch({ type: 'pause' }),
    reset: () => dispatch({ type: 'reset' }),
  };
}

const CountdownContext = createContext<[CountdownState, CountdownActionDispatchers]>([initialState, createActionDispatchers(() => { })]);

// TODO: type
export const CountdownProvider = ({ children }: any) => {
  const [countdown, dispatch] = useReducer<CountdownReducer>(countdownReducer, initialState);
  const dispatchers: CountdownActionDispatchers = createActionDispatchers(dispatch);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { setInterval(dispatchers.tick, MS_INTERVAL) }, []); // first render only
  return (
    <CountdownContext.Provider value={[countdown, dispatchers]}>
      {children}
    </CountdownContext.Provider>
  );
}

export const useCountdownStore = () => useContext<[CountdownState, CountdownActionDispatchers]>(CountdownContext);
