import { Box } from '@material-ui/core';
import React from 'react';
import { usePlaylistStore } from '../playlist/PlaylistProvider';
import Exercise from './Exercise';
import { ExerciseData } from './data';

export default function ExerciseList(props: any) {
  const [playlistState, ] = usePlaylistStore();
  const { items: exercises, currentItemIndex: ci } = playlistState;
  return (
    <Box {...props}>
      {exercises.map((exercise: ExerciseData, i: number) =>
        <Exercise
          key={exercise.name}
          exercise={exercise}
          current={i === ci}
        />
      )}
    </Box>
  );
}