import { makeStyles, useTheme } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React from 'react';
import Card from '../../shared/card/Card';
import CardText from '../../shared/card/CardText';
import CardTitle from '../../shared/card/CardTitle';
import id from '../../util/id';
import uid from '../../util/uid';
import { WorkoutData } from '../store/state';


const useStyles = makeStyles(theme => ({
  iconContainer: {
    borderRadius: theme.shape.borderRadius,
    borderStyle: 'solid',
    borderWidth: 2,
    color: theme.palette.secondary.light,
    cursor: 'pointer',
    padding: '25%',
  },
  icon: {
    height: '100%',
    width: '100%',
  }
}));

export interface AddWorkoutProps {
  onClick: (workout: WorkoutData) => void;
}

const AddWorkout: React.FC<AddWorkoutProps> = ({onClick}) => {
  const handleClick = () => {
    const workout: WorkoutData = newWorkout();
    onClick(workout);
  };
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Card
      onClick={handleClick}
    >
      <div
        className={classes.iconContainer}
      >
        <AddIcon
          className={classes.icon}
        />
      </div>
      <CardText
        title={
          <CardTitle>
            Add new workout
          </CardTitle>
        }
        description={<></>}
      />
    </Card>
  );
}

export default AddWorkout;

// TODO: extract
function newWorkout() {
  const short = id();
  const workout: WorkoutData = {
    id: uid(),
    short,
    title: `Workout ${short}`,
    description: (new Date()).toLocaleDateString(),
    breakMs: 30000,
    workMs: 60000,
    exercises: [
      {
        name: "New Exercise",
        id: "46c7-4d11-yca1-eg87"
      },
    ]
  };
  return workout;
}
