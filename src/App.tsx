import React from 'react';
import NavBar from './NavBar';
import WorkoutList from './workout/WorkoutList';

function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <WorkoutList></WorkoutList>
    </React.Fragment>
  );
}

export default App;
