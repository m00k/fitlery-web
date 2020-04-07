import { Paper } from '@material-ui/core';
import React from 'react';
import NavBar from './NavBar';
import WorkoutList from './workout/WorkoutList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  paper: {
    height: '100vh',
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <NavBar></NavBar>
      <WorkoutList></WorkoutList>
    </Paper>
  );
}

export default App;
