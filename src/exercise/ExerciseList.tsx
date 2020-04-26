import { Box } from '@material-ui/core';
import React from 'react';
import { usePlaylistStore } from '../playlist/PlaylistProvider';
import Exercise from './Exercise';

export default function ExerciseList(props: any) {
  const [playlistState, ] = usePlaylistStore();
  const { exercises } = playlistState;
  return (
    <Box {...props}>
      {exercises.map(exercise =>
        <Exercise key={exercise.name} {...exercise}></Exercise>
      )}
    </Box>
  );
}