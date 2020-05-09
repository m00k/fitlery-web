import React, { PropsWithChildren } from 'react';
import Grid from '../shared/Grid';


const Card = ({ children, onClick }: PropsWithChildren<any>) => {
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