import { Box, BoxProps } from '@material-ui/core';
import React from 'react';

interface CardProps extends BoxProps {
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Card: React.FC<CardProps> = ({ children, onClick, ...rootProps }) => {
  return (
    <Box
      data-testid='card'
      borderRadius={1}
      display='grid'
      gridColumn={['span 6', 'span 4', 'span 3']}
      gridTemplateRows='5fr 2fr'
      boxShadow={8}
      {...rootProps}
      onClick={onClick}
    >
      {children}
    </Box>
  );
};

export default Card;