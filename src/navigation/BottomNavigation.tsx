import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Box from '@material-ui/core/Box';
import React from 'react';
import { navigationActions } from './navigation-actions';

const FtBottomNavigation = (props: any) => {
  const { path: value, onChange } = props;
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    onChange(newValue);
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
