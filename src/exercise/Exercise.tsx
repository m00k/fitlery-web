import Box, { BoxProps } from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import { ExerciseData } from './data';

// TODO: duplicate of play list item
const useStyles = () => {
  const theme = useTheme();
  const root: BoxProps = {
    alignItems: 'center',
    bgcolor: theme.palette.background.paper,
    boxShadow: 2,
    borderRadius: 1,
    borderLeft: 20,
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    display: 'flex',
    height: theme.variables.playlist.item.height,
    mb: 1/3,
    p: 1,
    flex: '1',
  };
  const inner: React.CSSProperties = {
    fontSize: '1.5rem',
  };
  return {
    root,
    inner,
  }
}

export interface ExerciseProps {
  exercise: ExerciseData;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void | undefined;
}

export default function Exercise(props: ExerciseProps) {
  const { exercise, onClick } = props;
  const { root, inner } = useStyles();

  return (
    <Box
      {...root}
      onClick={onClick}
    >
      <span
        style={{...inner}}
      >
        {exercise.name}
      </span>
    </Box>
  );
}