import { Box } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Playlist from '../playlist/Playlist';
import PlaylistItemCurrent from '../playlist/PlaylistItemCurrent';
import Banner, { BannerProps, BannerStyles } from './Banner';
import Controls from './Controls';
import { PlayerActionType } from './store';
import { useLayout } from './useLayout';
import usePlayerPageStore, { PlayerPageState } from './usePlayerPageStore';


const buildBannerProps = (state: PlayerPageState, { avatar, text }: BannerStyles, history: ReturnType<typeof useHistory>): BannerProps => {
  const { countdownState, playlistState, playerState } = state;
  const { currentItemIndex, items } = playlistState;
  const currentItem = currentItemIndex > -1 ? items[currentItemIndex] : items[0];
  const { msLeft, msTotal } = countdownState;
  const { playState } = playerState;
  const { short, name: title, description } = playlistState;
  const onClose = () => history.push(`/`);

  return {
    playState,
    msLeft,
    msTotal,
    currentItem,
    short,
    title,
    description,
    styles: { avatar, text },
    onClose,
  }
}

// TODO: dispatch stop when navigating away
// TODO: handle empty
const Player = () => {
  const history = useHistory();
  const styles = useLayout();
  const [state, dispatch] = usePlayerPageStore();
  const { playlistState } = state;
  if (!playlistState || !playlistState.items.length) {
    history.push(`/workouts`);
    return null;
  }
  const { playerState } = state;
  const { playState } = playerState;
  const { avatar, text } = styles;
  const bannerProps = buildBannerProps(state, { avatar, text }, history);
  const handleControlsClick = (type: PlayerActionType) => dispatch[type]();

  return (
    <Box
      data-testid='player'
      style={styles.root}
    >
      <Banner
        {...bannerProps}
      >
      </Banner>
      <Controls
        playState={playState}
        onClick={handleControlsClick}
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