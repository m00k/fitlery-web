import { Dispatch, useEffect, useRef } from 'react';
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
  const isZero = msLeft === 0;
  const state = { countdownState, playlistState };
  const { currentItemIndex, items } = playlistState;
  const isLastItem = currentItemIndex === items.length - 1;

  const stop = useRef(() => {
    playlistDispatch.stop();
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