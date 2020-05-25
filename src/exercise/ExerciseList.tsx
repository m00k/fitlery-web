import { Box, Fab, makeStyles, useTheme } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React, { useState } from 'react';
import EditText from '../shared/EditText';
import { ExerciseData, exercises as sampleData } from './data';
import Exercise from './Exercise';

const useStyles = makeStyles(() => {
  const theme = useTheme();
  return {
    fab: {
      float: 'right',
      marginBottom: theme.spacing(.5),
      marginTop: theme.spacing(.5),
    },
  };
});

export interface ExerciseListProps {
  exercises: ExerciseData[];
  onDelete?: (exercises: ExerciseData[]) => void;
  onAdd?: (exercise: ExerciseData) => void;
}

const ExerciseList: React.FC<ExerciseListProps> = (props) => {
  const { exercises=sampleData, onAdd, onDelete } = props; // TODO: remove sampleData
  const handleDelete = (index: number) => onDelete && onDelete([...exercises.slice(0, index), ...exercises.slice(index + 1)]);
  const [ isAdd, setIsAdd ] = useState(false);
  const theme = useTheme();
  const classes = useStyles();
  const handleAdd = ({value: name}: { value: string }) => {
    setIsAdd(false);
    onAdd && onAdd({ name });
  };

  return (
    <Box>
      {exercises.map((exercise: ExerciseData, i: number) =>
        <Exercise
          key={exercise.name}
          exercise={exercise}
          onDelete={handleDelete.bind(globalThis, i)}
        />
      )}
      {isAdd && <EditText
        defaultValue='New Exercise'
        fontSize={theme.typography.h4.fontSize}
        pl={5}
        onOk={handleAdd}
      />}
      <Fab
        color='secondary'
        disabled={isAdd}
        onClick={() => setIsAdd(true)}
        className={classes.fab}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
}

export default ExerciseList;