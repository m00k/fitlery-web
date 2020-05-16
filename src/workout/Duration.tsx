import { Button, ButtonGroup, makeStyles, useTheme } from '@material-ui/core';
import React from 'react';
import DurationEdit from './DurationEdit';


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
  root: {
    display: 'grid',
    gridTemplateColumns: `2fr 1fr 1fr`,
    height: `${theme.variables.playlist.item.height}px`,
  }
}));

interface DurationProps {
  breakMs: number;
  workMs: number;
  onSetBreakMs?: () => void | undefined;
  onSetWorkMs?: () => void | undefined;
}

const Duration: React.FC<DurationProps> = ({ breakMs, workMs }) => {
  const theme = useTheme();
  const labelClasses = useLabelStyles(theme);
  const buttonClasses = useButtonStyles(theme);
  const buttonGroupClasses = useButtonGroupStyles(theme);
  const breakLabel = `${breakMs / 1000}s`;
  const workLabel = `${workMs / 1000}s`;

  const [open, setOpen] = React.useState(false);
  const handleDurationEditOpen = () => {
    // TODO: work/break, init with ms
    setOpen(true);
  };

  const handleDurationEditClose = (duration: number) => {
    console.log('################', duration);
    setOpen(false);
  };

  return (
    <>
      <ButtonGroup
        variant="contained"
        color="primary"
        className={buttonGroupClasses.root}
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
          className={buttonClasses.root}
          onClick={handleDurationEditOpen}
        >
          {breakLabel}
        </Button>
        <Button
          className={buttonClasses.root}
          onClick={handleDurationEditOpen}
        >
          {workLabel}
        </Button>
      </ButtonGroup>
      <DurationEdit
        open={open}
        onClose={handleDurationEditClose}
      />
    </>
  );
}

export default Duration;