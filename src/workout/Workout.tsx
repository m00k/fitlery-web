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
    <Card
      {...props}
      style={{
        display: "grid",
        gridTemplateColumns: "100%",
        gridTemplateRows: "auto 1fr",
      }}
    >
      <CardAvatar
        text={workout.short}
        style={{
          gridColumn: 1
        }}
      />
      <CardText
        style={{
          gridColumn: 1
        }}
        {...workout}
      />
    </Card>
  );
}

export default Workout;