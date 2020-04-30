import useTheme from '@material-ui/core/styles/useTheme';
import React, { useEffect } from 'react';
import { useCountdownStore } from '../countdown/CountdownStoreProvider';
import Grid from '../shared/Grid';
import { workouts } from '../workout/data';
import Banner from './Banner';
import Controls from './Controls';
import Playlist from './Playlist';
import { PlaylistActionType, usePlaylistStore } from './PlaylistStoreProvider';


const Player = () => {
  const theme = useTheme();
  const [playlistState, playlistDispatch] = usePlaylistStore();
  const { playState } = playlistState;
  const [countdownState, countdownDispatch] = useCountdownStore();
  const { msLeft, msTotal } = countdownState;

  // TODO (cb): hook, combined reducer, rtk, ... ?
  useEffect(() => {
    if(msLeft === 0) {
      playlistDispatch.next();
      countdownDispatch.reset();
    }
  }, [playlistDispatch, msLeft, countdownDispatch]);
  const handleControlsAction = (action: PlaylistActionType) => {
    switch (action) {
      case 'play':
        playlistDispatch.play();
        countdownDispatch.start();
        break;
      case 'pause':
        playlistDispatch.pause();
        countdownDispatch.pause();
        break;
      case 'prev':
        playlistDispatch.prev();
        countdownDispatch.reset();
        break;
      case 'next':
        playlistDispatch.next();
        countdownDispatch.reset();
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
          playState={playState}
          onClick={handleControlsAction}
        />
      </Grid>
      <Playlist></Playlist>
    </>
  );
}

export default Player;