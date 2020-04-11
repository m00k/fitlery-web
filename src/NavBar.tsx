import { Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Timer from '@material-ui/icons/Timer';
import React from 'react';

function NavBar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Button
          color="secondary"
          variant="text"
          startIcon={<Timer />}
        >
          <Typography variant="subtitle1">
            fitlery
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
