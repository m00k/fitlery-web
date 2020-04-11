import Box from '@material-ui/core/Box';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { ExerciseData } from './data';

export default function Exercise(props: ExerciseData) {
  const { name } = props;

  return (
    <Box
      alignItems="center"
      boxShadow={2}
      color="primary.contrastText"
      display="flex"
      height={80}
      pl={4}
      width={1}
      
    >
      <Typography variant="h5">
        {name}
      </Typography>
    </Box>
  );
}