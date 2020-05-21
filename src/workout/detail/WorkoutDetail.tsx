import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import useTheme from '@material-ui/core/styles/useTheme';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import React from 'react';
import { useHistory } from 'react-router-dom';
import ExerciseList from '../../exercise/ExerciseList';
import usePlayerPageStore from '../../player/usePlayerPageStore';
import Avatar from '../../shared/Avatar';
import CardText from '../../shared/CardText';
import { useWorkoutStore } from '../store';
import { WorkoutData } from '../store/state';
import toPlaylistData from '../toPlaylistData';
import Duration from './Duration';

const buildCardTextProps = (workout: WorkoutData) => {
  const { title, description } = workout;
  return {
    title,
    description,
    style: {
      gridArea: "text",
      whiteSpace: "normal",
    } as React.CSSProperties // https://material-ui.com/guides/typescript/#using-createstyles-to-defeat-type-widening
  };
}

// TODO: find selected workout by url param if app is loaded on this route
export default function WorkoutDetail() {
  const theme = useTheme();
  const history = useHistory();
  const [, playerPageDispatch] = usePlayerPageStore();
  const [workoutState, workoutDispatch] = useWorkoutStore();
  let workout = workoutState.items[workoutState.currentItemIndex];
  if (!workout) {
    // TODO
    // history.push(`/workouts`);
    // return null;
    // HACK
    workoutDispatch.select(0);
    return null;
  }
  const { short, exercises, breakMs, workMs } = workout;
  const cardTextProps = buildCardTextProps(workout);

  const handleClick = () => {
    const playlist = toPlaylistData(workout);
    playerPageDispatch.set(playlist);
    history.push('/player'); // TODO: magic strings
  }

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
        <CardText {...cardTextProps} />
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
      <Fab
        color="secondary"
        style={{
          position: "fixed",
          bottom: theme.variables.navbar.height + theme.spacing(1),
          right: theme.spacing(1),
        }}
        onClick={handleClick}
      >
        <PlayArrowIcon
          fontSize='large'
        />
      </Fab>
    </Box>
  );
}
