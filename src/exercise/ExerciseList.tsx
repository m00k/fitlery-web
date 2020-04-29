import { Box } from '@material-ui/core';
import React from 'react';
import { usePlayerStore } from '../player/PlayerStoreProvider';
import { ExerciseData } from './data';
import Exercise from './Exercise';

export default function ExerciseList(props: any) {
  const [playerState, ] = usePlayerStore(); // TODO (cb): fix
  const { playlistState } = playerState;
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