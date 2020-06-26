import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import usePlayerPageDispatcher from '../player/usePlayerPageDispatcher';
import { countdownAtom } from '../countdown/store';

const CountdownIsZeroEffect: React.FC<{}> = () => {
  const dispatch = usePlayerPageDispatcher();
  const countdownState = useRecoilValue(countdownAtom);
  const { msLeft } = countdownState;
  const isZero = msLeft === 0;// TODO: useRecoilValue(isZeroCountdownState);
  useEffect(() => {
    if (isZero) {
      dispatch.next();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isZero]);
  return <></>;
};

export default CountdownIsZeroEffect;