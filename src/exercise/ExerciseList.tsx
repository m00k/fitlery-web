import { Box } from '@material-ui/core';
import React from 'react';
import { exercises as sampleData, ExerciseData } from './data';
import Exercise from './Exercise';

export default function ExerciseList(props: any) {
  const { exercises=sampleData } = props;

  return (
    <Box>
      {exercises.map((exercise: ExerciseData, i: number) =>
        <Exercise
          key={exercise.name}
          exercise={exercise}
          onClick={() => console.log('#####################', 'TODO', exercise.name)}
        />
      )}
    </Box>
  );
}