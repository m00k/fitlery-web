import { Box, BoxProps } from '@material-ui/core';
import React from 'react';
import { useRecoilValue } from 'recoil';
import usePlayerPageDispatcher from '../player/usePlayerPageDispatcher';
import PlaylistItem, { isBreakItem } from './PlaylistItem';
import { playlistAtom, PlaylistItemData, PlaylistState } from './store';


const highlightItem = (item: PlaylistItemData) => {
  const tags = { ...item.tags, highlight: true };
  return {...item, tags};
}

const prepareItems = (playlistState: PlaylistState): PlaylistItemData[] => {
  const { currentItemIndex, items } = playlistState;
  const currentItemIndexOrZero = Math.max(currentItemIndex, 0);
  const playlistItems = [
      ...items.slice(0, currentItemIndexOrZero),
      ...items.slice(currentItemIndexOrZero, currentItemIndexOrZero + 2).map(highlightItem), // highlight one break item and one work item, don't know which is which
      ...items.slice(currentItemIndexOrZero + 2),
     ]
    .filter(item => !isBreakItem(item)); // filter out break items, naturally removing the unwanted, highlighted break item
  return playlistItems;
}

export interface PlaylistProps extends BoxProps {
  
}

const Playlist: React.FC<PlaylistProps> = (rootProps) => {
  const playlistState = useRecoilValue(playlistAtom);
  const dispatch = usePlayerPageDispatcher();
  const items = prepareItems(playlistState);

  return (
    <Box
      {...rootProps}
    >
      {items.map((item, i) =>
        <PlaylistItem
          key={item.id}
          item={item as PlaylistItemData}
          isCurrent={item.tags?.highlight}
          onClick={() => dispatch.setCurrentItem(i*2)}
        />
      )}
    </Box>
  );
}

export default Playlist;
