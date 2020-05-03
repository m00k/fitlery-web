import React from 'react';
import Playlist from '../playlist/Playlist';
import PlaylistItemCurrent from '../playlist/PlaylistItemCurrent';
import { workouts } from '../workout/data';
import Banner from './Banner';
import Controls from './Controls';
import usePlayerStore from './usePlayerStore';


const Player = () => {
  const [state, dispatch] = usePlayerStore();
  const { countdownState, playlistState } = state;
  const { currentItemIndex, items, playState } = playlistState;
  const currentItem = currentItemIndex > -1 ? items[currentItemIndex] : items[0];
  const { msLeft, msTotal } = countdownState;

  return (
    <>
      <Banner
        workout={workouts[0]} // TODO
        playState={playState}
        msLeft={msLeft} // TODO: context or store
        msTotal={msTotal}
        currentItem={currentItem}
      >
      </Banner>
      <Controls
        playState={playState}
        onClick={dispatch}
      />
      <PlaylistItemCurrent />
      <Playlist />
    </>
  );
}

export default Player;