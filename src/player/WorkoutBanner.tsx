import React from 'react';
import Grid from '../shared/Grid';
import CardAvatar from '../workout/CardAvatar';
import CardText from '../workout/CardText';

const WorkoutBanner = (props: any) => {
  const { workout } = props;

  return (
    <Grid
      display="grid"
      gridTemplateColumns="128px 1fr" // TODO: magic numbers 
      width={1}
    >
      <CardAvatar workout={workout}/>
      <CardText workout={workout}/>
    </Grid>

  );
};

export default WorkoutBanner;
