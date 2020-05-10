import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import { Route } from 'react-router-dom';
import ExerciseList from './exercise/ExerciseList';
import Main from './Main';
import BottomNavigation from './navigation/BottomNavigation';
import TopNavigation from './navigation/TopNavigation';
import Player from './player/Player';
import WorkoutDetail from './workout/WorkoutDetail';
import WorkoutList from './workout/WorkoutList';
import UnderConstruction from './shared/UnderConstruction';

const App = () => { 
  const theme = useTheme();

  // TODO: rtfm router
  return (
    <Box
      height={'100vh'}
      bgcolor={theme.palette.primary.dark}
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
