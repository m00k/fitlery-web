import { Box } from '@material-ui/core';
import React from 'react';
import DurationEdit from './DurationEdit';
import DurationView from './DurationView';


interface DurationProps {
  breakMs: number;
  workMs: number;
  onSetBreakMs: (ms: number) => void;
  onSetWorkMs: (ms: number) => void;
}

const Duration: React.FC<DurationProps> = ({ breakMs, workMs, onSetBreakMs, onSetWorkMs }) => {
  const [duration, setDuration] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const changeHandler = React.useRef((ms: number) => {});

  const handleDurationEditOpen = (duration: number, handler: (ms: number) => void) => {
    setDuration(duration / 1000);
    changeHandler.current = handler;
    setOpen(true);
  };
  const handleDurationEditClose = (duration: number) => {
    setOpen(false);
    changeHandler.current(duration * 1000);
  };

  return (
    <Box>
      <DurationView
        breakMs={breakMs}
        workMs={workMs}
        onClickBreak={(duration: number) => handleDurationEditOpen(duration, onSetBreakMs)}
        onClickWork={(duration: number) => handleDurationEditOpen(duration, onSetWorkMs)}
      />
      {open && <DurationEdit
        value={duration}
        open={true}
        onClose={handleDurationEditClose}
      />}
    </Box>
  );
}

export default Duration;