import { Dispatch, useEffect } from 'react';
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
  const currentItem = items[Math.max(currentItemIndex, 0)];
  const nextItem = items[currentItemIndex + 1];
  const prevItem = items[currentItemIndex - 1];

  const play = () => {
    playerDispatch.play();
    if (playlistState.currentItemIndex === NOT_FOUND) {
      playlistDispatch.setCurrentItem(0);
      countdownDispatch.set(currentItem.durationMs);
    }
    countdownDispatch.start();
  };

  const stop = () => {
    playerDispatch.stop();
    playlistDispatch.setCurrentItem(NOT_FOUND); 
    countdownDispatch.stop();
  };

  const pause = () => {
    playerDispatch.pause();
    countdownDispatch.pause();
  }

  const prev = () => {
    if (prevItem) {
      playlistDispatch.prev();
      countdownDispatch.set(prevItem.durationMs);
    } else {
      countdownDispatch.reset();
    }
  }

  const next = () => {
    if (nextItem) {
      playlistDispatch.next();
      countdownDispatch.set(nextItem.durationMs);
    } else {
      stop();
    }
  };

  useEffect(() => {
    if (isZero) {
      next();
    }
  }, [isZero]); // eslint-disable-line react-hooks/exhaustive-deps

  const dispatch = (action: PlayerActionType) => {
    switch (action) {
      case 'play':
        play();
        break;
      case 'pause':
        pause();
        break;
      case 'prev':
        prev();
        break;
      case 'next':
        next();
        break;
    }
  }

  return [state, dispatch];
}

export default useCombinedStore;