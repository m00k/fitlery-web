import { useTheme, makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';
import NumberInput, { NumberInputProps } from '../../shared/NumberInput';


const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    display: 'grid',
    gridTemplateColumns: 'min(130px) minmax(150px, 300px)',
    height: theme.variables.playlist.item.height,
    marginBottom: theme.spacing(.3),
  },
  label: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.contrastText,
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.h5.fontWeight,
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
    </Box>
  );
}

export default Duration;