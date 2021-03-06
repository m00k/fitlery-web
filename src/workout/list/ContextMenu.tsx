import { Box, IconButton, ListItemIcon, Menu, MenuItem, useTheme } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import MoreVerticon from '@material-ui/icons/MoreVert';
import React from 'react';
import DeleteMenuItem from './DeleteMenuItem';

export type ContextMenuOption =
  | 'edit'
  | 'delete'
  ;

export interface ContextMenuProps {
  onClick?: (menuOption: ContextMenuOption) => void;
}

const ContextMenu: React.FC<ContextMenuProps> = ({ onClick }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const theme = useTheme();
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleMenuClick = (menuOption: ContextMenuOption): void => {
    handleClose();
    onClick && onClick(menuOption);
  };

  return (
    <Box
      position='relative'
      right={-1 * theme.spacing(1)}
    >
      <IconButton
        color='secondary'
        onClick={handleOpen}
      >
        <MoreVerticon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={handleMenuClick.bind(globalThis, 'edit')}
        >
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          Edit
        </MenuItem>
        <DeleteMenuItem
          onClick={handleMenuClick.bind(globalThis, 'delete')}
        />
      </Menu>
    </Box>
  );
}

export default ContextMenu;