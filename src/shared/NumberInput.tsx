import { Box, makeStyles, Typography, useTheme } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ReplayIcon from '@material-ui/icons/Replay';
import React, { useEffect, useRef } from 'react';

const useButtonGroupStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    display: 'grid',
    gridTemplateColumns: `2fr 4fr 2fr 1fr`,
  }
}));

const useButtonStyles = makeStyles((theme) => ({
  root: {
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.h5.fontWeight,
    textTransform: 'none',
  },
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
  const buttonClasses = useButtonStyles(theme);
  const buttonGroupClasses = useButtonGroupStyles(theme);
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
      className={buttonGroupClasses.root}
    >
      <IconButton
        className={buttonClasses.root}
        onClick={handleDown}
      >
        <RemoveIcon />
      </IconButton>
      <Typography
        variant='h4'
        style={{
          textAlign: 'center',
        }}
      >
        {value}
      </Typography>
      <IconButton
        className={buttonClasses.root}
        onClick={handleUp}
      >
        <AddIcon />
      </IconButton>
      <IconButton
        className={buttonClasses.root}
        onClick={handleReset}
      >
        <ReplayIcon />
      </IconButton>
    </Box>
  );
}

export default NumberInput;