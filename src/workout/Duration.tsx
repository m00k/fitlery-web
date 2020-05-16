import { Button, ButtonGroup, makeStyles, useTheme } from '@material-ui/core';
import React from 'react';


const useLabelStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 0,
  },
  label: {
    color: theme.palette.secondary.contrastText,
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.h5.fontWeight,
    textTransform: 'uppercase',
  },
}));

const useButtonStyles = makeStyles((theme) => ({
  root: {
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.h5.fontWeight,
    textTransform: 'none',
  },
}));

const useButtonGroupStyles = makeStyles((theme) => ({
  root : {
    display: 'grid',
    gridTemplateColumns: `2fr 1fr 1fr`,
    height: `${theme.variables.playlist.item.height}px`,
  }
}));

interface DurationProps {
  breakMs: number;
  workMs: number;
}

const Duration: React.FC<DurationProps> = ({ breakMs, workMs }) => {
  const theme = useTheme();
  const labelClasses = useLabelStyles(theme);
  const buttonClasses = useButtonStyles(theme);
  const buttonGroupClasses = useButtonGroupStyles(theme);
  const breakLabel = `${breakMs / 1000}s`;
  const workLabel = `${workMs / 1000}s`;

  return (
    <ButtonGroup
      variant="contained"
      color="primary"
      classes={{
        root: buttonGroupClasses.root,
      }}
    >
      <Button
        color='secondary'
        disableFocusRipple
        disableTouchRipple
        classes={{
          root: labelClasses.root,
          label: labelClasses.label,
        }}
      >
        Break/Work:
        </Button>
      <Button
        classes={{
          root: buttonClasses.root,
        }}
      >
        {breakLabel}
      </Button>
      <Button
        classes={{
          root: buttonClasses.root,
        }}
      >
        {workLabel}
      </Button>
    </ButtonGroup>
  );
}

export default Duration;