import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { ExerciseData } from './data';

export default function Exercise(props: ExerciseData) {
  const { name } = props;
  const theme = useTheme();

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
      <Typography variant="subtitle1">
        {name}
      </Typography>
    </Box>
  );
}