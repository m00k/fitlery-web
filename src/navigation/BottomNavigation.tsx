import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Box from '@material-ui/core/Box';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { navigationActions } from './navigation-actions';

const FtBottomNavigation = () => {
  // TODO: this seems overly complicated?
  const history = useHistory();
  const [value, setValue] = useState(history.location.pathname);
  useEffect(() => setValue(history.location.pathname), [history.location.pathname]);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    history.push(newValue);
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
