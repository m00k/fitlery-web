import { Box } from '@material-ui/core';
import React from 'react';
import { exercises as sampleData, ExerciseData } from './data';
import Exercise from './Exercise';

export interface ExerciseListProps {
  exercises: ExerciseData[];
  onDelete?: (exercises: ExerciseData[]) => void;
}

const ExerciseList: React.FC<ExerciseListProps> = (props) => {
  const { exercises=sampleData, onDelete } = props; // TODO: remove sampleData
  const handleDelete = (index: number) => onDelete && onDelete([...exercises.slice(0, index), ...exercises.slice(index + 1)]);

  return (
    <Box>
      {exercises.map((exercise: ExerciseData, i: number) =>
        <Exercise
          key={exercise.name}
          exercise={exercise}
          onDelete={handleDelete.bind(globalThis, i)}
        />
      )}
    </Box>
  );
}

export default ExerciseList;