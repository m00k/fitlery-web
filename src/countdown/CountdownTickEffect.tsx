import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { countdownAtom, countdownReducer, MS_INTERVAL } from './store';

const CountdownTickEffect: React.FC<{}> = () => {
  const setCountdownState = useSetRecoilState(countdownAtom);

  useEffect(() => { 
    const i = setInterval(() => {
      setCountdownState(state => countdownReducer.tick(state));
    }, MS_INTERVAL);
    return () => clearInterval(i);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // first render only
  return null;
};

export default CountdownTickEffect;