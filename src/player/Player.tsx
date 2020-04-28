import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import { PlaylistActionType, usePlaylistStore } from '../playlist/PlaylistProvider';
import Grid from '../shared/Grid';
import { workouts } from '../workout/data';
import Controls from './Controls';
import WorkoutBanner from './WorkoutBanner';


const Player = () => {
  const theme = useTheme();
  const [playlistState, dispatch] = usePlaylistStore();
  const { countdown, playerState } = playlistState;
  const { msLeft, msTotal } = countdown;
  
  const handleControlsAction = (action: PlaylistActionType) => {
    switch (action) {
      case 'play':
        dispatch.play();
        break;
      case 'pause':
        dispatch.pause();
        break;
      case 'prev':
        dispatch.prev();
        break;
      case 'next':
        dispatch.next();
        break;
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