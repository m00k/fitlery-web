import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Box from '@material-ui/core/Box';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import ListIcon from '@material-ui/icons/List';
import RestoreIcon from '@material-ui/icons/Restore';
import React from 'react';
import { useHistory } from "react-router-dom";


const navActions = [
  { 
    label: "Recents",
    value: "recents",
    icon: <RestoreIcon />,
  },
  { 
    label: "Favorites",
    value: "favorites",
    icon: <FavoriteIcon />,
  },
  { 
    label: "Workouts",
    value: "workouts",
    icon: <FitnessCenterIcon />,
  },
  { 
    label: "Exercises",
    value: "exercises",
    icon: <ListIcon />,
  },
];

const FtBottomNavigation = () => {
  const [value, setValue] = React.useState('recents');
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
    history.push(`/${newValue}`); // TODO: this doesn't belong here, also this requires BottomNav to be inside <BrowserRouter/>
  };

  return (
    <Box
      position='fixed'
      bottom={0}
      left={0}
      right={0}
    >
      <BottomNavigation
        value={value}
        onChange={handleChange}
      >
        {navActions.map(action => 
          <BottomNavigationAction
            key={action.value}
            label={action.label}
            value={action.value}
            icon={action.icon}
          />
        )}
      </BottomNavigation>
    </Box>
  );
}

export default FtBottomNavigation;
