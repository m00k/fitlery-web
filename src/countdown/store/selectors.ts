// TODO: investigate
// Cannot update a component (`Batcher`) while rendering a different component (`Countdown`)...

import { selector } from 'recoil';
import { countdownAtom } from './state';

export const isZeroCountdownState = selector<boolean>({
  key: 'isZeroCountdownState',
  get: ({get}) => {
    const countdownState = get(countdownAtom);
    return countdownState.msLeft === 0;
  },
});