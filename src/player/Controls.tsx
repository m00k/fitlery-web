import { Box, IconButton } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import React from 'react';
import { PlayerActionType, PlayState } from './store/';

interface ControlButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const withIconButton = (icon: JSX.Element) => {
  return (props: ControlButtonProps) => {
    const { onClick } = props;
    return (
      <IconButton
        color="primary"
        onClick={onClick}
      >
        {icon}
      </IconButton>
    );
  };
};

const Play = withIconButton(<PlayArrowIcon style={{ fontSize: '4rem' }} />);
const Pause = withIconButton(<PauseIcon style={{ fontSize: '4rem' }} />);
const Prev = withIconButton(<SkipPreviousIcon style={{ fontSize: '2.5rem' }} />);
const Next = withIconButton(<SkipNextIcon style={{ fontSize: '2.5rem' }} />);

const useBoxStyles = () => {
  const theme = useTheme();
  return {
      alignItems: 'center',
      display: 'grid',
      justifyContent: 'center',
      gridTemplateColumns: '1fr 2fr 1fr',
      minHeight: 80,
      bgcolor: theme.palette.background.paper,
  };
}

interface ControlsProps {
  style: React.CSSProperties; // TODO: there has to be a better way
  playState: PlayState;
  onClick: (p: PlayerActionType) => void
}

const Controls = (props: ControlsProps) => {
  const { playState, onClick, style } = props;

  return (
    <Box
      {...useBoxStyles()}
      style={style}
    >
      <Prev onClick={() => onClick('prev')}/>
      {
        playState !== 'playing'
          ? <Play onClick={() => onClick('play')} />
          : <Pause onClick={() => onClick('pause')} />
      }
      <Next onClick={() => onClick('next')} />
    </Box>
  );
}

export default Controls;