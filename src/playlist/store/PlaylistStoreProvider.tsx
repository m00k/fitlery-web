import React, { createContext, Dispatch, useContext, useReducer } from 'react';
import { PlaylistAction, PlaylistActionType } from './actions';
import { PlaylistReducer, playlistReducer } from './reducer';
import { initialState, PlaylistState } from './state';


export type PlaylistActionDispatchers = { [A in PlaylistActionType]: (payload?: any) => void };

const createActionDispatchers = (dispatch: Dispatch<PlaylistAction>): PlaylistActionDispatchers => {
  return {
    setCurrent: (index: number) => dispatch({ type: 'setCurrent', payload: {index} }),
    prev: () => dispatch({ type: 'prev' }),
    next: () => dispatch({ type: 'next' }),
  };
}

const PlaylistStoreContext = createContext<[PlaylistState, PlaylistActionDispatchers]>([initialState, createActionDispatchers(() => { })]);

// TODO: type
export const PlaylistStoreProvider = ({ children }: any) => {
  const [playlist, dispatch] = useReducer<PlaylistReducer>(playlistReducer, initialState);
  const playlistDispatchers: PlaylistActionDispatchers = createActionDispatchers(dispatch);
  return (
    <PlaylistStoreContext.Provider value={[playlist, playlistDispatchers]}>
      {children}
    </PlaylistStoreContext.Provider>
  );
}

export const usePlaylistStore = () => useContext<[PlaylistState, PlaylistActionDispatchers]>(PlaylistStoreContext);