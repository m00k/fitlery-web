import React, { createContext, Dispatch, useContext, useEffect, useReducer } from "react";
import { CountdownAction, CountdownActionType } from "./actions";
import countdownReducer, { CountdownReducer } from "./reducer";
import { CountdownState, initialState, MS_INTERVAL } from "./state";

export type CountdownActionDispatchers = { [A in CountdownActionType]: (payload?: any) => void };
const createActionDispatchers = (dispatch: Dispatch<CountdownAction>): CountdownActionDispatchers => {
  return {
    start: () => dispatch({ type: 'start' }),
    stop: () => dispatch({ type: 'stop' }),
    pause: () => dispatch({ type: 'pause' }),
    tick: () => dispatch({ type: 'tick' }),
    set: (durationMs: number) => dispatch({ type: 'set', payload: {msLeft: durationMs, msTotal: durationMs} }),
    reset: () => dispatch({ type: 'reset' }),
  };
}

type CountdownStoreContext = [CountdownState, CountdownActionDispatchers];
const CountdownStoreContext = createContext<CountdownStoreContext>([initialState, createActionDispatchers(() => { })]);

// TODO: type
export const CountdownStoreProvider = ({ children }: any) => {
  const [countdownState, dispatch] = useReducer<CountdownReducer>(countdownReducer, initialState);
  const dispatchers: CountdownActionDispatchers = createActionDispatchers(dispatch);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { setInterval(dispatchers.tick, MS_INTERVAL) }, []); // first render only
  return (
    <CountdownStoreContext.Provider value={[countdownState, dispatchers]}>
      {children}
    </CountdownStoreContext.Provider>
  );
}

export const useCountdownStore = () => useContext<CountdownStoreContext>(CountdownStoreContext);
