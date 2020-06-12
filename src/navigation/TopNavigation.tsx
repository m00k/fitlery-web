import { makeStyles, useTheme } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Timer from '@material-ui/icons/Timer';
import React from 'react';

const useStyles = makeStyles(theme => ({
  toolbar: {
    color: theme.palette.secondary.light,
  }
}));

function TopNavigation() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <AppBar>
      <Toolbar
        className={classes.toolbar}
      >
        <Button
          color='inherit'
          variant='text'
          startIcon={<Timer />}
        >
          <Typography
            variant='subtitle1'
          >
            fitlery
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default TopNavigation;
