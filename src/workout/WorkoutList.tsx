import Container from '@material-ui/core/Container';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { workouts } from './data';
import Workout from './Workout';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: theme.spacing(1),
    },
  }),
);

export default function WorkoutList() {
  const classes = useStyles();

  return (
    <Container className={classes.container} disableGutters>
      {workouts.map((workout) => (
        <Workout workout={workout}></Workout>
      ))}
    </Container>
  );
}
