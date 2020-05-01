import { CountdownAction, isCountdownActionPause, isCountdownActionReset, isCountdownActionSet, isCountdownActionStart, isCountdownActionStop, isCountdownActionTick } from "./actions"
import { CountdownState, MS_INTERVAL } from "./state"

export type CountdownReducer = (state: CountdownState, action: CountdownAction) => CountdownState

const start = (state: CountdownState): CountdownState => {
  return { ...state, isRunning: true }
}

const stop = (state: CountdownState): CountdownState => {
  return { ...reset(state), isRunning: false }
}

const pause = (state: CountdownState): CountdownState => {
  return { ...state, isRunning: false }
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

export default countdownReducer;