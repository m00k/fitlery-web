import { Box, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import exercises from './exercise/data';
import ExerciseList from './exercise/ExerciseList';
import NavBar from './NavBar';
import FtBottomNavigation from './navigation/BottomNavigation';
import theme from './theme/theme';
import WorkoutList from './workout/WorkoutList';

const useStyles = makeStyles(() => ({
  paper: {
    minHeight: '100vh',
    backgroundColor: theme.palette.primary.dark,
  }
}));

function Main({ children }: any) { // TODO: extract
  return (
    <Box
      bottom={56} // TODO
      left={0}
      right={0}
      overflow='auto'
      position='fixed'
      top={56} // TODO
      pl={'calc(-480px + 50vw)'} // TODO: theme.breakpoints.values.md / 2; -> grid
      pr={'calc(-480px + 50vw)'} // TODO: theme.breakpoints.values.md / 2;
    >
      {children}
    </Box>
  );
}

function App() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <NavBar></NavBar>
      <BrowserRouter>
        <Switch>
          <Route path="/workouts">
            <Main>
              <WorkoutList />
            </Main>
          </Route>
          <Route path="/exercises">
            <Main>
              <ExerciseList {...{ exercises }}></ExerciseList>
            </Main>
          </Route>
        </Switch>
        <FtBottomNavigation></FtBottomNavigation>
      </BrowserRouter>
    </Paper>
  );
}

export default App;
