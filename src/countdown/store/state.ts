export const MS_INTERVAL = 100; // TODO
const MS_TOTAL = 10000; // TODO

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