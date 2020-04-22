import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import Arc from './Arc';


export interface PieSliceProps {
  text: string;
  bgcolor: string;
  color: string;
  clipIf: boolean;
  size: number;
  fractionStart: number;
  fractionEnd: number;
}

const PieSlice = (props: PieSliceProps) => {
  const { text, bgcolor, color, clipIf: setClipPath, size, fractionStart, fractionEnd } = props;
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

export default PieSlice;