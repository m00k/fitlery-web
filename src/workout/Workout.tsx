import React from 'react';
import Avatar from '../shared/Avatar';
import Card from '../shared/Card';
import CardText from '../shared/CardText';
import { WorkoutData } from './data';


interface WorkoutProps {
  workout: WorkoutData;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const buildCardTextProps = ({ workout }: WorkoutProps) => {
  const { title, description } = workout;
  return {
    title,
    description,
    style: {
      gridColumn: 1
    } as React.CSSProperties // https://material-ui.com/guides/typescript/#using-createstyles-to-defeat-type-widening
  };
}

const Workout: React.FC<WorkoutProps> = ({ workout, onClick }) => {
  const cardTextProps = buildCardTextProps({ workout });
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
      <CardText {...cardTextProps} />
    </Card>
  );
}

export default Workout;