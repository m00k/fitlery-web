import React from 'react';
import Avatar from '../shared/Avatar';
import Card from './Card';
import CardText from './CardText';
import { WorkoutData } from './data';


interface WorkoutProps {
  workout: WorkoutData;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Workout: React.FC<WorkoutProps> = ({ workout, onClick }) => {
  return (
    <Card
      onClick={onClick}
    >
      <Avatar
        text={workout.short}
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