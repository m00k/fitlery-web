import { Box, BoxProps, Chip } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import { PlaylistItemData } from './store';

export function isBreakItem(item: PlaylistItemData) {
  return item && !!item.tags && item.tags.isBreak;
}

const useStyles = (isCurrent: boolean) => {
  const theme = useTheme();
  const bgcolor = theme.palette.background.paper;
  const color = theme.palette.primary.main;
  const height = theme.variables.playlist.item.height;
  const root: BoxProps = {
    alignItems: 'center',
    color,
    bgcolor,
    borderColor: theme.palette.primary.main,
    borderLeft: theme.spacing(3),
    display: 'grid',
    gridTemplateColumns: '1fr min-content',
    height,
    p: 1,
    pr: 3,
    width: 1,
  };
  const inner: BoxProps = {
    fontSize: '1.5rem',
    fontWeight: isCurrent ? 'bold' : 'initial',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  };

  return { root, inner };
}

export interface PlaylistItemProps{
  item: PlaylistItemData
  isCurrent: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void | undefined;
}

export default function PlaylistItem(props: PlaylistItemProps) {
  const { isCurrent, item, onClick } = props;
  const { root, inner } = useStyles(isCurrent);

  return (
    <Box
      {...root}
      onClick={onClick}
    >
      <Box
        component="span"
        {...inner}
      >
        {item.name?.toUpperCase()}
      </Box>
      <Chip
        variant={isCurrent ? 'default' : 'outlined'}
        color='primary'
        label={item.tags?.breakWork}
      />
    </Box>
  );
}