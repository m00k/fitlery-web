import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Timer from '@material-ui/icons/Timer';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppBar color="primary" position="static">
        <Toolbar className="Toolbar">
          <Timer className="Icon" fontSize="large" />
          <Typography variant="h3" color="inherit">
            fitlery
           </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
