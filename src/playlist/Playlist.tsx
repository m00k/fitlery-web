import { Box } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import PlaylistItem, { isBreakItem } from './PlaylistItem';
import { PlaylistItemData, usePlaylistStore } from './store';


const highlightItem = (item: PlaylistItemData) => {
  const tags = { ...item.tags, highlight: true };
  return {...item, tags};
}

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
  const currentItemIndexSafe = Math.max(currentItemIndex, 0);
  const taggedItems = [
      ...items.slice(0, Math.max(currentItemIndexSafe, 0)),
      ...items.slice(currentItemIndexSafe, currentItemIndexSafe + 2).map(highlightItem),
      ...items.slice(currentItemIndexSafe + 2),
     ]
    .filter(item => !isBreakItem(item)); // in this order -> indexes;

  return { taggedItems };
}

const Playlist = () => {
  const { taggedItems } = useStoreData();
  const styles = useStyles();

  return (
    <Box {...styles}>
      {taggedItems.map(item =>
        <PlaylistItem
          key={item.name}
          item={item as PlaylistItemData}
          isCurrent={item.tags?.highlight}
        />
      )}
    </Box>
  );
}

export default Playlist;
