import React from 'react';
import Avatar from '../../shared/Avatar';
import Card from '../../shared/card/Card';
import CardText from '../../shared/card/CardText';
import { WorkoutData } from '../store/state';
import ContextMenu, { ContextMenuOption } from './ContextMenu';

export interface WorkoutProps {
  workout: WorkoutData;
  onCardClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onContextMenuClick?: (menuOption: ContextMenuOption) => void;
}

const Workout: React.FC<WorkoutProps> = (props) => {
  const { workout, onCardClick, onContextMenuClick } = props;
  const { description, short, title } = workout;
  return (
    <Card
      onClick={onCardClick}
    >
      <Avatar
        text={short}
      />
      <CardText
        description={description}
        title={title}
      >
        <ContextMenu
          onClick={onContextMenuClick}
        />
      </CardText>
    </Card>
  );
}

export default Workout;