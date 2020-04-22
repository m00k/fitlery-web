import { BoxProps } from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import React, { useRef } from 'react';
import PieSlice, { PieSliceProps } from './PieSlice';


const PieSliceLeft = (props: any) => {
  const { fractionDone, size } = props; // TODO: size from parent width
  const theme = useTheme();
  let firstRender = useRef<boolean>(true);
  const pieSliceLeftProps: PieSliceProps = {
    // TODO: text, clipPath are the only ones changing
    text: (!firstRender.current && !fractionDone) ? 'Ready' : 'Go!',
    setClipPath: fractionDone > 0,
    bgcolor: theme.palette.background.paper,
    color: theme.palette.secondary.dark,
    size,
    fractionStart: fractionDone,
    fractionEnd: 1,
  };
  firstRender.current = false;
  return (
    <PieSlice
      {...pieSliceLeftProps}
    />
  );
}

const PieSliceDone = (props: any) => {
  const { fractionDone, size } = props;
  const theme = useTheme();
  const pieSliceDoneProps: PieSliceProps = {
    // TODO: text, clipPath are the only ones changing
    text: fractionDone === 1 ? 'Done' : 'Go!',
    setClipPath: (fractionDone < 1),
    bgcolor: theme.palette.primary.light,
    color: theme.palette.secondary.contrastText,
    size,
    fractionStart: 0,
    fractionEnd: fractionDone,
  };
  return (
    <PieSlice
      {...pieSliceDoneProps}
    />
  );
}

export interface PieCountdownProps extends BoxProps {
  fractionDone: number;
}

const PieCountdown = (props: PieCountdownProps) => {
  const { fractionDone } = props;
  const theme = useTheme();
  const size = 16 * theme.spacing(1);  

  return (
    <svg
      width={size} // TODO: 100%
      height={size}
    >
      <rect
        width="100%"
        height="100%"
        fill={theme.palette.primary.main}
      >
      </rect>
      <PieSliceLeft {...{fractionDone, size}} />
      <PieSliceDone {...{fractionDone, size}} />
    </svg>
  );
};

export default PieCountdown;
