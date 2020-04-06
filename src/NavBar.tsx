import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Timer from '@material-ui/icons/Timer';
import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
  <AppBar position="sticky">
    <Toolbar>
      <Timer className="Timer" fontSize="large" />
      <Typography variant="h3" color="inherit">
        fitlery
      </Typography>
    </Toolbar>
  </AppBar>
  );
}

export default NavBar;
