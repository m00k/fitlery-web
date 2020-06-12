import { Box, ListItemIcon, MenuItem, Switch } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import React from 'react';

export interface DeleteMenuItemProps {
  onClick?: () => void;
}

const DeleteMenuItem: React.FC<DeleteMenuItemProps> = ({ onClick }) => {
  const [canDelete, setCanDelete] = React.useState<boolean>(false);
  const handleClick = () => onClick && onClick();

  return (
    <Box
      alignItems='center'
      component='li'
      display='grid'
      gridTemplateColumns='auto min-content'
    >
      <MenuItem
        component='span'
        disabled={!canDelete}
        onClick={handleClick}
      >
        <ListItemIcon>
          <DeleteOutlineIcon />
        </ListItemIcon>
          Delete
        </MenuItem>
      <Switch
        onChange={() => setCanDelete(!canDelete)}
      />
    </Box>
  );
}

export default DeleteMenuItem;