import { Box } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import ListIcon from '@material-ui/icons/List';
import RestoreIcon from '@material-ui/icons/Restore';
import React from 'react';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function FtBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
    history.push(`/${newValue}`);
  };

  return (
    <Box position='fixed' bottom={0} left={0} right={0}>
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Workouts" value="workouts" icon={<FitnessCenterIcon />} />
        <BottomNavigationAction label="Exercises" value="exercises" icon={<ListIcon />} />
      </BottomNavigation>
    </Box>
  );
}
