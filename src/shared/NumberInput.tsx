import { Box, IconButton, makeStyles, Typography, useTheme } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ReplayIcon from '@material-ui/icons/Replay';
import React, { useEffect, useRef } from 'react';


const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    backgroundColor: 'inherit',
    display: 'flex',
    height: '100%',
  },
  button: {
    color: theme.palette.secondary.light,
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.h5.fontWeight,
    marginLeft: '1px',
    textTransform: 'none',
  },
  duration: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: theme.shape.borderRadius,
    display: 'flex',
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    minWidth: '60px',
  }
}));

export interface NumberInputProps {
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onChange?: (value: number) => void;
}

const NumberInput: React.FC<NumberInputProps> = (props) => {
  const { value, min=0, max=Number.MAX_VALUE, step=1, onChange } = props;
  const theme = useTheme();
  const classes = useStyles(theme);
  const initial = useRef(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { initial.current = value }, []);

  const handleDown = () => {
    const newValue = Math.max(value - step, min);
    onChange && onChange(newValue);
  }

  const handleUp = () => {
    const newValue = Math.min(value + step, max);
    onChange && onChange(newValue);
  }

  const handleReset = () => {
    onChange && onChange(initial.current);
  }

  return (
    <Box
      className={classes.root}
    >
      <IconButton
        className={classes.button}
        onClick={handleDown}
      >
        <RemoveIcon />
      </IconButton>
      <Typography
        variant='h4'
        className={classes.duration}
      >
        {value}
      </Typography>
      <IconButton
        className={classes.button}
        onClick={handleUp}
      >
        <AddIcon />
      </IconButton>
      <IconButton
        className={classes.button}
        onClick={handleReset}
      >
        <ReplayIcon />
      </IconButton>
    </Box>
  );
}

export default NumberInput;