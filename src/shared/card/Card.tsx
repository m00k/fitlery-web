import { Box } from '@material-ui/core';
import React, { PropsWithChildren } from 'react';

interface CardProps {
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Card = ({ children, onClick }: PropsWithChildren<CardProps>) => {
  return (
    <Box
      data-testid='card'
      borderRadius={1}
      display='grid'
      gridColumn={['span 6', 'span 4', 'span 3']}
      gridTemplateRows='5fr 2fr'
      boxShadow={8}
      onClick={onClick}
    >
      {children}
    </Box>
  );
};

export default Card;