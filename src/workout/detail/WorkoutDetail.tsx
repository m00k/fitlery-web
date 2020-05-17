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
    history.push(`/workouts`);
    return null;
  }
  const { short, exercises, breakMs, workMs } = workout;
  const cardTextProps = buildCardTextProps(workout);

  const handleClick = () => {
    console.log(toPlaylistData(workout));
    const playlist = toPlaylistData(workout);
    playerPageDispatch.set(playlist);
    history.push('/player'); // TODO: magic strings
  }

  const handleSetBreakMs = (breakMs: number) => workoutDispatch.update({ ...workout, breakMs });
  const handleSetWorkMs = (workMs: number) => workoutDispatch.update({ ...workout, workMs });

  // TODO: edit exercises
  // TODO: edit exercises order drag/drop
  return (
    <Box>
      <Box
        display="grid"
        gridTemplateAreas='"avatar text"'
        gridTemplateColumns={`${theme.variables.avatar.height}px auto`}
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
        breakMs={breakMs}
        workMs={workMs}
        onSetBreakMs={handleSetBreakMs}
        onSetWorkMs={handleSetWorkMs}
      />
      <ExerciseList
        exercises={exercises}
      />
      <Fab
        color="secondary"
        style={{
          position: "fixed",
          bottom: theme.variables.navbar.height + theme.spacing(1),
          right: theme.spacing(2),
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
