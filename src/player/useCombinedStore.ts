import { Dispatch, useEffect, useRef } from 'react';
import { CountdownState, useCountdownStore } from '../countdown/store';
import { NOT_FOUND, PlaylistState, usePlaylistStore } from '../playlist/store';
import { PlayerActionType, PlayerState, usePlayerStore } from './store';


export interface CombinedState {
  countdownState: CountdownState;
  playlistState: PlaylistState;
  playerState: PlayerState;
}

const useCombinedStore = (): [CombinedState, Dispatch<PlayerActionType>] => {
  const [playlistState, playlistDispatch] = usePlaylistStore();
  const [countdownState, countdownDispatch] = useCountdownStore();
  const [playerState, playerDispatch] = usePlayerStore();
  const { msLeft } = countdownState;
  const isZero = msLeft === 0;
  const state = { countdownState, playlistState, playerState };
  const { currentItemIndex, items } = playlistState;
  const isLastItem = currentItemIndex === items.length - 1;

  const stop = useRef(() => {
    playerDispatch.stop();
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

  const dispatch = (action: PlayerActionType) => {
    switch (action) {
      case 'play':
        playerDispatch.play();
        if (playlistState.currentItemIndex === NOT_FOUND) {
          playlistDispatch.setCurrent(0);
        }
        countdownDispatch.start();
        break;
      case 'pause':
        playerDispatch.pause();
        countdownDispatch.pause();
        break;
      case 'prev':
        playerDispatch.prev();
        playlistDispatch.prev();
        countdownDispatch.reset();
        break;
      case 'next':
        playerDispatch.next();
        playlistDispatch.next();
        countdownDispatch.reset();
        break;
    }
  }

  return [state, dispatch];
}

export default useCombinedStore;