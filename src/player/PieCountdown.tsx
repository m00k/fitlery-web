import Box, { BoxProps } from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import Arc from './Arc';


interface BackgroundProps {
  text: string;
  bgcolor: string;
  color: string;
  style: {};
}

const Background = (props: BackgroundProps) => {
  const { bgcolor, color, style, text } = props;
  const theme = useTheme();

  return (
    <Box
      bgcolor={bgcolor}
      color={color}
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
      style={style} // TODO: webkit vendor prefix
    >
      {text}
    </Box>
  );
}

interface PieCountdownProps extends BoxProps {
  fractionDone: number;
}

const PieCountdown = (props: PieCountdownProps) => {
  const { fractionDone } = props;
  const theme = useTheme();

  const bgDoneProps: BackgroundProps = {
    text: !fractionDone ? 'Ready' : 'Go!',
    bgcolor: theme.palette.background.paper,
    color: theme.palette.secondary.dark,
    style: fractionDone > 0 ? { clipPath: "url(#clip-left)" } : {}, // TODO: webkit vendor prefix
  };

  const bgLeftProps: BackgroundProps = {
    text: fractionDone === 1 ? 'Done' : 'Go!',
    bgcolor: theme.palette.primary.light,
    color: theme.palette.secondary.contrastText,
    style: fractionDone < 1 ? { clipPath: "url(#clip-done)" } : {}, // TODO: webkit vendor prefix
  };

  return (
    <Box // TODO (cb): box vs grid?
      display="grid"
      alignItems="center"
      justifyContent="center"
      bgcolor={theme.palette.primary.main}
      p={1}
      position="relative"
    >
      <Background {...bgDoneProps} />
      <Background {...bgLeftProps} />
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
            cx={56} // TODO: magic numbers
            cy={56} // TODO: magic numbers
            r={56} // TODO: magic numbers
            fStart={fractionDone}
            fEnd={1}
          />
        </clipPath>
      </svg>
    </Box>
  );
};

export default PieCountdown;
