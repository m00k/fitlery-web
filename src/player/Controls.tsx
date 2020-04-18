import { IconButton } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import React from 'react';
import Grid from '../shared/Grid';
import { PlayerState } from './Player';


interface ControlButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ControlButtonFactory = (icon: JSX.Element) => {
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

const Play = ControlButtonFactory(<PlayArrowIcon style={{ fontSize: '4rem' }} />);
const Pause = ControlButtonFactory(<PauseIcon style={{ fontSize: '4rem' }} />);
const Prev = ControlButtonFactory(<SkipPreviousIcon style={{ fontSize: '2.5rem' }} />);
const Next = ControlButtonFactory(<SkipNextIcon style={{ fontSize: '2.5rem' }} />);

interface ControlsProps {
  state: PlayerState;
  onClick: (p: PlayerState) => void
}

const Controls = (props: ControlsProps) => {
  const { state, onClick } = props;
  const theme = useTheme();

  return (
    <Grid
      alignItems="center"
      display="grid"
      justifyContent="center"
      gridTemplateColumns="1fr 2fr 1fr"
      minHeight={80}
      width={200}
      bgcolor={theme.palette.background.paper}
    >
      <Prev />
      {
        state !== 'playing'
          ? <Play onClick={() => onClick('playing')} />
          : <Pause onClick={() => onClick('paused')} />
      }
      <Next />
    </Grid>
  );
}

export default Controls;