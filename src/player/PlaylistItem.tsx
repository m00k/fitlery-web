import { Box } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import { PlaylistItemData } from './store';

export function isBreak(item: PlaylistItemData) {
  return item && !!item.tags && item.tags.includes('break');
}

export interface PlaylistItemProps{
  item: PlaylistItemData
  isCurrent: boolean;
}

export default function PlaylistItem(props: PlaylistItemProps) {
  const { isCurrent, item } = props;
  const theme = useTheme();
  const bgcolor = theme.palette.background.paper;
  const color = theme.palette.primary.main;
  const height = 60; // TODO: fix this mess

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
      p={1}
      width={1}
    >
      <Box
        component="span"
        fontWeight={isCurrent ? 'bold' : 'initial'}
        fontSize='1.5rem'
      >
        {item.name.toUpperCase()}
      </Box>
    </Box>
  );
}