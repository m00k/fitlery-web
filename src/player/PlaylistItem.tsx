import { Box, Typography } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import { PlaylistItemData } from './store';


export interface PlaylistItemProps {
  item: PlaylistItemData
  isCurrent: boolean;
  isNext: boolean;
}

export default function PlaylistItem(props: PlaylistItemProps) {
  const { isCurrent, isNext, item } = props;
  const theme = useTheme();

  return (
    <Box
      alignItems="center"
      bgcolor={theme.palette.background.paper}
      boxShadow={2}
      borderRadius={1}
      borderLeft={theme.spacing(3)}
      pr={3}
      borderColor={theme.palette.primary.main}
      color={theme.palette.primary.main}
      display="flex"
      height={60}
      mb={1/3}
      p={1}
      flex="1"
    >
      <Typography
        style={{flex: 1, textAlign: isCurrent ? "center" : "initial", fontWeight: isCurrent || isNext ? "bold" : "initial"}}
        variant="h4"
      >
        {item.name}
      </Typography>
    </Box>
  );
}