import { Box } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import PlaylistItem from './PlaylistItem';
import { PlaylistItemData, usePlaylistStore } from './store';

export function isBreak(item: PlaylistItemData) {
  return item && !!item.tags && item.tags.includes('break');
}

function isCurrent(index: number, currentItemIndex: number) {
  return index === currentItemIndex;
}

function isNext(index: number, currentItemIndex: number) {
  return index === currentItemIndex + 1;
}

function show(item: PlaylistItemData, index: number, currentItemIndex: number) {
  return index > currentItemIndex && !isBreak(item);
}

const Item = ({item, index, currentItemIndex}: {item: PlaylistItemData, index: number, currentItemIndex: number}) => {
  if (!show(item, index, currentItemIndex)) {
    return null;
  }

  return <PlaylistItem
          item={item}
          isBreak={isBreak(item)}
          isCurrent={isCurrent(index, currentItemIndex)}
          isNext={isNext(index, currentItemIndex)}
        />
}

// TODO: HACK
// clean up all those magic numbers
const Playlist = () => {
  const [playlistState,] = usePlaylistStore(); // TODO (cb): fix
  const { items, currentItemIndex } = playlistState;
  const theme = useTheme();
  const currentItemHeight = "120px"
  const navHeight = (theme.overrides?.MuiBottomNavigation?.root as any).height;
  const playerHeight = theme.spacing(27);
  const height = `calc(100vh - ${navHeight * 2}px - ${playerHeight}px - ${currentItemHeight})`;
  const overflow = 'auto';
  const style = { height, overflow };

  return (
    <Box {...style}>
      {items.map( (item: PlaylistItemData, index: number) => <Item key={item.name} {...{ item, index, currentItemIndex }} /> )}
    </Box>
  );
}

export default Playlist;
