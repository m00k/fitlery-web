export const MS_INTERVAL = 100; // TODO
export const MS_TOTAL = 3000; // TODO

export type CountdownActionType = 'set' | 'start' | 'stop' | 'pause' | 'reset' | 'tick';

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
