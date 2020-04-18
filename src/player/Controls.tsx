import { IconButton } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import React from 'react';
import Grid from '../shared/Grid';
import { PlayerState } from './Player';


const Play = (props: any) =>
  <IconButton
    color="primary"
    onClick={props.onClick}
  >  
    <PlayArrowIcon style={{ fontSize: '4rem' }}/>
  </IconButton>
;

const Pause = (props: any) =>
  <IconButton
    color="primary"
    onClick={props.onClick}
  >
    <PauseIcon style={{ fontSize: '4rem' }}/>
  </IconButton>
;

const Prev = () =>
  <IconButton color="primary">
    <SkipPreviousIcon style={{ fontSize: '2.5rem' }}/>
  </IconButton>
;

const Next = () =>
  <IconButton color="primary">
    <SkipNextIcon style={{ fontSize: '2.5rem' }}/>
  </IconButton>
;

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
          ? <Play onClick={() => onClick('playing')}/>
          : <Pause onClick={() => onClick('paused')}/>
      }
      <Next />
    </Grid>
  );
}

export default Controls;