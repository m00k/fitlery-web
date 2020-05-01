import React, { createContext, Dispatch, useContext, useReducer } from 'react';
import { PlaylistAction, PlaylistActionType } from './actions';
import { PlaylistReducer, playlistReducer } from './reducer';
import { initialState, PlaylistState } from './state';


export type PlaylistActionDispatchers = { [A in PlaylistActionType]: (payload?: any) => void };

const createActionDispatchers = (dispatch: Dispatch<PlaylistAction>): PlaylistActionDispatchers => {
  return {
    play: () => dispatch({ type: 'play' }),
    pause: () => dispatch({ type: 'pause' }),
    stop: () => dispatch({ type: 'stop' }),
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