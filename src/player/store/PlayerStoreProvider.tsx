import React, { createContext, Dispatch, useContext, useReducer } from 'react';
import { PlayerAction, PlayerActionType, PlayerReducer, playerReducer } from '.';
import { initialState, PlayerState } from './state';


export type PlayerActionDispatchers = { [A in PlayerActionType]: (payload?: any) => void };

const createActionDispatchers = (dispatch: Dispatch<PlayerAction>): PlayerActionDispatchers => {
  return {
    play: () => dispatch({ type: 'play' }),
    pause: () => dispatch({ type: 'pause' }),
    stop: () => dispatch({ type: 'stop' }),
    prev: () => dispatch({ type: 'prev' }),
    next: () => dispatch({ type: 'next' }),
  };
}

const PlayerStoreContext = createContext<[PlayerState, PlayerActionDispatchers]>([initialState, createActionDispatchers(() => { })]);

// TODO: type
export const PlayerStoreProvider = ({ children }: any) => {
  const [player, dispatch] = useReducer<PlayerReducer>(playerReducer, initialState);
  const playerDispatchers: PlayerActionDispatchers = createActionDispatchers(dispatch);
  return (
    <PlayerStoreContext.Provider value={[player, playerDispatchers]}>
      {children}
    </PlayerStoreContext.Provider>
  );
}

export const usePlayerStore = () => useContext<[PlayerState, PlayerActionDispatchers]>(PlayerStoreContext);