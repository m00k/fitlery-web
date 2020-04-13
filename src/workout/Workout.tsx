import React from 'react';
import Card from './Card';
import CardAvatar from './CardAvatar';
import CardText from './CardText';
import { WorkoutData } from './data';


const Workout = (props: { workout: WorkoutData }) => {
  const { workout } = props;

  // TODO render props or context?
  return (
    <Card workout={workout}>
      <CardAvatar workout={workout} />
      <CardText workout={workout} />
    </Card>
  );
}

export default Workout;