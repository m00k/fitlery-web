import { Box, useTheme } from '@material-ui/core';
import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Playlist from '../playlist/Playlist';
import PlaylistItemCurrent from '../playlist/PlaylistItemCurrent';
import Controls from './Controls';
import Header, { HeaderProps } from './Header';
import { PlayerActionType } from './store';
import { useLayout } from './useLayout';
import usePlayerPageStore, { PlayerPageState } from './usePlayerPageStore';


const buildBannerProps = (state: PlayerPageState, onClose: () => void): HeaderProps => {
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
    onClose,
  }
}

// TODO: dispatch stop when navigating away
// TODO: handle empty
const Player = () => {
  const history = useHistory();
  const styles = useLayout();
  const theme = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  
  const [state, dispatch] = usePlayerPageStore();
  const { playlistState } = state;
  const { playerState } = state;
  const { currentItemIndex } = playlistState;
  const { playState } = playerState;
  const top = theme.variables.playlist.item.height;
  useEffect(() => {
    if (playState === 'playing' && currentItemIndex > 1 && currentItemIndex % 2 === 0) {
      ref.current?.scrollBy({ top, behavior: 'smooth' });
    }
  }, [currentItemIndex, playState, top]);

  if (!playlistState || !playlistState.items.length) {
    history.push(`/workouts`);
    return null;
  }

  const onClose = () => history.push(`/`);
  const bannerProps = buildBannerProps(state, onClose);
  const handleControlsClick = (type: PlayerActionType) => dispatch[type]();

  return (
    <Box
      data-testid='player'
      style={styles.root}
    >
      <Header
        {...bannerProps}
      >
      </Header>
      <Controls
        gridArea='controls'
        playState={playState}
        onClick={handleControlsClick}
      />
      <PlaylistItemCurrent
        gridArea='current'
      />
      <div
        ref={ref}
        style={{
          gridArea: 'list',
          overflow: 'auto',
        }}
      >
        <Playlist />
      </div>
    </Box>
  );
}

export default Player;