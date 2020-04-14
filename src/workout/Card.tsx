import React from 'react';
import Grid from '../shared/Grid';


const Card = (props: any) => {
  const { children, workout } = props;

  return (
    <Grid
      key={workout.title}
      borderRadius={1}
      display='grid'
      gridColumn={['span 6', 'span 4', 'span 3']}
      gridTemplateRows='5fr 2fr'
      boxShadow={8}
    >
      {children}
    </Grid>
  );
};

export default Card;