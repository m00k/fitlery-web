import { BoxProps } from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import React, { useRef } from 'react';
import PieSlice from './PieSlice';


const PieSliceLeft = (props: any) => {
  const { fractionDone, size } = props; // TODO: size from parent width
  const theme = useTheme();
  let firstRender = useRef<boolean>(true);
  const text = (!firstRender.current && !fractionDone) ? 'Ready' : 'Go!';
  firstRender.current = false;
  return (
    <PieSlice
      text={text}
      clipIf={fractionDone > 0}
      size={size}
      bgcolor={theme.palette.background.paper}
      color={theme.palette.secondary.dark}
      fractionStart={fractionDone}
      fractionEnd={1}
    />
  );
}

const PieSliceDone = (props: any) => {
  const { fractionDone, size } = props;
  const theme = useTheme();
  return (
    <PieSlice
      text={fractionDone === 1 ? 'Done' : 'Go!'}
      clipIf={(fractionDone < 1)}
      size={size}
      bgcolor={theme.palette.primary.light}
      color={theme.palette.secondary.contrastText}
      fractionStart={0}
      fractionEnd={fractionDone}
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
