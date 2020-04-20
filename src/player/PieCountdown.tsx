import Box, { BoxProps } from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import React, { useMemo, useRef } from 'react';
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
  // TODO: still magic numbers
  const { height, p } = useMemo(() => {
    const p = theme.spacing(1);
    const height = p * 14;
    return { height, p };
   }, [theme]);

  return (
    <Box
      bgcolor={bgcolor}
      color={color}
      fontSize={theme.typography.h2.fontSize}
      fontWeight={theme.typography.fontWeightBold}
      borderRadius='50%'
      lineHeight={`${height}px`} // TODO: magic numbers 
      width={height} // TODO: magic numbers 
      height={height} // TODO: magic numbers 
      textAlign='center'
      bottom={p}
      top={p}
      left={p}
      right={p}
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
  let firstRender = useRef<boolean>(true);

  const bgDoneProps: BackgroundProps = {
    text: (!firstRender.current && !fractionDone) ? 'Ready' : 'Go!',
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

  firstRender.current = false;

  // TODO: still magic numbers
  const { height, cx, cy, r } = useMemo(() => {
   const s = theme.spacing(1);
   const height = s * 16;
   const cx = s * 7; 
   const cy = s * 7;
   const r = s * 7;
   return { height, cx, cy, r };
  }, [theme]);

  return (
    <Box // TODO (cb): box vs grid?
      display="grid"
      alignItems="center"
      justifyContent="center"
      bgcolor={theme.palette.primary.main}
      position="relative"
      height={height}
    >
      <Background {...bgDoneProps} />
      <Background {...bgLeftProps} />
      <svg
        width="0"
        height="0"
      // viewBox="-1 -1 2 2"
      >
        <clipPath id="clip-done">
          <Arc
            cx={cx}
            cy={cy}
            r={r}
            fStart={0}
            fEnd={fractionDone}
          />
        </clipPath>
        <clipPath id="clip-left">
          <Arc
            cx={cx}
            cy={cy}
            r={r}
            fStart={fractionDone}
            fEnd={1}
          />
        </clipPath>
      </svg>
    </Box>
  );
};

export default PieCountdown;
