import { Dispatch, useEffect } from 'react';
import { CountdownState, useCountdownStore } from '../countdown/store';
import { PlaylistActionType, PlaylistState, usePlaylistStore } from './store';

export interface PlayerState {
  countdownState: CountdownState;
  playlistState: PlaylistState;
}

const usePlayerStore = (): [PlayerState, Dispatch<PlaylistActionType>] => {
  const [playlistState, playlistDispatch] = usePlaylistStore();
  const [countdownState, countdownDispatch] = useCountdownStore();
  const { msLeft } = countdownState;
  const state = { countdownState, playlistState };

  useEffect(() => {
    if(msLeft === 0) {
      playlistDispatch.next();
      countdownDispatch.reset();
    }
  }, [msLeft, countdownDispatch, playlistDispatch]);

  const dispatch = (action: PlaylistActionType) => {
    switch (action) {
      case 'play':
        playlistDispatch.play();
        countdownDispatch.start();
        break;
      case 'pause':
        playlistDispatch.pause();
        countdownDispatch.pause();
        break;
      case 'prev':
        playlistDispatch.prev();
        countdownDispatch.reset();
        break;
      case 'next':
        playlistDispatch.next();
        countdownDispatch.reset();
        break;
    }
  }

  return [state, dispatch];
}

export default usePlayerStore;