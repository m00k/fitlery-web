import { Box, Fab, makeStyles, TextField, useTheme } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React, { useState } from 'react';
import EditText, { EditResult } from '../shared/EditText';
import EditToggle from '../shared/EditToggle';
import uid from '../util/uid';
import { ExerciseData } from './data';
import Exercise from './Exercise';
import { move } from '../util/move';

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
  const { exercises, onAdd, onDelete, onEdit } = props;
  const [isAdd, setIsAdd] = useState(false);
  const theme = useTheme();
  const classes = useStyles(theme);
  const handleDelete = (index: number) => onDelete && onDelete([...exercises.slice(0, index), ...exercises.slice(index + 1)]);
  const handleEdit = (index: number) => (update: EditResult) => onEdit && onEdit({ ...exercises[index], name: update.value }, index); // TODO: handle error
  const handleAdd = ({ value: name, error }: EditResult) => { // TODO: type
    setIsAdd(false);
    onAdd && onAdd({ id: uid(), name });
  };

  const [dragIdx, setDragIdx] = useState(-1);
  const [list, setList] = useState<ExerciseData[]>([...exercises]);  
  const handleDragStart = (ev: React.DragEvent, idx: number) => {
    setDragIdx(idx);
    ev.dataTransfer.effectAllowed = 'move';
    ev.dataTransfer.setData('item', JSON.stringify(idx));
    // this will hide the item in the list
    // while the dragged item still being visible
    //setTimeout(() => (target as HTMLElement).style.visibility = 'hidden');
  };
  const handleDragOver = (ev: React.DragEvent, dropIdx: number) => {
    ev.preventDefault();
    setList(list => move(list, dragIdx, dropIdx));
    setDragIdx(dropIdx);
  };
  const handleDragEnd = (ev: React.DragEvent) => {
    const {target} = ev;
    (target as HTMLElement).style.visibility = 'visible';
    setDragIdx(-1);
  };

  console.log('###', 'redraw');

  return (
    <Box>
      {list.map((exercise: ExerciseData, i: number) => 
        <EditToggle
          draggable={true}
          onDragStart={(ev: React.DragEvent) => handleDragStart(ev, i)}
          onDragOver={(ev: React.DragEvent) => handleDragOver(ev, i)}
          onDragEnd={handleDragEnd}
          style={i === dragIdx ? { opacity: 0.8 } : {}}
          fontSize={theme.typography.h4.fontSize}
          key={exercise.id}
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
              onDelete={handleDelete.bind(globalThis, i)}
            />
          }
        />
      )}
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