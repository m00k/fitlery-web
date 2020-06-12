import { Box, Fab, makeStyles, TextField, useTheme } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React, { useState } from 'react';
import EditText, { EditResult } from '../shared/EditText';
import EditToggle from '../shared/EditToggle';
import { ExerciseData, exercises as sampleData } from './data';
import Exercise from './Exercise';

const useStyles = makeStyles(theme => ({
  textfield: {
    alignItems: 'center',
    display: 'grid',
    height: theme.variables.playlist.item.height,
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(1),
  },
  fab: {
    float: 'right',
    marginBottom: theme.spacing(.5),
    marginTop: theme.spacing(.5),
  },
}));

export interface ExerciseListProps {
  exercises: ExerciseData[];
  onDelete?: (exercises: ExerciseData[]) => void;
  onAdd?: (exercise: ExerciseData) => void;
  onEdit?: (exercise: ExerciseData, index: number) => void;
}

const ExerciseList: React.FC<ExerciseListProps> = (props) => {
  const { exercises = sampleData, onAdd, onDelete, onEdit } = props; // TODO: remove sampleData
  const [ isAdd, setIsAdd ] = useState(false);
  const theme = useTheme();
  const classes = useStyles(theme);
  const handleDelete = (index: number) => onDelete && onDelete([...exercises.slice(0, index), ...exercises.slice(index + 1)]);
  const handleEdit = (index: number) => (update: EditResult) => onEdit && onEdit({ name: update.value }, index); // TODO: handle error
  const handleAdd = ({value: name, error }: EditResult) => { // TODO: type
    setIsAdd(false);
    onAdd && onAdd({ name });
  };

  return (
    <Box>
      {exercises.map((exercise: ExerciseData, i: number) =>
        <EditToggle
          fontSize={theme.typography.h4.fontSize}
          key={exercise.name}
          onOk={handleEdit(i)}
          inputEl={
            <TextField
              defaultValue={exercise.name}
              inputProps={{required: true}}
              className={classes.textfield}
            />
          }
          displayEl={
            <Exercise
              exercise={exercise}
              onDelete={handleDelete.bind(globalThis, i)}
            />
          }
        />
      )}
      {isAdd && <EditText
        fontSize={theme.typography.h4.fontSize}
        pl={5}
        onOk={handleAdd}
        onCancel={() => setIsAdd(false)}
        inputEl={
         <TextField
          defaultValue='New Exercise'
          inputProps={{required: true}}
          className={classes.textfield}
         />}
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