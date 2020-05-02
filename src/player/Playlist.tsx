import { Box, Typography } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import PlaylistItem from './PlaylistItem';
import { PlaylistItemData, usePlaylistStore } from './store';

function isBreak(item: PlaylistItemData) {
  return item && !!item.tags && item.tags.includes('break');
}

function isCurrent(index: number, currentItemIndex: number) {
  return index === currentItemIndex;
}

function isNext(index: number, currentItemIndex: number) {
  return index === currentItemIndex + 1;
}

function show(item: PlaylistItemData, index: number, currentItemIndex: number) {
  return !isBreak(item) || isCurrent(index, currentItemIndex);
}

const Item = ({item, index, currentItemIndex}: {item: PlaylistItemData, index: number, currentItemIndex: number}) => {
  const theme = useTheme();

  if (!show(item, index, currentItemIndex)) {
    return null;
  }

  return isBreak(item)
    ? <Typography
        style={{
          color: theme.palette.secondary.contrastText,
          flex: 1,
          textAlign: "center",
        }}
        variant="h5"
      >
        break
      </Typography>
    : <PlaylistItem
        item={item}
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
  const navHeight = (theme.overrides?.MuiBottomNavigation?.root as any).height;
  const mainMargin = .5;
  const playerHeight = theme.spacing(27);
  const marginTop = .5;
  const height = `calc(100vh - ${navHeight * 2}px - ${theme.spacing(mainMargin) * 2}px - ${playerHeight}px - ${theme.spacing(marginTop)}px)`;
  const overflow = 'auto';
  const style = { marginTop, height, overflow };

  return (
    <Box {...style}>
      {items.map( (item: PlaylistItemData, index: number) => <Item key={item.name} {...{ item, index, currentItemIndex }} /> )}
    </Box>
  );
}

export default Playlist;
