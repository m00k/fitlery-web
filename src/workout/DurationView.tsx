import { Button, ButtonGroup, makeStyles, useTheme, Box } from '@material-ui/core';
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
  root: {
    display: 'grid',
    gridTemplateColumns: `2fr 1fr 1fr`,
    height: `${theme.variables.playlist.item.height}px`, // TODO: from outside
  }
}));

interface DurationViewProps {
  breakMs: number;
  workMs: number;
  onClickBreak?: (duration: number) => void | undefined;
  onClickWork?: (duration: number) => void | undefined;
}

const DurationView: React.FC<DurationViewProps> = (props) => {
  const { breakMs, workMs, onClickBreak, onClickWork } = props;
  const theme = useTheme();
  const labelClasses = useLabelStyles(theme);
  const buttonClasses = useButtonStyles(theme);
  const buttonGroupClasses = useButtonGroupStyles(theme);
  const breakLabel = `${breakMs / 1000}s`;
  const workLabel = `${workMs / 1000}s`;

  return (
    <Box>
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
          Break/Work
        </Button>
        <Button
          className={buttonClasses.root}
          onClick={() => onClickBreak && onClickBreak(breakMs)}
        >
          {breakLabel}
        </Button>
        <Button
          className={buttonClasses.root}
          onClick={() => onClickWork && onClickWork(workMs)}
        >
          {workLabel}
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default DurationView;