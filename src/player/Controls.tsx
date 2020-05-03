import { IconButton } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import React from 'react';
import Grid from '../shared/Grid';
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

const useGridStyles = () => {
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
  playState: PlayState;
  onClick: (p: PlayerActionType) => void
}

const Controls = (props: ControlsProps) => {
  const { playState, onClick } = props;

  return (
    <Grid
      {...useGridStyles()}
    >
      <Prev onClick={() => onClick('prev')}/>
      {
        playState !== 'playing'
          ? <Play onClick={() => onClick('play')} />
          : <Pause onClick={() => onClick('pause')} />
      }
      <Next onClick={() => onClick('next')} />
    </Grid>
  );
}

export default Controls;