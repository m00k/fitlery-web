import { Box } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import PlaylistItem from './PlaylistItem';
import { PlaylistItemData } from './store';

export function isBreak(item: PlaylistItemData) {
  return item && !!item.tags && item.tags.includes('break');
}

// TODO: HACK
// clean up all those magic numbers
const Playlist = ({items}: {items: PlaylistItemData[]}) => {
  const theme = useTheme();
  const currentItemHeight = "120px"
  const navHeight = (theme.overrides?.MuiBottomNavigation?.root as any).height;
  const playerHeight = theme.spacing(27);
  const height = `calc(100vh - ${navHeight * 2}px - ${playerHeight}px - ${currentItemHeight})`;
  const overflow = 'auto';
  const style = { height, overflow };

  return (
    <Box {...style}>
      {items.map(item => 
        <PlaylistItem key={item.name}
          item={item}
          isBreak={false}
          isCurrent={false}
          isNext={false}
        />
      )}
    </Box>
  );
}

export default Playlist;
