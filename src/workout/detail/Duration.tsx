import { useTheme, makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';
import NumberInput, { NumberInputProps } from '../../shared/NumberInput';


const useStyles = makeStyles((theme) => ({
  label: {
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.contrastText,
    display: 'grid',
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.h5.fontWeight,
    height: '100%',
    padding: theme.spacing(1),
    textTransform: 'uppercase',
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
      alignItems='center'
      bgcolor={theme.palette.background.paper}
      display='grid'
      gridTemplateColumns='minmax(150px, 300px) minmax(min-content, 300px)'
      height={theme.variables.playlist.item.height}
      marginBottom={.5}
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