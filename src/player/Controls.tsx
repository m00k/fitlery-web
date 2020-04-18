import { IconButton } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PauseIcon from '@material-ui/icons/Pause';
import React, { useState } from 'react';
import Grid from '../shared/Grid';

export type PlayerState = 'playing' | 'paused' | 'stopped';

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

const Controls = () => {
  const theme = useTheme();
  const [state, setState] = useState<PlayerState>('stopped');

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
          ? <Play onClick={() => setState('playing')}/>
          : <Pause onClick={() => setState('paused')}/>
      }
      <Next />
    </Grid>
  );
}

export default Controls;