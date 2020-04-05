import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import './App.css';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Timer from '@material-ui/icons/Timer';

function App() {
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <AppBar color="primary" position="static">
          <Toolbar className="Toolbar">
            <Timer className="Icon" fontSize="large"/>
            <Typography
              variant="h3"
              color="inherit"
            >
              fitlery
           </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}

export default App;
