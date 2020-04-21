import { BoxProps } from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import React, { useRef } from 'react';
import Arc from './Arc';


interface PieSliceProps {
  text: string;
  bgcolor: string;
  color: string;
  setClipPath: boolean;
  size: number;
  fractionStart: number;
  fractionEnd: number;
}

const PieSlice = (props: PieSliceProps) => {
  const { text, bgcolor, color, setClipPath, size, fractionStart, fractionEnd } = props;
  const theme = useTheme();
  const viewBoxSize = 100;
  const id = `clip${Math.floor(1000000 * Math.random())}`;
  return (
    <svg
      x={theme.spacing(1)}
      y={theme.spacing(1)}
      width={size - theme.spacing(2)}
      height={size - theme.spacing(2)}
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
    >
      <g
        clipPath={setClipPath ? `url(#${id})` : ``} // TODO: webkit vendor prefix?
      >
        <circle
          cx="50%"
          cy="50%"
          r="50%"
          fill={bgcolor}
        >
        </circle>
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          fill={color}
          fontSize={2 / 3 * viewBoxSize / 2}
          fontWeight="700"
          textAnchor="middle"
          fontFamily="Roboto"
        >
          {text}
        </text>
      </g>
      <clipPath id={id}>
        <Arc
          cx={50}
          cy={50}
          r={viewBoxSize / 2}
          fStart={fractionStart}
          fEnd={fractionEnd}
        />
      </clipPath>
    </svg>
  )
}

interface PieCountdownProps extends BoxProps {
  fractionDone: number;
}

const PieCountdown = (props: PieCountdownProps) => {
  const { fractionDone } = props;
  const theme = useTheme();
  const size = 16 * theme.spacing(1);
  let firstRender = useRef<boolean>(true);

  const pieDoneProps: PieSliceProps = {
    // TODO: text, clipPath are the only ones changing
    text: fractionDone === 1 ? 'Done' : 'Go!',
    setClipPath: (fractionDone < 1),
    bgcolor: theme.palette.primary.light,
    color: theme.palette.secondary.contrastText,
    size,
    fractionStart: 0,
    fractionEnd: fractionDone,
  };

  const pieLeftProps: PieSliceProps = {
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
    <svg
      width={size}
      height={size}
    >
      <rect
        width="100%"
        height="100%"
        fill={theme.palette.primary.main}
      >
      </rect>
      <PieSlice
        {...pieLeftProps}
      >
      </PieSlice>
      <PieSlice
        {...pieDoneProps}
      >
      </PieSlice>
    </svg>
  );
};

export default PieCountdown;
