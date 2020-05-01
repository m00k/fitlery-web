import { Box, Typography } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import { PlaylistItemData } from './store';


export interface PlaylistItemProps {
  item: PlaylistItemData
  current: boolean;
}

export default function PlaylistItem(props: PlaylistItemProps) {
  const { current, item } = props;
  const theme = useTheme();
  const variant = current ? 'h4' : 'h5';

  return (
    <Box
      alignItems="center"
      bgcolor={theme.palette.background.paper}
      boxShadow={2}
      borderRadius={1}
      borderLeft={20}
      borderColor={theme.palette.primary.main}
      color={theme.palette.primary.main}
      display="flex"
      height={60}
      mb={1/3}
      p={1}
      flex="1"
    >
      <Typography variant={variant}>
        {item.name}
      </Typography>
    </Box>
  );
}