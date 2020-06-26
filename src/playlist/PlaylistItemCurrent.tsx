import { Box, BoxProps, Typography } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { isBreakItem } from './PlaylistItem';
import { NOT_FOUND, playlistAtom } from './store';


const useInnerStyles = () => {
  const playlistState = useRecoilValue(playlistAtom);
  const { currentItemIndex, items } = playlistState;
  const currentItem = currentItemIndex > -1 ? items[currentItemIndex] : items[0];
  const fontSize = isBreakItem(currentItem)
    ? '2rem'
    : '3rem';
  const text = currentItemIndex === NOT_FOUND
    ? 'get ready'
    : currentItem.name;
  const style: React.CSSProperties = {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize,
  };
  return {style, text};
}

const useRootStyles = (rootProps: BoxProps) => {
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
    ...rootProps,
  };
  return props;
}

export interface PlaylistItemCurrentProps extends BoxProps {

}

const PlaylistItemCurrent: React.FC<PlaylistItemCurrentProps> = (rootProps) => { // TODO: typescript magic: pick boxProps 
  const root = useRootStyles(rootProps);
  const {style, text} = useInnerStyles();

  return (
    <Box
      {...root}
    >
      <Typography
        style={style}
        variant='h4'
      >
        {text}
      </Typography>
    </Box>
  );
}

export default PlaylistItemCurrent;
