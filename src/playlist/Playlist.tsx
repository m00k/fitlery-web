import { Box } from '@material-ui/core';
import React from 'react';
import PlaylistItem, { isBreakItem } from './PlaylistItem';
import { PlaylistItemData, usePlaylistStore } from './store';


const highlightItem = (item: PlaylistItemData) => {
  const tags = { ...item.tags, highlight: true };
  return {...item, tags};
}

const useStoreData = () => {
  const [playlistState] = usePlaylistStore();
  const { currentItemIndex, items } = playlistState;
  const currentItemIndexOrZero = Math.max(currentItemIndex, 0);
  const taggedItems = [
      ...items.slice(0, currentItemIndexOrZero),
      ...items.slice(currentItemIndexOrZero, currentItemIndexOrZero + 2).map(highlightItem), // highlight one break item and one work item, don't know which is which
      ...items.slice(currentItemIndexOrZero + 2),
     ]
    .filter(item => !isBreakItem(item)); // filter out break items, naturally removing the unwanted, highlighted break item

  return { taggedItems };
}

const Playlist = (props: any) => {
  const { taggedItems } = useStoreData();
  return (
    <Box
      overflow="auto"
      style={{
        ...props.style
      }}
    >
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
