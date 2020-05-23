import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import React from 'react';
import { ExerciseData } from './data';


const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[2],
    borderRadius: 1,
    color: theme.palette.primary.main,
    display: 'grid',
    gridTemplateColumns: `${theme.spacing(4)}px auto`,
    height: theme.variables.playlist.item.height,
    marginBottom: theme.spacing(.3),
  },
  inner: {
    fontSize: theme.typography.h4.fontSize,
    padding: theme.spacing(1),
  },
  drag: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    height: '100%',
    padding: theme.spacing(1),
    width: '100%',
    '&:hover': {
      cursor: 'grab',
    }
  },
}));

export interface ExerciseProps {
  exercise: ExerciseData;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void | undefined;
}

export default function Exercise(props: ExerciseProps) {
  const { exercise, onClick } = props;
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box
      className={classes.root}
      onClick={onClick}
    >
      <DragHandleIcon
        className={classes.drag}
      />
      <span
        className={classes.inner}
      >
        {exercise.name}
      </span>
    </Box>
  );
}