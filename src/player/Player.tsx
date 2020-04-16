import { IconButton } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import React from 'react';
import Grid from '../shared/Grid';
import { workouts } from '../workout/data';
import WorkoutBanner from './WorkoutBanner';


const Controls = () => {
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
      <IconButton
        color="primary"
      >
        <SkipPreviousIcon
          style={{ fontSize: '2.5rem' }}
        />
      </IconButton>
      <IconButton
        color="primary"
      >
        <PlayArrowIcon
          style={{ fontSize: '4rem' }}
        />
      </IconButton>
      <IconButton
        color="primary"
      >
        <SkipNextIcon
          style={{ fontSize: '2.5rem' }}
        />
      </IconButton>
    </Grid>
  );
}


const Player = () => {
  const theme = useTheme();

  return (
    <Grid
      alignItems="center"
      display="grid"
      justifyItems="center"
      width={1}
      bgcolor={theme.palette.background.paper} // TODO
      boxShadow={8}
    >
      <WorkoutBanner
        workout={workouts[0]} // TODO
      >
      </WorkoutBanner>
      <Controls />
    </Grid>
  );
}

export default Player;