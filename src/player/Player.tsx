import React from 'react';
import Playlist from '../playlist/Playlist';
import PlaylistItemCurrent from '../playlist/PlaylistItemCurrent';
import { workouts } from '../workout/data';
import Banner from './Banner';
import Controls from './Controls';
import useCombinedStore from './useCombinedStore';
import { useLayout } from './useLayout';
import { Box } from '@material-ui/core';


const Player = () => {
  const [state, dispatch] = useCombinedStore();
  const { countdownState, playlistState, playerState } = state;
  const { currentItemIndex, items } = playlistState;
  const currentItem = currentItemIndex > -1 ? items[currentItemIndex] : items[0];
  const { msLeft, msTotal } = countdownState;
  const { playState } = playerState;
  const styles = useLayout();

  
  return (
    <Box
      id="the-box"
      style={styles.root}
    >
      <Banner
        workout={workouts[0]} // TODO
        playState={playState}
        msLeft={msLeft} // TODO: context or store
        msTotal={msTotal}
        currentItem={currentItem}
        style={styles}
      >
      </Banner>
      <Controls
        playState={playState}
        onClick={dispatch}
        style={styles.controls}
      />
      <PlaylistItemCurrent
        style={styles.current}
      />
      <Playlist
        style={styles.list}
      />
    </Box>
  );
}

export default Player;