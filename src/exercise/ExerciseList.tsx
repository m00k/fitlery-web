import React from 'react';
import { usePlaylistStore } from '../playlist/PlaylistProvider';
import Exercise from './Exercise';

export default function ExerciseList() {
  const [playlistState, ] = usePlaylistStore();
  const { exercises } = playlistState;
  return (
    <>
      {exercises.map(exercise =>
        <Exercise key={exercise.name} {...exercise}></Exercise>
      )}
    </>
  );
}