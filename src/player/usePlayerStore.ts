import { Dispatch, useEffect, useRef } from 'react';
import { CountdownState, useCountdownStore } from '../countdown/store';
import { NOT_FOUND, usePlaylistStore } from '../playlist/store';
import { PlaylistActionType, PlaylistState } from './store';


export interface PlayerState {
  countdownState: CountdownState;
  playlistState: PlaylistState;
}

const usePlayerStore = (): [PlayerState, Dispatch<PlaylistActionType>] => {
  const [playlistState, playlistDispatch] = usePlaylistStore();
  const [countdownState, countdownDispatch] = useCountdownStore();
  const { msLeft } = countdownState;
  const isZero = msLeft === 0;
  const state = { countdownState, playlistState };
  const { currentItemIndex, items } = playlistState;
  const isLastItem = currentItemIndex === items.length - 1;

  const stop = useRef(() => {
    playlistDispatch.setCurrent(NOT_FOUND); 
    countdownDispatch.stop();
  });

  const reset = useRef(() => {
    playlistDispatch.next();
    countdownDispatch.reset();
  });

  useEffect(() => {
    if (isZero) {
      if (isLastItem) {
        stop.current();
      } else {
        reset.current();
      }
    }
  }, [isZero, isLastItem]);

  const dispatch = (action: PlaylistActionType) => {
    switch (action) {
      case 'play':
        if (playlistState.currentItemIndex === NOT_FOUND) {
          playlistDispatch.setCurrent(0);
        }
        countdownDispatch.start();
        break;
      case 'pause':
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