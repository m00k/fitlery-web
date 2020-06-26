import { CountdownState, MS_INTERVAL } from "./state"


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
  const isZero = msLeft === 0;
  return !isRunning || isZero
    ? state
    : { ...state, msLeft: Math.max(0, msLeft - MS_INTERVAL) };
}

const set = (state: CountdownState, durationMs: number): CountdownState => {
  return { ...state, msLeft: durationMs, msTotal: durationMs, };
}

const reset = (state: CountdownState): CountdownState => {
  return { ...state, msLeft: state.msTotal };
}

export const countdownReducer = {
  start,
  stop,
  pause,
  tick,
  set,
  reset,
};
