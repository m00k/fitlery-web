import { Box, Typography } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import React, { Attributes } from 'react';
import { PlaylistItemData } from './store';


export interface PlaylistItemProps extends Attributes {
  item: PlaylistItemData
  isBreak: boolean;
  isCurrent: boolean;
  isNext: boolean;
}

export default function PlaylistItem(props: PlaylistItemProps) {
  const { isBreak, isCurrent, isNext, item } = props;
  const theme = useTheme();
  const text = isBreak ? 'get ready' : item.name;

  return (
    <Box
      alignItems="center"
      bgcolor={isCurrent ? theme.palette.primary.main : theme.palette.background.paper}
      boxShadow={2}
      borderRadius={1}
      borderLeft={theme.spacing(3)}
      pr={3}
      borderColor={theme.palette.primary.main}
      color={isCurrent ? theme.palette.background.paper : theme.palette.primary.main}
      display="flex"
      height={isCurrent ? 80 : 60} // TODO: fix this mess
      mb={1/3}
      p={1}
      flex="1"
    >
      <Typography
        style={{flex: 1, textAlign: isCurrent ? "center" : "initial", fontWeight: isCurrent || isNext ? "bold" : "initial"}}
        variant="h4"
      >
        {text}
      </Typography>
    </Box>
  );
}