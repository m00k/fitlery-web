import { Box, BoxProps, Typography } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import { isBreakItem } from './PlaylistItem';
import { NOT_FOUND, usePlaylistStore } from './store';


const useInnerStyles = () => {
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

const useRootStyles = () => {
  const theme = useTheme();
  const bgcolor = theme.palette.primary.light; // main;
  const color = theme.palette.background.paper;
  const props: BoxProps = {
    alignItems: 'center',
    bgcolor: bgcolor,
    color: color,
    display: 'grid',
    pl: 1,
    pr: 1,
    boxShadow: 4,
    width: 1,
  };
  return props;
}

export default function PlaylistItemCurrent(props: any) {
  const root = useRootStyles();
  const {style, text} = useInnerStyles();

  // TODO: what a mess
  return (
    <Box
      {...root}
      style={props.style}
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