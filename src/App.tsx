import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import NavBar from './NavBar';
import theme from './theme/theme';
import WorkoutList2 from './workout/WorkoutList2';

const useStyles = makeStyles(() => ({
  paper: {
    height: '100vh',
    backgroundColor: theme.palette.primary.light,
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <NavBar></NavBar>
      <WorkoutList2></WorkoutList2>
    </Paper>
  );
}

export default App;
