import { useRecoilState, useSetRecoilState } from 'recoil';
import { countdownAtom, countdownReducer } from '../countdown/store';
import { NOT_FOUND, PlaylistActionType, playlistAtom, PlaylistData, playlistReducer } from '../playlist/store';
import { PlayerActionType, playerAtom, playerReducer } from './store';


export type PlayerPageDispatchers = { [A in PlayerActionType | PlaylistActionType]: (payload?: any) => void };

const usePlayerPageDispatcher = (): PlayerPageDispatchers => {
  const [playlistState, setPlaylistState] = useRecoilState(playlistAtom);
  const setPlayerState = useSetRecoilState(playerAtom);
  const setCountdown = useSetRecoilState(countdownAtom);
  const { currentItemIndex, items } = playlistState;
  const currentItem = items[Math.max(currentItemIndex, 0)];
  const nextItem = items[currentItemIndex + 1];
  const prevItem = items[currentItemIndex - 1];

  const set = (playlist: PlaylistData) => {
    stop();
    setPlaylistState(state => playlistReducer.set(state, playlist));
  };

  const play = () => {
    setPlayerState(playerReducer.play);
    if (playlistState.currentItemIndex === NOT_FOUND) {
      setPlaylistState(state => playlistReducer.setCurrentItem(state, 0));
      setCountdown(state => countdownReducer.set(state, currentItem.durationMs));
    }
    setCountdown(countdownReducer.start);
  };

  const stop = () => {
    setPlayerState(playerReducer.stop);
    setPlaylistState(state => playlistReducer.setCurrentItem(state, NOT_FOUND)); 
    setCountdown(countdownReducer.stop);
  };

  const pause = () => {
    setPlayerState(playerReducer.pause);
    setCountdown(countdownReducer.pause);
  }

  const prev = () => {
    if (prevItem) {
      setPlaylistState(playlistReducer.prev);
      setCountdown(state => countdownReducer.set(state, prevItem.durationMs));
    } else {
      setCountdown(countdownReducer.reset);
    }
  }

  const next = () => {
    if (nextItem) {
      const nextItemIndex = currentItemIndex + 1;
      setPlaylistState(state => playlistReducer.setCurrentItem(state, nextItemIndex)); 
      setCountdown(state => countdownReducer.set(state, playlistState.items[nextItemIndex].durationMs));
    } else {
      stop();
    }
  };

  const setCurrentItem = (index: number) => {
    // TODO: validate
    if (currentItemIndex === index) {
      next();
    } else {
      setPlaylistState(state => playlistReducer.setCurrentItem(state, index)); 
      setCountdown(state => countdownReducer.set(state, playlistState.items[index].durationMs));
    }
  };

  const dispatch: PlayerPageDispatchers = {
    set,
    setCurrentItem,
    play,
    pause,
    stop,
    prev,
    next,
  };

  return dispatch;
}

export default usePlayerPageDispatcher;