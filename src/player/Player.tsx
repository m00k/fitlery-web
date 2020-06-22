import { Box, useTheme } from '@material-ui/core';
import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Playlist from '../playlist/Playlist';
import PlaylistItemCurrent from '../playlist/PlaylistItemCurrent';
import Controls from './Controls';
import Header from './Header';
import { PlayerActionType } from './store';
import { useLayout } from './useLayout';
import usePlayerPageStore from './usePlayerPageStore';


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
  const i = useRef<number>(0);
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
  const handleControlsClick = (type: PlayerActionType) => dispatch[type]();
  console.log('#######################', i.current++);

  return (
    <Box
      data-testid='player'
      style={styles.root}
    >
      <Header
        onClose={onClose}
      />
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