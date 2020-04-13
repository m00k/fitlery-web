import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Box from '@material-ui/core/Box';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { navigationActions } from './navigation-actions'

const FtBottomNavigation = () => {
  const [value, setValue] = React.useState('workouts');
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
        {navigationActions.map(action => 
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
