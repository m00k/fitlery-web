import React from 'react';
import Card from './Card';
import CardAvatar from './CardAvatar';
import CardText from './CardText';
import { WorkoutData } from './data';


interface WorkoutProps {
  workout: WorkoutData;
}

const Workout = (props: WorkoutProps ) => {
  const { workout } = props;
  return (
    <Card {...props}>
      <CardAvatar text={workout.short} />
      <CardText {...props} />
    </Card>
  );
}

export default Workout;