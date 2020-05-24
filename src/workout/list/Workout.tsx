import React from 'react';
import Avatar from '../../shared/Avatar';
import Card from '../../shared/card/Card';
import CardDescription from '../../shared/card/CardDescription';
import CardText from '../../shared/card/CardText';
import CardTextAction from '../../shared/card/CardTextAction';
import CardTitle from '../../shared/card/CardTitle';
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
        description={
          <CardDescription>
            {description}
          </CardDescription>
        }
        title={
          <CardTitle>
            {title}
          </CardTitle>
        }
        action={
          <CardTextAction>
            <ContextMenu
              onClick={onContextMenuClick}
            />
          </CardTextAction>
        }
      >
      </CardText>
    </Card>
  );
}

export default Workout;