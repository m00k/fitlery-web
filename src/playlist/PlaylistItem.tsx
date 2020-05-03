import { Box } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import { PlaylistItemData } from './store';

export function isBreak(item: PlaylistItemData) {
  return item && !!item.tags && item.tags.includes('break');
}

const useStyles = (isCurrent: boolean) => {
  const theme = useTheme();
  const bgcolor = theme.palette.background.paper;
  const color = theme.palette.primary.main;
  const height = theme.variables.playlist.item.height;
  const root = {
    alignItems: 'center',
    color,
    bgcolor,
    borderColor: theme.palette.primary.main,
    borderLeft: theme.spacing(3),
    display: 'grid',
    height,
    p: 1,
    pr: 3,
    width: 1,
  };
  const inner = {
    fontSize: '1.5rem',
    fontWeight: isCurrent ? 'bold' : 'initial',
  };

  return { root, inner };
}

export interface PlaylistItemProps{
  item: PlaylistItemData
  isCurrent: boolean;
}

export default function PlaylistItem(props: PlaylistItemProps) {
  const { isCurrent, item } = props;
  const {root, inner} = useStyles(isCurrent);

  return (
    <Box
      {...root}
    >
      <Box
        component="span"
        {...inner}
      >
        {item.name?.toUpperCase()}
      </Box>
    </Box>
  );
}