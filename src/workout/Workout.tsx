import React from 'react';
import Avatar from '../shared/Avatar';
import Card from './Card';
import CardText from './CardText';
import { WorkoutData } from './data';


interface WorkoutProps {
  workout: WorkoutData;
  onClick?: () => void;
}

const Workout: React.FC<WorkoutProps> = ({ workout, onClick }) => {
  return (
    <Card
      onClick={onClick}
    >
      <Avatar
        props={{text: workout.short}}
        style={{
          gridColumn: 1
        }}
      />
      <CardText
        style={{
          gridColumn: 1
        }}
        props={{...workout}}
      />
    </Card>
  );
}

export default Workout;