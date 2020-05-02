import { Box, Typography } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import { isBreak } from './PlaylistItem';
import { usePlaylistStore, PlaylistItemData } from './store';


export default function PlaylistItemCurrent() {
  const [playlistState] = usePlaylistStore();
  const { currentItemIndex, items } = playlistState;
  const currentItem = currentItemIndex > -1 ? items[currentItemIndex] : items[0];
  const nextItemIndex = items.findIndex((item: PlaylistItemData, index: number) => index >= currentItemIndex && !isBreak(item));
  const nextItem = items[nextItemIndex];
  const text = isBreak(currentItem)
    ? `next up: ${nextItem?.name}`
    : currentItem.name;
  const theme = useTheme();
  const bgcolor = theme.palette.primary.main;
  const color = theme.palette.background.paper;
  const height = 120; // TODO: fix this mess

  return (
    <Box
      alignItems="center"
      bgcolor={bgcolor}
      borderLeft={theme.spacing(3)}
      pr={3}
      borderColor={theme.palette.primary.main}
      color={color}
      display="grid"
      height={height}
      width={1}
    >
      <Typography
        style={{
          textAlign: "center",
          textTransform: "uppercase",
          fontSize: isBreak(currentItem) ? "2rem" : "3rem"
        }}
        variant="h4"
      >
        {text}
      </Typography>
    </Box>
  );
}