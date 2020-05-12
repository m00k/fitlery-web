import React, { PropsWithChildren } from 'react';
import Grid from '../shared/Grid';

interface CardProps {
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Card = ({ children, onClick }: PropsWithChildren<CardProps>) => {
  return (
    <Grid
      borderRadius={1}
      display='grid'
      gridColumn={['span 6', 'span 4', 'span 3']}
      gridTemplateRows='5fr 2fr'
      boxShadow={8}
      onClick={onClick} // TODO: threading that through the hierarchy is no fun
    >
      {children}
    </Grid>
  );
};

export default Card;