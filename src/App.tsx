import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import exercises from './exercise/data';
import ExerciseList from './exercise/ExerciseList';
import Main from './Main';
import BottomNavigation from './navigation/BottomNavigation';
import TopNavigation from './navigation/TopNavigation';
import WorkoutList from './workout/WorkoutList';

const useStyles = makeStyles((theme) => ({
  paper: {
    minHeight: '100vh',
    backgroundColor: theme.palette.primary.dark,
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <TopNavigation></TopNavigation>
      <Main>
        <BrowserRouter>
          <Switch>
            <Route path="/workouts">
              <WorkoutList />
            </Route>
            <Route path="/exercises">
              <ExerciseList {...{ exercises }}></ExerciseList>
            </Route>
          </Switch>
          <BottomNavigation></BottomNavigation>
        </BrowserRouter>
      </Main>
    </Paper>
  );
}

export default App;
