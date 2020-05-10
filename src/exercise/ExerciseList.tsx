import { Box } from '@material-ui/core';
import React from 'react';
import exercises, { ExerciseData } from './data';
import Exercise from './Exercise';

export default function ExerciseList(props: any) {
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