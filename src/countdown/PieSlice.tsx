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
  const { text, bgcolor, color, clipIf: setClipPath, fractionStart, fractionEnd } = props;
  const VIEWBOX_SIZE = 100;
  const id = `clip${Math.floor(1000000 * Math.random())}`;
  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}`}
    >
      <g
        clipPath={setClipPath ? `url(#${id})` : ``}
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
          fontSize={2 / 3 * VIEWBOX_SIZE / 2}
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
          r={VIEWBOX_SIZE / 2}
          fStart={fractionStart}
          fEnd={fractionEnd}
        />
      </clipPath>
    </svg>
  )
}

export default PieSlice;