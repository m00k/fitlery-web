import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { ExerciseData } from './data';

export interface ExerciseProps {
  exercise: ExerciseData;
  current: boolean;
}

export default function Exercise(props: ExerciseProps) {
  const { exercise, current=false } = props;
  const theme = useTheme();
  const variant = current ? 'h4' : 'h5';

  return (
    <Box
      alignItems="center"
      bgcolor={theme.palette.background.paper}
      boxShadow={2}
      borderRadius={1}
      borderLeft={20}
      borderColor={theme.palette.primary.main}
      color={theme.palette.primary.main}
      display="flex"
      height={60}
      mb={1/3}
      p={1}
      flex="1"
    >
      <Typography variant={variant}>
        {exercise.name}
      </Typography>
    </Box>
  );
}