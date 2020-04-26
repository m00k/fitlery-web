import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import { PlaylistActionType, usePlaylistStore } from '../playlist/PlaylistContext';
import Grid from '../shared/Grid';
import { workouts } from '../workout/data';
import Controls from './Controls';
import useCountdown from './useCountdown';
import WorkoutBanner from './WorkoutBanner';


const Player = () => {
  const theme = useTheme();
  const [playlistState, dispatch] = usePlaylistStore();
  const { playerState } = playlistState;

  const onZero = () => {
    console.log('####################', 'on zero');
    dispatch.pause();
  }
  const msTotal = 3000;
  const [msLeft, , start, pause, reset] = useCountdown({onZero, ms: msTotal});
  
  const handleControlsAction = (action: PlaylistActionType) => {
    if (action === 'play') { 
      start();
      dispatch.play();
    } else if (action === 'pause' ) {
      pause();
      dispatch.pause();
    } else if (action === 'prev' ) {
      reset();
      dispatch.prev();
    }
  }

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
        playerState={playerState}
        msLeft={msLeft} // TODO: context or store
        msTotal={msTotal}
      >
      </WorkoutBanner>
      <Controls
        state={playerState}
        onClick={handleControlsAction}
      />
    </Grid>
  );
}

export default Player;