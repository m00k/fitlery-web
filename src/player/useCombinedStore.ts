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
  const state = { countdownState, playlistState, playerState };
  const { msLeft } = countdownState;
  const isZero = msLeft === 0;
  const { currentItemIndex, items } = playlistState;
  const isLastItem = currentItemIndex === items.length - 1;
  const currentItem = items[Math.max(currentItemIndex, 0)];
  const nextItem = items[Math.min(currentItemIndex + 1, items.length - 1)];
  const prevItem = items[Math.max(currentItemIndex - 1, 0)];

  // never stale
  const stop = useRef(() => {
    playerDispatch.stop();
    playlistDispatch.setCurrent(NOT_FOUND); 
    countdownDispatch.stop();
  });

  useEffect(() => {
    if (isZero) {
      if (isLastItem) {
        stop.current();
      } else {
        playlistDispatch.next();
        countdownDispatch.set(nextItem.durationMs);
      }
    }
  }, [isZero, isLastItem, playlistDispatch, countdownDispatch, nextItem]);

  const dispatch = (action: PlayerActionType) => {
    switch (action) {
      case 'play':
        playerDispatch.play();
        if (playlistState.currentItemIndex === NOT_FOUND) {
          playlistDispatch.setCurrent(0);
          countdownDispatch.set(currentItem.durationMs);
        }
        countdownDispatch.start();
        break;
      case 'pause':
        playerDispatch.pause();
        countdownDispatch.pause();
        break;
      case 'prev':
        if (currentItemIndex > 0) {
          playlistDispatch.prev();
          countdownDispatch.set(prevItem.durationMs);
        }
        break;
      case 'next':
        if (!isLastItem) {
          playlistDispatch.next();
          countdownDispatch.set(nextItem.durationMs);
        }
        break;
    }
  }

  return [state, dispatch];
}

export default useCombinedStore;