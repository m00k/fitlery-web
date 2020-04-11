import Box from '@material-ui/core/Box';
import React from 'react';
import { ExerciseData } from './data';
import Exercise from './Exercise';

export default function ExerciseList(props: {exercises: ExerciseData[]}) {
  const { exercises } = props;
  return (
    <Box
      p={1/3}
    >
      {exercises.map(exercise =>
        <Exercise key={exercise.name} {...exercise}></Exercise>
      )}
    </Box>
  );
}