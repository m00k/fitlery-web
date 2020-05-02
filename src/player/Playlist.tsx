import { Box } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import PlaylistItem, { isBreak } from './PlaylistItem';
import { usePlaylistStore, PlaylistItemData } from './store';


const Playlist = () => {
  const [playlistState] = usePlaylistStore();
  const { currentItemIndex, items } = playlistState;
  const highlightIndex = items.findIndex((item: PlaylistItemData, index: number) => index >= currentItemIndex && !isBreak(item));

  // TODO: HACK
  // clean up all those magic numbers  
  const theme = useTheme();
  const navHeight = (theme.overrides?.MuiBottomNavigation?.root as any).height;
  const playerHeight = theme.spacing(27);
  const currentItemHeight = "120px"
  const height = `calc(100vh - ${navHeight * 2}px - ${playerHeight}px - ${currentItemHeight})`;
  const overflow = 'auto';
  const style = { height, overflow };


  return (
    <Box {...style}>
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
