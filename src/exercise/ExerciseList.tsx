import { Box, Fab, makeStyles, TextField, useTheme } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import EditText, { EditResult } from '../shared/EditText';
import EditToggle from '../shared/EditToggle';
import uid from '../util/uid';
import { ExerciseData } from './data';
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
  onSort?: (exercises: ExerciseData[]) => void;
}

const ExerciseList: React.FC<ExerciseListProps> = (props) => {
  const { exercises, onAdd, onDelete, onEdit, onSort } = props;
  const [isAdd, setIsAdd] = useState(false);
  const theme = useTheme();
  const classes = useStyles(theme);
  const handleDelete = (ev: React.MouseEvent, index: number) => {
    ev.stopPropagation();
    onDelete && onDelete([...exercises.slice(0, index), ...exercises.slice(index + 1)]);
  };
  const handleEdit = (index: number) => (update: EditResult) => onEdit && onEdit({ ...exercises[index], name: update.value }, index); // TODO: handle error
  const handleAdd = ({ value: name, error }: EditResult) => { // TODO: type
    setIsAdd(false);
    onAdd && onAdd({ id: uid(), name });
  };
  const handleSort = (exercisesSorted: ExerciseData[]) => onSort && onSort(exercisesSorted.map(e => ({id: e.id, name: e.name})));

  return (
    <Box>
      <ReactSortable
        list={exercises.map(e => ({id: e.id, name: e.name}))}
        setList={handleSort}
      >
        {exercises.map((exercise: ExerciseData, i: number) => 
          <div
            key={exercise.id}
          >
            <EditToggle
              fontSize={theme.typography.h4.fontSize}
              onOk={handleEdit(i)}
              inputEl={
                <TextField
                  defaultValue={exercise.name}
                  inputProps={{ required: true }}
                  className={classes.textfield}
                />
              }
              displayEl={
                <Exercise
                  exercise={exercise}
                  onDelete={ev => handleDelete(ev, i)}
                />
              }
            />
          </div>
        )}
      </ReactSortable>
      {isAdd && <EditText
        fontSize={theme.typography.h4.fontSize}
        onOk={handleAdd}
        onCancel={() => setIsAdd(false)}
        inputEl={
          <TextField
            defaultValue='New Exercise'
            inputProps={{ required: true }}
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