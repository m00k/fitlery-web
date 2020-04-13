import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import { Route } from 'react-router-dom';
import exercises from './exercise/data';
import ExerciseList from './exercise/ExerciseList';
import Main from './Main';
import BottomNavigation from './navigation/BottomNavigation';
import TopNavigation from './navigation/TopNavigation';
import WorkoutList from './workout/WorkoutList';

const App = () => {
  const theme = useTheme();

  return (
    <Box
      height={'100vh'}
      bgcolor={theme.palette.primary.dark}
    >
      <TopNavigation></TopNavigation>
      <Main>
        <Route path="/workouts" component={WorkoutList} />
        <Route path="/exercises" render={() => <ExerciseList {...{ exercises }}></ExerciseList>} />
      </Main>
      <BottomNavigation />
    </Box>
  );
}

export default App;
