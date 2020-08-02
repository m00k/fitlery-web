import FavoriteIcon from '@material-ui/icons/Favorite';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import RestoreIcon from '@material-ui/icons/Restore';
import React from 'react';

export const navigationActions = [
  { 
    label: 'Workouts',
    value: `${process.env.PUBLIC_URL}/workouts`,
    icon: <FitnessCenterIcon />,
  },
  { 
    label: 'Recents',
    value: `${process.env.PUBLIC_URL}/recents`,
    icon: <RestoreIcon />,
  },
  { 
    label: 'Favorites',
    value: `${process.env.PUBLIC_URL}/favorites`,
    icon: <FavoriteIcon />,
  },
  // TODO: use or lose
  // { 
  //   label: 'Exercises',
  //   value: '/exercises',
  //   icon: <ListIcon />,
  // },
];