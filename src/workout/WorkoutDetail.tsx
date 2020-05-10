import { Box } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ExerciseList from '../exercise/ExerciseList';
import usePlayerPageStore from '../player/usePlayerPageStore';
import CardAvatar from './CardAvatar';
import CardText from './CardText';
import { workouts } from './data';
import toPlaylistData from './toPlaylistData';

export default function WorkoutDetail() {
  const theme = useTheme();
  const history = useHistory();
  const [, playerPageDispatch] = usePlayerPageStore();
  const { titleFromParams } = useParams();
  const workout = workouts.find(w => w.title === titleFromParams) || workouts[0]; // TODO from storage
  const { short, title, description, exercises } = workout;

  const handleClick = () => {
    console.log(toPlaylistData(workout));
    const playlist = toPlaylistData(workout);
    playerPageDispatch.set(playlist);
    history.push('/recents'); // TODO: magic strings
  }

  return (
    <Box>
      <Box
        display='grid'
        gridTemplateAreas={`"avatar text"`}
        gridTemplateColumns={`${theme.variables.avatar.height}px auto`}
      >
        <CardAvatar
          props={{text: short}}
          style={{
            gridArea: 'avatar',
          }}
        />
        <CardText
          props={{title, description}}
          style={{
            gridArea: 'text',
            whiteSpace: "normal",
          }}
        />
      </Box>
      <ExerciseList
        exercises={exercises}
      />
    </Box>
  );
}
