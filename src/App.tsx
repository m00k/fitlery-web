import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import exercises from './exercise/data';
import ExerciseList from './exercise/ExercixeList';
import NavBar from './NavBar';
import theme from './theme/theme';

const useStyles = makeStyles(() => ({
  paper: {
    minHeight: '100vh',
    backgroundColor: theme.palette.primary.dark,
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <NavBar></NavBar>
      {/* <WorkoutList></WorkoutList> */}
      <ExerciseList {...{ exercises }}></ExerciseList>
    </Paper>
  );
}

export default App;
