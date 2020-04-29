import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import Playlist from '../playlist/Playlist';
import Grid from '../shared/Grid';
import { workouts } from '../workout/data';
import Banner from './Banner';
import Controls from './Controls';
import { PlayerActionType } from './state';
import { usePlayerStore } from './PlayerStoreProvider';


const Player = () => {
  const theme = useTheme();
  const [playerState, dispatch] = usePlayerStore();
  const { countdownState, playState } = playerState;
  const { msLeft, msTotal } = countdownState;

  // TODO: move to controls?
  const handleControlsAction = (action: PlayerActionType) => {
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
    <>
      <Grid
        alignItems="center"
        display="grid"
        justifyItems="center"
        width={1}
        bgcolor={theme.palette.background.paper} // TODO
        boxShadow={8}
      >
        <Banner
          workout={workouts[0]} // TODO
          playState={playState}
          msLeft={msLeft} // TODO: context or store
          msTotal={msTotal}
        >
        </Banner>
        <Controls
          state={playState}
          onClick={handleControlsAction}
        />
      </Grid>
      <Playlist></Playlist>
    </>
  );
}

export default Player;