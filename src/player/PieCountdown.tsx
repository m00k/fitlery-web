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
    <Box // TODO (cb): box vs grid?
      display="grid"
      alignItems="center"
      justifyContent="center"
      bgcolor={theme.palette.primary.main}
      p={1}
      position="relative"
    >
      <Box
        bgcolor={theme.palette.primary.light}
        color={theme.palette.secondary.contrastText}
        fontSize={theme.typography.h2.fontSize}
        fontWeight={theme.typography.fontWeightBold}
        borderRadius='50%'
        lineHeight='112px' // TODO: magic numbers 
        width={112} // TODO: magic numbers 
        height={112} // TODO: magic numbers 
        textAlign='center'
        bottom={theme.spacing(1)}
        top={theme.spacing(1)}
        left={theme.spacing(1)}
        right={theme.spacing(1)}
        position="absolute"
        style={fractionDone < 1 ? { clipPath: "url(#clip-done)" } : {}} // TODO: webkit vendor prefix
      >
        {fractionDone === 1 ? 'Done' : 'Go!'}
      </Box>
      <Box
        bgcolor={theme.palette.background.paper}
        color={theme.palette.secondary.dark}
        fontSize={theme.typography.h2.fontSize}
        fontWeight={theme.typography.fontWeightBold}
        borderRadius='50%'
        lineHeight='112px' // TODO: magic numbers 
        width={112} // TODO: magic numbers 
        height={112} // TODO: magic numbers 
        textAlign='center'
        bottom={theme.spacing(1)}
        top={theme.spacing(1)}
        left={theme.spacing(1)}
        right={theme.spacing(1)}
        position="absolute"
        style={fractionDone > 0 ? { clipPath: "url(#clip-left)" } : {}} // TODO: webkit vendor prefix
      >
        {!fractionDone ? 'Ready' : 'Go!'}
      </Box>
      <svg
        width="112px" // TODO: magic numbers
        viewBox="-1 -1 2 2"
      >
        <clipPath id="clip-done">
          <Arc
            cx={56} // TODO: magic numbers
            cy={56} // TODO: magic numbers
            r={56} // TODO: magic numbers
            fStart={0}
            fEnd={fractionDone}
          />
        </clipPath>
        <clipPath id="clip-left">
          <Arc
            cx={56}
            cy={56}
            r={56}
            fStart={fractionDone}
            fEnd={1}
          />
        </clipPath>
      </svg>
    </Box>
  );
};

export default PieCountdown;
