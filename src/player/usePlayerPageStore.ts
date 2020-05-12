import { useEffect } from 'react';
import { CountdownState, useCountdownStore } from '../countdown/store';
import { NOT_FOUND, PlaylistActionSet, PlaylistActionType, PlaylistData, PlaylistState, usePlaylistStore, PlaylistActionSetCurrentItem } from '../playlist/store';
import { PlayerAction, PlayerActionType, PlayerState, usePlayerStore } from './store';


export interface PlayerPageState {
  countdownState: CountdownState;
  playlistState: PlaylistState;
  playerState: PlayerState;
}

export type PlayerPageAction = PlayerAction | PlaylistActionSet | PlaylistActionSetCurrentItem;
export type PlayerPageActionDispatchers = { [A in PlayerActionType | Extract<PlaylistActionType, 'set' | 'setCurrentItem'>]: (payload?: any) => void };

const usePlayerPageStore = (): [PlayerPageState, PlayerPageActionDispatchers] => {
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

  const set = (playlist: PlaylistData) => {
    stop();
    playlistDispatch.set(playlist);
  };

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

  const setCurrentItem = (index: number) => {
    // TODO: validate
    if (currentItemIndex === index) {
      next();
    } else {
      playlistDispatch.setCurrentItem(index);
      countdownDispatch.set(playlistState.items[index].durationMs);
    }
  };

  useEffect(() => {
    if (isZero) {
      next();
    }
  }, [isZero]); // eslint-disable-line react-hooks/exhaustive-deps


  // TODO: calling this one a dispatcher is maybe a little far fetched...
  const dispatch: PlayerPageActionDispatchers = {
    set,
    setCurrentItem,
    play,
    pause,
    stop,
    prev,
    next,
  };

  return [state, dispatch];
}

export default usePlayerPageStore;