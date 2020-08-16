import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
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
      height='100vh'
      bgcolor={theme.variables.root.backgroundColor}
      style={{
        touchAction: 'manipulation', // https://developers.google.com/web/updates/2013/12/300ms-tap-delay-gone-away
      }}
    >
      <TopNavigation />
      <Main>
        <Switch>
          <Route path='/workouts/:id' component={WorkoutEdit} />
          <Route exact path='/workouts' component={WorkoutList} />
          <Route exact path='/player' component={Player} />
          <Route path='/exercises' component={ExerciseList} />
          <Route path='/recents' component={UnderConstruction} />
          <Route path='/favorites' component={UnderConstruction} />
          <Route path='*'>
            <Redirect to='/workouts' />
          </Route>
        </Switch>
      </Main>
      <BottomNavigation />
    </Box>
  );
}

export default App;
