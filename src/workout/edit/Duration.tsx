import { useTheme, makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';
import NumberInput, { NumberInputProps } from '../../shared/NumberInput';


const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    display: 'grid',
    gridTemplateColumns: 'min(130px) minmax(min-content, 300px) auto',
    height: theme.variables.playlist.item.height,
    marginBottom: theme.spacing(.3),
  },
  label: {
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.contrastText,
    display: 'grid',
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.h5.fontWeight,
    height: '100%',
    padding: theme.spacing(1),
    textTransform: 'uppercase',
    whiteSpace: 'nowrap'
  },
}));

interface DurationProps extends NumberInputProps{
  label: string;
}

const Duration: React.FC<DurationProps> = ({ label, ...props }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Box
      className={classes.root}
    >
      <Box
        className={classes.label}
      >
        {label}
      </Box>
      <NumberInput
        {...props}
      />
      <Box
        bgcolor={theme.palette.primary.main}
        height={1}
      />
    </Box>
  );
}

export default Duration;