import Box, { BoxProps } from '@material-ui/core/Box';
import React from 'react';

export interface CardTextActionProps extends BoxProps { }

const CardTextAction: React.FC<CardTextActionProps> = ({ children, ...rootProps }) => {
  return (
    <Box
      data-testid='card-action'
      position='absolute'
      right={0}
      top={0}
      {...rootProps}
    >
      {children}
    </Box>
  );
};

export default CardTextAction;
