import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import ListIcon from '@material-ui/icons/List';
import RestoreIcon from '@material-ui/icons/Restore';

export const navigationActions = [
  { 
    label: "Recents",
    value: "/recents",
    icon: <RestoreIcon />,
  },
  { 
    label: "Favorites",
    value: "/favorites",
    icon: <FavoriteIcon />,
  },
  { 
    label: "Workouts",
    value: "/workouts",
    icon: <FitnessCenterIcon />,
  },
  { 
    label: "Exercises",
    value: "/exercises",
    icon: <ListIcon />,
  },
];