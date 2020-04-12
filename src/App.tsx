import { Box, Paper } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import exercises from './exercise/data';
import ExerciseList from './exercise/ExerciseList';
import NavBar from './NavBar';
import BottomNavigation from './navigation/BottomNavigation';
import theme from './theme/theme';
import WorkoutList from './workout/WorkoutList';

const useStyles = makeStyles(() => ({
  paper: {
    minHeight: '100vh',
    backgroundColor: theme.palette.primary.dark,
  }
}));

function Main({ children }: any) { // TODO: extract
  const t = useTheme();
  console.log('###############', t.props?.MuiToolbar);
  const plr=`calc(50vw - ${theme.breakpoints.values.md/2}px)`;

  return (
    <Box
      bottom={48} // TODO
      left={0}
      right={0}
      overflow='auto'
      position='fixed'
      top={48} // TODO
      pl={plr}
      pr={plr}
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
        <BottomNavigation></BottomNavigation>
      </BrowserRouter>
    </Paper>
  );
}

export default App;
