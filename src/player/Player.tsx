import { Box, useTheme } from '@material-ui/core';
import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Playlist from '../playlist/Playlist';
import PlaylistItemCurrent from '../playlist/PlaylistItemCurrent';
import { playlistAtom } from '../playlist/store';
import Controls from './Controls';
import CountdownIsZeroEffect from './CountdownIsZeroEffect';
import Header from './Header';
import { playerAtom } from './store';
import { useLayout } from './useLayout';


// TODO: dispatch stop when navigating away
// TODO: handle empty
const Player = () => {
  const history = useHistory();
  const styles = useLayout();
  const theme = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const playlistState = useRecoilValue(playlistAtom);
  const playerState = useRecoilValue(playerAtom);
  const { currentItemIndex } = playlistState;
  const prevCurrentItemIndex = useRef(-999);
  const { playState } = playerState;
  const top = theme.variables.playlist.item.height;

  useEffect(() => {
    if (playState === 'playing'
      && currentItemIndex > prevCurrentItemIndex.current
      && currentItemIndex > 0 
      && currentItemIndex % 2 === 0
    ) {
      ref.current?.scrollBy({ top, behavior: 'smooth' });
    }
    prevCurrentItemIndex.current = currentItemIndex;
  }, [currentItemIndex, playState, top]);
  
  if (!playlistState || !playlistState.items.length) {
    history.push(`${process.env.PUBLIC_URL}/workouts`);
    return null;
  }
  
  const onClose = () => history.push(`${process.env.PUBLIC_URL}/`);

  return (
    <Box
      data-testid='player'
      style={styles.root}
    >
      <CountdownIsZeroEffect />
      <Header
        onClose={onClose}
      />
      <Controls
        gridArea='controls'
        playState={playState}
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