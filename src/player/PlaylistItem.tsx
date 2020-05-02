import { Box, Typography } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import { PlaylistItemData } from './store';


export interface PlaylistItemProps{
  item: PlaylistItemData
  isBreak: boolean;
  isCurrent: boolean;
  isNext: boolean;
}

export default function PlaylistItem(props: PlaylistItemProps) {
  const { isBreak, isCurrent, isNext, item } = props;
  const theme = useTheme();
  const text = isBreak ? 'get ready' : item.name;
  const bgcolor = isCurrent ? theme.palette.primary.main : theme.palette.background.paper;
  const color = isCurrent ? theme.palette.background.paper : theme.palette.primary.main;
  const height = isCurrent ? 120 : 60; // TODO: fix this mess

  return (
    <Box
      alignItems="center"
      bgcolor={bgcolor}
      boxShadow={2}
      borderRadius={1}
      borderLeft={theme.spacing(3)}
      pr={3}
      borderColor={theme.palette.primary.main}
      color={color}
      display="flex"
      height={height}
      p={1}
      width={1}
      flex="1"
    >
      <Typography
        style={{
          flex: 1,
          textAlign: isCurrent ? "center" : "initial",
          fontWeight: isNext ? "bold" : "initial",
          textTransform: "uppercase",
          fontSize: isCurrent ? "3rem" : "1.5rem"
        }}
        variant="h4"
      >
        {text}
      </Typography>
    </Box>
  );
}