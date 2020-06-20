import { Box, Chip, makeStyles } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import { PlaylistItemData } from './store';

export function isBreakItem(item: PlaylistItemData) {
  return item && !!item.tags && item.tags.isBreak;
}

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.paper,
    borderColor: theme.palette.primary.main,
    borderLeft: theme.spacing(3),
    display: 'grid',
    gridTemplateColumns: '1fr min-content',
    height: theme.variables.playlist.item.height,
    padding: theme.spacing(1),
    pr: theme.spacing(3),
    width: '100%',
  },
  inner: {
    fontSize: '1.5rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }
}));

export interface PlaylistItemProps{
  item: PlaylistItemData
  isCurrent: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void | undefined;
}

export default function PlaylistItem(props: PlaylistItemProps) {
  const { isCurrent, item, onClick } = props;
  const theme = useTheme();
  const { root, inner } = useStyles(theme);

  return (
    <Box
      className={root}
      onClick={onClick}
    >
      <Box
        component="span"
        className={inner}
        fontWeight={isCurrent ? 'bold' : 'initial'}
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