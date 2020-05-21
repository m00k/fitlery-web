import { IconButton, Menu, MenuItem, ListItemIcon } from '@material-ui/core';
import MoreVerticon from '@material-ui/icons/MoreVert';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react';

export type ContextMenuOption =
  | 'edit'
  | 'delete'
  ;

export interface ContextMenuProps {
  onClick?: (menuOption: ContextMenuOption) => void;
}

const ContextMenu: React.FC<ContextMenuProps> = ({ onClick }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (menuOption: ContextMenuOption, event: React.MouseEvent<HTMLLIElement, MouseEvent>): void => {
    handleClose();
    onClick && onClick(menuOption);
  };

  return (
    <>
      <IconButton
        color='secondary'
        onClick={handleOpen}
      >
        <MoreVerticon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={handleMenuClick.bind(globalThis, 'edit')}
        >
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          Edit
        </MenuItem>
        <MenuItem
          onClick={handleMenuClick.bind(globalThis, 'delete')}
        >
          <ListItemIcon>
            <DeleteOutlineIcon fontSize="small" />
          </ListItemIcon>
          Delete
        </MenuItem>
      </Menu>
    </>
  );
}

export default ContextMenu;