import Box, { BoxProps } from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import React, { PropsWithChildren, useRef } from 'react';
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

const WithMargin = ({ children }: PropsWithChildren<any>) => {
  return (
    <Box
      m={1}
      position="absolute">
      {children}
    </Box>
  );
}

export interface PieCountdownProps extends BoxProps {
  fractionDone: number;
  size: number
}

const PieCountdown = (props: PieCountdownProps) => {
  const { fractionDone, size } = props;
  const theme = useTheme();

  return (
    <Box
      width={size} // TODO: 100%
      height={size}
      bgcolor={theme.palette.primary.main}
      position="relative"
    >
      <WithMargin>
        <PieSliceLeft {...{ fractionDone, size }} />
      </WithMargin>
      <WithMargin>
        <PieSliceDone {...{ fractionDone, size }} />
      </WithMargin>
    </Box >
  );
};

export default PieCountdown;
