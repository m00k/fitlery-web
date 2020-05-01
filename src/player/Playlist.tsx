import { Box } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import PlaylistItem from './PlaylistItem';
import { PlaylistItemData, usePlaylistStore } from './store';

// TODO: HACK
// clean up all those magic numbers
const Playlist = () => {
  const [playlistState, ] = usePlaylistStore(); // TODO (cb): fix
  const { items, currentItemIndex: ci } = playlistState;
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
      {items.map((item: PlaylistItemData, i: number) =>
        <PlaylistItem
          key={item.name}
          item={item}
          current={i === ci}
        />
      )}
    </Box>
  );
}

export default Playlist;
