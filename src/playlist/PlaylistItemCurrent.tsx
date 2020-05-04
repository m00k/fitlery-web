import { Box, BoxProps, Typography } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import { isBreakItem } from './PlaylistItem';
import { NOT_FOUND, usePlaylistStore } from './store';


const useInnerProps = () => {
  const [playlistState] = usePlaylistStore();
  const { currentItemIndex, items } = playlistState;
  const currentItem = currentItemIndex > -1 ? items[currentItemIndex] : items[0];
  const fontSize = isBreakItem(currentItem)
    ? "2rem"
    : "3rem";
  const text = currentItemIndex === NOT_FOUND
    ? 'get ready'
    : currentItem.name;
  const style: React.CSSProperties = {
    textAlign: "center",
    textTransform: "uppercase",
    fontSize,
  };
  return {style, text};
}

const useRootProps = () => {
  const theme = useTheme();
  const bgcolor = theme.palette.primary.main;
  const color = theme.palette.background.paper;
  const height = theme.variables.playlist.currentItem.height;
  const props: BoxProps = {
    alignItems: 'center',
    bgcolor: bgcolor,
    borderLeft: theme.spacing(3),
    pr: 3,
    borderColor: theme.palette.primary.main,
    color: color,
    display: 'grid',
    height: height,
    width: 1,
  };
  return props;
}

export default function PlaylistItemCurrent() {
  const rootProps = useRootProps();
  const {style, text} = useInnerProps();

  return (
    <Box
      {...rootProps}
    >
      <Typography
        style={style}
        variant="h4"
      >
        {text}
      </Typography>
    </Box>
  );
}