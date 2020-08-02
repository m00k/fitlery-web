import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import ExerciseList from './exercise/ExerciseList';
import Main from './Main';
import BottomNavigation from './navigation/BottomNavigation';
import TopNavigation from './navigation/TopNavigation';
import Player from './player/Player';
import UnderConstruction from './shared/UnderConstruction';
import WorkoutEdit from './workout/edit/WorkoutEdit';
import WorkoutList from './workout/list/WorkoutList';

const App = () => { 
  const theme = useTheme();

  // TODO: rtfm -> router
  return (
    <Box
      height={'100vh'}
      bgcolor={theme.variables.root.backgroundColor}
      style={{
        touchAction: 'manipulation', // https://developers.google.com/web/updates/2013/12/300ms-tap-delay-gone-away
      }}
    >
      <TopNavigation />
      <Main>
        <Route path={`${process.env.PUBLIC_URL}/workouts/:short/:id`} component={WorkoutEdit} />
        <Route exact path={`${process.env.PUBLIC_URL}/workouts`} component={WorkoutList} />
        <Route exact path={`${process.env.PUBLIC_URL}/player`} component={Player} />
        <Route path={`${process.env.PUBLIC_URL}/exercises`} component={ExerciseList} />
        <Route path={`${process.env.PUBLIC_URL}/recents`} component={UnderConstruction} />
        <Route path={`${process.env.PUBLIC_URL}/favorites`} component={UnderConstruction} />
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={WorkoutList} />
        <Route >
          <Redirect to={`${process.env.PUBLIC_URL}/`} />
        </Route>
      </Main>
      <BottomNavigation />
    </Box>
  );
}

export default App;
