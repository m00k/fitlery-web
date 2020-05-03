import { Box } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import PlaylistItem, { isBreak } from './PlaylistItem';
import { usePlaylistStore } from './store';

const useStyles = () => {
  const theme = useTheme();
  const navHeightTopBottom = `${theme.variables.navbar.height * 2}px`;
  const playerHeight = `${theme.variables.player.height}px`;
  const currentItemHeight = `${theme.variables.playlist.currentItem.height}px`;
  const height = `calc(100vh - ${navHeightTopBottom} - ${playerHeight} - ${currentItemHeight})`;
  const overflow = 'auto';
  return { height, overflow };
}

const useStoreData = () => {
  const [playlistState] = usePlaylistStore();
  const { currentItemIndex, items } = playlistState;
  const highlightIndex = items.findIndex((item, index) => index >= currentItemIndex && !isBreak(item));
  return { items, highlightIndex };
}

const Playlist = () => {
  const { items, highlightIndex } = useStoreData();
  const styles = useStyles();

  return (
    <Box {...styles}>
      {items.map((item, i) => !isBreak(item) && 
        <PlaylistItem
          key={i}
          item={item}
          isCurrent={i===highlightIndex}
        />
      )}
    </Box>
  );
}

export default Playlist;
