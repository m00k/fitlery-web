import FavoriteIcon from '@material-ui/icons/Favorite';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import RestoreIcon from '@material-ui/icons/Restore';
import React from 'react';

export const navigationActions = [
  { 
    label: 'Workouts',
    value: `workouts`,
    icon: <FitnessCenterIcon />,
  },
  { 
    label: 'Recents',
    value: `recents`,
    icon: <RestoreIcon />,
  },
  { 
    label: 'Favorites',
    value: `favorites`,
    icon: <FavoriteIcon />,
  },
  // TODO: use or lose
  // { 
  //   label: 'Exercises',
  //   value: '/exercises',
  //   icon: <ListIcon />,
  // },
];