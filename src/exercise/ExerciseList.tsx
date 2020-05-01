import { Box } from '@material-ui/core';
import React from 'react';
import { usePlaylistStore } from '../player/store/';
import { ExerciseData } from './data';
import Exercise from './Exercise';

export default function ExerciseList(props: any) {
  const [playlistState, ] = usePlaylistStore(); // TODO (cb): fix
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