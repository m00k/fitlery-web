import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import { style } from '@material-ui/system';
import React from 'react';
import styled from 'styled-components';
import { WorkoutData, workouts } from './data';
import Workout from './Workout';


const gridGap = style({
  prop: 'gridGap',
  themeKey: 'spacing',
});

const gridTemplateColumns = style({
  prop: 'gridTemplateColumns',
  themeKey: 'spacing',
});

const Grid = styled(Box)`${gridGap}${gridTemplateColumns}`;

export default function WorkoutList() {
  const theme = useTheme();
  return (
    <Grid
      display='grid'
      gridTemplateColumns='repeat(12, 1fr)'
      gridGap={theme.spacing(1)}
    >
      {workouts.map((workout: WorkoutData) => (
        <Workout key={workout.title} workout={workout}></Workout>
      ))}
    </Grid>
  );
}
