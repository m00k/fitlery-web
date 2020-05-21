import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import { Route } from 'react-router-dom';
import ExerciseList from './exercise/ExerciseList';
import Main from './Main';
import BottomNavigation from './navigation/BottomNavigation';
import TopNavigation from './navigation/TopNavigation';
import Player from './player/Player';
import WorkoutDetail from './workout/detail/WorkoutDetail';
import WorkoutList from './workout/list/WorkoutList';
import UnderConstruction from './shared/UnderConstruction';

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
        <Route path="/workouts/:title" component={WorkoutDetail} />
        <Route exact path="/workouts" component={WorkoutList} />
        <Route exact path="/player" component={Player} />
        <Route path="/exercises" component={ExerciseList} />
        <Route path="/recents" component={UnderConstruction} />
        <Route path="/favorites" component={UnderConstruction} />
        <Route exact path ="/" component={WorkoutList} />
      </Main>
      <BottomNavigation />
    </Box>
  );
}

export default App;
