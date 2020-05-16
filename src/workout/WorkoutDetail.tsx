import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import useTheme from '@material-ui/core/styles/useTheme';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ExerciseList from '../exercise/ExerciseList';
import usePlayerPageStore from '../player/usePlayerPageStore';
import Avatar from '../shared/Avatar';
import CardText from './CardText';
import { WorkoutData, workouts } from './data';
import Duration from './Duration';
import toPlaylistData from './toPlaylistData';

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

export default function WorkoutDetail() {
  const theme = useTheme();
  const history = useHistory();
  const [, playerPageDispatch] = usePlayerPageStore();
  const { titleFromParams } = useParams();
  const workout = workouts.find(w => w.title === titleFromParams) || workouts[0]; // TODO from storage
  const { short, exercises, breakMs, workMs } = workout;
  const cardTextProps = buildCardTextProps(workout);

  const handleClick = () => {
    console.log(toPlaylistData(workout));
    const playlist = toPlaylistData(workout);
    playerPageDispatch.set(playlist);
    history.push('/recents'); // TODO: magic strings
  }

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
          style={{
            fontSize: "4rem"
          }}
        />
      </Fab>
    </Box>
  );
}
