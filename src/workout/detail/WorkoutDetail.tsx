import { IconButton } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import CloseIcon from '@material-ui/icons/Close';
import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ExerciseList from '../../exercise/ExerciseList';
import Avatar from '../../shared/Avatar';
import CardText, { CardTextProps } from '../../shared/CardText';
import { useWorkoutStore } from '../store';
import { WorkoutData } from '../store/state';
import Duration from './Duration';

const buildCardTextProps = (workout: WorkoutData): CardTextProps => {
  const { title, description } = workout;
  return {
    title,
    description,
    style: {
      gridArea: "text",
      whiteSpace: "normal",
    }
  };
}

const CardActionSecondary: React.FC<{onClick: () => void}> = ({ onClick }) => {
  return (
    <IconButton
      color="secondary"
      onClick={onClick}
    >
      <CloseIcon />
    </IconButton>
  );
}

export default function WorkoutDetail() {
  const theme = useTheme();
  const history = useHistory();
  const [workoutState, workoutDispatch] = useWorkoutStore();
  const { items: workouts, currentItemIndex } = workoutState;
  let workout = workouts[currentItemIndex];
  const { title } = useParams();
  useEffect(() => {
    if (!workout) {
      const index = workouts.findIndex(w => w.title === title);
      if (index > -1) {
        workoutDispatch.select(index);
      } else {
        history.push(`/workouts`);
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  if (!workout) {
    return null;
  }
  const cardTextProps = buildCardTextProps(workout);
  const handleClose = () => history.push('/');
  
  const { short, exercises, breakMs, workMs } = workout;
  const handleSetBreakMs = (breakSec: number) => workoutDispatch.update({ ...workout, breakMs: breakSec * 1000 });
  const handleSetWorkMs = (workSec: number) => workoutDispatch.update({ ...workout, workMs: workSec * 1000});

  // TODO: edit exercises
  // TODO: edit exercises order drag/drop
  return (
    <Box>
      <Box
        display="grid"
        gridTemplateAreas='"avatar text"'
        gridTemplateColumns={`${theme.variables.avatar.height}px auto`}
        mb={.3}
      >
        <Avatar
          text={short}
          style={{
            gridArea: "avatar",
          }}
        />
        <CardText
          {...cardTextProps}
        >
          <CardActionSecondary
            onClick={handleClose}
          />
        </CardText>
      </Box>
      <Duration
        label='Break [sec]'
        value={breakMs / 1000}
        min={0}
        max={6000}
        step={15}
        onChange={handleSetBreakMs}
      />
      <Duration
        label='Work [sec]'
        value={workMs / 1000}
        min={0}
        max={6000}
        step={15}
        onChange={handleSetWorkMs}
      />
      <ExerciseList
        exercises={exercises}
      />
    </Box>
  );
}
