import React from 'react';
import useTheme from '@material-ui/core/styles/useTheme';
import Grid from '../shared/Grid';
import { workouts } from '../workout/data';
import Banner from './Banner';
import Controls from './Controls';
import Playlist from './Playlist';
import usePlayerStore from './usePlayerStore';


const Player = () => {
  const theme = useTheme();
  const [ state, dispatch ] = usePlayerStore();
  const { countdownState, playlistState } = state;
  const { currentItemIndex, items, playState } = playlistState;
  const currentItem = items[currentItemIndex];
  const { msLeft, msTotal } = countdownState;

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
          currentItem={currentItem}
        >
        </Banner>
        <Controls
          playState={playState}
          onClick={dispatch}
        />
      </Grid>
      <Playlist></Playlist>
    </>
  );
}

export default Player;