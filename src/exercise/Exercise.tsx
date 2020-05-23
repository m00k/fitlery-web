import { IconButton, makeStyles, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
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
    gridTemplateColumns: `${theme.spacing(4)}px auto min-content`,
    height: theme.variables.playlist.item.height,
    marginBottom: theme.spacing(.3),
  },
  inner: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
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
  action: {
    height: '100%',
  }
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
      <Typography
        variant='h4'
        className={classes.inner}
      >
        {exercise.name}
      </Typography>
      <IconButton
        className={classes.action}
      >
        <DeleteOutlineIcon
          color='primary'
        />
      </IconButton>
    </Box>
  );
}