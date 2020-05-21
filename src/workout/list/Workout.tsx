import React from 'react';
import Avatar from '../../shared/Avatar';
import Card from '../../shared/Card';
import CardText from '../../shared/CardText';
import { WorkoutData } from '../store/state';
import ContextMenu, { ContextMenuOption } from './ContextMenu';

export interface WorkoutProps {
  workout: WorkoutData;
  onCardClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onContextMenuClick?: (menuOption: ContextMenuOption) => void;
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

const Workout: React.FC<WorkoutProps> = (props) => {
  const { workout, onCardClick, onContextMenuClick } = props;
  const cardTextProps = buildCardTextProps({ workout });
  return (
    <Card
      onClick={onCardClick}
    >
      <Avatar
        text={workout.short}
        style={{
          gridColumn: 1
        }}
      />
      <CardText
        {...cardTextProps}
      >
        <ContextMenu
          onClick={onContextMenuClick}
        />
      </CardText>
    </Card>
  );
}

export default Workout;