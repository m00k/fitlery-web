import React from 'react';
import Card from './Card';
import CardAvatar from './CardAvatar';
import CardText from './CardText';
import { WorkoutData } from './data';


const Workout = (props: { workout: WorkoutData }) => {
  return (
    <Card {...props}>
      <CardAvatar {...props} />
      <CardText {...props} />
    </Card>
  );
}

export default Workout;