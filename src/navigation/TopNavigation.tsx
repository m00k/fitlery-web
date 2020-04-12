import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Timer from '@material-ui/icons/Timer';
import React from 'react';

function TopNavigation() {
  return (
    <AppBar>
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

export default TopNavigation;
