import Box, { BoxProps } from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import Arc from './Arc';


interface PieCountdownProps extends BoxProps {
  fractionDone: number;
}

const PieCountdown = (props: PieCountdownProps) => {
  const { fractionDone } = props;
  const theme = useTheme();

  return (
    <Box
      display='grid'
      alignItems='center'
      justifyContent='center'
      bgcolor={theme.palette.primary.main}
      p={1}
    >
      <svg
        width="100%"
        viewBox="-1 -1 2 2"
      >
        <>
          <Arc
            fill={theme.palette.primary.light}
            fStart={0}
            fEnd={fractionDone}
          />
          <Arc
            fill={theme.palette.background.paper}
            fStart={fractionDone}
            fEnd={1}
          />
        </>
      </svg>
    </Box>
  );
};

export default PieCountdown;
