import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import ExerciseList from '../exercise/ExerciseList';
import Player from '../player/Player';

// TODO:
// player position fixed, height max-content
// exercise list height set to remaining space
const Playlist = () => {
  const theme = useTheme();
  return (
    <>
      <Player />
      <ExerciseList style={{marginTop: theme.spacing(.5)}}/>
    </>
  );
}

export default Playlist;
