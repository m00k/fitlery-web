import { Box } from '@material-ui/core';
import React from 'react';
import Playlist from '../playlist/Playlist';
import PlaylistItemCurrent from '../playlist/PlaylistItemCurrent';
import Banner, { BannerProps } from './Banner';
import Controls from './Controls';
import useCombinedStore, { CombinedState } from './useCombinedStore';
import { useLayout } from './useLayout';


const useBannerProps = (state: CombinedState): BannerProps => {
  const { countdownState, playlistState, playerState } = state;
  const { currentItemIndex, items } = playlistState;
  const currentItem = currentItemIndex > -1 ? items[currentItemIndex] : items[0];
  const { msLeft, msTotal } = countdownState;
  const { playState } = playerState;
  const { short, name: title, description } = playlistState;
  return {
    playState,
    msLeft,
    msTotal,
    currentItem,
    short,
    title,
    description,
  }
}

// TODO: stop when navigating away
// TODO: handle empty
const Player = () => {
  const [state, dispatch] = useCombinedStore();
  const { playerState } = state;
  const { playState } = playerState;
  const styles = useLayout();

  return (
    <Box
      id="the-box"
      {...styles.root}
    >
      <Banner
        props={useBannerProps(state)}
        styles={styles}
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